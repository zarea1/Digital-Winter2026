// Governorates data with coordinates (approximate centroids)
const governorates = [
    { id: 'cairo', name: 'القاهرة',namee: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { id: 'giza', name: 'الجيزة',namee: 'Giza', lat: 30.0131, lng: 31.2089 },
    { id: 'alexandria', name: 'الاسكندرية',namee: 'Alexandria', lat: 31.2001, lng: 29.9187 },
    { id: 'qalyubia', name: 'القليوبية',namee: 'Al-Qalyubia', lat: 30.4147, lng: 31.2015 },
    { id: 'monufia', name: 'المنوفية',namee: 'Monufia', lat: 30.5261, lng: 30.9865 },
    { id: 'sharqia', name: 'الشرقية',namee: 'Al-Sharqia', lat: 30.7063, lng: 31.6244 },
    { id: 'gharbia', name: 'الغربية',namee: 'Al-Gharbia', lat: 30.8754, lng: 31.0335 },
    { id: 'dakahlia', name: 'الدقهلية',namee: 'Al-Dakahlia', lat: 31.0506, lng: 31.3776 },
    { id: 'beheira', name: 'البحيرة',namee: 'Al-Beheira', lat: 30.8481, lng: 30.3435 },
    { id: 'kafr_el_sheikh', name: 'كفر الشيخ',namee: 'kafr el-sheikh', lat: 31.3085, lng: 30.8039 },
    { id: 'damietta', name: 'دمياط',namee: 'Damietta', lat: 31.4175, lng: 31.8144 },
    { id: 'port_said', name: 'بورسعيد',namee: 'Port Said', lat: 31.2653, lng: 32.3019 },
    { id: 'ismailia', name: 'الإسماعيلية',namee: 'Ismailia', lat: 30.5965, lng: 32.2715 },
    { id: 'suez', name: 'السويس',namee: 'Suez', lat: 29.9668, lng: 32.5498 },
    { id: 'matruh', name: 'مطروح',namee: 'Marsa Matrouh', lat: 31.3517, lng: 27.2373 },
    { id: 'south_sinai', name: 'جنوب سيناء',namee: 'South Sinai', lat: 28.5331, lng: 34.1744 },
    { id: 'north_sinai', name: 'شمال سيناء',namee: 'North Sinai', lat: 30.9326, lng: 33.7497 },
    { id: 'faiyum', name: 'الفيوم',namee: 'Faiyum', lat: 29.3084, lng: 30.8428 },
    { id: 'beni_suef', name: 'بني سويف',namee: 'beni suef', lat: 29.0761, lng: 31.0989 },
    { id: 'minya', name: 'المنيا',namee: 'Minya', lat: 28.1099, lng: 30.7503 },
    { id: 'asyut', name: 'أسيوط',namee: 'Assiut', lat: 27.1828, lng: 31.1828 },
    { id: 'sohag', name: 'سوهاج',namee: 'Sohag', lat: 26.5569, lng: 31.6948 },
    { id: 'qena', name: 'قنا',namee: 'Qena', lat: 26.1644, lng: 32.7267 },
    { id: 'luxor', name: 'الأقصر',namee: 'Luxor', lat: 25.6872, lng: 32.6396 },
    { id: 'aswan', name: 'أسوان',namee: 'Aswan', lat: 24.0889, lng: 32.8998 },
    { id: 'red_sea', name: 'البحر الأحمر',namee: 'Red Sea', lat: 25.5401, lng: 33.8249 },
    { id: 'new_valley', name: 'الوادي الجديد',namee: 'New Valley', lat: 25.4420, lng: 30.5457 }
];

// Updated course data with CCST Technician Support
const courseCategories = [
    {
        id: 'english',
        name: 'دورات اللغة الإنجليزية - English Courses',
        courses: [
            {
                id: 'english_for_it_1',
                title: 'English for IT 1',
                description: 'مقدمة في اللغة الإنجليزية المتخصصة في مجال تكنولوجيا المعلومات',
                level: 'متوسط - Intermediate'
            },
            {
                id: 'english_for_it_2',
                title: 'English for IT 2',
                description: 'تطوير مهارات اللغة الإنجليزية المتقدمة في مجال تكنولوجيا المعلومات',
                level: 'متوسط - Intermediate'
            }
        ]
    },
    {
        id: 'network_technician',
        name: 'دورات فني الشبكات - Network Technician Courses',
        courses: [
            {
                id: 'networking_basics',
                title: 'Networking Basics',
                description: 'أساسيات الشبكات ومبادئ الاتصالات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'networking_devices',
                title: 'Networking devices and initial Configuration',
                description: 'تهيئة وتكوين أجهزة الشبكات الأساسية',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_addressing',
                title: 'Network Addressing and basic troubleshooting',
                description: 'عنونة الشبكات وحل المشكلات الأساسية',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_support',
                title: 'Network support and security',
                description: 'دعم الشبكات وأساسيات الأمان',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'ccst_technician_support',
        name: 'الدعم الفني - Technician Support',
        courses: [
            {
                id: 'endpoint_security',
                title: 'Endpoint Security',
                description: 'أمن نقاط النهاية والحماية من التهديدات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'network_defense',
                title: 'Network Defense',
                description: 'الدفاع عن الشبكات وحمايتها من الهجمات',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'cyber_threat',
                title: 'Cyber Threat Management',
                description: 'إدارة التهديدات السيبرانية والاستجابة للحوادث',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'cybersecurity',
        name: 'محلل أمن سيبراني مبتدئ - Junior Cybersecurity Analyst',
        courses: [
            {
                id: 'intro_cybersecurity',
                title: 'Introduction to cybersecurity',
                description: 'مقدمة في أساسيات الأمن السيبراني',
                level: 'مبتدئ - Beginner'
            }
        ]
    },
    {
        id: 'ai',
        name: 'دورات الذكاء الاصطناعي - AI Courses',
        courses: [
            {
                id: 'intro_modern_ai',
                title: 'Introduction to Modern AI',
                description: 'مقدمة في الذكاء الاصطناعي الحديث وتطبيقاته',
                level: 'مبتدئ - Beginner'
            },
            {
                id: 'ai_fundamentals',
                title: 'AI Fundamentals with IBM SkillsBuild',
                description: 'أساسيات الذكاء الاصطناعي مع منصة IBM SkillsBuild',
                level: 'مبتدئ - Beginner'
            }
        ]
    }
];

        // Updated course links with CCST Technician Support
        const courseLinks = {
            beni_suef: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=02ad594a-9fe2-4ca1-b327-99607df84474',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=4ebe6787-6b10-4d3a-bf9e-f62b56dab21c',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=4ef9ef8b-ed7c-4a09-bea9-6fe7d421e1c9',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=921e4f99-46df-41b7-a449-78f0dd1e56ce',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=ced8b9d6-5914-4941-b755-32929621de5c',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=9cd8c78f-3e44-435c-8d35-628e0d288247',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=1b980cd2-272e-486d-a41e-474e82991f47',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=4ed83bc8-f6c9-44e4-b503-002cdcf03a4d',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=72bc7e20-0035-404c-8caa-d6a3546c8dec',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=a8d9d1c1-0621-4919-bae3-fc7eea317a1e',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=224a6317-4394-4e60-88bb-fbeaec5a28ee',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=6a271a1d-45e0-4721-a86d-11953df6bdce'
            },
            cairo: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=0eccd128-ff80-4520-8bfb-4369a12d8b9e',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=58b12782-934a-492d-b0d5-71db19ed70c4',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=03e70664-6fe8-40c1-8fb6-5908d6667c59',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=2ec34c32-3f9d-47f1-89ef-dc120d635465',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=16195f17-d4b5-4a5c-be85-e1509bd9c269',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=6149ef42-5ccd-4709-8942-f3539dcacb95',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=d2c1dd47-92a1-48c1-b51b-e87d8b6c2506',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=565565c9-12ae-4eb5-9ed2-11a2d7335866',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=6f7191cf-ff33-489c-a5e0-f677d09e0a66',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=3b48e5da-8338-48e4-b8fc-13b12d726962',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=08e74acb-0c0f-49e3-8cc8-387f4e491382',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=78484a2c-3c47-4675-ae51-fc6c40c3aeaa'
            },
            giza: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=d1928d62-993e-408c-9031-b43719273852',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=73c55dfa-282c-440c-b927-0f7aef4fe0ad',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=0c89242e-748b-41a5-98a4-ad32657c01e0',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=52e04762-f657-4838-9f43-cbc4f3900d84',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=2170754b-7083-46e6-9a46-bb2bdb9d70ab',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=99ef6aa8-2d1e-493b-80a4-a3b130316dc0',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=5001503b-ed81-4a1b-bf8c-7160b016af42',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=7c745397-f245-4aed-ae50-132c2742df62',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=ffd224ef-77fa-44f2-a653-6841303d0822',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=89f14eb7-d306-4da5-9f72-17335005f654',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=0d4096d9-2789-45ba-a521-439f35baadd7',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=738e9006-bd61-4e94-8e53-25901c528d06'
            },
            north_sinai: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=7e5a3a43-dc06-41a7-87d0-09e35e5bf8ca',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=78432e68-8d61-4239-991c-8f565084f804',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=2b71534e-9991-4070-afd7-fd153f203467',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=bb055507-cca7-47b1-a269-cae8766206ed',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=695e970e-c6a5-4711-86fb-218079b370a4',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=a3a096d0-df86-4c6e-9793-85d813bf8fc5',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=6e2d0199-2e15-45c4-81e1-feb4c532b7cb',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=80bbd229-2ca8-4d2f-b95d-92a20cadf35a',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=3ad0913f-3f47-4f4f-b19d-6f2f84baa1f4',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=8fca75de-de45-4d16-a5b6-84bc10d6297c',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=2e8260bb-af3e-4d54-9251-1865efd5545a',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=b3b88e59-966c-4c49-9b95-b479c3225edd'
            },
            south_sinai: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=4b6cc7e6-2abb-4de1-b84b-ae5fe1a02a07',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=2702e7fc-80d8-4601-b8f0-ee545e232763',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=09dc58bb-8c0c-41b3-aa7a-e60a3af450a5',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=3ca35276-e90a-4a33-b009-40fb4fa923ac',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=0b515501-b084-4a2c-aae8-e8d5c0a0b510',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=cc653180-23f8-4ccd-a3be-53c98029b8a6',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=29538eab-fa2c-4384-b220-888ceba56337',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=27b81f5d-2702-44ba-a5a3-1b5fc8222205',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=4fc4199a-8d45-4a87-9128-db587fe87d34',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=5d3bfc56-8e06-4cc0-997c-a9a5a180080a',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=2a7e5cb1-9554-45d5-9a30-da0367440e0e',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=48b68ec0-9f5b-4edd-92fb-36a575a26db6'
            },
            port_said: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=f11a6b68-c792-4ea7-9161-1fd4fa37beec',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=84040be8-6f51-473f-ac81-f205256215fe',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=0237a9fb-6d0e-4870-95b3-9dd2ede4c3e2',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=3eb39ff5-4e48-4103-b592-02b480e0f331',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=fe9a7a47-2971-4151-b761-fb31cc6cf53d',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=75129c6a-8c25-4e1f-8e78-34b8838cb1d9',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=9089289d-3824-4746-8a2d-d46f1e28db37',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=74eccf80-a80d-4dd1-a170-45f8e9cbcb31',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=6e7ee366-8e93-40bf-9228-c97a7c58534f',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=8aac3c57-51c4-469f-a9a7-cefe7b4d2b6f',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=200341fc-1517-48fd-9d6f-132d07c114f8',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=83dce670-7ca6-4143-8f39-8f4133c5daf6'
            },
            alexandria: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=6170d4b0-cac4-4394-b902-d515a60010a3',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=137c6e23-ea68-48ff-9b8a-e728eeec24f9',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=a3e04a32-9a20-4338-acf9-b57a8ae9cef2',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=b3fbb54d-f1ec-437f-b801-8065d49d331c',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=def292a1-23d9-48ed-8850-92c146229022',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=ef686c1a-3040-4737-ae30-e35f5e42fbf3',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=f79bd35c-b76e-4b47-b36f-88bf3f981d88',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=ff1528c8-a4c3-49fd-a7f5-fa03b2ba7150',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=946bea46-8b38-4a66-9dfd-aef6f9442a6f',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=cf6e09c2-6b9f-4d06-8ea1-c436d6fccd54',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=8ce9421b-7572-4dee-9144-4b107b845f88',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=25d1d446-662b-4601-94c1-b16134c2de23'
            },
            asyut: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=bbe5758f-1dd9-45e5-8abf-ac9058b2f247',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d4f9f28f-d107-4ac6-ae42-f92ff38a53e8',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=dd34e4f5-7a27-45e8-ad6b-66d0bc36e440',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=59871323-1561-4825-9721-97f7ebe861ca',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=160b75d9-adde-437f-b138-7c1842450f88',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=5ef090a0-e2d3-4299-ab92-df8ca1b44c58',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=f6ca776c-3667-4205-b605-ea406b57243f',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=bc06ac62-f701-4fe8-8ee8-71d4cd9c240f',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=c471c7b7-0590-4056-9e1b-4284669616c1',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=695d532e-62c6-4bd4-9483-97b4531941ed',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=29846bda-f18d-444a-8e81-ec2681bd1bbf',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=ad5324f8-33b0-4ded-9427-27a40ae678b8'
            },
            aswan: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=8d73e419-8a70-4f37-ab2f-2dbe97b53911',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=a41b56f6-7a49-4682-90a2-15f8fda6e83a',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=b316ac2c-2869-445c-b783-10de5f62c095',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=17a3ba00-616a-44f2-a476-8725e936c5c3',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=40155354-0d6f-419b-a3f5-b9f1136bb2d7',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=c5eb3e46-ffc3-4d29-bbc8-0f333fd6310c',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=32b894a0-aa37-4bae-8ccc-ed9a1e63b8ac',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=ade5fc2e-95f1-4a35-85ee-32123be34c19',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=314fef06-2d46-4ae7-a306-6a643f9bfc89',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=249bf439-f511-4917-9b8b-f87f31f7b7d4',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=cbed9f96-9e0d-4da3-a98f-75af369eee61',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=77202f0e-0aa8-419f-8d46-936e5b64a639'
            },
            qalyubia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=cbb09919-318e-4bad-b269-54f2a6d6afdc',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=f6f2cc18-d506-414b-bc88-d50d41a15ed7',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=849b7135-6bee-48eb-aaa2-66754127b453',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=151d032f-bc06-4b92-97e0-8726cb5e8e07',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=500b898c-cf2d-4721-b22b-7deb0125e181',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=6040b10b-70d9-42af-b500-781ea7d73108',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=a678e218-a355-4b8f-8859-7e0372e8bf8a',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=b9bbc328-e5dc-4b0d-be11-f89529e993d6',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=c2b23a7a-1574-43c9-be8c-164ec264da1b',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=dfe3d795-78e9-4595-916b-666ad1404b89',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=e9ca5441-749c-4824-9245-e60329450d06',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=58fd2c70-605a-4569-812c-8f06d947f53f'
            },
            beheira: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=ee945010-0409-4dd1-805c-7d9917a65ddb',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=3b552529-ac8c-45a2-9552-21c92a3286b2',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=31ebf85b-d931-4f14-9ed7-0d5a16ee2205',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=f73e2b93-3d5a-4b98-bef5-2137a5514194',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=30b5fd6f-814e-4f0e-ae5e-de8f7dfe9e79',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=38663ea3-4b2c-4083-b1fa-d5d71c066869',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=00d78bc3-e217-4b04-90d5-cb92272f0358',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=4b19cb4d-c8a9-4a7a-9d1b-9dc67590fa1d',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=fc0f16cb-8c1e-4483-ac16-a1412b3b033d',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=bb6412ee-f5d6-4bb2-a9cf-88f5db05f2d9',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=f83759f4-f9c7-42a3-a095-e595fd585658',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=70cd2922-d980-4374-88a6-bb3b5a0f0544'
            },
            damietta: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=4930156a-e8a3-4c85-a449-dfb51f860a75',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d4283b4b-b136-453d-b1ea-00e4d8b1dbdb',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=6775af81-39aa-4600-b718-c096689ad145',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=6e79f25c-bbca-4346-bf8b-095005012477',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=ba65be60-3a38-4ebf-940c-603e6d0e42f6',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=cf050b19-ff20-4f9d-9411-badc1f83a029',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=18b590a2-e69a-4b95-85ec-d5fa23176d70',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=f6d48670-0e5d-48ba-ac00-5b8b6b735ca4',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=3c3fe2a0-1990-46f9-9f90-2b6ffb8ce423',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=2893a968-65c3-4704-bdcf-c155466a5b6e',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=9a2ef3c1-523a-4c7f-b1f9-c436013b6e4b',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=a0d7b1d0-b882-423a-9a8a-df99cb28058c'
            },
            faiyum: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=60994c52-4613-47f3-a0ac-cbe43db4a85f',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=c7a93815-445b-4053-a71e-0487cd83e41d',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=9bb4ce3b-aa2e-4164-98e2-50ea5fb8648e',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=85746cf8-7e42-44a9-9424-7f5561c8d70a',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=0d5bef57-7a29-45bb-8657-1a8c1882160d',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=34751994-ab18-4405-b703-0e1acc3eb1c6',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=f240d6ee-f913-4771-a0d1-eef1a49f0f58',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=5cb70ae5-132b-45f3-8db2-0510d636a8a9',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=9fe0839f-7b11-4491-aca9-7772544ff8dc',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=d032537f-c01d-4260-b8d0-5c927c700d78',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=c98b3073-93d6-4b21-820a-1e7eec780996',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=21b5b221-f485-4850-a324-f878d5d82e9f'
            },
            red_sea: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=0bdb00ec-e894-4c95-a047-1e0802a85ceb',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=52f76209-1247-4d35-a5c4-403fd53b270d',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=f21deb1b-5161-41e0-895d-704b9480a59a',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=93b2b714-f489-4096-ae77-63a3e8c62583',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=3dfffeac-1dd9-4194-8db9-ad85a60f0acc',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=37224235-0cfd-4ca5-b4ad-5b58c49a17b7',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=2be09d12-b77a-4f92-91e0-84b0335da49e',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=ebd197c9-03f3-4607-9bc8-1641590f6d12',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=f141f0a6-6fd7-4e73-b742-3c6a13ce2e58',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=f13743a1-0421-429c-977a-6d14d299fb9d',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=5c292cf6-a247-4c65-a590-e7943c65da48',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=c8fa13c6-ec28-467f-8ecb-1c891f3b8d04'
            },
            luxor: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=1b088b51-34d6-46b0-9a3d-1b2fc92380c1',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=7ab1477f-becc-4143-b4a2-4efcd3c22b71',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=0d1e7405-673d-40bd-a4ca-b7cc47f7109b',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=ac30f2dc-7628-4f84-b6dd-687c5d9a36ed',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=896f28b6-2e06-490c-8f6d-6099159ff8de',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=45e8017c-45a6-4a10-a752-c7063ea20827',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=10cf6738-0210-4140-8866-90c7e1d1fad7',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=5f6c2c72-db29-4f44-b296-bb95dd4b0143',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=62db6141-2393-47b2-a28a-a7e6b2b8af97',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=b07de025-9b44-4dab-ad44-ee8cccad06f5',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=d0dbb055-cf79-45c6-94bb-16c95ebf250b',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=4483d718-051e-4e96-a4a5-a6f584ebb2eb'
            },
            dakahlia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=96da33a5-38b3-4a10-9957-f3b79fa1883d',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=aa621062-6aae-4a97-949e-21c0b01097bd',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=735d3e4d-2275-48ef-a679-e97465d6f21c',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=99156b75-0684-4160-969b-40aad4b7327a',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=51d5a161-ee3e-4010-aae2-9b3caf123e62',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=ac3e271e-82f0-41ba-8ab8-efde7f9cb896',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=e86a0309-0b00-4983-91e0-f5e6d98fa42a',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=2a0c5ffe-3dd1-4ff4-b74a-821baaacf95a',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=a30751ed-4e98-4c1e-8212-05208efca6d2',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=6ce6fd48-6201-4593-85ac-81f6d4974194',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=06a67b5e-c1c8-4425-aeed-0246648de3d4',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=35fb0fd7-a6e8-4b4a-bd78-93d55faa77c4'
            },
            matruh: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=9f5e7f78-ea42-4d13-b17c-867089022185',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=95ea5ee9-fae3-4d26-b063-f56cadb9c350',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=57f86c98-bf17-4483-9b68-91ed64164ddf',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=1ef476f9-c36f-4abd-a3f1-75b13283b500',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=5449e755-80fd-430c-8561-e3759d0ec542',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=8132f932-21a9-4fc3-a50f-61b1d91b75b8',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=0ec06e29-a92d-4df2-afb9-d501bc01bb99',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=60de83fd-2209-4c61-bd52-39c01bcca0f6',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=d1e104c1-f214-442c-940b-c0e9920bde38',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=e0c69b49-85ed-4123-9e29-b3262eeadf9f',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=2c9cd3cf-0755-4471-8fa6-db8e60b62df1',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=fc56a0f2-b591-437a-8abd-52ec293df9de'
            },
            minya: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=8fc47c2d-fdb6-4087-bc45-acaac9a54a72',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=6ec80f52-8ca7-4896-b9f9-4658bf99ac22',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=19c1bd7b-1bbc-4a84-a35f-345606409704',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=75f8291b-82c7-441e-b0a2-f260572434b1',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=8e34e37c-38ae-499b-a14a-5f503a391888',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=d1e2bf69-30a6-4984-ac48-2633bc31ef7c',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=c183cee5-be36-4bf5-9648-f007cbc94bfd',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=432aea85-5557-4083-9ca9-9518565fabca',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=c66c7c65-c46b-477a-a21c-544a9d65f2f4',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=ff94c534-15b5-4def-8314-9a30664f8925',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=ebc5d0ee-0670-4199-8a5f-91ad072b2a73',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=c7c8b00b-f0a9-44e4-9063-d52d19086124'
            },
            monufia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=7addbabc-799a-488e-8dde-5eb1448d6d9b',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=c8b2365d-41af-4107-a0bd-cdfeb285b95e',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=93c6974d-f735-4cff-8ebe-d1defad4b60d',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=6a2f93e0-1062-4a7e-817a-dd02ea403dcb',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=5d4fc66f-07f6-4cee-bb99-66997d0d4166',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=992c0fbf-b863-452c-8717-0f8eda9dc309',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=d248cd95-0ffc-4743-92c7-6bf11831d9f8',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=8b48da68-14a9-491f-826b-6069f6a7ca3f',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=8b402332-6ecc-467c-998d-7ae6c0951da6',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=46c115e6-5e01-486c-98d5-7a0327680124',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=db203d76-8d5b-46ff-b428-0981a3a219f1',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=33972136-0f4f-4fb5-9987-8ec3a2be77d2'
            },
            sohag: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=12169daf-1334-489b-8ddc-28299bfd6ac8',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=d628a394-d742-45da-a6ae-080fb26e609a',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=f88af17c-a593-40e4-9caa-7446c30afde1',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=f7e39262-1582-4856-9df9-98264a169dd7',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=cfbdcf4c-223b-4fe6-a10c-c94ef0c37ba4',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=bafa0293-9386-4788-bfb8-4f2823ccf4ef',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=a6d9849e-105c-427d-a376-eb500e3ac610',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=e06b86d2-7e2f-4a3b-8681-a13e77c5bc6a',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=5e14656a-d846-46b7-a17f-51a4f943dcfc',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=23d5aa7f-7be4-4d77-b10b-3821da733ca0',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=462a75e3-5389-4dab-a156-dd379a5aa6bf',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=24b66595-c0bb-4271-8b1b-b18ad6b5f089'
            },
            qena: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=9d1bf88d-8045-4e9e-9c54-8c9b9b58bbbb',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=64be575e-57bc-4d0b-bd87-dc6fb3e83595',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=da027c0b-a05f-4574-b0be-973c6e920b3c',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=452b426e-639b-4fff-a042-5c4722124be9',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=c42a02c9-2b2e-4b18-b9cc-2ec32b6d8c30',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=741f3fe8-8a94-4072-9448-5dc7ea67855d',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=25de9275-4ec9-4249-9866-bce889597d50',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=c3f0a877-673f-459b-8f9b-8bc4bb14e2d2',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=6e8d4b55-0c92-4908-83ee-7457bb72792f',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=0228418c-3a30-433a-ac7b-5afd97353a4a',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=0473e547-5197-40d8-828a-2cfa9b350f82',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=03e0e78c-6dce-44ad-b653-8254cecb3af3'
            },
            ismailia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=fa6d6d33-6942-4a05-b2d3-dec9b231318f',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=fa6d6d33-6942-4a05-b2d3-dec9b231318f',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=9ba18aa2-17a5-45ed-9218-2290f252be5e',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=dccee6b5-40dd-4462-92fa-6750bbcab799',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=9ff80a42-91b1-4509-812d-dce8ed678520',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=67755bc8-9e52-4f55-b3a1-64ccfcddac66',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=c7f66059-b6b7-44d2-88ca-a161d370cf4b',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=fc9fcdf5-a3fb-47f6-b84b-0c066f7e9eed',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=0a043f81-f9a8-4eef-9663-92b4243a96d8',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=26f3d564-3e93-41d7-973e-89326332c887',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=658c64db-1f7d-450c-aa6a-515eb49519a4',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=c12db59d-f151-4d43-b570-221414b5b864'
            },
            gharbia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=3118d3d6-cd53-4ec3-9236-5ffccfb7e72d',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=624437cd-a9c9-444b-969a-2d4745c2c064',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=0233f86e-1a86-429a-80ea-5a11670b9841',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=71b0aa5c-964f-4aeb-b294-c4ecdd9b4806',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=8fa533a1-7b33-4066-8921-c0fb6a9a0385',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=f31e0520-ff21-4b85-a07d-2d3be7b0d4f0',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=7be5ede1-156b-495e-b669-ed8f93c972af',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=4f53addb-e03d-4f8f-8a93-229303e59a27',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=2546d7fa-722f-4995-b876-566e96ffa9c7',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=1ad50bf9-dd5e-446f-87ea-1e6eae43d9b7',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=4b8078e0-4cdf-45aa-be7e-d34de53773aa',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=7e4d860c-dbf1-4ebb-98de-75af5e6443cd'
            },
            sharqia: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=86d904a3-e8dd-4c29-92c4-8938933e5fb5',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=9acf6fda-6de7-4009-880d-17d6a4157789',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=27534244-d195-48be-a256-a4f1e2474616',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=57f1bf7d-74ed-4b20-8213-3cac7153a671',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=d563e64c-a88f-4862-b0d9-a6464429acdb',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=a9854387-fbde-4e57-856b-0331eb7e9c34',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=0991b4b9-e41d-45b8-a32c-896cf8941d4b',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=6f0db2ad-dde6-4db2-ab91-052480d75105',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=59f240e0-ede7-499e-a9f3-2251a76015f4',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=9ee7c24f-2837-4ec1-96ff-b8a4f15c6da3',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=ffbadf0f-bcc0-494b-ac16-58aa4447b507',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=6a3237bb-9f7f-43be-b191-224447f552dc'
            },
            kafr_el_sheikh: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=d5fbb00f-dc74-4fb7-ad1f-164efb98bfca',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=334793b7-87e5-463e-a0bb-abe3bca7c1e1',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=3c5681c9-e96a-4e32-8b02-90b2119c2b1d',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=1d41c131-4c1f-4728-82d7-a72c5ddc07b4',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=1acc1c9d-1cb4-4d52-b9ec-f3b63a4f9383',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=c6bad700-6d62-414b-ace3-ae8f000fb43d',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=919188ae-ea2a-453f-9d8f-0dbc7d4b0ce3',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=a5942cbd-b500-46a9-a2f8-8877a5110f13',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=9e9e4eea-6b6c-4f04-9d0d-76b9800490b3',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=2c4b91cd-2e8c-4f15-aec7-416d9a68dd6b',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=5456dd11-8c6b-4917-9768-a9d3000287fc',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=51d25cf0-f308-4d1d-bc57-40bd6899a156'
            },
            suez: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=47531f5b-df5d-48cd-8767-17a7bfafe3e2',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=6bbe936e-0b01-4f37-9ae9-440b203f185a',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=ea879f0a-152c-4e49-b570-c2613b429c62',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=932eef5a-bb49-47f0-8e74-289cdfb98b75',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=7e383097-b313-4f93-a251-a8da3eb78c4b',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=c3e6a150-73d6-49c8-809e-2930ce995066',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=80fd35da-7e58-4361-8b06-75310845680e',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=4c2b04ad-e6c0-4fae-9e5d-4c8d400215a5',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=0a80f0ce-32ba-41ec-b6f2-97220d75efea',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=52b9798b-0514-444c-b0d7-b22b34fb44ca',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=f84dff5f-9232-4f6d-bd50-670949b14208',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=13a2de7d-47ea-4117-8241-2b7a3c7ad832'
            },
            new_valley: {
                english_for_it_1: 'https://www.netacad.com/courses/english-for-it1?courseLang=en-US&instance_id=cee13b4b-a11a-4278-b98c-23802e832bfe',
                english_for_it_2: 'https://www.netacad.com/courses/english-for-it2?courseLang=en-US&instance_id=43e0647b-8f12-4dbf-a5c3-645a35c1e4d8',
                networking_basics: 'https://www.netacad.com/courses/networking-basics?courseLang=en-US&instance_id=370b3ea5-6132-411f-b138-27a094507138',
                networking_devices: 'https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US&instance_id=bd7b8cfd-13d0-44e5-912e-b57efdbf00eb',
                network_addressing: 'https://www.netacad.com/courses/network-addressing-and-basic-troubleshooting?courseLang=en-US&instance_id=8cec6065-3d6b-46cd-adb2-324fa503c8e8',
                network_support: 'https://www.netacad.com/courses/network-support-security?courseLang=en-US&instance_id=644739fd-3406-457a-8dd1-a1dacb2ceaa7',
                endpoint_security: 'https://www.netacad.com/courses/endpoint-security?courseLang=en-US&instance_id=6fe16614-202a-41f8-998c-6913380de42d',
                network_defense: 'https://www.netacad.com/courses/network-defense?courseLang=en-US&instance_id=0dff1b78-0c79-47cb-a4f6-e427c7745220',
                cyber_threat: 'https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US&instance_id=2039d846-2f17-4a76-bf32-5771e6cbc047',
                intro_cybersecurity: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US&instance_id=587c9e91-b987-456b-b2e2-bfd4d211420d',
                intro_modern_ai: 'https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US&instance_id=9e831468-d968-4533-ad50-2ba04a1ee199',
                ai_fundamentals: 'https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US&instance_id=6a133085-9db8-484c-ac1c-8fee18bd8be0'
            }
        };

