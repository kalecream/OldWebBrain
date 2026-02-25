'use client';
import { useState, useRef } from 'react';
import {
    BASE_WEBSITE, ADD_ONS, MAINTENANCE_PLANS, BUNDLES, OTHER_SERVICES,
    ServiceItem,
} from './PricingData';
import { PricingProvider, usePricing } from './PricingContext';
import CalculatorPanel from './PricingCalculator/PricingCalculator';
import BookingModal from './BookingModal/BookingModal';
import styles from './pricing.module.scss';
import button from '@styles/modules/Button.module.scss';
import TestimonialBlock from '@app/professional/Testimonial/Testimonial';

const Tooltip: React.FC<{ text: string }> = ({ text }) => {
    const [visible, setVisible] = useState(false);
    return (
        <span className={styles.tooltipWrap}>
            <button
                className={styles.tooltipTrigger}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                onFocus={() => setVisible(true)}
                onBlur={() => setVisible(false)}
                aria-label="More info"
            >?</button>
            {visible && <span className={styles.tooltipBox}>{text}</span>}
        </span>
    );
};

const AddToQuoteBtn: React.FC<{ service: ServiceItem }> = ({ service }) => {
    const { addItem, removeItem, isSelected } = usePricing();
    const selected = isSelected(service.id);
    return (
        <button
            className={`${styles.addBtn} ${selected ? styles.addBtnSelected : ''}`}
            onClick={() => selected ? removeItem(service.id) : addItem(service.id)}
        >
            {selected ? '✓ Added' : '+ Add to Quote'}
        </button>
    );
};

const PriceTag: React.FC<{ amount: number; unit?: string }> = ({ amount, unit }) => (
    <div className={styles.priceTag}>
        <span className={styles.priceCurrency}>$</span>
        <span className={styles.priceAmount}>{amount.toLocaleString()}</span>
        {unit && <span className={styles.priceUnit}>/{unit}</span>}
    </div>
);

const SaveBadge: React.FC<{ original: number; sale: number }> = ({ original, sale }) => (
    <>
        <div className={styles.saveBadge}>
            <span className={styles.saveBadgeOriginal}>${original.toLocaleString()}</span>
            <span className={styles.saveBadgeSale}>${sale.toLocaleString()}</span>

        </div>
        <span className={styles.saveBadgeLabel}>Save ${(original - sale).toLocaleString()}</span>
    </>
);

