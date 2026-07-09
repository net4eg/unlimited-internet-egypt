/* ===== متغيرات عامة ===== */
let isArabic = true;
let isDarkMode = false;

// In-memory settings storage
window.campaignSettings = {
    language: 'ar',
    darkMode: false
};

/* ===== دالة فتح وإغلاق الخطوات ===== */
function toggleSteps(button) {
    const stepsList = button.nextElementSibling;

    if (!stepsList || !stepsList.classList.contains('steps-list')) {
        console.error('لم يتم العثور على قائمة الخطوات');
        return;
    }

    const isActive = stepsList.classList.contains('active');

    // تبديل حالة القائمة
    stepsList.classList.toggle('active');

    // تحديث نص الزر والأيقونة
    if (isActive) {
        button.classList.remove('active');
        const lang = isArabic ? 'ar' : 'en';
        button.innerHTML = lang === 'ar'
            ? '<i class="fas fa-chevron-down"></i> اعرض الخطوات'
            : '<i class="fas fa-chevron-down"></i> Show Steps';
    } else {
        button.classList.add('active');
        const lang = isArabic ? 'ar' : 'en';
        button.innerHTML = lang === 'ar'
            ? '<i class="fas fa-chevron-up"></i> إخفاء الخطوات'
            : '<i class="fas fa-chevron-up"></i> Hide Steps';
    }
}