// Global variables
let map;
let markers = {};
let selectedGovernorate = null;
let selectedCourseType = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
        showLoading();
        initializeMap();
        populateDirectoratesGrid();
        populateGovernorateFilter();
        populateCourseTypeFilter();
        populateCoursesContainer();
        setupEventListeners();
        setupSmoothScrolling();
        hideLoading();
    } catch (error) {
        showError('حدث خطأ أثناء تحميل التطبيق: ' + error.message);
        hideLoading();
    }
});

// Show loading spinner
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'block';
}

// Hide loading spinner
function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'none';
}

// Show error message
function showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hide error message
function hideError() {
    const errorElement = document.getElementById('error-message');
    if (errorElement) errorElement.style.display = 'none';
}

// Initialize the map
function initializeMap() {
    try {
        map = L.map('egypt-map').setView([26.8206, 30.8025], 6);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 20,
            minZoom: 5
        }).addTo(map);

        // Add governorate markers
        governorates.forEach(gov => {
            const marker = L.circleMarker([gov.lat, gov.lng], {
                radius: 8,
                fillColor: '#0A2342',
                color: '#C8A04F',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
                className: 'governorate-marker'
            }).addTo(map);

            marker.bindPopup(`<b>${gov.name}</b><br>اختر للاطلاع على الدورات التدريبية`);
            
            marker.on('click', function() {
                selectGovernorate(gov.id);
            });

            marker.on('mouseover', function() {
                this.setStyle({
                    fillColor: '#C8A04F',
                    color: '#0A2342'
                });
            });

            marker.on('mouseout', function() {
                if (selectedGovernorate !== gov.id) {
                    this.setStyle({
                        fillColor: '#0A2342',
                        color: '#C8A04F'
                    });
                }
            });

            markers[gov.id] = marker;
        });
    } catch (error) {
        throw new Error('فشل في تحميل الخريطة: ' + error.message);
    }
}

