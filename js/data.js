/* بيانات الموقع — المراد للتطوير العقاري (جدة)
   ─────────────────────────────────
   واتساب: لم يُزوَّد رقم جوال بعد — غيّر القيمتين أدناه (بالصيغة الدولية بدون +)
   الرقم الموحد والبريد والعنوان مأخوذة من الملف التعريفي للشركة. */

const SITE = {
  whatsapp: '966500000000',            // ← ضع رقم الجوال هنا (مثال: 9665XXXXXXXX)
  whatsappDisplay: '+966 50 000 0000', // ← وصيغة العرض هنا
  phone: '920031546',                  // الرقم الموحد
  phoneDisplay: '920031546',
  email: 'almurad.co33@gmail.com',
  address: 'جدة، حي الرحاب، شارع الأربعين — مركز النخبة للأعمال',
  addressFull: 'مركز النخبة للأعمال، الدور الخامس، مكتب ٦٦، شارع الأربعين، حي الرحاب، جدة',
  social: {
    x: 'https://x.com/almurad_sa',
    linkedin: 'https://www.linkedin.com/company/almurad-sa',
  },
};

function waLink(message) {
  return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(message);
}

/* ── نموذج المشاريع والوحدات ───────────────────────────────
   كل مشروع يحوي وحدات، وكل وحدة لها حالة: متاح / محجوز / مباع.
   بيانات الوحدات تمثيلية للنماذج الحقيقية — تُحدَّث بالأسعار والحالات الفعلية. */
const UNIT_STATUSES = ['متاح', 'محجوز', 'مباع'];
const _statusCycle = ['متاح', 'محجوز', 'متاح', 'مباع', 'متاح', 'محجوز', 'مباع', 'متاح',
  'محجوز', 'متاح', 'مباع', 'محجوز', 'متاح', 'مباع', 'متاح', 'محجوز'];

function makeUnits(models, floors, priceStep) {
  const units = [];
  let i = 0;
  floors.forEach((floor, fi) => {
    models.forEach((m) => {
      units.push({
        code: m.code + (fi + 1),
        model: m.code,
        type: m.type || 'شقة',
        facing: m.facing,
        floor: floor,
        area: m.area,
        rooms: m.rooms,
        baths: m.baths,
        price: m.price + fi * (priceStep === undefined ? 15000 : priceStep),
        status: m.status || _statusCycle[i % _statusCycle.length],
      });
      i++;
    });
  });
  return units;
}

/* ── وحدات كل مشروع (بأعداد فعلية) ─────────────────────── */

// 107 — تاون هاوس: ٨ وحدات على دورين + ملحقان علويان = ١٠ وحدات
const U107 = [
  { code: 'TH1', model: 'A', type: 'تاون هاوس', facing: 'أمامية', floor: 'دورين', area: 269, rooms: 6, baths: 5, price: 1730000, status: 'مباع' },
  { code: 'TH2', model: 'A', type: 'تاون هاوس', facing: 'أمامية', floor: 'دورين', area: 269, rooms: 6, baths: 5, price: 1730000, status: 'محجوز' },
  { code: 'TH3', model: 'A', type: 'تاون هاوس', facing: 'أمامية', floor: 'دورين', area: 269, rooms: 6, baths: 5, price: 1730000, status: 'متاح' },
  { code: 'TH4', model: 'A', type: 'تاون هاوس', facing: 'أمامية', floor: 'دورين', area: 269, rooms: 6, baths: 5, price: 1730000, status: 'متاح' },
  { code: 'TH5', model: 'B', type: 'تاون هاوس', facing: 'خلفية', floor: 'دورين', area: 260, rooms: 5, baths: 5, price: 1700000, status: 'مباع' },
  { code: 'TH6', model: 'B', type: 'تاون هاوس', facing: 'خلفية', floor: 'دورين', area: 260, rooms: 5, baths: 5, price: 1700000, status: 'متاح' },
  { code: 'TH7', model: 'B', type: 'تاون هاوس', facing: 'خلفية', floor: 'دورين', area: 260, rooms: 5, baths: 5, price: 1700000, status: 'محجوز' },
  { code: 'TH8', model: 'B', type: 'تاون هاوس', facing: 'خلفية', floor: 'دورين', area: 260, rooms: 5, baths: 5, price: 1700000, status: 'متاح' },
  { code: 'M1', model: 'M', type: 'ملحق علوي', facing: 'أمامية', floor: 'علوي', area: 269, rooms: 6, baths: 5, price: 1675000, status: 'متاح' },
  { code: 'M2', model: 'M', type: 'ملحق علوي', facing: 'خلفية', floor: 'علوي', area: 269, rooms: 6, baths: 5, price: 1675000, status: 'متاح' },
];
// 107 — جميع الوحدات متاحة (حسب لوحة تحديثات البيع)
U107.forEach((u) => { u.status = 'متاح'; });