/* ===== نظام الترجمة الكامل ===== */
const translations = {
    ar: {
        welcomeTitle: 'مرحباً بك',
        welcomeSubtitle: 'معًا نحو إنترنت أفضل',
        bannerText: 'الموقع الرسمي لحملة الانترنت الغير محدود في مصر',
        siteTitle: 'الانترنت في مصر',
        logoText: 'إنترنت غير محدود',

        navOperators: 'الشركات',
        navPhases: 'المراحل',
        navdownloads: 'التحميلات',
        navMission: 'المهمة الحالية',
        navWhy: 'ليه مهم',
        navHow: 'كيف تشارك',
        navJoin: 'انضم',
        navFaq: 'الأسئلة الشائعة',
        navStory: 'قصتنا',
        navUpdates: 'التحديثات',
        navHome: 'الرئيسية',

        /* Hero */
        heroTitle: "الإنترنت في مصر بقى محدود...\nوإحنا بنحاول نغيّر ده.",
        heroEyebrow: '#انترنت_غير_محدود_في_مصر',
        heroSubtitle: 'انضم لحملة مجتمعية تطوعية بتطالب بإنترنت عادل وغير محدود لكل المصريين.',
        btnJoinCampaign: 'انضم للحملة',
        btnLearnStory: 'اعرف القصة',
        btnJoinGroup: 'انضم للجروب',
        btnSignPetition: 'وقّع العريضة',
        counter: 'عدد الموقّعين',
        btnShare: 'شارك الحملة',
        heroNote: 'تم إنشاء هذا الموقع كدعم شخصي، وبشكل غير ربحي نهائي',

        /* Story */
        storyTitle: 'قصة الحملة',
        storySubtitle: 'من فكرة بسيطة لصوت وصل لقبة البرلمان',
        story1Title: 'البداية',
        story1Desc: 'انطلق هذا الموقع كمبادرة تطوعية غير ربحية لتنظيم الجهود وجمع تواقيع المصريين المطالبين بإنترنت عادل.',
        story2Title: 'البرلمان يتحرك',
        story2Desc: 'لجنة الاتصالات بمجلس النواب تعلن دراسة خفض الأسعار ومناقشة التحول لنظام إنترنت بلا حدود.',
        story3Title: 'رد رسمي متحفظ',
        story3Desc: 'مسؤول بوزارة الاتصالات يصرّح بأن فكرة الإنترنت غير المحدود مش مطروحة حالياً، ما يؤكد أهمية استمرار الضغط الشعبي.',
        story4Title: 'الهاشتاج يتصدر',
        story4Desc: 'هاشتاج #انترنت_غير_محدود_في_مصر يشهد تفاعلاً واسعاً من آلاف المستخدمين عبر مواقع التواصل.',
        story5Title: 'كشف الحقيقة التقنية',
        story5Desc: 'فيديوهات وتحقيقات تقنية بتكشف عدم وجود تكلفة إضافية حقيقية، وبتقارن مصر بدول بتوفر إنترنت أرخص وأوسع.',
        story6Title: 'اليوم',
        story6Desc: 'الحملة مستمرة، ولسه محتاجين صوتك عشان الضغط يفضل مستمر.',

        /* Why This Matters */
        whyTitle: 'لماذا نطالب بإنترنت غير محدود؟',
        whySubtitle: 'كل جانب من حياتنا الرقمية بيعتمد على اتصال قوي',
        whyEduTitle: 'التعليم',
        whyEduDesc: 'ملايين الطلاب بيعتمدوا على الإنترنت في المحاضرات، الأبحاث، والامتحانات الأونلاين.',
        whyWorkTitle: 'العمل عن بعد',
        whyWorkDesc: 'الاجتماعات، رفع الملفات، والتواصل مع فرق العمل كلها محتاجة اتصال مستقر وسريع.',
        whyCodeTitle: 'البرمجة',
        whyCodeDesc: 'تحميل المكتبات، رفع المشاريع، والتعلم من مصادر أونلاين بيستهلك بيانات ضخمة يومياً.',
        whyContentTitle: 'صناعة المحتوى',
        whyContentDesc: 'رفع الفيديوهات والصور بجودة عالية بقى جزء أساسي من شغل آلاف المصريين.',
        whyGamingTitle: 'الألعاب',
        whyGamingDesc: 'الألعاب الأونلاين والبث المباشر بيحتاجوا سرعة وسعة بيانات من غير قلق من نفاذ الباقة.',
        whyBizTitle: 'المشاريع الصغيرة',
        whyBizDesc: 'أصحاب المشاريع الصغيرة بيديروا مبيعاتهم وتسويقهم بالكامل عبر الإنترنت.',
        whyEconTitle: 'الاقتصاد الرقمي',
        whyEconDesc: 'مستقبل الاقتصاد المصري مرتبط باتصال قوي يقدر المصريين ينافسوا بيه عالمياً.',

        operatorsTitle: 'شركات الاتصالات في مصر',
        ntraName: 'الجهاز القومي',
        ntraDesc: 'الجهاز القومي لتنظيم الاتصالات',
        ntraBadge: 'الجهة التنظيمية',
        eandName: 'إي أند',
        eandDesc: 'شركة اتصالات مصر',
        weName: 'وي',
        weDesc: 'المصرية للاتصالات',
        vodafoneName: 'فودافون',
        vodafoneDesc: 'فودافون مصر',
        orangeName: 'اورنج',
        orangeDesc: 'أورانج مصر',

        updatesPromptTitle: 'تابع تحركاتنا أولاً بأول',
        updatesPromptDesc: 'آخر الأخبار: تحرك برلماني جديد بخصوص سياسة الاستخدام العادل',
        viewUpdatesBtn: 'مشاهدة التحديثات والأخبار',

        phasesTitle: 'مراحل المشاركة في الحملة',
        phasesSubtitle: 'اتبع الخطوات التالية لإيصال صوتك 👇',
        showSteps: 'اعرض الخطوات',
        hideSteps: 'إخفاء الخطوات',
        phase1Title: 'إيصال صوتنا',
        phase1Desc: 'التعبير عن الاستياء بشكل منظم ورسمي',
        phase2Title: 'شكوى هيئة الرقابة الإدارية',
        phase2Desc: 'تقديم شكوى رسمية',
        phase3Title: 'شكاوى NTRA',
        phase3Desc: 'التواصل المباشر مع الجهاز القومي',
        phase4Title: 'شكاوى الشركات',
        phase4Desc: 'التواصل مع شركات الاتصالات الأربع',
        phase5Title: 'منظومة الشكاوى الحكومية',
        phase5Desc: 'القناة الرسمية النهائية للشكاوى',

        missionTitle: 'المهمة الحالية',
        missionTwitter: 'انشر الهاشتاج على X',
        missionActive: 'نشطة',
        btnTwitter: 'شارك على X',
        btnCopy: 'انسخ الهاشتاج',

        howTitle: 'كيف تشارك الآن؟',
        step1Title: 'انضم للجروب',
        step1Desc: 'انضم إلى مجتمعنا على فيسبوك',
        btnJoinNow: 'انضم الآن',
        step2Title: 'شارك العريضة',
        step2Desc: 'انشر الرابط مع أصدقائك',
        btnCopyLink: 'نسخ الرابط',
        step3Title: 'ادع أصدقاءك',
        step3Desc: 'شارك الحملة على وسائل التواصل',
        step4Title: 'اطبع ملصق QR',
        step4Desc: 'حمّل بوستر الحملة واطبعه أو علّقه في أماكن التجمعات',
        btnDownloadPoster: 'حمّل البوستر',
        step5Title: 'تابع التحديثات',
        step5Desc: 'ابقى على اطلاع بآخر أخبار وتطورات الحملة أولاً بأول',

        /* Join */
        joinTitle: 'انضم إلينا دلوقتي',
        joinSubtitle: 'اختار الطريقة الأنسب ليك وشارك بصوتك',
        joinCardFacebookDesc: 'كن جزء من مجتمعنا وتابع كل التحديثات أول بأول',
        joinCardPetitionDesc: 'وقّع العريضة الرسمية وخلي صوتك محسوب',
        joinCardTelegramDesc: 'تواصل معنا مباشرة على تليجرام',
        joinCardWhatsappDesc: 'شارك الحملة مع صحابك بضغطة واحدة',
        joinCardTwitterDesc: 'انشر الهاشتاج وخلي صوتك يوصل لأكبر عدد',
        joinCardAppDesc: 'حمّل تطبيق الحملة على أندرويد',
        joinBtnTelegram: 'تابعنا',
        joinBtnWhatsapp: 'شارك الآن',
        joinBtnTwitter: 'انشر الهاشتاج',
        joinBtnApp: 'حمّل التطبيق',

        /* FAQ */
        faqTitle: 'أسئلة شائعة',
        faqSubtitle: 'أسئلة بتتكرر كتير معانا',
        faqQ1: 'هل الحملة سياسية؟',
        faqA1: 'لا. الحملة مدنية بحتة بتطالب بحق أساسي في خدمة إنترنت عادلة، مالهاش أي انتماء سياسي أو حزبي.',
        faqQ2: 'هل الحملة ضد شركة اتصالات معينة؟',
        faqA2: 'لا. الحملة بتدعم تحسين جودة خدمات الإنترنت والمطالبة بسياسات أفضل للجميع، مش موجهة ضد أي شركة بعينها.',
        faqQ3: 'هل ينفع أساعد من غير ما أشارك في أي مقاطعة مستقبلية؟',
        faqA3: 'أكيد. تقدر تساعد بمشاركة الحملة، طباعة ملصقات QR، ودعوة أصدقائك للانضمام والتوقيع.',
        faqQ4: 'هل بياناتي آمنة لو وقعت العريضة؟',
        faqA4: 'نعم، التوقيعات بتتجمع عبر Google Forms ومبنبيعش أو نشارك بياناتك مع أي طرف تالت. تقدر تقرأ سياسة الخصوصية لمزيد من التفاصيل.',

        /* Share */
        shareTitle: 'ساعدنا ننشر الصوت',
        shareSubtitle: 'كل مشاركة بتقرب الهدف خطوة',

        /* Roadmap */
        roadmapTitle: 'بعد ما تنضم، هيحصل ايه؟',
        roadmapSubtitle: 'رحلتك معانا في خمس خطوات',
        roadmap1: 'تنضم',
        roadmap2: 'تتابع الأخبار',
        roadmap3: 'تشارك المحتوى',
        roadmap4: 'تدعو أصدقاءك',
        roadmap5: 'تشارك في الفعاليات',

        footerFacebook: 'فيسبوك',
        footerTelegram: 'تليجرام',
        footerWhatsapp: 'واتساب',
        footerPrivacy: 'سياسة الخصوصية',
        footerSlogan: 'معًا لإنترنت عادل وغير محدود لكل المصريين',
        footerCopyright: '© 2025 حملة الإنترنت غير المحدود - جميع الحقوق محفوظة',

        languageChanged: 'تم تغيير اللغة',
        darkModeEnabled: 'تم تفعيل الوضع الداكن',
        lightModeEnabled: 'تم تفعيل الوضع الفاتح',
        copied: '✅ تم النسخ!',
        copyFailed: '❌ فشل النسخ',
        openingPetition: 'جاري فتح العريضة...',

        /* Updates page */
        updatesPageTitle: 'تحديثات الحملة | Unlimited Internet Egypt',
        updatesHeaderTitle: 'آخر التحديثات',
        updatesSubtitle: 'تابع مسار الحملة وتطورات المطالب الشعبية',
        update1Title: 'إطلاق الموقع الرسمي',
        update1Desc: 'تم إطلاق هذا القسم لإبقاء الجميع على اطلاع بآخر أخبار الحملة والنتائج التي نحققها.',
        update2Title: 'تحسين تجربة المستخدم',
        update2Desc: 'تحديث كود الموقع لزيادة السرعة ودعم المتصفحات القديمة لضمان وصول رسالتنا للجميع.',
        update3Title: 'خفض الأسعار.. لجنة الاتصالات تعلن مفاجأة سارة بشأن باقات الإنترنت',
        update3Desc: 'في تحرك برلماني جديد، أعلنت لجنة الاتصالات بمجلس النواب عن العمل على مراجعة أسعار الخدمات وجودتها، مع المطالبة بخفض أسعار باقات الإنترنت بما يتناسب مع احتياجات المواطنين.',
        update4Title: 'مسؤول بوزارة الاتصالات: خدمات الإنترنت "بلا حدود" غير مطروحة حالياً',
        update4Desc: 'في تصريح لجريدة المال، أفاد المهندس أيمن السعدني أن فكرة الإنترنت غير المحدود ليست محل نقاش في الوقت الحالي، مما يستدعي مواصلة جهودنا.',
        parliamentTitle: '«اتصالات البرلمان»: سندرس إلغاء الباقات والتحول إلى «إنترنت بلا حدود»',
        parliamentDesc: 'تصريحات هامة من لجنة الاتصالات بمجلس النواب حول دراسة مطالب المواطنين بالتحول لنظام غير محدود.',
        update6Title: 'تفاعل واسع.. هاشتاج #انترنت_غير_محدود_في_مصر يتصدر المنصات',
        update6Desc: 'رصدت المواقع الإخبارية تفاعلاً ضخماً مع هاشتاج الحملة. صوتك هو قوتنا؛ ادخل الآن وشارك في الهاشتاج لضمان استمرار تصدر القضية للرأي العام.',
        voteNowBtn: 'شارك وصوّت في الهاشتاج الآن',
        update7Title: 'بالدليل القاطع: حقيقة الإنترنت المحدود والفرق بين مصر ودول العالم',
        update7Desc: 'فيديو جديد يوضح تقنياً عدم وجود تكلفة إضافية لاستهلاك البيانات، ويقارن وضع الإنترنت في مصر بدول مثل الأردن وباكستان التي توفر سعات ضخمة بأسعار أقل.',
        update8Title: 'مصر فيها نت غير محدود.. وبالدليل! (كشف المستور)',
        update8Desc: 'محمود أبو خطيب يكشف بالدليل التقني كيف تفتح الشركات السرعة لمواقع معينة، ويقدم "مبادرة حل وسط" تطالب بحد أدنى 1 تيرا للباقات المنزلية وسرعة 5 ميجا بعد انتهاء الباقة لضمان كرامة المستخدم.',
        watchFullVideo: 'شاهد الفديو كاملاً',
        responseTitle: 'بين "نوع الفيديوهات" وسعة الباقة: أين الحقيقة؟',
        responseDesc1: 'رداً على تصريحات رئيس لجنة الاتصالات؛ محاولة ربط نفاذ الباقة بـ "فيديوهات معينة" هو هروب من صلب الأزمة. الإنترنت حق للمستخدم، وليس من حق أحد التلميح لما يشاهده الناس لتبرير ضعف السعة.',
        responseQuote: 'المواطن يدفع مقابل الخدمة ليستخدمها فيما يراه مناسباً، ووظيفة المنظومة توفير "مواسير" تستوعب استهلاك العصر، وليست لوم المستخدم أو مراقبة شاشته لتبرير فقر الباقات.',
        responseDesc2: 'العالم يتحرك بجودة 4K والتعليم والعمل يعتمدان كلياً على الفيديو؛ محاولة حصر المشكلة في "سلوكيات" هو تجاهل لحقيقة أن الباقات في مصر لم تعد تواكب الواقع الرقمي.',
        update10Title: 'كشف "السبوبة": الرد على كذبة المستحيل تقنياً وإهانة المواطن أخلاقياً',
        update10Desc1: 'بعد انفجار عمرو أديب متسائلاً "اشمعنى إحنا؟"، نكشف حقيقة "المحبس الإلكتروني" الذي تفرضه الشركات لزيادة أرباح الباقات الإضافية، والرد الصادم على ادعاءات المسؤولين.',
        update10Quote: 'تغيير رقم واحد في كود برمجة سيرفرات الشركات هو كل ما يفصلنا عن حياه كريمة رقمية.. العائق قرار إداري وليس فنياً.',
        update10Desc2: 'بينما تدعي الشركات أن المواطن لن يتحمل التكلفة، نثبت أن ما يدفعه المصريون حالياً يتجاوز ثمن الإنترنت غير المحدود في دول الجوار.',
        watchResponse: 'شاهد الرد المفحم كاملاً',
        hackedTitle: 'تحذير: اختراق الصفحة الرئيسيه لحمله الانترنت الغير محدود في مصر ',
        hackedDesc1: 'نحيطكم علماً بأن الصفحة الرسمية السابقة للحملة على فيسبوك قد تعرضت للاختراق. نرجو من الجميع إلغاء المتابعة منها وعدم التعامل مع أي محتوى ينشر عليها حالياً.',
        hackedDesc2: 'لقد قمنا بإنشاء صفحة جديدة رسمية وبديلة، وتم تحديث جميع الروابط داخل الموقع لضمان وصولكم للمصدر الصحيح.',
        newFBLink: 'انتقل للصفحة الرسمية الجديدة الآن'
    },
    en: {
        welcomeTitle: 'Welcome',
        welcomeSubtitle: 'Together towards better internet',
        bannerText: 'Official Website for Unlimited Internet Campaign in Egypt',
        siteTitle: 'Internet in Egypt',
        logoText: 'Unlimited Internet',

        navOperators: 'Operators',
        navPhases: 'Phases',
        navdownloads: 'Downloads',
        navMission: 'Current Mission',
        navWhy: 'Why It Matters',
        navHow: 'How to Participate',
        navJoin: 'Join',
        navFaq: 'FAQ',
        navStory: 'Our Story',
        navUpdates: 'Updates',
        navHome: 'Home',

        /* Hero */
        heroTitle: "Internet in Egypt has become limited...\nAnd we're trying to change that.",
        heroEyebrow: '#UnlimitedInternetEgypt',
        heroSubtitle: 'Join a volunteer community campaign demanding fair, unlimited internet for every Egyptian.',
        btnJoinCampaign: 'Join the Campaign',
        btnLearnStory: 'Learn the Story',
        btnJoinGroup: 'Join the Group',
        btnSignPetition: 'Sign the Petition',
        counter: 'Number of Signatories',
        btnShare: 'Share Campaign',
        heroNote: 'This website was created as personal support, completely non-profit',

        /* Story */
        storyTitle: "The Campaign's Story",
        storySubtitle: 'From a simple idea to a voice reaching parliament',
        story1Title: 'The Beginning',
        story1Desc: 'This website launched as a volunteer, non-profit initiative to organize efforts and collect signatures from Egyptians demanding fair internet.',
        story2Title: 'Parliament Responds',
        story2Desc: "Parliament's Communications Committee announces it will study price cuts and discuss shifting to an unlimited internet system.",
        story3Title: 'An Official Pushback',
        story3Desc: "A telecom ministry official states unlimited internet isn't currently on the table, confirming why public pressure still matters.",
        story4Title: 'The Hashtag Goes Viral',
        story4Desc: '#UnlimitedInternetEgypt sees massive engagement from thousands of users across social media.',
        story5Title: 'The Technical Truth Comes Out',
        story5Desc: "Technical investigations reveal there's no real added cost, comparing Egypt to countries offering cheaper, more generous internet.",
        story6Title: 'Today',
        story6Desc: 'The campaign continues, and we still need your voice to keep the pressure on.',

        /* Why This Matters */
        whyTitle: 'Why Do We Demand Unlimited Internet?',
        whySubtitle: 'Every part of our digital lives depends on a strong connection',
        whyEduTitle: 'Education',
        whyEduDesc: 'Millions of students rely on the internet for lectures, research, and online exams.',
        whyWorkTitle: 'Remote Work',
        whyWorkDesc: 'Meetings, file uploads, and team communication all need a stable, fast connection.',
        whyCodeTitle: 'Programming',
        whyCodeDesc: 'Downloading packages, pushing projects, and learning online consume huge amounts of data daily.',
        whyContentTitle: 'Content Creation',
        whyContentDesc: 'Uploading high-quality video and images is now core to how thousands of Egyptians work.',
        whyGamingTitle: 'Gaming',
        whyGamingDesc: 'Online gaming and live streaming need speed and data without worrying about running out.',
        whyBizTitle: 'Small Businesses',
        whyBizDesc: 'Small business owners run their sales and marketing entirely online.',
        whyEconTitle: 'Digital Economy',
        whyEconDesc: "Egypt's digital economy depends on a strong connection that lets Egyptians compete globally.",

        operatorsTitle: 'Telecom Operators in Egypt',
        ntraName: 'NTRA',
        ntraDesc: 'National Telecom Regulatory Authority',
        ntraBadge: 'Regulatory Authority',
        eandName: 'e&',
        eandDesc: 'Etisalat Egypt',
        weName: 'WE',
        weDesc: 'Telecom Egypt',
        vodafoneName: 'Vodafone',
        vodafoneDesc: 'Vodafone Egypt',
        orangeName: 'Orange',
        orangeDesc: 'Orange Egypt',

        updatesPromptTitle: 'Follow Our Progress First-Hand',
        updatesPromptDesc: 'Latest news: new parliamentary movement regarding the fair-use policy',
        viewUpdatesBtn: 'View Updates & News',

        phasesTitle: 'Campaign Participation Phases',
        phasesSubtitle: 'Follow the steps below to deliver your voice 👇',
        showSteps: 'Show Steps',
        hideSteps: 'Hide Steps',
        phase1Title: 'Delivering Our Voice',
        phase1Desc: 'Express dissatisfaction in an organized and official manner',
        phase2Title: 'Administrative Control Complaint',
        phase2Desc: 'Submit official complaint',
        phase3Title: 'NTRA Complaints',
        phase3Desc: 'Direct contact with the National Authority',
        phase4Title: 'Operator Complaints',
        phase4Desc: 'Contact the four telecom operators',
        phase5Title: 'Government Complaints System',
        phase5Desc: 'The official final channel for complaints',

        missionTitle: 'Current Mission',
        missionTwitter: 'Spread the Hashtag on X',
        missionActive: 'Active',
        btnTwitter: 'Share on X',
        btnCopy: 'Copy Hashtag',

        howTitle: 'How to Participate Now?',
        step1Title: 'Join the Group',
        step1Desc: 'Join our community on Facebook',
        btnJoinNow: 'Join Now',
        step2Title: 'Share the Petition',
        step2Desc: 'Spread the link with your friends',
        btnCopyLink: 'Copy Link',
        step3Title: 'Invite Your Friends',
        step3Desc: 'Share the campaign on social media',
        step4Title: 'Print a QR Poster',
        step4Desc: 'Download the campaign poster and print or post it in public places',
        btnDownloadPoster: 'Download Poster',
        step5Title: 'Follow Updates',
        step5Desc: 'Stay informed on the latest campaign news and developments',

        /* Join */
        joinTitle: 'Join Us Now',
        joinSubtitle: 'Pick whatever works for you and add your voice',
        joinCardFacebookDesc: 'Be part of our community and get every update first',
        joinCardPetitionDesc: 'Sign the official petition and make your voice count',
        joinCardTelegramDesc: 'Reach us directly on Telegram',
        joinCardWhatsappDesc: 'Share the campaign with your friends in one tap',
        joinCardTwitterDesc: 'Post the hashtag and get your voice to more people',
        joinCardAppDesc: 'Download the campaign app for Android',
        joinBtnTelegram: 'Follow Us',
        joinBtnWhatsapp: 'Share Now',
        joinBtnTwitter: 'Post the Hashtag',
        joinBtnApp: 'Download App',

        /* FAQ */
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Questions we hear often',
        faqQ1: 'Is this campaign political?',
        faqA1: 'No. This is a purely civic campaign demanding a basic right to fair internet service, with no political or party affiliation.',
        faqQ2: 'Is this campaign against a specific telecom company?',
        faqA2: 'No. The campaign supports improving internet service quality and advocating for better policies for everyone. It is not directed against any single company.',
        faqQ3: 'Can I help without joining any future boycott?',
        faqA3: 'Absolutely. You can help by sharing the campaign, printing QR posters, and inviting your friends to join and sign.',
        faqQ4: 'Is my data safe if I sign the petition?',
        faqA4: 'Yes. Signatures are collected via Google Forms and your data is never sold or shared with third parties. You can read our privacy policy for more details.',

        /* Share */
        shareTitle: 'Help Us Spread the Word',
        shareSubtitle: 'Every share brings the goal one step closer',

        /* Roadmap */
        roadmapTitle: 'What Happens After You Join?',
        roadmapSubtitle: 'Your journey with us, in five steps',
        roadmap1: 'Join',
        roadmap2: 'Stay Updated',
        roadmap3: 'Share Content',
        roadmap4: 'Invite Friends',
        roadmap5: 'Join Activities',

        footerFacebook: 'Facebook',
        footerTelegram: 'Telegram',
        footerWhatsapp: 'WhatsApp',
        footerPrivacy: 'Privacy Policy',
        footerSlogan: 'Together for fair, unlimited internet for every Egyptian',
        footerCopyright: '© 2025 Unlimited Internet Campaign - All Rights Reserved',

        languageChanged: 'Language changed',
        darkModeEnabled: 'Dark mode enabled',
        lightModeEnabled: 'Light mode enabled',
        copied: '✅ Copied!',
        copyFailed: '❌ Copy failed',
        openingPetition: 'Opening petition...',

        /* Updates page */
        updatesPageTitle: 'Campaign Updates | Unlimited Internet Egypt',
        updatesHeaderTitle: 'Latest Updates',
        updatesSubtitle: 'Follow the campaign progress and developments',
        update1Title: 'Official Website Launch',
        update1Desc: 'The official campaign website launched to keep everyone updated on our progress and results.',
        update2Title: 'Improving User Experience',
        update2Desc: 'Updated the website code to improve speed and support older browsers so our message reaches everyone.',
        update3Title: 'Price Reduction.. Communications Committee Announces Good News Regarding Internet Bundles',
        update3Desc: 'In a new parliamentary move, the Communications Committee of the House of Representatives announced efforts to review service prices and quality, demanding lower internet prices.',
        update4Title: "Official: 'Unlimited' Internet Services Not Currently Under Discussion",
        update4Desc: 'In a statement to Al-Mal Newspaper, Eng. Ayman El-Saadani stated that unlimited internet is not currently being discussed, highlighting the need to continue our efforts.',
        parliamentTitle: "Parliament's Communications Committee: We Will Study Abolishing Data Caps for Unlimited Internet",
        parliamentDesc: "Important statements from Parliament's Communications Committee on studying citizens' demands to shift to an unlimited system.",
        update6Title: 'Viral Engagement.. #Unlimited_Internet_Egypt Trends Online',
        update6Desc: 'News sites reported massive interaction with the campaign hashtag. Your voice is our strength; join now and participate in the hashtag to keep the issue trending.',
        voteNowBtn: 'Join & Vote in the Hashtag Now',
        update7Title: 'The Truth About Limited Internet: Egypt vs. The World',
        update7Desc: "A new video explaining the technical reality of data consumption and comparing Egypt's internet to countries like Jordan and Pakistan which offer unlimited or huge quotas at lower prices.",
        update8Title: 'Unlimited Internet Exists in Egypt.. Here is the Proof!',
        update8Desc: "Mahmoud Abo Khatib reveals how companies bypass speed limits for certain sites and proposes a 'Fair Solution Initiative' demanding a 1TB minimum and 5Mbps speed after quota ends.",
        watchFullVideo: 'Watch Full Video',
        responseTitle: 'Video Type vs. Data Quota: Where is the Truth?',
        responseDesc1: "Responding to the ICT Committee Chair; linking data depletion to 'certain videos' avoids the real crisis. Internet is a user right, and no one should imply what people watch to justify poor capacity.",
        responseQuote: "Citizens pay for the service to use it as they see fit. The system's job is to provide infrastructure that fits modern consumption, not to blame users or monitor screens to justify poor quotas.",
        responseDesc2: "The world is moving to 4K, and education/work rely on video; limiting the issue to 'behaviors' ignores the fact that Egyptian quotas are outdated.",
        update10Title: "Exposing the 'Profit Loophole': Replying to Technical Lies and Moral Insults",
        update10Desc1: "After Amr Adib's viral outburst asking 'Why us?', we reveal the truth about the 'Electronic Valve' companies use to force extra bundle purchases.",
        update10Quote: "Changing a single line of code in company servers is all that stands between us and digital dignity. It's an administrative choice, not a technical one.",
        update10Desc2: 'While officials claim users can\'t afford it, we prove Egyptians already pay more for extra bundles than neighbors pay for unlimited internet.',
        watchResponse: 'Watch the Full Response',
        hackedTitle: 'Warning: The homepage of the unlimited internet campaign in Egypt has been hacked.',
        hackedDesc1: 'Please be advised that the previous official Facebook page has been hacked. We urge everyone to unfollow and disregard any content posted there.',
        hackedDesc2: 'A new official replacement page has been created, and all links on the website have been updated to ensure you reach the correct source.',
        newFBLink: 'Join the New Official Page Now'
    }
};