// Populate directorates grid
function populateDirectoratesGrid() {
    const grid = document.getElementById('directorates-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    governorates.forEach(gov => {
        const item = document.createElement('div');
        item.className = 'directorate-item';
        item.textContent = gov.name;
        item.dataset.govId = gov.id;
        grid.appendChild(item);
    });
}

// Populate governorate filter
function populateGovernorateFilter() {
    const filter = document.getElementById('governorate-filter');
    if (!filter) return;
    
    filter.innerHTML = '<option value="">اختر المحافظة - Select Governorate</option>';
    
    governorates.forEach(gov => {
        const option = document.createElement('option');
        option.value = gov.id;
        option.textContent = gov.name;
        filter.appendChild(option);
    });
}

// Populate course type filter
function populateCourseTypeFilter() {
    const filter = document.getElementById('course-type-filter');
    if (!filter) return;
    
    filter.innerHTML = '<option value="">جميع الكورسات - All Courses</option>';
    
    courseCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        filter.appendChild(option);
    });
}

// Populate courses container with categories
function populateCoursesContainer() {
    const container = document.getElementById('courses-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    courseCategories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'courses-category';
        categorySection.id = `category-${category.id}`;
        
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `<h3>${category.name}</h3>`;
        
        const coursesGrid = document.createElement('div');
        coursesGrid.className = 'courses-grid';
        
        category.courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.dataset.courseId = course.id;
            card.dataset.categoryId = category.id;
            card.innerHTML = `
                <div class="course-header">
                    <h4>${course.title}</h4>
                    <span class="course-level">${course.level}</span>
                </div>
                <div class="course-body">
                    <p class="course-description">${course.description}</p>
                    <button class="btn scroll-link" data-course-id="${course.id}" disabled>أختار المحافظة أولاً - Select Your Governrate First </button>
                </div>
            `;
            coursesGrid.appendChild(card);
        });
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(coursesGrid);
        container.appendChild(categorySection);
    });
    
    // Initially show all categories
    document.querySelectorAll('.courses-category').forEach(cat => {
        cat.classList.add('active');
    });
}