// 108 — هومز: ٣ شقق في الدور × ٤ أدوار + ملحق علوي = ١٣ وحدة
const U108 = makeUnits([
  { code: 'A', facing: 'أمامية', area: 106, rooms: 2, baths: 3, price: 580000 },
  { code: 'B', facing: 'أمامية', area: 105, rooms: 2, baths: 3, price: 560000 },
  { code: 'C', facing: 'خلفية', area: 100, rooms: 2, baths: 3, price: 550000 },
], ['الأول', 'الثاني', 'الثالث', 'الرابع'], 0);
U108.push({ code: 'M1', model: 'M', type: 'ملحق دور كامل', facing: 'أمامية', floor: 'علوي', area: 320, rooms: 4, baths: 4, price: 1450000, status: 'متاح' });
// حالات التوفّر من جدول الحجوزات الرسمي (108)
const _s108 = { A1: 'مباع', A2: 'مباع', A3: 'مباع', A4: 'مباع', B1: 'متاح', B2: 'مباع', B3: 'متاح', B4: 'متاح', C1: 'متاح', C2: 'متاح', C3: 'متاح', C4: 'متاح', M1: 'محجوز' };
U108.forEach((u) => { if (_s108[u.code]) u.status = _s108[u.code]; });

// 109 — أفينيو: ٤ شقق في الدور × ٤ أدوار + ملحقان = ١٨ وحدة
const U109 = makeUnits([
  { code: 'A', facing: 'واجهتين', area: 119, rooms: 3, baths: 3, price: 850000 },
  { code: 'B', facing: 'واجهة شرقية', area: 121, rooms: 3, baths: 3, price: 780000 },
  { code: 'C', facing: 'واجهة جنوبية', area: 128, rooms: 3, baths: 3, price: 790000 },
  { code: 'D', facing: 'داخلية', area: 128, rooms: 3, baths: 3, price: 760000 },
], ['الأول', 'الثاني', 'الثالث', 'الرابع'], 0);
U109.push({ code: 'M1', model: 'M', type: 'ملحق علوي', facing: 'واجهتين شرقية وجنوبية', floor: 'علوي', area: 246, rooms: 4, baths: 4, price: 1750000, status: 'متاح' });
U109.push({ code: 'M2', model: 'M', type: 'ملحق علوي', facing: 'واجهة شرقية', floor: 'علوي', area: 246, rooms: 4, baths: 4, price: 1720000, status: 'محجوز' });
// حالات التوفّر من جدول الحجوزات الرسمي (109)
const _s109 = { A1: 'متاح', A2: 'متاح', A3: 'متاح', A4: 'متاح', B1: 'محجوز', B2: 'محجوز', B3: 'محجوز', B4: 'محجوز', C1: 'محجوز', C2: 'مباع', C3: 'مباع', C4: 'مباع', D1: 'محجوز', D2: 'مباع', D3: 'مباع', D4: 'مباع', M1: 'محجوز', M2: 'محجوز' };
U109.forEach((u) => { if (_s109[u.code]) u.status = _s109[u.code]; });

