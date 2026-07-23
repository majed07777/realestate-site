/* صفحة المشاريع: عرض بطاقات المشاريع مع تصفية بالحي والحالة */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('results-count');
  const emptyEl = document.getElementById('empty-state');
  const statusSeg = document.getElementById('status-seg');
  const districtSel = document.getElementById('district-filter');
  const resetBtn = document.getElementById('reset-filters');

  const state = { status: 'all', district: 'all' };

  [...new Set(PROJECTS.map((p) => p.district))].forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = 'حي ' + d;
    districtSel.appendChild(opt);
  });

  function filtered() {
    return PROJECTS.filter((p) =>
      (state.status === 'all' || p.status === state.status) &&
      (state.district === 'all' || p.district === state.district)
    );
  }

  function render() {
    const items = filtered();
    grid.innerHTML = items.map(projectCard).join('');
    countEl.innerHTML = 'عرض <b><bdi class="num">' + items.length + '</bdi></b> من أصل <bdi class="num">' +
      PROJECTS.length + '</bdi> مشاريع';
    emptyEl.hidden = items.length !== 0;
    grid.hidden = items.length === 0;
  }

  statusSeg.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-status]');
    if (!btn) return;
    state.status = btn.dataset.status;
    statusSeg.querySelectorAll('button').forEach((b) =>
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
    render();
  });
  districtSel.addEventListener('change', () => { state.district = districtSel.value; render(); });

  function resetAll() {
    state.status = 'all';
    state.district = 'all';
    districtSel.value = 'all';
    statusSeg.querySelectorAll('button').forEach((b) =>
      b.setAttribute('aria-pressed', b.dataset.status === 'all' ? 'true' : 'false'));
    render();
  }
  resetBtn.addEventListener('click', resetAll);
  document.getElementById('empty-reset').addEventListener('click', resetAll);

  render();
});