// Set up event listeners
function setupEventListeners() {
    // Directorate items click
    document.querySelectorAll('.directorate-item').forEach(item => {
        item.addEventListener('click', function() {
            selectGovernorate(this.dataset.govId);
        });
    });

    // Course buttons click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.dataset.courseId) {
            if (selectedGovernorate) {
                openCourse(e.target.dataset.courseId);
            } else {
                alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            }
        }
    });

    // Filter change events
    const governorateFilter = document.getElementById('governorate-filter');
    if (governorateFilter) {
        governorateFilter.addEventListener('change', function() {
            selectedGovernorate = this.value;
            applyFilters();
        });
    }

    const courseTypeFilter = document.getElementById('course-type-filter');
    if (courseTypeFilter) {
        courseTypeFilter.addEventListener('change', function() {
            selectedCourseType = this.value;
            applyFilters();
        });
    }

    // Reset filter button
    const resetButton = document.getElementById('filter-reset');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            resetFilters();
        });
    }
}

// Set up smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Select a governorate
function selectGovernorate(govId) {
    try {
        // Update selected governorate
        selectedGovernorate = govId;
        
        // Update filter dropdown
        const governorateFilter = document.getElementById('governorate-filter');
        if (governorateFilter) governorateFilter.value = govId;
        
        // Find governorate data
        const gov = governorates.find(g => g.id === govId);
        if (!gov) return;
        
        // Update directorate items
        document.querySelectorAll('.directorate-item').forEach(item => {
            if (item.dataset.govId === govId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Update map view
        if (map) {
            map.setView([gov.lat, gov.lng], 8);
        }
        
        // Update markers
        Object.keys(markers).forEach(id => {
            if (id === govId) {
                markers[id].setStyle({
                    fillColor: '#C8A04F',
                    color: '#0A2342'
                });
            } else {
                markers[id].setStyle({
                    fillColor: '#0A2342',
                    color: '#C8A04F'
                });
            }
        });
        
        // Update selected governorate display
        const display = document.getElementById('selected-governorate-display');
        const govName = document.getElementById('selected-gov-name');
        
        if (govName) govName.textContent = gov.name;
        if (display) display.classList.add('active');
        
        // Apply filters to update course display
        applyFilters();
    } catch (error) {
        showError('حدث خطأ أثناء اختيار المحافظة: ' + error.message);
    }
}

// Apply filters to courses
function applyFilters() {
    try {
        const categories = document.querySelectorAll('.courses-category');
        let hasVisibleCourses = false;
        
        categories.forEach(category => {
            const categoryId = category.id.replace('category-', '');
            const courses = category.querySelectorAll('.course-card');
            let categoryHasVisibleCourses = false;
            
            courses.forEach(course => {
                const courseId = course.dataset.courseId;
                let shouldShow = true;
                
                // Filter by governorate
                if (selectedGovernorate && (!courseLinks[selectedGovernorate] || !courseLinks[selectedGovernorate][courseId])) {
                    shouldShow = false;
                }
                
                // Filter by course type
                if (selectedCourseType && categoryId !== selectedCourseType) {
                    shouldShow = false;
                }
                
                if (shouldShow) {
                    course.style.display = 'block';
                    categoryHasVisibleCourses = true;
                    hasVisibleCourses = true;
                    
                    // Update course button
                    const button = course.querySelector('.btn');
                    if (selectedGovernorate) {
                        const gov = governorates.find(g => g.id === selectedGovernorate);
                        if (button && gov) {
                            button.disabled = false;
                            button.textContent = `فتح الدورة لـ ${gov.name} - Open Course for ${gov.namee}`;
                        }
                    } else {
                        if (button) {
                            button.disabled = true;
                            button.textContent = 'فتح الدورة للمحافظة المختارة - Open Course for Selected Governorate';
                        }
                    }
                } else {
                    course.style.display = 'none';
                }
            });
            
            // Show/hide category based on whether it has visible courses
            if (categoryHasVisibleCourses) {
                category.classList.add('active');
            } else {
                category.classList.remove('active');
            }
        });
        
        // Show message if no courses match filters
        const coursesSection = document.getElementById('courses');
        if (!coursesSection) return;
        
        let noCoursesMessage = coursesSection.querySelector('.no-courses-message');
        
        if (!hasVisibleCourses) {
            if (!noCoursesMessage) {
                noCoursesMessage = document.createElement('div');
                noCoursesMessage.className = 'no-courses-message';
                noCoursesMessage.style.textAlign = 'center';
                noCoursesMessage.style.padding = '40px';
                noCoursesMessage.style.backgroundColor = 'var(--white)';
                noCoursesMessage.style.borderRadius = 'var(--border-radius)';
                noCoursesMessage.style.boxShadow = 'var(--shadow)';
                noCoursesMessage.innerHTML = `
                    <h3>لا توجد دورات متاحة - No Courses Available</h3>
                    <p>لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                `;
                coursesSection.appendChild(noCoursesMessage);
            }
        } else if (noCoursesMessage) {
            noCoursesMessage.remove();
        }
    } catch (error) {
        showError('حدث خطأ أثناء تطبيق الفلاتر: ' + error.message);
    }
}

// Reset all filters
function resetFilters() {
    try {
        selectedGovernorate = null;
        selectedCourseType = null;
        
        const governorateFilter = document.getElementById('governorate-filter');
        if (governorateFilter) governorateFilter.value = '';
        
        const courseTypeFilter = document.getElementById('course-type-filter');
        if (courseTypeFilter) courseTypeFilter.value = '';
        
        document.querySelectorAll('.directorate-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const display = document.getElementById('selected-governorate-display');
        if (display) display.classList.remove('active');
        
        Object.keys(markers).forEach(id => {
            markers[id].setStyle({
                fillColor: '#0A2342',
                color: '#C8A04F'
            });
        });
        
        applyFilters();
    } catch (error) {
        showError('حدث خطأ أثناء إعادة تعيين الفلاتر: ' + error.message);
    }
}

// Open course for selected governorate
function openCourse(courseId) {
    try {
        if (!selectedGovernorate) {
            alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            return;
        }
        
        // Find course and governorate data
        const gov = governorates.find(g => g.id === selectedGovernorate);
        if (!gov) return;
        
        // Get the actual course link
        let courseUrl = '#';
        
        if (courseLinks[selectedGovernorate] && courseLinks[selectedGovernorate][courseId]) {
            courseUrl = courseLinks[selectedGovernorate][courseId];
            
            // Open the course in a new tab
            window.open(courseUrl, '_blank', 'noopener,noreferrer');
        } else {
            alert(`عذراً، الرابط غير متوفر حالياً للدورة في محافظة ${gov.name}`);
        }
    } catch (error) {
        showError('حدث خطأ أثناء فتح الدورة: ' + error.message);
    }


// Mobile sidebar functionality - إزالة لأن القائمة لن تستخدم في الهواتف
function initMobileSidebar() {
    // هذه الوظيفة لن تستخدم في الهواتف
    if (window.innerWidth >= 768) {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const sidebar = document.getElementById('directorates-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (mobileToggle && sidebar && overlay) {
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            overlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                this.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        }
    }
}

// تحسين اختيار المحافظة في الفلتر للهواتف
function enhanceMobileSelect() {
    const governorateFilter = document.getElementById('governorate-filter');
    
    if (governorateFilter && window.innerWidth <= 767) {
        // إضافة placeholder محسن للهواتف
        const defaultOption = governorateFilter.querySelector('option[value=""]');
        if (defaultOption) {
            defaultOption.textContent = '👆 اختر المحافظة - Select Governorate';
        }
        
        // تحسين تجربة المستخدم في الهواتف
        governorateFilter.addEventListener('focus', function() {
            this.style.backgroundColor = 'var(--light-gray)';
        });
        
        governorateFilter.addEventListener('blur', function() {
            this.style.backgroundColor = 'var(--white)';
        });
    }
}

// تحسين النافذة المنبثقة للكورسات
function enhanceCourseLinks() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.dataset.courseId) {
            if (!selectedGovernorate) {
                // تحسين رسالة التنبيه في الهواتف
                if (window.innerWidth <= 767) {
                    showMobileAlert('يرجى اختيار المحافظة أولاً من القائمة أعلاه');
                } else {
                    alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
                }
                e.preventDefault();
                return;
            }
            
            // فتح الرابط في نافذة جديدة مع تحسينات للهواتف
            openCourse(e.target.dataset.courseId);
            e.preventDefault();
        }
    });
}

// وظيفة لعرض تنبيه محسن في الهواتف
function showMobileAlert(message) {
    // إنشاء عنصر التنبيه
    const alertDiv = document.createElement('div');
    alertDiv.className = 'mobile-alert';
    alertDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--navy), #1a3a5f);
        color: var(--white);
        padding: 20px;
        border-radius: var(--border-radius);
        text-align: center;
        z-index: 3000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        max-width: 90%;
        width: 300px;
    `;
    
    alertDiv.innerHTML = `
        <h3 style="color: var(--gold); margin-bottom: 10px;">تنبيه</h3>
        <p style="margin-bottom: 15px;">${message}</p>
        <button class="btn" onclick="this.parentElement.remove()" style="background: var(--gold); color: var(--navy); border: none; padding: 10px 20px; border-radius: var(--border-radius); cursor: pointer;">
            حسناً
        </button>
    `;
    
    
    document.body.appendChild(alertDiv);
    
    // إزالة التنبيه تلقائياً بعد 5 ثواني
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    try {
        showLoading();
        
        // Initialize EDF Guide
        initEDFGuide();
        
        // تهيئة الخريطة فقط في الشاشات الكبيرة
        if (window.innerWidth >= 768) {
            initializeMap();
            populateDirectoratesGrid();
            initMobileSidebar();
        } else {
            // إخفاء عناصر الخريطة في الهواتف
            const governoratesSection = document.getElementById('governorates');
            if (governoratesSection) {
                governoratesSection.style.display = 'none';
            }
        }
        
        populateGovernorateFilter();
        populateCourseTypeFilter();
        populateCoursesContainer();
        setupEventListeners();
        setupSmoothScrolling();
        enhanceMobileSelect();
        enhanceCourseLinks();
        
        hideLoading();
    } catch (error) {
        showError('حدث خطأ أثناء تحميل التطبيق: ' + error.message);
        hideLoading();
    }
});

// تحسين وظيفة openCourse للهواتف
function openCourse(courseId) {
    try {
        if (!selectedGovernorate) {
            if (window.innerWidth <= 767) {
                showMobileAlert('يرجى اختيار المحافظة أولاً من القائمة أعلاه');
            } else {
                alert('يرجى اختيار محافظة أولاً - Please select a governorate first');
            }
            return;
        }
        
        const gov = governorates.find(g => g.id === selectedGovernorate);
        if (!gov) return;
        
        let courseUrl = '#';
        
        if (courseLinks[selectedGovernorate] && courseLinks[selectedGovernorate][courseId]) {
            courseUrl = courseLinks[selectedGovernorate][courseId];
            
            // فتح الرابط في نافذة جديدة مع تحسينات للهواتف
            const newWindow = window.open(courseUrl, '_blank', 'noopener,noreferrer');
            
            // تحسين تجربة المستخدم في الهواتف
            if (window.innerWidth <= 767 && newWindow) {
                // إضافة رسالة تأكيد في الهواتف
                showMobileAlert('تم فتح الدورة في نافذة جديدة. قد تحتاج إلى السماح بالنوافذ المنبثقة إذا لم تفتح تلقائياً.');
            }
        } else {
            const message = `عذراً، الرابط غير متوفر حالياً للدورة في محافظة ${gov.name}`;
            if (window.innerWidth <= 767) {
                showMobileAlert(message);
            } else {
                alert(message);
            }
        }
    } catch (error) {
        const errorMessage = 'حدث خطأ أثناء فتح الدورة: ' + error.message;
        if (window.innerWidth <= 767) {
            showMobileAlert(errorMessage);
        } else {
            alert(errorMessage);
        }
    }
}

// تحسين applyFilters للهواتف
function applyFilters() {
    try {
        const categories = document.querySelectorAll('.courses-category');
        let hasVisibleCourses = false;
        
        categories.forEach(category => {
            const categoryId = category.id.replace('category-', '');
            const courses = category.querySelectorAll('.course-card');
            let categoryHasVisibleCourses = false;
            
            courses.forEach(course => {
                const courseId = course.dataset.courseId;
                let shouldShow = true;
                
                if (selectedGovernorate && (!courseLinks[selectedGovernorate] || !courseLinks[selectedGovernorate][courseId])) {
                    shouldShow = false;
                }
                
                if (selectedCourseType && categoryId !== selectedCourseType) {
                    shouldShow = false;
                }
                
                if (shouldShow) {
                    course.style.display = 'block';
                    categoryHasVisibleCourses = true;
                    hasVisibleCourses = true;
                    
                    const button = course.querySelector('.btn');
                    if (selectedGovernorate) {
                        const gov = governorates.find(g => g.id === selectedGovernorate);
                        if (button && gov) {
                            button.disabled = false;
                            // تحسين النص في الهواتف
                            if (window.innerWidth <= 767) {
                                button.textContent = `📖 فتح الدورة ل${gov.name}`;
                            } else {
                                button.textContent = `فتح الدورة ل${gov.name} - Open Course for ${gov.name}`;
                            }
                        }
                    } else {
                        if (button) {
                            button.disabled = true;
                            // تحسين النص في الهواتف
                            if (window.innerWidth <= 767) {
                                button.textContent = '👆 اختر المحافظة أولاً';
                            } else {
                                button.textContent = 'فتح الدورة للمحافظة المختارة - Open Course for Selected Governorate';
                            }
                        }
                    }
                } else {
                    course.style.display = 'none';
                }
            });
            
            if (categoryHasVisibleCourses) {
                category.classList.add('active');
            } else {
                category.classList.remove('active');
            }
        });
        
        // عرض رسالة في الهواتف عندما لا توجد كورسات
        const coursesSection = document.getElementById('courses');
        if (!coursesSection) return;
        
        let noCoursesMessage = coursesSection.querySelector('.no-courses-message');
        
        if (!hasVisibleCourses) {
            if (!noCoursesMessage) {
                noCoursesMessage = document.createElement('div');
                noCoursesMessage.className = 'no-courses-message mobile-alert';
                noCoursesMessage.style.textAlign = 'center';
                noCoursesMessage.style.padding = '20px';
                noCoursesMessage.style.backgroundColor = 'var(--white)';
                noCoursesMessage.style.borderRadius = 'var(--border-radius)';
                noCoursesMessage.style.boxShadow = 'var(--shadow)';
                noCoursesMessage.style.margin = '20px 0';
                
                if (window.innerWidth <= 767) {
                    noCoursesMessage.innerHTML = `
                        <h3 style="color: var(--navy); margin-bottom: 10px;">📭 لا توجد دورات</h3>
                        <p style="color: #666;">لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                    `;
                } else {
                    noCoursesMessage.innerHTML = `
                        <h3>لا توجد دورات متاحة - No Courses Available</h3>
                        <p>لا توجد دورات تطابق معايير البحث المحددة. حاول تغيير الفلاتر.</p>
                    `;
                }
                coursesSection.appendChild(noCoursesMessage);
            }
        } else if (noCoursesMessage) {
            noCoursesMessage.remove();
        }
    } catch (error) {
        console.error('Error applying filters:', error);
    }
}

}
