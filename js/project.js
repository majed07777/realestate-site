/* صفحة تفاصيل المشروع: معرض + معلومات + شبكة توفّر الوحدات + بطاقات الوحدات */

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('id');
  const p = projectById(id);

  const page = document.getElementById('project-content');
  const notFound = document.getElementById('not-found');

  if (!p) {
    page.hidden = true;
    notFound.hidden = false;
    return;
  }

  document.title = p.name + ' | المراد العقارية';

  /* المعرض */
  const galMain = document.getElementById('gallery-main');
  const thumbs = document.getElementById('gallery-thumbs');
  if (p.images && p.images.length) {
    galMain.innerHTML = '<img id="gallery-main-img" src="' + p.images[0] + '" alt="' + p.name + ' في حي ' + p.district + '">';
    const mainImg = document.getElementById('gallery-main-img');
    thumbs.innerHTML = p.images.map((src, i) =>
      '<button type="button" class="' + (i === 0 ? 'active' : '') + '" data-index="' + i +
      '" aria-label="عرض الصورة ' + (i + 1) + '"><img src="' + src + '" alt="" loading="lazy"></button>').join('');
    thumbs.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-index]');
      if (!btn) return;
      mainImg.src = p.images[parseInt(btn.dataset.index, 10)];
      thumbs.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
    });
  } else {
    galMain.innerHTML = '<div class="placeholder" style="position:absolute;inset:0;display:flex;align-items:center;' +
      'justify-content:center;font-family:var(--font-display);font-weight:700;font-size:3rem;color:rgba(202,249,252,.28)">المراد ' + p.code + '</div>';
    galMain.style.position = 'relative';
    galMain.style.minHeight = '360px';
    thumbs.style.display = 'none';
  }

  /* المعلومات */
  document.getElementById('p-name').textContent = p.name + ' ' + p.code;
  document.getElementById('p-place').textContent = 'حي ' + p.district + '، جدة';
  document.getElementById('p-floors').textContent = p.floors;
  document.getElementById('p-units').textContent = p.units.length || '—';
  document.getElementById('p-annexes').textContent = p.annexes;
  document.getElementById('p-desc').textContent = p.desc;

  /* شارة الحالة + شريط الإنجاز */
  const statusWrap = document.getElementById('p-status-wrap');
  let statusHTML = '<span class="status-badge ' + projStatusClass(p.status) +
    '" style="position:static;display:inline-block;clip-path:polygon(9px 0,100% 0,100% 100%,0 100%,0 9px);margin-top:.4rem">' +
    p.status + '</span>';
  if (p.completion < 100) {
    statusHTML += '<div class="progress-line"><div class="plabel"><span>نسبة الإنجاز</span>' +
      '<b><bdi class="num">' + p.completion + '%</bdi></b></div>' +
      '<div class="progress-track"><div class="progress-fill" style="width:' + p.completion + '%"></div></div></div>';
  }
  statusWrap.innerHTML = statusHTML;

  /* السعر */
  document.getElementById('p-price').innerHTML = p.priceFrom > 0
    ? '<span style="font-family:var(--font-body);font-weight:500;font-size:1rem;color:var(--text-mute)">تبدأ من </span>' +
      '<bdi class="num">' + p.priceFrom.toLocaleString('en-US') + '</bdi><span class="cur">ر.س</span>'
    : '<span style="font-size:1.2rem;color:var(--text-mute)">مشروع مكتمل</span>';

  /* المميزات */
  document.getElementById('p-features').innerHTML = p.features.length
    ? p.features.map((f) => '<li>' + ICONS.check + f + '</li>').join('')
    : '';

  /* واتساب */
  const waBtn = document.getElementById('p-whatsapp');
  waBtn.href = waLink('السلام عليكم، أرغب بالاستفسار عن مشروع ' + p.name + ' (' + p.code + ') في حي ' + p.district + '.');
  waBtn.target = '_blank';
  waBtn.rel = 'noopener';

  /* كتلة الوحدات */
  const block = document.getElementById('units-block');
  if (!p.units.length) {
    block.innerHTML = '<div class="completed-note"><h3>هذا المشروع مكتمل</h3>' +
      '<p>سُلّم المشروع بالكامل لأهله. تواصل معنا للاطلاع على مشاريعنا المتاحة حالياً.</p></div>';
    return;
  }

  const legend =
    '<div class="avail-legend">' +
      '<span><i class="sw-available"></i> متاح</span>' +
      '<span><i class="sw-reserved"></i> محجوز</span>' +
      '<span><i class="sw-sold"></i> مباع</span>' +
    '</div>';
  const gridChips = '<div class="avail-grid">' + p.units.map((u) =>
    '<span class="avail-chip ' + unitStatusClass(u.status) + '">' + u.code + '</span>').join('') + '</div>';

  block.innerHTML =
    '<section class="avail-section"><h2>توفّر الوحدات</h2>' + legend + gridChips + '</section>' +
    '<div class="units-bar"><h2>وحدات المشروع</h2>' +
      '<div class="units-filter" id="units-filter" role="group" aria-label="تصفية الوحدات بالحالة">' +
        '<button type="button" data-s="all" aria-pressed="true">الكل</button>' +
        '<button type="button" data-s="متاح" aria-pressed="false">متاح</button>' +
        '<button type="button" data-s="محجوز" aria-pressed="false">محجوز</button>' +
        '<button type="button" data-s="مباع" aria-pressed="false">مباع</button>' +
      '</div></div>' +
    '<div class="units-grid" id="units-grid"></div>';

  const unitsGrid = document.getElementById('units-grid');
  const unitsFilter = document.getElementById('units-filter');

  function unitCard(u) {
    const cls = unitStatusClass(u.status);
    const priceHTML = u.status === 'مباع'
      ? '<div class="unit-price" style="color:var(--text-mute);font-size:1rem">—</div>'
      : '<div class="unit-price"><bdi class="num">' + u.price.toLocaleString('en-US') + '</bdi><span class="cur"> ر.س</span></div>';
    const wa = waLink('السلام عليكم، أرغب بالاستفسار عن الوحدة ' + u.code + ' في مشروع ' + p.name + ' (' + p.code + ').');
    const cta = u.status === 'مباع' ? '' :
      '<a class="line-action" href="' + wa + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>' +
      'استفسر عن الوحدة</a>';
    return (
      '<article class="unit-card ' + (u.status === 'مباع' ? 'is-sold' : '') + '">' +
        '<div class="unit-top"><span class="unit-code">' + u.code + '</span>' +
          '<span class="unit-status ' + cls + '">' + u.status + '</span></div>' +
        priceHTML +
        '<ul class="unit-meta">' +
          '<li><span>النوع</span><b>' + u.type + '</b></li>' +
          '<li><span>الدور</span><b>' + u.floor + '</b></li>' +
          '<li><span>الجهة</span><b>' + u.facing + '</b></li>' +
          '<li><span>المساحة</span><b><bdi class="num">' + u.area + '</bdi> م²</b></li>' +
          '<li><span>الغرف</span><b><bdi class="num">' + u.rooms + '</bdi></b></li>' +
          '<li><span>دورات المياه</span><b><bdi class="num">' + u.baths + '</bdi></b></li>' +
        '</ul>' + cta +
      '</article>'
    );
  }

  let filter = 'all';
  function renderUnits() {
    const items = p.units.filter((u) => filter === 'all' || u.status === filter);
    unitsGrid.innerHTML = items.map(unitCard).join('') ||
      '<p style="color:var(--text-mute)">لا توجد وحدات بهذه الحالة.</p>';
  }
  unitsFilter.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-s]');
    if (!btn) return;
    filter = btn.dataset.s;
    unitsFilter.querySelectorAll('button').forEach((b) =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
    renderUnits();
  });
  renderUnits();
});