// 106 — تراس فيو: ٨ شقق (230م²) + ملحقان (231م²) = ١٠ وحدات (الحالات من جدول الحجوزات الرسمي)
const _st106 = ['مباع', 'مباع', 'متاح', 'مباع', 'متاح', 'متاح', 'مباع', 'محجوز', 'مباع', 'مباع'];
const _fl106 = ['الأول', 'الأول', 'الثاني', 'الثاني', 'الثالث', 'الثالث', 'الرابع', 'الرابع'];
const U106 = [];
['01', '02', '03', '04', '05', '06', '07', '08'].forEach((n, i) => {
  U106.push({ code: n, model: 'ش', type: 'شقة', facing: '', floor: _fl106[i], area: 230, rooms: 4, baths: 4, price: 1200000, status: _st106[i] });
});
['09', '10'].forEach((n, i) => {
  U106.push({ code: n, model: 'م', type: 'ملحق علوي', facing: '', floor: 'علوي', area: 231, rooms: 4, baths: 4, price: 1450000, status: _st106[8 + i] });
});

const PROJECTS = [
  {
    id: 107, code: '107', name: 'المراد تاون هاوس', district: 'الزهراء',
    status: 'بدأ البيع', completion: 100, floors: 2, annexes: 2, priceFrom: 1675000,
    desc: 'تاون هاوس فاخر مقسم على دورين مع سطح رحب في قلب حي الزهراء بجدة، قرب الواجهة البحرية وكل الخدمات، حيث تلتقي الفخامة بالراحة في تصميم عصري.',
    features: ['ثماني وحدات على دورين', 'ملحقان علويان', 'سطح رحب خاص', 'غرفة عاملة منزلية بحمامها', 'مكيفات دكت مخفية', 'مستودع خاص', 'مصعد بالمشروع', 'دخول ذكي'],
    images: ['assets/projects/th107-exterior.jpg', 'assets/projects/th107-bedroom.jpg', 'assets/projects/th107-plan.jpg', 'assets/projects/th107-lifestyle.jpg'],
    units: U107,
  },
  {
    id: 108, code: '108', name: 'المراد هومز', district: 'النعيم',
    status: 'بدأ البيع', completion: 30, floors: 4, annexes: 1, priceFrom: 550000,
    desc: 'شقق عصرية بنماذج تتراوح بين 100 و106م²، ثلاث شقق في كل دور على أربعة أدوار مع ملحق دور كامل، تصميم ذكي للمساحات ومدخل خاص لكل وحدة، مثالية للسكن أو الاستثمار في حي النعيم.',
    features: ['نماذج 100–106م²', 'ثلاث شقق لكل دور', 'ملحق دور كامل', 'مدخلان لكل وحدة', 'دخول ذكي', 'غاز مركزي', 'كاميرات مراقبة', 'موقف خاص'],
    images: ['assets/projects/homes108-exterior.jpg', 'assets/projects/homes108-majlis.jpg', 'assets/projects/homes108-living.jpg', 'assets/projects/homes108-dining.jpg', 'assets/projects/homes108-plan.jpg', 'assets/projects/homes108-investment.jpg'],
    units: U108,
  },
  {
    id: 106, code: '106', name: 'المراد تراس فيو', district: 'السلامة',
    status: 'بدأ البيع', completion: 100, floors: 4, annexes: 2, priceFrom: 1200000,
    desc: 'المراد تراس فيو في حي السلامة بجدة؛ حيث تلتقي الراحة بالفخامة. شقق فاخرة بمساحة 230م² بأربع غرف (غرفتا نوم ماستر) وأربع دورات مياه وغرفة خادمة وتراس خاص، مع ملاحق علوية بسطح خاص، وشقتان في كل دور.',
    features: ['شقق 230م² · 4 غرف', 'غرفتا نوم ماستر', 'تراس خاص لكل وحدة', 'مدخلان لكل وحدة', 'مكيفات دكت مخفية', 'غرفة خادمة', 'مصعد', 'دخول ذكي', 'غاز مركزي', 'كاميرات مراقبة'],
    images: ['assets/projects/tras106-exterior.jpg', 'assets/projects/tras106-living1.jpg', 'assets/projects/tras106-living2.jpg', 'assets/projects/tras106-bedroom.jpg', 'assets/projects/tras106-living3.jpg', 'assets/projects/tras106-plan.jpg'],
    units: U106,
  },
  {
    id: 109, code: '109', name: 'المراد أفينيو', district: 'الزهراء',
    status: 'قيد الإنشاء', completion: 70, floors: 4, annexes: 2, priceFrom: 760000,
    desc: 'موطن يليق بك في حيٍّ ينبض بالحياة؛ تصاميم عصرية ومساحات مريحة لعائلتك في قلب حي الزهراء، حيث تعكس كل زاوية جمال التفاصيل. أربعة نماذج (119–128م²) وملحقان، بعوائد استثمارية مجزية. نسبة الإنجاز 70% والتسليم قريباً بإذن الله.',
    features: ['كاميرات مراقبة', 'مدخلان لكل شقة', 'مكنسة كهربائية مركزية', 'مصعدان', 'خزانات علوية وسفلية خاصة', 'موقف خاص', 'دخول ذكي', 'غاز مركزي'],
    images: [
      'assets/projects/av109-exterior.jpg',
      'assets/projects/av109-living1.jpg',
      'assets/projects/av109-living3.jpg',
      'assets/projects/av109-dining1.jpg',
      'assets/projects/av109-bedroom.jpg',
      'assets/projects/av109-living2.jpg',
      'assets/projects/av109-living4.jpg',
      'assets/projects/av109-dining2.jpg',
      'assets/projects/av109-family.jpg',
      'assets/projects/av109-plan1.jpg',
      'assets/projects/av109-plan2.jpg',
    ],
    units: U109,
  },
  { id: 110, code: '110', name: 'المراد 110', district: 'الفيصلية', status: 'قيد الإنشاء', completion: 15, floors: 4, annexes: 0, priceFrom: 0, desc: 'مشروعنا الجديد في حي الفيصلية بجدة، تحت الإنشاء حالياً. تفاصيل الوحدات والأسعار قريباً بإذن الله.', features: [], images: [], units: [] },
  { id: 105, code: '105', name: 'المراد 105', district: 'الفيصلية', status: 'مكتمل', completion: 100, floors: 4, annexes: 1, priceFrom: 0, desc: 'مشروع سكني مكتمل في حي الفيصلية بجدة، سُلّم بالكامل لأهله.', features: [], images: [], units: [] },
  { id: 104, code: '104', name: 'المراد 104', district: 'النزهة', status: 'مكتمل', completion: 100, floors: 4, annexes: 1, priceFrom: 0, desc: 'مشروع سكني مكتمل في حي النزهة بجدة.', features: [], images: [], units: [] },
  { id: 102, code: '102–103', name: 'المراد 102–103', district: 'الواحة', status: 'مكتمل', completion: 100, floors: 4, annexes: 2, priceFrom: 0, desc: 'مشروعان سكنيان مكتملان في حي الواحة بجدة.', features: [], images: [], units: [] },
  { id: 101, code: '101', name: 'المراد 101', district: 'التيسير', status: 'مكتمل', completion: 100, floors: 4, annexes: 1, priceFrom: 0, desc: 'مشروع سكني مكتمل في حي التيسير بجدة.', features: [], images: [], units: [] },
];