/* ===== التهيئة عند تحميل الصفحة ===== */
document.addEventListener('DOMContentLoaded', function() {
    try {
        setTimeout(() => {
            const welcomeScreen = document.getElementById('welcomeScreen');
            if (welcomeScreen) {
                welcomeScreen.classList.add('hide');
            }
        }, 2500);

        initMobileMenu();
        initLanguageToggle();
        initDarkMode();
        initSmoothScroll();
        initIntersectionObserver();
        initHeroCounter();
        initFAB();
        loadSettings();

        console.log('Campaign website loaded successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

/* ===== القائمة المنسدلة ===== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ===== تبديل اللغة ===== */
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    isArabic = !isArabic;
    const lang = isArabic ? 'ar' : 'en';
    const dir = isArabic ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    document.body.style.direction = dir;

    updateAllTranslations(lang);
    updateMultiLanguageElements(lang);
    if (_heroCounterRender) _heroCounterRender();

    saveSettings();
    showToast(translations[lang].languageChanged);
}

function updateAllTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function updateMultiLanguageElements(lang) {
    document.querySelectorAll('[lang]').forEach(element => {
        const elementLang = element.getAttribute('lang');
        if (elementLang === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

/* ===== الوضع الداكن ===== */
function initDarkMode() {
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.innerHTML = isDarkMode ?
            '<i class="fas fa-sun"></i>' :
            '<i class="fas fa-moon"></i>';
    }

    saveSettings();

    const lang = isArabic ? 'ar' : 'en';
    const message = isDarkMode ?
        translations[lang].darkModeEnabled :
        translations[lang].lightModeEnabled;
    showToast(message);
}

/* ===== التمرير السلس ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 150;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===== Intersection Observer (ظهور تدريجي عند التمرير) ===== */
function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===== عداد التوقيعات في الهيدر ===== */
// ملحوظة: القيمة دي نقطة بداية فقط لعرض حركة واقعية للعداد.
// لعداد حقيقي ودقيق 100%، لازم يترّبط بمصدر بيانات فعلي
// (زي Google Sheets API أو Apps Script) بدل القيمة الثابتة دي.
const PETITION_BASE_COUNT = 7781;
let _heroCounterRender = null;

function initHeroCounter() {
    const countEl = document.getElementById('count');
    if (!countEl) return;

    let count = PETITION_BASE_COUNT;
    const render = () => {
        countEl.textContent = count.toLocaleString(isArabic ? 'ar-EG' : 'en-US');
    };
    render();
    _heroCounterRender = render;

    setInterval(() => {
        if (Math.random() > 0.7) {
            count += Math.floor(Math.random() * 2) + 1;
            render();
        }
    }, 8000);
}

/* ===== زر الانضمام العائم (FAB) ===== */
function initFAB() {
    const fab = document.getElementById('fabJoin');
    const heroSection = document.querySelector('.hero-section');
    if (!fab || !heroSection) return;

    if (!('IntersectionObserver' in window)) {
        fab.classList.add('show');
        return;
    }

    let heroVisible = true;
    let joinVisible = false;

    const updateVisibility = () => {
        fab.classList.toggle('show', !heroVisible && !joinVisible);
    };

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            heroVisible = entry.isIntersecting;
            updateVisibility();
        });
    }, { threshold: 0 });
    heroObserver.observe(heroSection);

    const joinSection = document.getElementById('join');
    if (joinSection) {
        const joinObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                joinVisible = entry.isIntersecting;
                updateVisibility();
            });
        }, { threshold: 0.2 });
        joinObserver.observe(joinSection);
    }
}

