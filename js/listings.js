/* صفحة الوحدات: تصفية حقيقية بالنوع والحي والسعر */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('listings-grid');
  const countEl = document.getElementById('results-count');
  const headCount = document.getElementById('head-count');
  const emptyEl = document.getElementById('empty-state');
  const typeSeg = document.getElementById('type-seg');
  const districtSel = document.getElementById('district-filter');
  const priceSel = document.getElementById('price-filter');
  const resetBtn = document.getElementById('reset-filters');

  const state = { type: 'all', district: 'all', price: 'all' };

  /* الأحياء من البيانات نفسها */
  [...new Set(PROPERTIES.map((p) => p.district))].forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = 'حي ' + d;
    districtSel.appendChild(opt);
  });

  const PRICE_RANGES = {
    all: () => true,
    'lt1': (p) => p.price < 1000000,
    '1to2': (p) => p.price >= 1000000 && p.price < 2000000,
    '2to4': (p) => p.price >= 2000000 && p.price < 4000000,
    'gt4': (p) => p.price >= 4000000,
  };

  function filtered() {
    return PROPERTIES.filter((p) =>
      (state.type === 'all' || p.type === state.type) &&
      (state.district === 'all' || p.district === state.district) &&
      PRICE_RANGES[state.price](p)
    );
  }

  function render() {
    const items = filtered();
    grid.innerHTML = items.map(propertyCard).join('');
    countEl.innerHTML = 'عرض <b><bdi class="num">' + items.length + '</bdi></b> من أصل <bdi class="num">' +
      PROPERTIES.length + '</bdi> وحدات';
    emptyEl.hidden = items.length !== 0;
    grid.hidden = items.length === 0;
  }

  if (headCount) headCount.textContent = PROPERTIES.length;

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
