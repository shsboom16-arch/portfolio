// Custom Cursor Logic
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add a slight delay to the outline for a smooth trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Cursor Hover Effects on Clickables
const clickables = document.querySelectorAll('a, button');

clickables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        if (cursorOutline) {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
        }
    });

    el.addEventListener('mouseleave', () => {
        if (cursorOutline) {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: observer.unobserve(entry.target) to animate only once
        }
    });
}, observerOptions);

// Select elements to animate
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-up, .slide-in, .fade-in');

    elementsToAnimate.forEach((el) => {
        observer.observe(el);
    });
});

// Typewriter effect logic (Simple setup, can be enhanced)
const typeWriterElement = document.querySelector('.type-writer');
if (typeWriterElement) {
    const text = typeWriterElement.textContent;
    typeWriterElement.textContent = '';

    let i = 0;
    const speed = 100; // ms

    function typeWriter() {
        if (i < text.length) {
            typeWriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Start typing effect after half a second
    setTimeout(typeWriter, 500);
}

// Sticky Navbar Logic
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 5%';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.padding = '20px 5%';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Smooth scrolling for anchor links (if browser doesn't support CSS smooth-scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// --- Bilingual Support (AR/EN) ---
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_testim: "Reviews",
        nav_videos: "Videos",
        nav_freelance: "Freelance",
        nav_contact: "Contact Me",
        hero_subtitle: "Hello, I am",
        hero_name: "Hussein Mohamed",
        hero_role: "Video Editor & <br> Motion Designer",
        hero_desc: "A passionate video editor and motion designer with a keen eye for detail and storytelling. I deliver visually compelling content that elevates brand image and engages audiences.",
        btn_work: "View My Work",
        btn_testim: "Client Reviews",
        about_tag: "About Me",
        about_title: "Bringing Stories to <span class=\"text-gradient\">Life</span>",
        about_text: "I am eager to contribute to impactful projects and collaborate with creative teams to produce engaging multimedia.",
        about_loc_label: "Location",
        about_loc_val: "Mansoura, Egypt",
        about_edu_label: "Education",
        about_edu_val: "Bachelor Degree in Computer Science",
        about_lang_label: "Languages",
        about_lang_val: "Arabic (Native), English (Fluent)",
        about_extra_title: "Extracurricular Activities",
        about_extra1_role: "Video Editing Instructor",
        about_extra1_desc: "Taught foundational and advanced video editing techniques to students.",
        about_extra2_role: "Head of Media <span class=\"highlight\">– Megateam</span>",
        about_extra2_desc: "Led the media department, directed a team to deliver high-quality content on tight deadlines.",
        skills_tag: "Expertise",
        skills_title: "My <span class=\"text-gradient\">Skills</span> Toolkit",
        skill1_title: "Video Editing",
        skill1_desc: "Adobe Premiere Pro, CapCut",
        skill1_tag1: "Performance Marketing",
        skill2_title: "Motion Graphics",
        skill2_desc: "Adobe After Effects",
        skill2_tag1: "2D Animation",
        skill3_title: "Graphic Design",
        skill3_desc: "Adobe Photoshop, Illustrator",
        skill4_title: "Other Skills",
        skill4_desc: "Collaboration & Management",
        skill4_tag1: "Leadership",
        skill4_tag2: "Time Mgt.",
        testim_tag: "Client Reviews",
        testim_title: "What <span class=\"text-gradient\">Clients</span> Say",
        testim1_text: "Hussein is an incredibly talented video editor. He delivered the project on time and exceeded our expectations in every way.",
        testim1_author: "Othman Construction",
        testim1_company: "Valued Client",
        testim2_text: "Working with Hussein was a seamless experience. His motion graphics skills brought our brand vision to life brilliantly.",
        testim2_author: "Block & Steel Co.",
        testim2_company: "Valued Client",
        vid_tag: "Showreel",
        vid_title: "My Best <span class=\"text-gradient\">Videos</span>",
        filter_all: "<i class=\"fas fa-th-large\"></i> All",
        filter_realestate: "<i class=\"fas fa-building\"></i> Real Estate",
        filter_food: "<i class=\"fas fa-utensils\"></i> Food & Restaurants",
        filter_events: "<i class=\"fas fa-star\"></i> Events & Highlights",
        filter_youtube: "<i class=\"fab fa-youtube\"></i> YouTube Content",
        filter_motion: "<i class=\"fas fa-cube\"></i> Motion Graphics",
        vid1_title: "Real Estate Promo",
        vid2_title: "Restaurant Ad",
        vid3_title: "Event Highlight",
        vid4_title: "YouTube Video",
        vid5_title: "Motion Graphics",
        contact_title: "Let's build something <span class=\"text-gradient\">amazing</span> together",
        contact_desc: "I'm eager to contribute to impactful projects. Feel free to reach out for collaborations or opportunities.",
        footer_rights: "© 2026 Hussein Mohamed. All Rights Reserved."
    },
    ar: {
        nav_about: "من أنا",
        nav_skills: "مهاراتي",
        nav_testim: "آراء العملاء",
        nav_videos: "الفيديوهات",
        nav_freelance: "أعمالي المستقلة",
        nav_contact: "تواصل معي",
        hero_subtitle: "أهلاً بك، أنا",
        hero_name: "حسين محمد",
        hero_role: "مونتير & <br> مصمم موشن جرافيك",
        hero_desc: "صانع محتوى شغوف بتعديل الفيديو وتصميم الموشن جرافيك، أتميز بلمسة فنية وقدرة على سرد القصص. أقدم محتوى مرئي جذاب يرفع من قيمة العلامة التجارية ويجذب الجمهور.",
        btn_work: "شاهد أعمالي",
        btn_testim: "آراء العملاء",
        about_tag: "نبذة عني",
        about_title: "نُضفي الحياة للـ<span class=\"text-gradient\">قصص</span>",
        about_text: "أتطلع دائماً للمساهمة في مشاريع مؤثرة والتعاون مع فرق إبداعية لإنتاج وسائط متعددة جذابة ومميزة.",
        about_loc_label: "الموقع",
        about_loc_val: "المنصورة، مصر",
        about_edu_label: "التعليم",
        about_edu_val: "بكالوريوس علوم الحاسب",
        about_lang_label: "اللغات",
        about_lang_val: "العربية (الأم)، الإنجليزية (بطلاقة)",
        about_extra_title: "الأنشطة الإضافية",
        about_extra1_role: "مدرب تعديل فيديو (مونتاج)",
        about_extra1_desc: "قمت بتدريس تقنيات تعديل الفيديو الأساسية والمتقدمة للطلاب.",
        about_extra2_role: "مسؤول الميديا <span class=\"highlight\">– Megateam</span>",
        about_extra2_desc: "أدرت قسم الميديا للعمل على مشاريع الإنتاج والتعديل بجودة عالية وفي أوقات زمنية ضيقة.",
        skills_tag: "الخبرات",
        skills_title: "أدواتي و<span class=\"text-gradient\">مهاراتي</span>",
        skill1_title: "تعديل الفيديو (المونتاج)",
        skill1_desc: "Adobe Premiere Pro, CapCut",
        skill1_tag1: "التسويق بالأداء",
        skill2_title: "موشن جرافيك",
        skill2_desc: "Adobe After Effects",
        skill2_tag1: "تحريك 2D",
        skill3_title: "التصميم الجرافيكي",
        skill3_desc: "Adobe Photoshop, Illustrator",
        skill4_title: "مهارات أخرى",
        skill4_desc: "التعاون والإدارة",
        skill4_tag1: "القيادة",
        skill4_tag2: "إدارة الوقت",
        testim_tag: "آراء العملاء",
        testim_title: "ماذا يقول <span class=\"text-gradient\">عملائي</span>",
        testim1_text: "حسين مونتير موهوب ومحترف جداً. قام بتسليم المشروع في الوقت المحدد وتجاوز كل توقعاتنا بشكل مبهر.",
        testim1_author: "شركة عثمان للبناء",
        testim1_company: "عميل مميز",
        testim2_text: "العمل مع حسين كان تجربة سلسة ورائعة. مهاراته في الموشن جرافيك أضفت حياة وتأثيراً قوياً لعلامتنا التجارية.",
        testim2_author: "شركة بلوك & ستيل",
        testim2_company: "عميل مميز",
        vid_tag: "معرض الأعمال",
        vid_title: "أفضل <span class=\"text-gradient\">مقاطعي</span>",
        filter_all: "<i class=\"fas fa-th-large\"></i> الكل",
        filter_realestate: "<i class=\"fas fa-building\"></i> عقارات",
        filter_food: "<i class=\"fas fa-utensils\"></i> مطاعم وبروموهات",
        filter_events: "<i class=\"fas fa-star\"></i> إيفنتات وتغطيات",
        filter_youtube: "<i class=\"fab fa-youtube\"></i> يوتيوب ومحتوى طويل",
        filter_motion: "<i class=\"fas fa-cube\"></i> موشن جرافيك",
        vid1_title: "برومو عقارات",
        vid2_title: "إعلان مطعم",
        vid3_title: "تغطية إيفنت",
        vid4_title: "محتوى يوتيوب",
        vid5_title: "موشن جرافيك",
        contact_title: "دعنا نبني شيئاً <span class=\"text-gradient\">رائعاً</span> معاً",
        contact_desc: "أتطلع دائماً للمساهمة في مشاريع ملهمة، لا تتردد في التواصل معي للتعاون والاستفسارات.",
        footer_rights: "© 2026 حسين محمد. جميع الحقوق محفوظة."
    }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'en' ? 'ar' : 'en';

        // Update document dir and lang
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        // Update button text
        langToggleBtn.textContent = currentLang === 'en' ? 'عربي' : 'English';

        // Update all translation strings based on data-i18n attributes
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.innerHTML = translations[currentLang][key];
            }
        });

        // Reset type-writer animation for Hero Name to match language
        const nameKey = 'hero_name';
        if (typeWriterElement && translations[currentLang][nameKey]) {
            typeWriterElement.textContent = '';
            const newText = translations[currentLang][nameKey];
            let k = 0;
            const newTypeWriter = () => {
                if (k < newText.length) {
                    typeWriterElement.textContent += newText.charAt(k);
                    k++;
                    setTimeout(newTypeWriter, 100);
                }
            };
            setTimeout(newTypeWriter, 200);
        }
    });
}

// --- Video Slider Logic ---
(function () {
    const track = document.getElementById('videoSliderTrack');
    const slides = document.querySelectorAll('.video-slide');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dots = document.querySelectorAll('.slider-dot');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        // Wrap around
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Dot click
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = parseInt(dot.getAttribute('data-slide'), 10);
            goToSlide(target);
        });
    });

    // Touch / Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });

    // Auto-play every 5 seconds
    let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);

    // Pause on hover
    const wrapper = document.querySelector('.video-slider-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
        wrapper.addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);
        });

        // Mouse wheel scroll support
        let wheelLocked = false;
        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (wheelLocked) return;
            wheelLocked = true;
            goToSlide(e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1);
            setTimeout(() => { wheelLocked = false; }, 700);
        }, { passive: false });
    }
})();