/* ===== فتح العريضة ===== */
function openPetition() {
    const lang = isArabic ? 'ar' : 'en';
    showToast(translations[lang].openingPetition);

    const petitionUrl = 'petition.html';
    window.open(petitionUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة الموقع ===== */
function openShare() {
    const shareData = {
        title: isArabic ? 'حملة الإنترنت غير المحدود في مصر' : 'Unlimited Internet Campaign in Egypt',
        text: isArabic ? 'انضم لحملة #انترنت_غير_محدود_في_مصر' : 'Join #UnlimitedInternetEgypt campaign',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => fallbackCopy(shareData.url));
    } else {
        fallbackCopy(shareData.url);
    }
}

/* ===== نسخ رابط الموقع (قسم المشاركة) ===== */
function copySiteLink() {
    fallbackCopy(window.location.href);
}

/* ===== نسخ النص ===== */
function fallbackCopy(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => {
                const lang = isArabic ? 'ar' : 'en';
                showToast(translations[lang].copied);
            })
            .catch(() => legacyCopy(text));
    } else {
        legacyCopy(text);
    }
}

function legacyCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    try {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');

        const lang = isArabic ? 'ar' : 'en';
        showToast(translations[lang].copied);
    } catch (err) {
        const lang = isArabic ? 'ar' : 'en';
        showToast(translations[lang].copyFailed);
    }

    document.body.removeChild(textarea);
}

