/* صفحة تفاصيل الوحدة: تحميل بالمعرّف + معرض صور + واتساب */

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(new URLSearchParams(location.search).get('id'), 10);
  const property = PROPERTIES.find((p) => p.id === id);

  const page = document.getElementById('property-content');
  const notFound = document.getElementById('not-found');

  if (!property) {
    page.hidden = true;
    notFound.hidden = false;
    document.getElementById('similar-wrap').hidden = true;
    return;
  }

  document.title = property.name + ' | المراد العقارية';

  /* النصوص */
  document.getElementById('p-name').textContent = property.name;
  document.getElementById('p-type-place').textContent =
    property.type + ' في حي ' + property.district + '، الرياض';
  document.getElementById('p-price').innerHTML = fmtPrice(property.price);
  document.getElementById('p-desc').textContent = property.desc;

  document.getElementById('p-area').innerHTML = '<bdi class="num">' + property.area + '</bdi> م²';
  document.getElementById('p-rooms').innerHTML =
    property.rooms > 0 ? '<bdi class="num">' + property.rooms + '</bdi>' : '—';
  document.getElementById('p-baths').innerHTML =
    property.baths > 0 ? '<bdi class="num">' + property.baths + '</bdi>' : '—';

  document.getElementById('p-features').innerHTML = property.features
    .map((f) => '<li>' + ICONS.check + f + '</li>')
    .join('');

  /* المعرض */
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.getElementById('gallery-thumbs');
  mainImg.src = property.images[0];
  mainImg.alt = property.type + ' ' + property.name + ' في حي ' + property.district;

  thumbs.innerHTML = property.images
    .map((src, i) =>
      '<button type="button" class="' + (i === 0 ? 'active' : '') + '" data-index="' + i +
      '" aria-label="عرض الصورة ' + (i + 1) + '">' +
      '<img src="' + src + '" alt="" loading="lazy"></button>')
    .join('');

  thumbs.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-index]');
    if (!btn) return;
    mainImg.src = property.images[parseInt(btn.dataset.index, 10)];
    thumbs.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn));
  });

  /* واتساب برسالة جاهزة عن هذه الوحدة */
  const waBtn = document.getElementById('p-whatsapp');
  waBtn.href = waLink('السلام عليكم، أرغب بالاستفسار عن ' + property.name +
    ' (' + property.type + ' في حي ' + property.district + ').');
  waBtn.target = '_blank';
  waBtn.rel = 'noopener';

  /* وحدات مشابهة: نفس الحي أو النوع */
  const similar = PROPERTIES
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (p) => (p.district === property.district ? 2 : 0) + (p.type === property.type ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, 3);
  document.getElementById('similar-grid').innerHTML = similar.map(propertyCard).join('');
});
