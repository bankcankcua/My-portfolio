/* ===== I18N - Đa ngôn ngữ ===== */
const translations = {
  vi: {
    // Nav
    nav_home: "Trang chủ",
    nav_skills: "Kỹ năng",
    nav_projects: "Dự án",
    nav_experience: "Kinh nghiệm",
    nav_blog: "Blog",
    nav_contact: "Liên hệ",

    // Hero
    hero_badge: "Đang tìm cơ hội mới",
    hero_greeting: "Xin chào, tôi là",
    hero_desc: "Data Analyst với hơn 1 năm kinh nghiệm biến dữ liệu thô thành insights có giá trị kinh doanh. Chuyên sâu về Python, SQL, Power BI và Machine Learning ứng dụng.",
    stat_projects: "Dự án",
    stat_years: "Năm KN",
    stat_dashboard: "Dashboard",
    btn_projects: "Xem dự án",
    btn_contact: "Liên hệ",
    scroll: "Scroll",

    // Skills
    skills_tag: "// Skills",
    skills_title: "Kỹ năng chuyên môn",
    skills_desc: "Công cụ và công nghệ tôi sử dụng hàng ngày để biến data thành quyết định",
    skill_cat_1: "Programming & Analysis",
    skill_cat_2: "Visualization & BI",
    skill_cat_3: "Data Engineering & Cloud",

    // Projects
    projects_tag: "// Projects",
    projects_title: "Dự án nổi bật",
    projects_desc: "Một số dự án phân tích dữ liệu tôi đã thực hiện",
    proj1_title: "Sales Performance Dashboard",
    proj1_desc: "Xây dựng dashboard theo dõi hiệu suất bán hàng real-time cho chuỗi retail 50+ cửa hàng. Giúp tăng 18% conversion rate thông qua phân tích cohort và RFM.",
    proj2_title: "Customer Churn Prediction Model",
    proj2_desc: "Xây dựng mô hình dự đoán khách hàng rời bỏ với độ chính xác 89%. Ứng dụng SHAP để giải thích feature importance và đề xuất chiến lược retention.",
    proj3_title: "Supply Chain Optimization",
    proj3_desc: "Phân tích end-to-end chuỗi cung ứng, tối ưu inventory và giảm 12% chi phí logistics. Xây dựng forecasting model với Prophet và ARIMA.",
    proj4_title: "Healthcare Patient Analytics",
    proj4_desc: "Phân tích dữ liệu bệnh nhân để tối ưu lịch hẹn và giảm thời gian chờ. Xây dựng cohort analysis và survival analysis cho các chương trình điều trị.",
    metric_conversion: "Conversion",
    metric_stores: "Stores",
    metric_records: "Records",
    metric_accuracy: "Accuracy",
    metric_churn: "Churn Rate",
    metric_customers: "Customers",
    metric_logistics: "Logistics Cost",
    metric_forecast: "Forecast Acc.",
    metric_warehouses: "Warehouses",
    metric_wait: "Wait Time",
    metric_patients: "Patients",

    // Experience
    experience_tag: "// Experience",
    experience_title: "Kinh nghiệm làm việc",
    experience_desc: "Hành trình sự nghiệp của tôi trong lĩnh vực Data Analytics",
    exp1_title: "Senior Data Analyst",
    exp1_date: "03/2023 — Hiện tại",
    exp1_li1: "Lead team 3 Data Analysts, xây dựng data culture và self-service BI cho toàn công ty",
    exp1_li2: "Thiết kế data warehouse và semantic layer, giảm 60% thời gian tạo report",
    exp1_li3: "Phát triển predictive models hỗ trợ pricing strategy, tăng margin 8%",
    exp1_li4: "Mentor junior analysts và tổ chức internal workshops về SQL & Power BI",
    exp2_title: "Data Analyst",
    exp2_li1: "Phân tích hành vi người dùng và conversion funnel cho 10+ sản phẩm chính",
    exp2_li2: "Xây dựng automated reporting system với Python + Google Sheets API",
    exp2_li3: "Hỗ trợ A/B testing framework, chạy 50+ experiments với statistical rigor",
    exp2_li4: "Tạo customer segmentation model dùng RFM + K-Means, tăng retention 15%",
    exp3_title: "Junior Data Analyst",
    exp3_li1: "Xử lý và làm sạch dữ liệu từ nhiều nguồn (CRM, ERP, web analytics)",
    exp3_li2: "Tạo weekly/monthly reports cho stakeholders bằng Excel và Power BI",
    exp3_li3: "Hỗ trợ data migration project và documentation cho data dictionary",

    // Blog
    blog_tag: "// Blog",
    blog_title: "Insights & Bài viết",
    blog_desc: "Chia sẻ kiến thức và góc nhìn về Data Analytics",
    blog1_title: "5 sai lầm phổ biến khi xây dựng Dashboard",
    blog1_desc: "Từ kinh nghiệm review hàng trăm dashboard, tôi tổng hợp những lỗi thường gặp khiến stakeholders không dùng được insight...",
    blog1_read: "8 phút đọc",
    blog2_title: "Hướng dẫn A/B Testing đúng cách cho Data Analyst",
    blog2_desc: "Sample size, statistical power, multiple testing correction... Tất cả những gì bạn cần biết để chạy experiment có ý nghĩa...",
    blog2_read: "12 phút đọc",
    blog3_title: "Tại sao Data Analyst nên học dbt?",
    blog3_desc: "Analytics Engineering đang trở thành skill quan trọng. dbt giúp bạn xây dựng data pipeline sạch sẽ, version-controlled và testable...",
    blog3_read: "6 phút đọc",
    blog_readmore: "Đọc thêm",

    // Contact
    contact_tag: "// Contact",
    contact_title: "Liên hệ với tôi",
    contact_desc: "Bạn có dự án thú vị hoặc cơ hội hợp tác? Hãy nói chuyện nào!",
    contact_email: "Email",
    contact_location: "Địa điểm",
    contact_location_value: "Hồ Chí Minh, Việt Nam",
    contact_status: "Trạng thái",
    contact_status_value: "Open to full-time & freelance",
    form_name: "Họ và tên",
    form_name_ph: "Tên của bạn",
    form_email: "Email",
    form_subject: "Chủ đề",
    form_subject_ph: "Cơ hội hợp tác / Dự án...",
    form_message: "Nội dung",
    form_message_ph: "Mô tả ngắn về yêu cầu của bạn...",
    form_submit: "Gửi tin nhắn",

    // Footer
    footer_tagline: "Biến dữ liệu thành quyết định",
    footer_copy: "© 2026 Bankcankcua. Built with ♥ and lots of SQL.",

    // Typing roles
    roles: ["Data Analyst", "Business Intelligence", "Data Storyteller", "Python Enthusiast", "Insight Generator"]
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_blog: "Blog",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Available for opportunities",
    hero_greeting: "Hi, I'm",
    hero_desc: "Data Analyst with 4+ years of experience turning raw data into valuable business insights. Specialized in Python, SQL, Power BI and applied Machine Learning.",
    stat_projects: "Projects",
    stat_years: "Years Exp",
    stat_dashboard: "Dashboards",
    btn_projects: "View Projects",
    btn_contact: "Contact Me",
    scroll: "Scroll",

    // Skills
    skills_tag: "// Skills",
    skills_title: "Technical Skills",
    skills_desc: "Tools and technologies I use daily to turn data into decisions",
    skill_cat_1: "Programming & Analysis",
    skill_cat_2: "Visualization & BI",
    skill_cat_3: "Data Engineering & Cloud",

    // Projects
    projects_tag: "// Projects",
    projects_title: "Featured Projects",
    projects_desc: "Some data analysis projects I've worked on",
    proj1_title: "Sales Performance Dashboard",
    proj1_desc: "Built a real-time sales performance dashboard for a retail chain of 50+ stores. Helped increase conversion rate by 18% through cohort and RFM analysis.",
    proj2_title: "Customer Churn Prediction Model",
    proj2_desc: "Built a customer churn prediction model with 89% accuracy. Applied SHAP to explain feature importance and propose retention strategies.",
    proj3_title: "Supply Chain Optimization",
    proj3_desc: "End-to-end supply chain analysis, optimized inventory and reduced logistics costs by 12%. Built forecasting models with Prophet and ARIMA.",
    proj4_title: "Healthcare Patient Analytics",
    proj4_desc: "Analyzed patient data to optimize appointment scheduling and reduce wait times. Built cohort and survival analysis for treatment programs.",
    metric_conversion: "Conversion",
    metric_stores: "Stores",
    metric_records: "Records",
    metric_accuracy: "Accuracy",
    metric_churn: "Churn Rate",
    metric_customers: "Customers",
    metric_logistics: "Logistics Cost",
    metric_forecast: "Forecast Acc.",
    metric_warehouses: "Warehouses",
    metric_wait: "Wait Time",
    metric_patients: "Patients",

    // Experience
    experience_tag: "// Experience",
    experience_title: "Work Experience",
    experience_desc: "My career journey in Data Analytics",
    exp1_title: "Senior Data Analyst",
    exp1_date: "03/2023 — Present",
    exp1_li1: "Led a team of 3 Data Analysts, built data culture and self-service BI across the company",
    exp1_li2: "Designed data warehouse and semantic layer, reduced report creation time by 60%",
    exp1_li3: "Developed predictive models supporting pricing strategy, increased margin by 8%",
    exp1_li4: "Mentored junior analysts and organized internal workshops on SQL & Power BI",
    exp2_title: "Data Analyst",
    exp2_li1: "Analyzed user behavior and conversion funnel for 10+ core products",
    exp2_li2: "Built automated reporting system with Python + Google Sheets API",
    exp2_li3: "Supported A/B testing framework, ran 50+ experiments with statistical rigor",
    exp2_li4: "Created customer segmentation model using RFM + K-Means, increased retention by 15%",
    exp3_title: "Junior Data Analyst",
    exp3_li1: "Processed and cleaned data from multiple sources (CRM, ERP, web analytics)",
    exp3_li2: "Created weekly/monthly reports for stakeholders using Excel and Power BI",
    exp3_li3: "Supported data migration project and documentation for data dictionary",

    // Blog
    blog_tag: "// Blog",
    blog_title: "Insights & Articles",
    blog_desc: "Sharing knowledge and perspectives on Data Analytics",
    blog1_title: "5 Common Mistakes When Building Dashboards",
    blog1_desc: "From reviewing hundreds of dashboards, I summarize the common mistakes that prevent stakeholders from using insights...",
    blog1_read: "8 min read",
    blog2_title: "A Proper Guide to A/B Testing for Data Analysts",
    blog2_desc: "Sample size, statistical power, multiple testing correction... Everything you need to know to run meaningful experiments...",
    blog2_read: "12 min read",
    blog3_title: "Why Data Analysts Should Learn dbt?",
    blog3_desc: "Analytics Engineering is becoming an important skill. dbt helps you build clean, version-controlled and testable data pipelines...",
    blog3_read: "6 min read",
    blog_readmore: "Read more",

    // Contact
    contact_tag: "// Contact",
    contact_title: "Get In Touch",
    contact_desc: "Have an interesting project or collaboration opportunity? Let's talk!",
    contact_email: "Email",
    contact_location: "Location",
    contact_location_value: "Ho Chi Minh City, Vietnam",
    contact_status: "Status",
    contact_status_value: "Open to full-time & freelance",
    form_name: "Full Name",
    form_name_ph: "Your Name",
    form_email: "Email",
    form_subject: "Subject",
    form_subject_ph: "Collaboration / Project opportunity...",
    form_message: "Message",
    form_message_ph: "Briefly describe your request...",
    form_submit: "Send Message",

    // Footer
    footer_tagline: "Turning data into decisions",
    footer_copy: "© 2026 Bankcankcua. Built with ♥ and lots of SQL.",

    // Typing roles
    roles: ["Data Analyst", "Business Intelligence", "Data Storyteller", "Python Enthusiast", "Insight Generator"]
  }
};

