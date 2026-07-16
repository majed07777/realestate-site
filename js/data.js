/* بيانات الموقع — المراد العقارية
   ─────────────────────────────────
   لتحديث رقم الواتساب: غيّر القيمتين أدناه (الرقم بالصيغة الدولية بدون +) */

const SITE = {
  whatsapp: '966500000000',            // ← ضع الرقم هنا (مثال: 9665XXXXXXXX)
  whatsappDisplay: '+966 50 000 0000', // ← وصيغة العرض هنا
  phone: '+966112000000',
  phoneDisplay: '011 200 0000',
  email: 'info@almurad.sa',
  address: 'الرياض، طريق الملك فهد، مبنى المراد',
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
    district: 'النرجس',
    price: 3150000,
    area: 420,
    rooms: 6,
    baths: 7,
    desc: 'فيلا مودرن دورين وملحق في حي النرجس شمال الرياض، بتشطيب فاخر وواجهة حجرية، مع مصعد داخلي وحوش خارجي مهيأ للجلسات.',
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
    district: 'الملقا',
    price: 1150000,
    area: 168,
    rooms: 3,
    baths: 4,
    desc: 'شقة فاخرة بمدخل خاص في حي الملقا، تصميم عصري بإضاءة مخفية وأسقف مرتفعة، قريبة من الخدمات وطريق الملك فهد.',
    features: ['مدخل خاص', 'موقف مظلل', 'مطبخ مجهز', 'شرفة خارجية', 'عداد مستقل', 'سمارت هوم'],
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
    district: 'حطين',
    price: 3850000,
    area: 465,
    rooms: 7,
    baths: 8,
    desc: 'فيلا بواجهتين في حي حطين، مساحات داخلية واسعة وارتدادات مدروسة، مع مجلس خارجي ومسبح خاص قابل للتغطية.',
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
    district: 'القيروان',
    price: 1900000,
    area: 900,
    rooms: 0,
    baths: 0,
    desc: 'أرض سكنية زاوية في حي القيروان على شارعين، موقع مرتفع ومستوٍ، مناسبة لبناء فيلا عائلية أو مشروع دوبلكسات.',
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
    district: 'الياسمين',
    price: 890000,
    area: 142,
    rooms: 2,
    baths: 3,
    desc: 'شقة أنيقة في حي الياسمين بتوزيع ذكي للمساحات، إطلالة مفتوحة ودخول ذكي، خيار مثالي للسكن الأول أو الاستثمار.',
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
    district: 'الملقا',
    price: 2750000,
    area: 380,
    rooms: 5,
    baths: 6,
    desc: 'مشروع فلل متلاصقة بتصميم موحّد في حي الملقا، هوية معمارية حديثة بواجهات مضاءة، وضمانات شاملة على الهيكل والتشطيب.',
    features: ['واجهة حجر وخشب', 'سمارت هوم', 'مطبخ مجهز', 'مصعد جاهز التمديد', 'ضمانات شاملة', 'مواقف مظللة'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 7,
    name: 'المراد 107',
    type: 'تجاري',
    district: 'العارض',
    price: 5400000,
    area: 1200,
    rooms: 0,
    baths: 4,
    desc: 'معرض تجاري على طريق رئيسي في حي العارض، واجهة زجاجية بطول 40 متراً ومواقف أمامية واسعة، عائد استثماري مجزٍ.',
    features: ['واجهة 40 متراً', 'مواقف أمامية', 'ارتفاع 8 أمتار', 'ميزانين جاهز', 'عقود إيجار قائمة', 'موقع على طريق رئيسي'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 8,
    name: 'المراد 108',
    type: 'شقة',
    district: 'حطين',
    price: 1480000,
    area: 210,
    rooms: 4,
    baths: 5,
    desc: 'شقة دورين (دوبلكس) بسطح خاص في حي حطين، إطلالة على الوادي وتشطيبات بمواصفات الفلل، ضمن مشروع سكني متكامل الخدمات.',
    features: ['سطح خاص', 'إطلالة على الوادي', 'مدخلان', 'نظام صوتي مدمج', 'أمن على مدار الساعة', 'نادي رياضي مشترك'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
    ],
  },
];
