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

            // Close mobile menu if open (placeholder for logic)
            // if(mobileMenu.classList.contains('active')) closeMenu();
        }
    });
});

// --- Bilingual Support (AR/EN) ---
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_videos: "Videos",
        nav_freelance: "Freelance",
        nav_contact: "Contact Me",
        hero_subtitle: "Hello, I am",
        hero_name: "Hussein Mohamed",
        hero_role: "Video Editor & <br> Motion Designer",
        hero_desc: "A passionate video editor and motion designer with a keen eye for detail and storytelling. I deliver visually compelling content that elevates brand image and engages audiences.",
        btn_work: "View My Work",
        btn_exp: "My Experience",
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
        exp_tag: "Career",
        exp_title: "Professional <span class=\"text-gradient\">Experience</span>",
        exp1_role: "Video Editor",
        exp1_company: "Tasawk",
        exp1_date: "Jan 2025 – Mar 2025",
        exp1_loc: "El Mansoura, Egypt (On-site)",
        exp1_desc1: "Edited promotional and advertising content tailored for digital platforms.",
        exp1_desc2: "Worked closely with marketing teams to align visuals with brand strategy.",
        exp1_desc3: "Specialized in video marketing and motion graphics for social media.",
        exp2_role: "Video Editor",
        exp2_company: "EBTKRAT",
        exp2_date: "Jan 2025 – Mar 2025",
        exp2_loc: "Remote",
        exp2_desc1: "Created engaging short-form video content for clients across diverse industries.",
        exp2_desc2: "Executed fast-turnaround projects while maintaining high quality.",
        exp2_desc3: "Focused on video editing and performance-driven video marketing.",
        vid_tag: "Showreel",
        vid_title: "My Best <span class=\"text-gradient\">Videos</span>",
        filter_all: "All",
        filter_promo: "Promotional",
        filter_motion: "Motion Graphics",
        filter_shorts: "Short-form",
        vid1_title: "Promotional Edit",
        vid2_title: "Motion Graphics Project",
        vid3_title: "Social Media Reel",
        vid4_title: "Corporate Video",
        proj_tag: "Portfolio",
        proj_title: "Freelance <span class=\"text-gradient\">Projects</span>",
        proj1_title: "Othman Building Construction Company",
        proj1_desc: "Collaborated to produce high-quality promotional and corporate videos, significantly enhancing their brand image.",
        proj2_title: "BLOCK & STEEL CO.",
        proj2_desc: "Played a pivotal role in a major project, delivering visually engaging content that aligned with the company’s vision and goals.",
        proj3_title: "SQUARE RYS",
        proj3_desc: "Played a pivotal role in a major project, delivering visually engaging content that aligned with the company’s vision and goals.",
        contact_title: "Let's build something <span class=\"text-gradient\">amazing</span> together",
        contact_desc: "I'm eager to contribute to impactful projects. Feel free to reach out for collaborations or opportunities.",
        footer_rights: "© 2026 Hussein Mohamed. All Rights Reserved."
    },
    ar: {
        nav_about: "من أنا",
        nav_skills: "مهاراتي",
        nav_experience: "خبراتي",
        nav_videos: "الفيديوهات",
        nav_freelance: "أعمالي المستقلة",
        nav_contact: "تواصل معي",
        hero_subtitle: "أهلاً بك، أنا",
        hero_name: "حسين محمد",
        hero_role: "مونتير & <br> مصمم موشن جرافيك",
        hero_desc: "صانع محتوى شغوف بتعديل الفيديو وتصميم الموشن جرافيك، أتميز بلمسة فنية وقدرة على سرد القصص. أقدم محتوى مرئي جذاب يرفع من قيمة العلامة التجارية ويجذب الجمهور.",
        btn_work: "شاهد أعمالي",
        btn_exp: "خبراتي السابقة",
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
        exp_tag: "المسيرة المهنية",
        exp_title: "الخبرات <span class=\"text-gradient\">العملية</span>",
        exp1_role: "مونتير",
        exp1_company: "تصوق (Tasawk)",
        exp1_date: "يناير 2025 – مارس 2025",
        exp1_loc: "المنصورة، مصر (بالمقر)",
        exp1_desc1: "تحرير محتوى دعائي وإعلاني مخصص للمنصات الرقمية.",
        exp1_desc2: "العمل عن كثب مع فرق التسويق لمواءمة الجانب المرئي مع استراتيجية العمل.",
        exp1_desc3: "متخصص في تسويق الفيديوهات والموشن جرافيك لوسائل التواصل الاجتماعي.",
        exp2_role: "مونتير",
        exp2_company: "ابتكارات (EBTKRAT)",
        exp2_date: "يناير 2025 – مارس 2025",
        exp2_loc: "عن بُعد",
        exp2_desc1: "إنشاء محتوى فيديو قصير وجذاب للعملاء في قطاعات مختلفة.",
        exp2_desc2: "تنفيذ مشاريع سريعة الإنجاز مع الحفاظ على أعلى مستويات الجودة.",
        exp2_desc3: "التركيز على تعديل الفيديو والتسويق بالفيديو المبني على الأداء.",
        vid_tag: "معرض الأعمال",
        vid_title: "أفضل <span class=\"text-gradient\">مقاطعي</span>",
        filter_all: "الكل",
        filter_promo: "ترويجي / دعائي",
        filter_motion: "موشن جرافيك",
        filter_shorts: "مقاطع قصيرة",
        vid1_title: "تعديل فيديو ترويجي",
        vid2_title: "مشروع موشن جرافيك",
        vid3_title: "ريلز للسوشيال ميديا",
        vid4_title: "فيديو للشركات",
        proj_tag: "بورتفوليو",
        proj_title: "مشاريع <span class=\"text-gradient\">مستقلة</span>",
        proj1_title: "شركة عثمان للبناء والمقاولات",
        proj1_desc: "تعاونت لإنتاج فيديوهات ترويجية للشركة ذات جودة عالية مما أدى لتعزيز صورة علامتهم التجارية بشكل كبير.",
        proj2_title: "شركة بلوك & ستيل",
        proj2_desc: "لعبت دوراً أساسياً في مشروع ضخم عبر تقديم محتوى مرئي جذاب يتماشى مع رؤية وأهداف الشركة.",
        proj3_title: "سكوير ريس (SQUARE RYS)",
        proj3_desc: "لعبت دوراً أساسياً في مشروع ضخم عبر تقديم محتوى مرئي جذاب يتماشى مع رؤية وأهداف الشركة.",
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

// --- Video Filtering Logic ---
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        videoCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hide');
                // Optional: you can add a small animation class here
            } else {
                card.classList.add('hide');
            }
        });
    });
});