let currentLang = localStorage.getItem("portfolio-lang") || "vi";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  document.documentElement.lang = lang;

  // Đổi text thường
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Đổi placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Cập nhật nút active
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Cập nhật roles cho typing effect
  if (typeof roles !== "undefined") {
    roles.length = 0;
    roles.push(...translations[lang].roles);
  }
}

// Gắn sự kiện click
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// Áp dụng ngôn ngữ đã lưu khi load trang
setLanguage(currentLang);

/* ===== Particles Background ===== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId;
let mouse = { x: null, y: null, radius: 120 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    // Mouse interaction
    if (mouse.x !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x += (dx / dist) * force * 1.5;
        this.y += (dy / dist) * force * 1.5;
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  animationId = requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

resizeCanvas();
initParticles();
animateParticles();

/* ===== Typing Effect ===== */
let roles = [...translations[currentLang].roles];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function typeEffect() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ===== Navbar Scroll ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===== Mobile Menu ===== */
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinksEl.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinksEl.classList.remove('open');
  });
});

/* ===== Counter Animation ===== */
const counters = document.querySelectorAll('.stat-num');
let countersStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target;
    }

    requestAnimationFrame(update);
  });
}

/* ===== Skill Bars Animation ===== */
const skillFills = document.querySelectorAll('.skill-fill');
let skillsStarted = false;

function animateSkills() {
  skillFills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    fill.style.width = width + '%';
  });
}

/* ===== Intersection Observer ===== */
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Counters
      if (entry.target.id === 'home' && !countersStarted) {
        countersStarted = true;
        animateCounters();
      }
      // Skills
      if (entry.target.id === 'skills' && !skillsStarted) {
        skillsStarted = true;
        animateSkills();
      }
      // Fade in cards
      entry.target.querySelectorAll('.project-card, .blog-card, .skill-category, .timeline-item, .contact-card').forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 80);
      });
    }
  });
}, observerOptions);

// Initial setup for fade-in elements
document.querySelectorAll('.project-card, .blog-card, .skill-category, .timeline-item, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

sections.forEach(section => observer.observe(section));

// Trigger counters on load if hero is visible
if (window.scrollY < window.innerHeight) {
  setTimeout(() => {
    if (!countersStarted) {
      countersStarted = true;
      animateCounters();
    }
  }, 500);
}

/* ===== Contact Form ===== */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Đã gửi!';
  btn.style.background = 'linear-gradient(135deg, #34d399, #22d3ee)';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
    btn.disabled = false;
    contactForm.reset();
  }, 2500);
});