const FAQAccordion: React.FC<{ items: { question: string; answer: string }[] }> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <ul className={styles.faqList}>
            {items.map((item, i) => (
                <li key={i} className={styles.faqItem}>
                    <button
                        className={`${styles.faqQuestion} ${openIndex === i ? styles.faqQuestionOpen : ''}`}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        aria-expanded={openIndex === i}
                    >
                        <span>{item.question}</span>
                        <span className={styles.faqIcon} aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
                    </button>
                    <div className={`${styles.faqAnswer} ${openIndex === i ? styles.faqAnswerOpen : ''}`}>
                        <p>{item.answer}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};


const FAQ_ITEMS = [
    { question: 'How long does a website take to build?', answer: 'Typically 3–6 weeks from project kickoff to launch, depending on the scope and how quickly you provide feedback and content. Rush timelines are available for an additional fee.' },
    { question: 'Do I need to provide my own content?', answer: "You can, and it helps keep costs down. But if you need help, our copywriting add-on covers you. We'll always need your brand assets (logo, photos) unless you bundle in design services." },
    { question: 'What platform will my website be built on?', answer: "That depends on your needs. We work across Next.js, WordPress, Webflow, and Shopify. We'll recommend the right tool for your goals." },
    { question: 'Are there any recurring fees?', answer: 'Domain registration (~$15/yr) and hosting (~$10–30/mo) are separate and billed directly to you. Maintenance plans are optional but highly recommended. There are no hidden fees.' },
    { question: "What's the payment structure?", answer: '50% deposit to begin, 50% on delivery. For larger projects, we can split into three milestones: deposit, mid-project, and on launch.' },
    { question: 'Can I upgrade my plan later?', answer: 'Absolutely. Add-ons and maintenance upgrades can be added at any point. We grow with you.' },
];

const OTHER_CATS = [
    { category: 'Design', services: OTHER_SERVICES.filter(s => s.category === 'design') },
    { category: 'Content', services: OTHER_SERVICES.filter(s => s.category === 'content') },
    { category: 'SEO & Marketing', services: OTHER_SERVICES.filter(s => s.category === 'seo') },
];

function PricingInner({ showFaq = true }: { showFaq?: boolean }) {
    const { openBooking } = usePricing();

    return (
        <div className={styles.page}>

            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.heroSub}>
                        Every project starts from a clear base price, then you build up exactly what you need.
                        Select services below to see your total, then book a free consultation.
                    </p>
                    <button onClick={openBooking} className={button.vamp} role="button">
                        <span className={button.text}>Book A Call</span>
                        <span className={button["vamp-background"]}></span>
                        <span className={button["vamp-border"]}></span>
                        <svg style={{ position: "absolute", width: "0", height: "0" }}>
                            <filter id="remove-black-vamp" colorInterpolationFilters="sRGB">
                                <feColorMatrix
                                    type="matrix"
                                    values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
                                    result="black-pixels"
                                ></feColorMatrix>
                                <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
                            </filter>
                        </svg>
                    </button>
                </div>
            </section>

            <TestimonialBlock />

            <div className={styles.container}>
                <section className={styles.section} id="base">
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionSub}>A solid, custom-built foundation.</p>
                    </div>

                    <div className={styles.baseCard}>
                        <div className={styles.baseCardLeft}>
                            <h3 className={styles.baseCardName}>{BASE_WEBSITE.name}</h3>
                            <p className={styles.baseCardDesc}>{BASE_WEBSITE.description}</p>
                            {BASE_WEBSITE.note && <p className={styles.baseCardNote}><em>{BASE_WEBSITE.note}</em></p>}
                            <AddToQuoteBtn service={BASE_WEBSITE} />
                        </div>
                        <div className={styles.baseCardRight}>
                            <PriceTag amount={BASE_WEBSITE.price} unit="project" />
                            <ul className={styles.featureList}>
                                {BASE_WEBSITE.features?.map(f => (
                                    <li key={f} className={styles.featureItem}>
                                        <span className={styles.featureCheck} aria-hidden="true">✦</span>{f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section} id="addons">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Add-Ons</h2>
                        <p className={styles.sectionSub}>Bolt on exactly what your project needs.</p>
                    </div>
                    <ul className={styles.addonsGrid}>
                        {ADD_ONS.map(addon => (
                            <li key={addon.id} className={styles.addonCard}>
                                <div className={styles.addonCardTop}>
                                    <span className={styles.addonName}>
                                        {addon.name}
                                        {addon.tooltip && <Tooltip text={addon.tooltip} />}
                                    </span>
                                    <span className={styles.addonPrice}>
                                        ${addon.price.toLocaleString()}
                                        {addon.unit && <span className={styles.addonUnit}> {addon.unit}</span>}
                                    </span>
                                </div>
                                <p className={styles.addonDesc}>{addon.description}</p>
                                <AddToQuoteBtn service={addon} />
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section} id="maintenance">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Maintenance Plans</h2>
                        <p className={styles.sectionSub}>Websites need care. We handle it so you don't have to think about it.</p>
                    </div>
                    <div className={styles.plansGrid}>
                        {MAINTENANCE_PLANS.map(plan => (
                            <div key={plan.id} className={`${styles.planCard} ${plan.highlight ? styles.planCardHighlight : ''}`}>
                                {plan.highlight && <span className={styles.planBadge}>Most Popular</span>}
                                <h3 className={styles.planName}>{plan.name.replace(' Maintenance', '')}</h3>
                                <PriceTag amount={plan.price} unit={plan.unit} />
                                <ul className={styles.planFeatures}>
                                    {plan.features?.map(f => (
                                        <li key={f} className={styles.planFeatureItem}><span aria-hidden="true">→</span> {f}</li>
                                    ))}
                                </ul>
                                <AddToQuoteBtn service={plan} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section} id="bundles">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Bundle & Save</h2>
                        <p className={styles.sectionSub}>Curated packages for common goals. Pay less, get more.</p>
                    </div>
                    <div className={styles.bundlesGrid}>
                        {BUNDLES.map(bundle => (
                            <div key={bundle.id} className={`${styles.bundleCard} ${bundle.highlight ? styles.bundleCardHighlight : ''}`}>
                                {bundle.tag && <span className={styles.bundleTag}>{bundle.tag}</span>}
                                <h3 className={styles.bundleName}>{bundle.name}</h3>
                                <SaveBadge original={bundle.originalPrice!} sale={bundle.price} />
                                <ul className={styles.bundleIncludes}>
                                    {bundle.bundleIncludes?.map(id => (
                                        <li key={id} className={styles.bundleIncludeItem}><span aria-hidden="true">✦</span> {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>
                                    ))}
                                </ul>
                                <AddToQuoteBtn service={bundle} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section} id="other">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Other Services</h2>
                        <p className={styles.sectionSub}> creative and strategic support for your whole brand.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {OTHER_CATS.map(cat => (
                            <div key={cat.category} className={styles.serviceCategory}>
                                <h3 className={styles.serviceCategoryTitle}>{cat.category}</h3>
                                <ul className={styles.serviceList}>
                                    {cat.services.map(svc => (
                                        <li key={svc.id} className={styles.serviceItem}>
                                            <span className={styles.serviceName}>{svc.name}</span>
                                            <span className={styles.serviceDots} aria-hidden="true" />
                                            <span className={styles.servicePrice}>from ${svc.price.toLocaleString()}{svc.priceType === 'monthly' ? '/mo' : ''}</span><br />
                                            <AddToQuoteBtn service={svc} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className={styles.servicesNote}>
                        All prices are starting rates. Final quotes depend on project scope.
                        <button className={styles.btnText} onClick={openBooking}>Request your custom quote →</button>
                    </p>
                </section>



                {showFaq && (
                    <section className={styles.section} id="faq">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>FAQ</h2>
                            <p className={styles.sectionSub}>Still not sure?</p>
                        </div>
                        <div className={styles.faqGrid}>
                            <FAQAccordion items={FAQ_ITEMS} />
                            <aside className={styles.ctaPanel}>
                                <h3 className={styles.ctaHeading}>Let's talk about your project.</h3>
                                <p className={styles.ctaBody}>Every project starts with a free discovery call. No pressure, no obligation — just a conversation about what you need.</p>
                                <button className={styles.btnPrimary} onClick={openBooking}>Book a Free Call</button>
                                <p className={styles.ctaMeta}>
                                    Or email us at{' '}
                                    <a href="mailto:yunghigue@gmail.com" className={styles.ctaLink}>yunghigue@gmail.com</a>
                                </p>
                            </aside>
                        </div>
                    </section>
                )}
            </div>

            <CalculatorPanel />
            <BookingModal />
        </div>
    );
}

export interface PricingProps { showFaq?: boolean; }

const Pricing: React.FC<PricingProps> = ({ showFaq = true }) => (
    <PricingProvider>
        <PricingInner showFaq={showFaq} />
    </PricingProvider>
);

export default Pricing;