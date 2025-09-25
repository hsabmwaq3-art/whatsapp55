// SEO Meta Tags Generator for UAE Car Services

const seoData = {
    mainKeywords: [
        'ونش دبي', 'بنشر دبي', 'ونش الشارقة', 'ونش أبوظبي', 'بنشر متنقل',
        'خدمات السيارات', 'إصلاح السيارات', 'بطارية السيارة', 'مفاتيح السيارات',
        'Dubai towing', 'UAE car service', 'mobile tire repair', 'car battery Dubai'
    ],
    
    uaeLocations: [
        'دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين',
        'بر دبي', 'ديرة', 'جميرا', 'البرشاء', 'الخليج التجاري', 'داون تاون دبي'
    ],
    
    services: [
        'ونش سحب السيارات', 'بنشر متنقل', 'بطارية السيارة', 'مفاتيح السيارات',
        'زيت المحرك', 'تشخيص الأعطال', 'إصلاح الفرامل', 'تكييف السيارة'
    ]
};

// Generate meta description for location pages
function generateMetaDescription(location, service = '') {
    const baseDesc = `أفضل خدمات السيارات في ${location} - ونش ${location}، بنشر متنقل، إصلاح السيارات`;
    const serviceDesc = service ? ` - ${service} في ${location}` : '';
    return `${baseDesc}${serviceDesc}. متوفرون 24/7. اتصل الآن: 0561309910`;
}

// Generate keywords for location pages  
function generateKeywords(location, service = '') {
    const baseKeywords = [
        `ونش ${location}`,
        `بنشر ${location}`, 
        `خدمات السيارات ${location}`,
        `إصلاح السيارات ${location}`,
        `بطارية السيارة ${location}`,
        `${location} car service`,
        `${location} towing`
    ];
    
    if (service) {
        baseKeywords.push(`${service} ${location}`);
    }
    
    return baseKeywords.join('، ');
}

// Generate title for location pages
function generateTitle(location, service = '') {
    const baseTitle = `خدمات السيارات ${location} - ونش ${location}`;
    const serviceTitle = service ? ` | ${service}` : ' | بنشر متنقل';
    return `${baseTitle}${serviceTitle}`;
}

// Generate structured data for local business
function generateStructuredData(location) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `خدمات السيارات ${location}`,
        "description": generateMetaDescription(location),
        "url": `https://hsabmwaq3-art.github.io/whatsapp55/${location.replace(/\s+/g, '-')}.html`,
        "telephone": "+971561309910",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": location,
            "addressRegion": location,
            "addressCountry": "AE"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$",
        "areaServed": location,
        "serviceType": "Car Services"
    };
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateMetaDescription,
        generateKeywords,
        generateTitle,
        generateStructuredData,
        seoData
    };
}