/* ===== مشاركة على تويتر ===== */
function shareToTwitter() {
    const hashtag = '#انترنت_غير_محدود_في_مصر';
    const text = isArabic
        ? `${hashtag}\n\nنطالب بإنترنت غير محدود وعادل للجميع في مصر!`
        : `#UnlimitedInternetEgypt\n\nWe demand fair and unlimited internet for all in Egypt!`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, '_blank', 'width=550,height=420,noopener,noreferrer');
}

/* ===== نسخ الهاشتاج ===== */
function copyHashtag() {
    const hashtag = isArabic ? '#انترنت_غير_محدود_في_مصر' : '#UnlimitedInternetEgypt';
    fallbackCopy(hashtag);
}

/* ===== نسخ رابط العريضة ===== */
function copyPetitionLink() {
    const petitionUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfxsw43WwwSXzad5Vt8hJDMzIhTECoUCNLvmVJ0u9KAFHEyQQ/viewform";
    fallbackCopy(petitionUrl);
}

/* ===== مشاركة على واتساب ===== */
function shareToWhatsApp() {
    const text = isArabic ?
        'انضم لحملة #انترنت_غير_محدود_في_مصر' :
        'Join #UnlimitedInternetEgypt campaign';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + window.location.href)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة على تليجرام ===== */
