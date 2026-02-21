'use client';
import { createContext, useContext, useReducer, useEffect, useState, useCallback, ReactNode } from 'react';
import { ServiceItem, getServiceById, CURRENCY_CONFIG } from './PricingData';

const isJamaica = () =>
    typeof Intl !== 'undefined' &&
    Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/Jamaica';


export interface SelectedItem {
    itemId: string;
    quantity: number;
    service: ServiceItem;
}

export interface ConsultationFormData {
    name: string;
    email: string;
    phone: string;
    timeline: string;
    budgetRange: string;
    notes: string;
    preferredDate: string;
    preferredTime: string;
    referral: string;
}

interface PricingState {
    selections: SelectedItem[];
    isCalculatorOpen: boolean;
    isBookingOpen: boolean;
}

type PricingAction =
    | { type: 'ADD_ITEM'; itemId: string; quantity?: number }
    | { type: 'REMOVE_ITEM'; itemId: string }
    | { type: 'UPDATE_QUANTITY'; itemId: string; quantity: number }
    | { type: 'CLEAR_ALL' }
    | { type: 'TOGGLE_CALCULATOR' }
    | { type: 'OPEN_BOOKING' }
    | { type: 'CLOSE_BOOKING' }
    | { type: 'LOAD_FROM_STORAGE'; selections: SelectedItem[] };

const STORAGE_KEY = 'graphikrafts_pricing_selections';

function pricingReducer(state: PricingState, action: PricingAction): PricingState {
    switch (action.type) {
        case 'ADD_ITEM': {
            const service = getServiceById(action.itemId);
            if (!service) return state;
            const exists = state.selections.find(s => s.itemId === action.itemId);
            if (exists) {
                return {
                    ...state,
                    selections: state.selections.map(s =>
                        s.itemId === action.itemId
                            ? { ...s, quantity: s.quantity + (action.quantity ?? 1) }
                            : s
                    ),
                };
            }
            return {
                ...state,
                isCalculatorOpen: true,
                selections: [...state.selections, { itemId: action.itemId, quantity: action.quantity ?? 1, service }],
            };
        }
        case 'REMOVE_ITEM':
            return { ...state, selections: state.selections.filter(s => s.itemId !== action.itemId) };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                selections: state.selections.map(s =>
                    s.itemId === action.itemId ? { ...s, quantity: Math.max(1, action.quantity) } : s
                ),
            };
        case 'CLEAR_ALL':
            return { ...state, selections: [] };
        case 'TOGGLE_CALCULATOR':
            return { ...state, isCalculatorOpen: !state.isCalculatorOpen };
        case 'OPEN_BOOKING':
            return { ...state, isBookingOpen: true };
        case 'CLOSE_BOOKING':
            return { ...state, isBookingOpen: false };
        case 'LOAD_FROM_STORAGE':
            return { ...state, selections: action.selections };
        default:
            return state;
    }
}

interface PricingContextValue {
    state: PricingState;
    formatPrice: (usdAmount: number) => string;
    isJMD: boolean;
    addItem: (itemId: string, quantity?: number) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearAll: () => void;
    toggleCalculator: () => void;
    openBooking: () => void;
    closeBooking: () => void;
    isSelected: (itemId: string) => boolean;
    oneTimeTotal: number;
    monthlyTotal: number;
    grandTotal: number;
    totalCount: number;
    getQuoteUrl: () => string;
}

const PricingContext = createContext<PricingContextValue | null>(null);

export const usePricing = () => {
    const ctx = useContext(PricingContext);
    if (!ctx) throw new Error('usePricing must be used within PricingProvider');
    return ctx;
};

export function PricingProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(pricingReducer, {
        selections: [],
        isCalculatorOpen: false,
        isBookingOpen: false,
    });

    const [isJMD, setIsJMD] = useState(false);

    useEffect(() => {
        setIsJMD(isJamaica());
    }, []);

    const formatPrice = useCallback((usdAmount: number): string => {
        if (isJMD) {
            const jmd = usdAmount * CURRENCY_CONFIG.USD_TO_JMD;
            return `${CURRENCY_CONFIG.JMD_SYMBOL}${Math.round(jmd).toLocaleString()}`;
        }
        return `${CURRENCY_CONFIG.USD_SYMBOL}${usdAmount.toLocaleString()}`;
    }, [isJMD]);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const ids: { itemId: string; quantity: number }[] = JSON.parse(stored);
                const selections: SelectedItem[] = ids
                    .map(({ itemId, quantity }) => {
                        const service = getServiceById(itemId);
                        return service ? { itemId, quantity, service } : null;
                    })
                    .filter(Boolean) as SelectedItem[];
                if (selections.length > 0) dispatch({ type: 'LOAD_FROM_STORAGE', selections });
            }
        } catch { }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state.selections.map(s => ({ itemId: s.itemId, quantity: s.quantity })))
            );
        } catch { }
    }, [state.selections]);

    const addItem = useCallback((itemId: string, quantity?: number) => dispatch({ type: 'ADD_ITEM', itemId, quantity }), []);
    const removeItem = useCallback((itemId: string) => dispatch({ type: 'REMOVE_ITEM', itemId }), []);
    const updateQuantity = useCallback((itemId: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', itemId, quantity }), []);
    const clearAll = useCallback(() => dispatch({ type: 'CLEAR_ALL' }), []);
    const toggleCalculator = useCallback(() => dispatch({ type: 'TOGGLE_CALCULATOR' }), []);
    const openBooking = useCallback(() => dispatch({ type: 'OPEN_BOOKING' }), []);
    const closeBooking = useCallback(() => dispatch({ type: 'CLOSE_BOOKING' }), []);
    const isSelected = useCallback((itemId: string) => state.selections.some(s => s.itemId === itemId), [state.selections]);

    const oneTimeTotal = state.selections
        .filter(s => s.service.priceType === 'one-time')
        .reduce((sum, s) => sum + s.service.price * s.quantity, 0);

    const monthlyTotal = state.selections
        .filter(s => s.service.priceType === 'monthly')
        .reduce((sum, s) => sum + s.service.price * s.quantity, 0);

    const grandTotal = oneTimeTotal + monthlyTotal;
    const totalCount = state.selections.reduce((sum, s) => sum + s.quantity, 0);

    const getQuoteUrl = useCallback(() => {
        const params = state.selections
            .map(s => `${s.itemId}:${s.quantity}`)
            .join(',');
        return `${window.location.origin}/pricing?quote=${encodeURIComponent(params)}`;
    }, [state.selections]);

    return (
        <PricingContext.Provider value={{
            state, addItem, removeItem, updateQuantity, clearAll,
            toggleCalculator, openBooking, closeBooking, isSelected,
            oneTimeTotal, monthlyTotal, grandTotal, totalCount, getQuoteUrl, formatPrice, isJMD
        }}>
            {children}
        </PricingContext.Provider>
    );
}