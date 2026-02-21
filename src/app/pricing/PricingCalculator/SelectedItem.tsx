'use client';
import { usePricing, SelectedItem } from '../PricingContext';
import styles from './SelectedItem.module.scss';

interface Props {
    selection: SelectedItem;
}

export default function SelectedItemRow({ selection }: Props) {
    const { removeItem, updateQuantity } = usePricing();
    const { service, quantity } = selection;
    const lineTotal = service.price * quantity;

    return (
        <li className={styles.row}>
            <div className={styles.rowTop}>
                <span className={styles.name}>{service.name}</span>
                <button className={styles.removeBtn} onClick={() => removeItem(service.id)} aria-label={`Remove ${service.name}`}>
                    ✕
                </button>
            </div>

            <div className={styles.rowBottom}>
                {service.hasQuantity ? (
                    <div className={styles.qtyControl}>
                        <button
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(service.id, quantity - 1)}
                            disabled={quantity <= (service.minQty ?? 1)}
                        >−</button>
                        <span className={styles.qtyValue}>{quantity}</span>
                        <button
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(service.id, quantity + 1)}
                            disabled={quantity >= (service.maxQty ?? 99)}
                        >+</button>
                        {service.unit && <span className={styles.unit}>{service.unit}</span>}
                    </div>
                ) : (
                    <span className={styles.unitLabel}>{service.unit ?? 'one-time'}</span>
                )}

                <div className={styles.price}>
                    <span className={styles.priceAmount}>${lineTotal.toLocaleString()}</span>
                    <span className={styles.priceType}>{service.priceType === 'monthly' ? '/mo' : ''}</span>
                </div>
            </div>
        </li>
    );
}