function shareToTelegram() {
    const text = isArabic ?
        'انضم لحملة #انترنت_غير_محدود_في_مصر' :
        'Join #UnlimitedInternetEgypt campaign';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة على فيسبوك ===== */
function shareToFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
}

/* ===== ملفات التحميل (بوستر + تطبيق) ===== */
const DOWNLOAD_FILES = {
    poster: {
        url: 'https://www.mediafire.com/file/7hs9twvt7mf1hjq/Poster_%2523unlimated_internet_in_egypt_.pdf/file',
        titleAr: 'بوستر حملة الإنترنت غير المحدود',
        titleEn: 'Unlimited Internet Campaign Poster'
    },
    app: {
        url: 'https://www.mediafire.com/file/ncflcx6m55l3o4v/UNLIMITED_NET_APP_V1.8_NEW.apk/file',
        titleAr: 'تطبيق حملة الإنترنت غير المحدود',
        titleEn: 'Unlimited Internet Campaign App'
    }
};

// الرابط بيتفتح طبيعي من خاصية href في الزرار؛ الدالة دي مكانها لو حبيت تضيف تتبع/إحصائيات لاحقاً.
function downloadFile(key) {
    console.log('Download requested:', key);
}

function shareFile(key) {
    const file = DOWNLOAD_FILES[key];
    if (!file) return;
    const title = isArabic ? file.titleAr : file.titleEn;

    if (navigator.share) {
        navigator.share({ title, url: file.url }).catch(() => fallbackCopy(file.url));
    } else {
        fallbackCopy(file.url);
    }
}

