'use client';
import { useState } from 'react';
import { usePricing } from '../PricingContext';
import SelectedItemRow from './SelectedItem';
import PriceBreakdown from './PricingBreakdown';
import styles from './PricingCalculator.module.scss';

export default function CalculatorPanel() {
    const { state, clearAll, toggleCalculator, openBooking, getQuoteUrl, totalCount } = usePricing();
    const [copied, setCopied] = useState(false);

    const handleCopyQuote = () => {
        navigator.clipboard.writeText(getQuoteUrl()).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
            {/* Floating trigger button */}
            <button
                className={`${styles.floatingTrigger} ${totalCount > 0 ? styles.floatingTriggerActive : ''}`}
                onClick={toggleCalculator}
                aria-label="Open pricing calculator"
            >
                <span className={styles.triggerLabel}>Your Quote</span>
                {totalCount > 0 && <span className={styles.triggerBadge}>{totalCount}</span>}
            </button>

            {/* Backdrop */}
            {state.isCalculatorOpen && (
                <div className={styles.backdrop} onClick={toggleCalculator} aria-hidden="true" />
            )}

            {/* Slide-in panel */}
            <aside className={`${styles.panel} ${state.isCalculatorOpen ? styles.panelOpen : ''}`} aria-label="Pricing calculator">
                <div className={styles.panelHeader}>
                    <div className={styles.panelHeaderLeft}>
                        <h2 className={styles.panelTitle}>Build Your Project</h2>
                    </div>
                    <button className={styles.closeBtn} onClick={toggleCalculator} aria-label="Close calculator">✕</button>
                </div>

                <div className={styles.panelBody}>
                    {state.selections.length === 0 ? (
                        <div className={styles.emptyState}>
                            <span className={styles.emptyIcon}>🕸</span>
                            <p>No services selected yet.</p>
                            <p className={styles.emptyHint}>Click <strong>Add to Quote</strong> on any service below.</p>
                        </div>
                    ) : (
                        <ul className={styles.itemsList}>
                            {state.selections.map(sel => (
                                <SelectedItemRow key={sel.itemId} selection={sel} />
                            ))}
                        </ul>
                    )}
                </div>

                {state.selections.length > 0 && (
                    <div className={styles.panelFooter}>
                        <PriceBreakdown />

                        <button className={styles.btnBook} onClick={openBooking}>
                            Book Free Consultation →
                        </button>

                        <div className={styles.footerActions}>
                            <button className={styles.btnGhost} onClick={handleCopyQuote}>
                                {copied ? '✓ Link Copied!' : 'Save Quote URL'}
                            </button>
                            <button className={styles.btnGhost} onClick={clearAll}>
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}