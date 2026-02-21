'use client';
import { useState, FormEvent } from 'react';
import { usePricing } from '../PricingContext';
import styles from './BookingModal.module.scss';

const TIMESLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const EMPTY_FORM = {
    name: '', email: '', phone: '', timeline: '', budgetRange: '',
    notes: '', preferredDate: '', preferredTime: '', referral: '',
};

export default function BookingModal() {
    const { state, closeBooking, oneTimeTotal, monthlyTotal, grandTotal } = usePricing();
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<typeof EMPTY_FORM>>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!state.isBookingOpen) return null;

    const validate = () => {
        const e: Partial<typeof EMPTY_FORM> = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!form.timeline) e.timeline = 'Please select a timeline';
        return e;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setLoading(true);

        const payload = {
            ...form,
            selections: state.selections.map(s => ({
                id: s.itemId,
                name: s.service.name,
                quantity: s.quantity,
                price: s.service.price * s.quantity,
                type: s.service.priceType,
            })),
            oneTimeTotal,
            monthlyTotal,
            grandTotal,
            submittedAt: new Date().toISOString(),
        };

        console.log('📋 Consultation Request Payload:', JSON.stringify(payload, null, 2));

        try {
            await fetch('https://formspree.io/f/mlgblggp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    ...form,
                    _subject: `New Consultation Request from ${form.name}`,
                    selectedServices: payload.selections.map(s => `${s.name} (x${s.quantity}) — $${s.price} ${s.type}`).join('\n'),
                    oneTimeTotal: `$${oneTimeTotal.toLocaleString()}`,
                    monthlyTotal: monthlyTotal > 0 ? `$${monthlyTotal.toLocaleString()}/mo` : 'None',
                    grandTotal: `$${grandTotal.toLocaleString()}`,
                }),
            });
        } catch (err) {
            console.error('Formspree error:', err);
        }

        setLoading(false);
        setSubmitted(true);
        setForm(EMPTY_FORM);
    };

    const field = (name: keyof typeof EMPTY_FORM) => ({
        value: form[name],
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setForm(f => ({ ...f, [name]: e.target.value })),
    });

    return (
        <div className={styles.overlay} onClick={e => e.target === e.currentTarget && closeBooking()}>
            <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Book a consultation">
                <button className={styles.closeBtn} onClick={closeBooking} aria-label="Close">✕</button>

                {submitted ? (
                    <div className={styles.successState}>
                        <h2 className={styles.successTitle}>Request Received.</h2>
                        <p className={styles.successBody}>
                            We'll be in touch within 24 hours to confirm your consultation.
                            A copy of your selections has been sent to <strong>{form.email || 'your email'}</strong>.
                        </p>
                        <button className={styles.btnPrimary} onClick={closeBooking}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Let's Talk About Your Project</h2>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.summary}>
                                <h3 className={styles.summaryTitle}>Your Selection</h3>
                                <ul className={styles.summaryList}>
                                    {state.selections.map(s => (
                                        <li key={s.itemId} className={styles.summaryItem}>
                                            <span>{s.service.name}{s.quantity > 1 ? ` ×${s.quantity}` : ''}</span>
                                            <span className={styles.summaryPrice}>
                                                ${(s.service.price * s.quantity).toLocaleString()}
                                                {s.service.priceType === 'monthly' ? '/mo' : ''}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.summaryTotal}>
                                    <span>Estimated Total</span>
                                    <span className={styles.summaryTotalAmount}>${grandTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <div className={styles.formGrid}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Name *</label>
                                        <input className={`${styles.input} ${errors.name ? styles.inputError : ''}`} type="text" placeholder="Your full name" {...field('name')} />
                                        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Email *</label>
                                        <input className={`${styles.input} ${errors.email ? styles.inputError : ''}`} type="email" placeholder="your@email.com" {...field('email')} />
                                        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Phone</label>
                                        <input className={styles.input} type="tel" placeholder="+1 (555) 000-0000" {...field('phone')} />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Timeline *</label>
                                        <select className={`${styles.select} ${errors.timeline ? styles.inputError : ''}`} {...field('timeline')}>
                                            <option value="">Select timeline</option>
                                            <option value="asap">ASAP</option>
                                            <option value="1-3mo">1–3 months</option>
                                            <option value="3-6mo">3–6 months</option>
                                            <option value="exploring">Just exploring</option>
                                        </select>
                                        {errors.timeline && <span className={styles.errorMsg}>{errors.timeline}</span>}
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Budget Range</label>
                                        <select className={styles.select} {...field('budgetRange')}>
                                            <option value="">Select budget</option>
                                            <option value="under-1k">Under $1,000</option>
                                            <option value="1k-3k">$1,000 – $3,000</option>
                                            <option value="3k-5k">$3,000 – $5,000</option>
                                            <option value="5k-plus">$5,000+</option>
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>How did you hear about us?</label>
                                        <select className={styles.select} {...field('referral')}>
                                            <option value="">Select...</option>
                                            <option value="google">Google Search</option>
                                            <option value="reddit">Reddit</option>
                                            <option value="tiktok">TikTok</option>
                                            <option value="webring">Webring</option>
                                            <option value="referral">Referral</option>
                                            <option value="portfolio">Saw your work</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Preferred Date</label>
                                        <input className={styles.input} type="date" min={new Date().toISOString().split('T')[0]} {...field('preferredDate')} />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Preferred Time</label>
                                        <select className={styles.select} {...field('preferredTime')}>
                                            <option value="">Select time</option>
                                            {TIMESLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Project Details / Notes</label>
                                    <textarea className={styles.textarea} rows={4} placeholder="Tell us about your project, goals, or anything else we should know..." {...field('notes')} />
                                </div>

                                <button className={styles.btnSubmit} type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Request & Book Consultation →'}
                                </button>

                                <p className={styles.formNote}>
                                    By submitting, you'll receive a copy of this request at your email address. This information is not stored on the website server and your personal information is deleted upon completion of the project.
                                </p>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}