/* ===== إظهار Toast ===== */
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }

    toast.textContent = message;
    toast.classList.add('show');

    toast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/* ===== حفظ الإعدادات ===== */
function saveSettings() {
    window.campaignSettings = {
        language: isArabic ? 'ar' : 'en',
        darkMode: isDarkMode,
        lastUpdated: new Date().toISOString()
    };

    try {
        if (window.localStorage) {
            localStorage.setItem('campaignSettings', JSON.stringify(window.campaignSettings));
        }
    } catch (e) {
        console.warn('localStorage not available');
    }
}

/* ===== تحميل الإعدادات ===== */
function loadSettings() {
    try {
        if (window.localStorage) {
            const stored = localStorage.getItem('campaignSettings');
            if (stored) {
                window.campaignSettings = JSON.parse(stored);
            }
        }

        const settings = window.campaignSettings || {};

        if (settings.language === 'en') {
            isArabic = false;
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.direction = 'ltr';
            updateAllTranslations('en');
            updateMultiLanguageElements('en');
            if (_heroCounterRender) _heroCounterRender();
        }

        if (settings.darkMode) {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            const darkToggle = document.getElementById('darkToggle');
            if (darkToggle) {
                darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    } catch (error) {
        console.warn('Settings loading error:', error);
    }
}

/* ===== معالجة الأخطاء ===== */
window.addEventListener('error', function(event) {
    console.error('Error:', event.message);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled rejection:', event.reason);
});

/* ===== تصدير الدوال ===== */
window.campaignFunctions = {
    toggleSteps,
    openPetition,
    openShare,
    copySiteLink,
    shareToTwitter,
    copyHashtag,
    copyPetitionLink,
    shareToWhatsApp,
    shareToTelegram,
    shareToFacebook,
    downloadFile,
    shareFile,
    showToast,
    toggleLanguage,
    toggleDarkMode,
    updateMultiLanguageElements
};
window.addEventListener('load', function() {
    if (window.location.search.includes('sent=true')) {
        const toast = document.getElementById('toast');
        if (toast) {
            const isAr = document.documentElement.lang === 'ar';
            toast.innerText = isAr ? '✅ شكرًا لك! تم استلام اقتراحك بنجاح.' : '✅ Thank you! Your suggestion was received.';

            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }

        window.history.replaceState({}, document.title, window.location.pathname);
    }
});
