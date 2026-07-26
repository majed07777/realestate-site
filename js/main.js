/* سلوك مشترك لكل الصفحات — المراد العقارية */

/* أيقونات مرسومة للعلامة (شبكة 24، أطراف مستديرة، قمم مثلثة من شعار المراد) */
const ICONS = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21c-3.8-3.9-6-7-6-9.8A6 6 0 0 1 12 5a6 6 0 0 1 6 6.2c0 2.8-2.2 5.9-6 9.8Z"/><path d="M9.5 11.2 12 9l2.5 2.2"/></svg>',
  area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9V5.5L7.5 4H20v14.5L16.5 20H4V9Z"/><path d="M4 9h16M9 4v5"/></svg>',
  rooms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6h18v6"/><path d="M5 12V8l2-1.5L9 8v4"/><path d="M11 12V9.5h7A2.5 2.5 0 0 1 20.5 12"/><path d="M3 18h18"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"/><path d="M6 12V6.5L8 5l2 1.5"/><path d="M17 19l1 2M7 19l-1 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10.6 19.6 4.4 13.4 3.5 5.7A1.5 1.5 0 0 1 5 4Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18v12H3V6Z"/><path d="m3 7 9 6 9-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 17 7 7"/><path d="M7 14V7h7"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10a8 8 0 1 1 2 6"/><path d="M4 5v5h5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
};

function fmtPrice(n) {
  return '<bdi class="num">' + n.toLocaleString('en-US') + '</bdi><span class="cur">ر.س</span>';
}

/* بطاقة وحدة عقارية — تُستخدم في صفحة الوحدات والوحدات المشابهة */
function propertyCard(p) {
  const roomsCell = p.rooms > 0
    ? ICONS.rooms + '<bdi class="num">' + p.rooms + '</bdi> غرف'
    : ICONS.rooms + '<bdi>—</bdi>';
  return (
    '<article class="card">' +
      '<a href="property.html?id=' + p.id + '" aria-label="تفاصيل ' + p.name + '">' +
        '<div class="card-media">' +
          '<img src="' + p.images[0] + '" alt="' + p.type + ' ' + p.name + ' في حي ' + p.district + '" loading="lazy">' +
          '<span class="card-type">' + p.type + '</span>' +
        '</div>' +
      '</a>' +
      '<div class="card-body">' +
        '<h3><a href="property.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<p class="card-place">' + ICONS.pin + 'حي ' + p.district + '، جدة</p>' +
        '<div class="card-specs">' +
          '<span>' + ICONS.area + '<bdi class="num">' + p.area + '</bdi> م²</span>' +
          '<span>' + roomsCell + '</span>' +
        '</div>' +
        '<div class="card-foot">' +
          '<div class="card-price">' + fmtPrice(p.price) + '</div>' +
          '<a class="arrow-cta" href="property.html?id=' + p.id + '">التفاصيل ' + ICONS.arrow + '</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

/* ── مساعدات المشاريع والوحدات ─────────────────────────── */
function projStatusClass(s) {
  return s === 'بدأ البيع' ? 'selling' : s === 'قيد الإنشاء' ? 'building' : 'done';
}
function unitStatusClass(s) {
  return s === 'متاح' ? 'available' : s === 'محجوز' ? 'reserved' : 'sold';
}
function projMediaHTML(p) {
  if (p.images && p.images.length) {
    return '<img src="' + p.images[0] + '" alt="' + p.name + ' في حي ' + p.district + '" loading="lazy">';
  }
  return '<span class="placeholder">' + p.code + '</span>';
}
function projectCard(p) {
  const st = unitStats(p);
  const priceHTML = p.priceFrom > 0
    ? '<div class="pcard-price"><small>يبدأ من</small><bdi class="num">' + p.priceFrom.toLocaleString('en-US') + '</bdi> ر.س</div>'
    : '<div class="pcard-price sold-out">مكتمل</div>';
  const apts = st.total > 0 ? st.total : '—';
  return (
    '<article class="pcard">' +
      '<a href="project.html?id=' + p.id + '" aria-label="مشروع ' + p.name + '">' +
        '<div class="pcard-media">' + projMediaHTML(p) +
          '<span class="status-badge ' + projStatusClass(p.status) + '">' + p.status + '</span>' +
        '</div>' +
      '</a>' +
      '<div class="pcard-body">' +
        '<span class="pcard-code">المراد ' + p.code + '</span>' +
        '<h3><a href="project.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<p class="pcard-place">' + ICONS.pin + 'حي ' + p.district + '، جدة</p>' +
        '<div class="pcard-stats">' +
          '<div><b class="num">' + p.floors + '</b><span>أدوار</span></div>' +
          '<div><b class="num">' + apts + '</b><span>وحدات</span></div>' +
          '<div><b class="num">' + p.annexes + '</b><span>ملاحق</span></div>' +
        '</div>' +
        '<div class="pcard-foot">' + priceHTML +
          '<a class="arrow-cta" href="project.html?id=' + p.id + '">المشروع ' + ICONS.arrow + '</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  /* حالة الترويسة عند التمرير */
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* قائمة الجوال */
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      header.classList.add('scrolled');
      if (!open) onScroll();
    });
  }

  /* روابط الواتساب والهاتف المشتركة */
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.href = waLink(el.dataset.wa || 'السلام عليكم، أرغب بالتواصل مع المراد العقارية.');
    el.target = '_blank';
    el.rel = 'noopener';
  });
  document.querySelectorAll('[data-phone]').forEach((el) => { el.href = 'tel:' + SITE.phone; });
  document.querySelectorAll('[data-phone-display]').forEach((el) => {
    el.innerHTML = '<bdi class="num">' + SITE.phoneDisplay + '</bdi>';
  });
  document.querySelectorAll('[data-wa-display]').forEach((el) => {
    el.innerHTML = '<bdi class="num">' + SITE.whatsappDisplay + '</bdi>';
  });

  /* فيديو البطل الاختياري: يظهر فقط إن وُجد ملف حقيقي assets/hero.mp4 */
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('loadeddata', () => {
      if (heroVideo.readyState >= 2 && heroVideo.videoWidth > 0) heroVideo.classList.add('ready');
    });
  }

  /* السنة في التذييل */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* عدّادات الأرقام: القيمة النهائية موجودة في HTML دائماً؛
     التحريك إضافة فقط، وإن لم يعمل تبقى القيمة كاملة */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const t0 = performance.now();
        const dur = 1400;
        const tick = (t) => {
          const k = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => io.observe(el));
  }
});
