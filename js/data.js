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