function projectById(id) { return PROJECTS.find((p) => String(p.id) === String(id)); }
function unitStats(p) {
  const total = p.units.length;
  const available = p.units.filter((u) => u.status === 'متاح').length;
  return { total, available };
}

const PROPERTIES = [
  {
    id: 1,
    name: 'المراد 101',
    type: 'فيلا',
    district: 'التيسير',
    price: 3150000,
    area: 420,
    rooms: 6,
    baths: 7,
    desc: 'فيلا عصرية في حي التيسير بجدة، دورين وملحق بواجهة حجرية وتشطيب فاخر، مع مصعد داخلي وحوش خارجي مهيأ للجلسات العائلية.',
    features: ['مصعد داخلي', 'مدخل سيارتين', 'غرفة خادمة', 'مطبخ مجهز', 'تكييف مركزي', 'ضمانات إنشائية 10 سنوات'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 2,
    name: 'المراد 102',
    type: 'شقة',
    district: 'الواحة',
    price: 1150000,
    area: 168,
    rooms: 3,
    baths: 4,
    desc: 'شقة فاخرة بمدخل خاص في حي الواحة بجدة، تصميم عصري بإضاءة مخفية وأسقف مرتفعة، قريبة من الخدمات والطرق الرئيسية.',
    features: ['مدخل خاص', 'موقف مظلل', 'مطبخ مجهز', 'شرفة خارجية', 'عداد مستقل', 'نظام منزل ذكي'],
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 3,
    name: 'المراد 103',
    type: 'فيلا',
    district: 'الواحة',
    price: 4300000,
    area: 465,
    rooms: 7,
    baths: 8,
    desc: 'فيلا بواجهتين في حي الواحة بجدة، مساحات داخلية واسعة وارتدادات مدروسة، مع مجلس خارجي ومسبح خاص قابل للتغطية.',
    features: ['مسبح خاص', 'مجلس خارجي', 'مصعد داخلي', 'غرفة سائق', 'تشطيب سوبر لوكس', 'حديقة داخلية'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 4,
    name: 'المراد 104',
    type: 'أرض',
    district: 'النزهة',
    price: 1900000,
    area: 900,
    rooms: 0,
    baths: 0,
    desc: 'أرض سكنية زاوية في حي النزهة بجدة على شارعين، موقع مرتفع ومستوٍ، مناسبة لبناء فيلا عائلية أو مشروع دوبلكسات.',
    features: ['زاوية على شارعين', 'شارع 20 شرقي', 'موقع مستوٍ', 'قريبة من المدارس', 'صك إلكتروني', 'جاهزة للبناء'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 5,
    name: 'المراد 105',
    type: 'شقة',
    district: 'الفيصلية',
    price: 890000,
    area: 142,
    rooms: 2,
    baths: 3,
    desc: 'شقة أنيقة في حي الفيصلية بجدة بتوزيع ذكي للمساحات وإطلالة مفتوحة ودخول ذكي، خيار مثالي للسكن الأول أو الاستثمار.',
    features: ['دخول ذكي', 'موقف خاص', 'مصعد', 'مستودع خارجي', 'عزل حراري', 'قريبة من الواجهات التجارية'],
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 6,
    name: 'المراد 106',
    type: 'فيلا',
    district: 'السلامة',
    price: 2750000,
    area: 380,
    rooms: 5,
    baths: 6,
    desc: 'مشروع فلل متلاصقة بتصميم موحّد في حي السلامة بجدة، هوية معمارية حديثة بواجهات مضاءة، وضمانات شاملة على الهيكل والتشطيب.',
    features: ['واجهة حجر وخشب', 'نظام منزل ذكي', 'مطبخ مجهز', 'مصعد جاهز التمديد', 'ضمانات شاملة', 'مواقف مظللة'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 7,
    name: 'المراد تاون هاوس 107',
    type: 'فيلا',
    district: 'الزهراء',
    price: 2100000,
    area: 268,
    rooms: 6,
    baths: 5,
    desc: 'تاون هاوس فاخر مقسم على دورين مع سطح رحب في قلب حي الزهراء بجدة، بمساحات تصل إلى 274م² وست غرف، حيث يلتقي التصميم العصري بالخصوصية والراحة قرب الواجهة البحرية وكل الخدمات.',
    features: ['مقسمة على دورين', 'سطح رحب خاص', 'غرفة عاملة منزلية بحمامها', 'مكيفات دكت مخفية', 'مستودع خاص', 'مصعد بالمشروع', 'دخول ذكي', 'قرب من جميع الخدمات'],
    images: [
      'assets/projects/th107-exterior.jpg',
      'assets/projects/th107-bedroom.jpg',
      'assets/projects/th107-plan.jpg',
      'assets/projects/th107-lifestyle.jpg',
    ],
  },
  {
    id: 8,
    name: 'المراد هومز 108',
    type: 'شقة',
    district: 'النعيم',
    price: 1150000,
    area: 112,
    rooms: 2,
    baths: 3,
    desc: 'شقق عصرية في مشروع المراد هومز بحي النعيم بجدة، بنماذج تتراوح بين 105 و112م²، تصميم ذكي للمساحات ومدخل خاص لكل وحدة، مثالية للسكن أو الاستثمار بعوائد مجزية.',
    features: ['نماذج 105–112م²', 'مدخلان لكل وحدة', 'دخول ذكي', 'غاز مركزي', 'كاميرات مراقبة', 'موقف خاص', 'قرب من جميع الخدمات', 'عوائد استثمارية مجزية'],
    images: [
      'assets/projects/homes108-living.jpg',
      'assets/projects/homes108-plan.jpg',
      'assets/projects/homes108-investment.jpg',
    ],
  },
];
