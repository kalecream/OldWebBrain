'use client';
import { usePricing } from '../PricingContext';
import styles from './PricingBreakdown.module.scss';

// TODO use JMD for local

export default function PriceBreakdown() {
    const { oneTimeTotal, monthlyTotal, grandTotal, formatPrice } = usePricing();

    return (
        <div className={styles.breakdown}>
            <div className={styles.row}>
                <span>One-time</span>
                <span>${oneTimeTotal.toLocaleString()}</span>
            </div>
            {monthlyTotal > 0 && (
                <div className={styles.row}>
                    <span>Monthly recurring</span>
                    <span>${monthlyTotal.toLocaleString()}/mo</span>
                </div>
            )}
            <div className={styles.totalRow}>
                <span>Estimated Total</span>
                <span className={styles.totalAmount}>${grandTotal.toLocaleString()}</span>
            </div>
            {monthlyTotal > 0 && (
                <p className={styles.note}>*Total includes first month. Recurring billed monthly thereafter.</p>
            )}
        </div>
    );
}