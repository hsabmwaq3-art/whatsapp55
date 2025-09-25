// Car services data
const services = [
    { name: "ونش سحب السيارات", description: "خدمة ونش سريعة وآمنة في جميع أنحاء الإمارات", icon: "🚛" },
    { name: "بنشر متنقل", description: "إصلاح الإطارات في موقعك خلال دقائق", icon: "🔧" },
    { name: "بطارية السيارة", description: "تبديل وشحن بطاريات السيارات", icon: "🔋" },
    { name: "مفاتيح السيارات", description: "برمجة وتبديل مفاتيح السيارات", icon: "🔑" },
    { name: "زيت المحرك", description: "تبديل زيت المحرك والفلاتر", icon: "🛢️" },
    { name: "تشخيص الأعطال", description: "فحص شامل للسيارة وتشخيص المشاكل", icon: "🔍" },
    { name: "إصلاح الفرامل", description: "صيانة وإصلاح نظام الفرامل", icon: "🛑" },
    { name: "تكييف السيارة", description: "صيانة وإصلاح مكيف السيارة", icon: "❄️" }
];

// UAE locations data
const locations = [
    // Dubai areas
    "دبي", "بر دبي", "ديرة", "جميرا", "البرشاء", "الخليج التجاري", "داون تاون دبي", "مدينة دبي الرياضية",
    "جبل علي", "الصفوح", "أم سقيم", "الممزر", "الراشدية", "القرهود", "المرقبات", "الخوانيج",
    "المدينة الأكاديمية", "مدينة دبي للإنترنت", "مدينة دبي للإعلام", "الخليج التجاري", "الكرامة",
    
    // Abu Dhabi areas
    "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين", "دبي لاند", "مردف",
    "البطين", "الزعفرانة", "الخالدية", "الرؤية", "الشهامة", "مدينة خليفة", "جزيرة ياس", "جزيرة السعديات",
    
    // Sharjah areas
    "المجاز", "النهدة", "الطوار", "الخان", "الغبيبة", "المويهات", "الرماقة", "القاسمية",
    
    // Other Emirates areas
    "العين", "الظفرة", "غياثي", "ليوا", "مروح", "دلما", "صير بني ياس", "القرم",
    "دبا", "كلباء", "قدفع", "مسافي", "البدية", "الفقيت", "مدحا", "الطويين"
];

// Generate services
function generateServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">${service.icon}</div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <a href="tel:0561309910" style="color: #e31e24; font-weight: bold; text-decoration: none;">اتصل الآن: 0561309910</a>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Generate locations
function generateLocations() {
    const locationsGrid = document.getElementById('locations-grid');
    if (!locationsGrid) return;
    
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.innerHTML = `
            <h3>🏢 ${location}</h3>
            <p>خدمات السيارات في ${location}</p>
            <a href="#" onclick="generateLocationPage('${location}')" style="color: #009639; font-weight: bold; text-decoration: none;">عرض الخدمات</a>
        `;
        locationsGrid.appendChild(locationCard);
    });
}

// Generate individual location page
function generateLocationPage(location) {
    const pageContent = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خدمات السيارات في ${location} - ونش ${location} | بنشر متنقل ${location}</title>
    <meta name="description" content="أفضل خدمات السيارات في ${location} - ونش ${location}، بنشر متنقل، إصلاح السيارات. اتصل الآن 0561309910">
    <meta name="keywords" content="ونش ${location}, بنشر ${location}, خدمات السيارات ${location}, إصلاح السيارات ${location}, بطارية السيارة ${location}">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">
                <h1>🚗 خدمات السيارات ${location}</h1>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="#services">الخدمات</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
            </ul>
            <div class="contact-info">
                <a href="tel:0561309910" class="phone">📞 0561309910</a>
            </div>
        </nav>
    </header>

    <div class="breadcrumb">
        <div class="container">
            <a href="index.html">الرئيسية</a> <span>/</span> <span>${location}</span>
        </div>
    </div>

    <section class="page-header">
        <div class="container">
            <h1>خدمات السيارات في ${location}</h1>
            <p>أسرع خدمة ونش وبنشر متنقل في ${location}</p>
        </div>
    </section>

    <section class="page-content">
        <div class="container">
            <div class="services-grid">
                ${services.map(service => `
                    <div class="service-card">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${service.icon}</div>
                        <h3>${service.name} في ${location}</h3>
                        <p>${service.description}</p>
                        <p><strong>منطقة الخدمة:</strong> ${location} وجميع المناطق المجاورة</p>
                        <a href="tel:0561309910" style="color: #e31e24; font-weight: bold; text-decoration: none;">اتصل الآن: 0561309910</a>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <div class="whatsapp-float">
        <a href="https://wa.me/971561309910" target="_blank">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMyNUQzNjYiLz4KPHBhdGggZD0iTTMwLjUgMTkuNUMzMC41IDI1Ljg0IDI1Ljg0IDMwLjUgMTkuNSAzMC41QzE3LjMzIDMwLjUgMTUuMjkgMjkuODQgMTMuNTggMjguNzNMOS41IDMwLjVMMTEuMjcgMjYuNDJDMTAuMTYgMjQuNzEgOS41IDIyLjY3IDkuNSAxOS41QzkuNSAxMy4xNiAxNC4xNiA4LjUgMjAuNSA4LjVDMjYuODQgOC41IDMwLjUgMTMuMTYgMzAuNSAxOS41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+" alt="WhatsApp">
        </a>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2024 خدمات السيارات ${location} - جميع الحقوق محفوظة</p>
        </div>
    </footer>
</body>
</html>
    `;
    
    // Create a blob and download the file
    const blob = new Blob([pageContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${location.replace(/\s+/g, '-')}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

// Generate all location pages automatically
function generateAllPages() {
    locations.forEach(location => {
        setTimeout(() => generateLocationPage(location), Math.random() * 1000);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateServices();
    generateLocations();
    
    // Auto-generate all pages after 3 seconds
    setTimeout(generateAllPages, 3000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(227, 30, 36, 0.95)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #e31e24, #009639, #000)';
    }
});
