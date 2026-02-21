export type PriceType = 'one-time' | 'monthly';
export type ServiceCategory = 'base' | 'addon' | 'maintenance' | 'bundle' | 'design' | 'content' | 'seo';

export const CURRENCY_CONFIG = {
    USD_TO_JMD: 157.50,
    JMD_SYMBOL: 'J$',
    USD_SYMBOL: '$',
} as const;

export interface ServiceItem {
    id: string;
    name: string;
    price: number;
    priceType: PriceType;
    category: ServiceCategory;
    description: string;
    unit?: string;
    hasQuantity?: boolean;
    minQty?: number;
    maxQty?: number;
    tooltip?: string;
    bundleIncludes?: string[];
    originalPrice?: number;
    highlight?: boolean;
    tag?: string;
    note?: string;
    features?: string[];
}

export const BASE_WEBSITE: ServiceItem = {
    id: 'base-website',
    name: 'Base Website',
    price: 1000,
    priceType: 'one-time',
    category: 'base',
    description: 'A fully responsive, custom-built website — designed from scratch to reflect your brand. Includes up to 5 pages, mobile optimisation, basic SEO setup, and one round of revisions.',
    unit: 'project',
    note: 'Everything else is built on top of this.',
    features: [
        'Up to 5 custom pages',
        'Fully responsive (mobile, tablet, desktop)',
        'Basic on-page SEO setup',
        'Contact form integration',
        'Analytics setup',
        '2 round of revisions',
        '30 days post-launch support',
    ],
};

export const ADD_ONS: ServiceItem[] = [
    {
        id: 'extra-page',
        name: 'Extra Page',
        price: 150,
        priceType: 'one-time',
        category: 'addon',
        description: 'Additional designed & developed pages beyond the base 5.',
        unit: 'per page',
        hasQuantity: true,
        minQty: 1,
        maxQty: 20,
        tooltip: 'Each extra page is fully designed and developed to match your site\'s style.',
    },
    {
        id: 'blog',
        name: 'Blog / CMS',
        price: 350,
        priceType: 'one-time',
        category: 'addon',
        description: 'Full content management system so you can publish posts yourself.',
        unit: 'one-time',
        tooltip: 'CMS (Content Management System) lets you update text, images, and posts without touching code.',
    },
    {
        id: 'ecommerce',
        name: 'E-Commerce Store',
        price: 800,
        priceType: 'one-time',
        category: 'addon',
        description: 'Product listings, cart, and checkout powered by Shopify or WooCommerce.',
        unit: 'one-time',
        tooltip: 'Includes product pages, shopping cart, and payment gateway integration.',
    },
    {
        id: 'booking',
        name: 'Booking System',
        price: 300,
        priceType: 'one-time',
        category: 'addon',
        description: 'Integrated calendar and appointment booking for service businesses.',
        unit: 'one-time',
    },
    {
        id: 'animations',
        name: 'Custom Animations',
        price: 250,
        priceType: 'one-time',
        category: 'addon',
        description: 'Scroll-triggered and hover animations to make your site feel alive.',
        unit: 'one-time',
    },
    {
        id: 'multilingual',
        name: 'Multilingual Support',
        price: 400,
        priceType: 'one-time',
        category: 'addon',
        description: 'Full i18n setup for a second language with a language switcher.',
        unit: 'one-time',
        tooltip: 'i18n = internationalisation. We set up your site to serve content in multiple languages.',
    },
    {
        id: 'copywriting',
        name: 'Copywriting',
        price: 200,
        priceType: 'one-time',
        category: 'addon',
        description: 'Professional copy written for your brand voice and audience.',
        unit: 'per page',
        hasQuantity: true,
        minQty: 1,
        maxQty: 10,
    },
];

