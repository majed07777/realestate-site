/* صفحة الوحدات المتاحة — تُبنى من الوحدات الحقيقية المتاحة في مشاريع المراد */

function offerCard(o) {
  return (
    '<article class="card">' +
      '<a href="project.html?id=' + o.projectId + '" aria-label="الوحدات المتاحة في ' + o.projectName + '">' +
        '<div class="card-media">' +
          '<img src="' + o.image + '" alt="' + o.type + ' في ' + o.projectName + ' بحي ' + o.district + '" loading="lazy">' +
          '<span class="card-type">' + o.type + '</span>' +
        '</div>' +
      '</a>' +
      '<div class="card-body">' +
        '<h3><a href="project.html?id=' + o.projectId + '">' + o.projectName + '</a></h3>' +
        '<p class="card-place">' + ICONS.pin + 'حي ' + o.district + '، جدة</p>' +
        '<div class="card-specs">' +
          '<span>' + ICONS.area + '<bdi class="num">' + o.area + '</bdi> م²</span>' +
          '<span>' + ICONS.rooms + '<bdi class="num">' + o.rooms + '</bdi> غرف</span>' +
          '<span>' + ICONS.bath + '<bdi class="num">' + o.baths + '</bdi> دورات</span>' +
        '</div>' +
        '<span class="card-avail"><bdi class="num">' + o.count + '</bdi> ' +
          (o.count === 1 ? 'وحدة متاحة' : 'وحدات متاحة') + '</span>' +
        '<div class="card-foot">' +
          '<div class="card-price">' + fmtPrice(o.price) + '</div>' +
          '<a class="arrow-cta" href="project.html?id=' + o.projectId + '">عرض المشروع ' + ICONS.arrow + '</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('listings-grid');
  const countEl = document.getElementById('results-count');
  const headCount = document.getElementById('head-count');
  const emptyEl = document.getElementById('empty-state');
  const typeSeg = document.getElementById('type-seg');
  const districtSel = document.getElementById('district-filter');
  const priceSel = document.getElementById('price-filter');
  const resetBtn = document.getElementById('reset-filters');

  const ALL = availableOffers();
  const state = { type: 'all', district: 'all', price: 'all' };

  /* الأحياء من الوحدات المتاحة نفسها */
  [...new Set(ALL.map((o) => o.district))].forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = 'حي ' + d;
    districtSel.appendChild(opt);
  });

  const PRICE_RANGES = {
    all: () => true,
    'lt1': (o) => o.price < 1000000,
    '1to2': (o) => o.price >= 1000000 && o.price < 2000000,
    '2to4': (o) => o.price >= 2000000 && o.price < 4000000,
    'gt4': (o) => o.price >= 4000000,
  };

  function filtered() {
    return ALL.filter((o) =>
      (state.type === 'all' || o.typeGroup === state.type) &&
      (state.district === 'all' || o.district === state.district) &&
      PRICE_RANGES[state.price](o)
    );
  }

  function render() {
    const items = filtered();
    grid.innerHTML = items.map(offerCard).join('');
    const units = items.reduce((n, o) => n + o.count, 0);
    countEl.innerHTML = '<b><bdi class="num">' + units + '</bdi></b> وحدة متاحة' +
      (items.length < ALL.length ? ' تطابق بحثك' : ' الآن');
    emptyEl.hidden = items.length !== 0;
    grid.hidden = items.length === 0;
  }

  if (headCount) headCount.textContent = availableUnitsTotal();

  typeSeg.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-type]');
    if (!btn) return;
    state.type = btn.dataset.type;
    typeSeg.querySelectorAll('button').forEach((b) =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
    render();
  });

  districtSel.addEventListener('change', () => { state.district = districtSel.value; render(); });
  priceSel.addEventListener('change', () => { state.price = priceSel.value; render(); });

  function resetAll() {
    state.type = 'all';
    state.district = 'all';
    state.price = 'all';
    districtSel.value = 'all';
    priceSel.value = 'all';
    typeSeg.querySelectorAll('button').forEach((b) =>
      b.setAttribute('aria-pressed', b.dataset.type === 'all' ? 'true' : 'false'));
    render();
  }
  resetBtn.addEventListener('click', resetAll);
  document.getElementById('empty-reset').addEventListener('click', resetAll);

  render();
});