export const MAINTENANCE_PLANS: ServiceItem[] = [
    {
        id: 'maintenance-basic',
        name: 'Basic Maintenance',
        price: 49,
        priceType: 'monthly',
        category: 'maintenance',
        description: 'Essential care to keep your site running smoothly.',
        unit: 'mo',
        features: [
            'Monthly plugin/CMS updates',
            'Uptime monitoring',
            'Monthly backup',
            'Email support (48hr response)',
        ],
    },
    {
        id: 'maintenance-standard',
        name: 'Standard Maintenance',
        price: 99,
        priceType: 'monthly',
        category: 'maintenance',
        description: 'Everything in Basic plus weekly backups and minor edits.',
        unit: 'mo',
        highlight: true,
        features: [
            'Everything in Basic',
            'Weekly backups',
            'Minor content edits (1hr/mo)',
            'Security scanning',
            'Priority email support (24hr)',
        ],
    },
    {
        id: 'maintenance-premium',
        name: 'Premium Maintenance',
        price: 199,
        priceType: 'monthly',
        category: 'maintenance',
        description: 'Full-service care with daily backups and analytics.',
        unit: 'mo',
        features: [
            'Everything in Standard',
            'Daily backups',
            'Content edits (3hr/mo)',
            'Monthly analytics report',
            'Phone & email support',
        ],
    },
];

export const BUNDLES: ServiceItem[] = [
    {
        id: 'bundle-starter',
        name: 'Starter Bundle',
        price: 1350,
        priceType: 'one-time',
        category: 'bundle',
        description: 'Everything a new business needs to get online fast.',
        originalPrice: 1600,
        tag: 'New Businesses',
        bundleIncludes: ['base-website', 'logo-design', 'maintenance-basic'],
    },
    {
        id: 'bundle-growth',
        name: 'Growth Bundle',
        price: 1999,
        priceType: 'one-time',
        category: 'bundle',
        description: 'Built for businesses ready to grow their online presence.',
        originalPrice: 2450,
        tag: 'Most Popular',
        highlight: true,
        bundleIncludes: ['base-website', 'blog', 'animations', 'maintenance-standard', 'copywriting'],
    },
    {
        id: 'bundle-presence',
        name: 'Full Presence Bundle',
        price: 2899,
        priceType: 'one-time',
        category: 'bundle',
        description: 'The complete package for maximum digital impact.',
        originalPrice: 3600,
        tag: 'Best Value',
        bundleIncludes: ['base-website', 'ecommerce', 'blog', 'speed', 'copywriting', 'maintenance-premium'],
    },
];

export const OTHER_SERVICES: ServiceItem[] = [
    { id: 'logo-design', name: 'Logo Design', price: 250, priceType: 'one-time', category: 'design', description: 'Custom logo designed for your brand.', unit: 'from' },
    { id: 'brand-identity', name: 'Brand Identity Package', price: 650, priceType: 'one-time', category: 'design', description: 'Full visual identity system for your brand.', unit: 'from' },
    { id: 'social-kit', name: 'Social Media Kit', price: 180, priceType: 'one-time', category: 'design', description: 'Branded templates for all your social channels.', unit: 'from' },
    { id: 'ui-prototype', name: 'UI/UX Prototype', price: 400, priceType: 'one-time', category: 'design', description: 'Interactive prototype of your app or site.', unit: 'from' },
    { id: 'product-photography', name: 'Product Photography Direction', price: 300, priceType: 'one-time', category: 'content', description: 'Art direction and guidance for product shoots.', unit: 'from' },
    { id: 'social-content', name: 'Social Media Content', price: 350, priceType: 'monthly', category: 'content', description: 'Monthly content creation for your social channels.', unit: 'from/mo' },
    { id: 'email-template', name: 'Email Newsletter Template', price: 150, priceType: 'one-time', category: 'content', description: 'Branded email template for your campaigns.', unit: 'from' },
    { id: 'local-seo', name: 'Local SEO Setup', price: 250, priceType: 'one-time', category: 'seo', description: 'Optimise your site for local search and Google Maps.', unit: 'from' },
    { id: 'google-ads', name: 'Google Ads Setup', price: 300, priceType: 'one-time', category: 'seo', description: 'Campaign setup and initial configuration.', unit: 'from' },
];

export const ALL_SERVICES: ServiceItem[] = [
    BASE_WEBSITE,
    ...ADD_ONS,
    ...MAINTENANCE_PLANS,
    ...BUNDLES,
    ...OTHER_SERVICES,
];

export const getServiceById = (id: string): ServiceItem | undefined =>
    ALL_SERVICES.find(s => s.id === id);