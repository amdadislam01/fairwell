export interface PhotoItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  funnyText: string;
}

export interface FarewellConfig {
  institution: {
    name: string;
    department: string;
    batch: string;
    academicYear: string;
    logoPath: string;
    logoAlt: string;
    establishedYear: string;
  };
  countdown: {
    numbers: number[];
    durationPerNumber: number;
  };
  topHeader: {
    batchYear: string;
    caption: string;
    emojis: string;
  };
  theEndBadge: {
    title: string;
    batchLabel: string;
    batchYear: string;
  };
  memoryWords: string[];
  photos: {
    displayDurationSeconds: number;
    items: PhotoItem[];
  };
  reveal: {
    department: string;
    ampersand: string;
    technology: string;
    batchTag: string;
    institute: string;
  };
  title: {
    main: string;
    year: string;
    tagline: string;
  };
  finalMessage: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  eventDetails: {
    title: string;
    department: string;
    institute: string;
    date: string;
    time: string;
    organizedByLabel: string;
    organizer: string;
    location: string;
  };
  organizers: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: number;
      name: string;
      role: string;
      photo: string;
      tagline: string;
    }[];
  };
  groupPhotos: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: number;
      src: string;
      caption?: string;
    }[];
  };
  audio: {
    src: string;
    title: string;
    subtitle: string;
  };
}

export const farewellContent: FarewellConfig = {
  institution: {
    name: "National Polytechnic Institute",
    department: "Computer Science & Technology",
    batch: "2023–2023",
    academicYear: "2023–2023",
    logoPath: "/logo/npi-logo.jpg",
    logoAlt: "National Polytechnic Institute Official Crest Logo",
    establishedYear: "2001",
  },
  countdown: {
    numbers: [5, 4, 3, 2, 1],
    durationPerNumber: 1.4,
  },
  topHeader: {
    batchYear: "CST MEMORIES",
    caption: "From 'see you tomorrow' to 'goodbye'",
    emojis: "🥺 💔",
  },
  theEndBadge: {
    title: "THE END",
    batchLabel: "BATCH",
    batchYear: "2023–2026",
  },
  memoryWords: [
    "ATTENDANCE",
    "BUNK",
    "LATE ENTRIES",
    "ASSIGNMENTS",
    "INTERNAL MARKS",
    "LAST BENCHES",
    "EXAMS",
    "STRESS",
    "LAST MINUTE STUDY",
    "CANTEEN TALKS",
    "MASS BUNKS",
    "CULTURAL EVENTS",
    "GROUP PROJECTS",
    "PRESENTATIONS",
    "PHOTOSHOOTS",
    "REELS",
    "FRIENDSHIP",
    "BEST FRIENDS",
    "CRUSHES",
    "LOVE",
    "FIGHTS",
    "MEMORIES",
    "GOODBYE",
  ],
  photos: {
    displayDurationSeconds: 4,
    items: [
      {
        id: 1,
        src: "/photos/Abid Hossain Sifat.jpeg",
        title: "Abid Hossain Sifat",
        tag: "CST Batch 22-23",
        funnyText: "গার্লফ্রেন্ড ছেড়ে চলে গেছে তাও কোনো আফসোস নাই\nকিন্তু পড়ালেখা যে তার পিছু ছাড়তেই চাচ্ছে না!",
      },
      {
        id: 2,
        src: "/photos/Afifa Aktar Turza.jpeg",
        title: "Afifa Aktar Turza",
        tag: "CST Batch 22-23",
        funnyText: "পরীক্ষার আগে সবসময় বলে 'আমি তো কিছুই পারি না'\nঅথচ রেজাল্ট দিলে দেখা যায় ক্লাসের সবচেয়ে সেরা মার্কস!",
      },
      {
        id: 3,
        src: "/photos/Akhi Akter.jpeg",
        title: "Akhi Akter",
        tag: "CST Batch 22-23",
        funnyText: "পরীক্ষার রেজাল্টের দিনে বন্ধুদের মোটিভেশনাল ডায়লগ—\n'তুই তো ফেল করিস নাই রে, স্যারেরাই তোকে পাস করায় নাই!'",
      },
      {
        id: 4,
        src: "/photos/Anamul Dewan.jpeg",
        title: "Anamul Dewan",
        tag: "CST Batch 22-23",
        funnyText: "লুকে আর অ্যাটিটিউডে ক্লাসের খাঁটি বড়লোক\nপড়াশোনা যেমনেই চলুক, ফিউচার কিন্তু একদম ব্রাইট!",
      },
      {
        id: 5,
        src: "/photos/Armin Akter.jpeg",
        title: "Armin Akter",
        tag: "CST Batch 22-23",
        funnyText: "ক্লাসে পেছনের বেঞ্চে বসে মিষ্টি হাসি দেয়\nস্যার পড়া ধরলেই মুখ লুকিয়ে নোটখাতা খুলতে থাকে",
      },
      {
        id: 6,
        src: "/photos/Ayesha Bushra.jpeg",
        title: "Ayesha Bushra",
        tag: "CST Batch 22-23",
        funnyText: "ছবি তোলার পর বুশরাকে সবাই সান্ত্বনা দিয়ে একটাই কথা বলে—\n'তুই তো মোটা না রে দোস্ত, মোবাইল ক্যামেরাটাই তো খারাপ!'",
      },
      {
        id: 7,
        src: "/photos/Forhad Hossain.jpeg",
        title: "Forhad Hossain",
        tag: "CST Batch 22-23",
        funnyText: "সব জায়গায় বন্ধুদের সাথে ঘুরতে যাওয়ার ট্যুরে ফাস্ট!\nঅথচ বিল আর খরচের সময় পকেটে এক টাকাও থাকে না!",
      },
      {
        id: 8,
        src: "/photos/Foyzun Nesha Borsha.jpeg",
        title: "Foyzun Nesha Borsha",
        tag: "CST Batch 22-23",
        funnyText: "অকামে অলরাউন্ডার আর কথা বলায় ক্লাসের সেরা টপার\nতবে যেকোনো কাজ দিলে ফিনিশিং দেয় একদম পারফেক্ট!",
      },
      {
        id: 9,
        src: "/photos/Hamim Sheak.jpeg",
        title: "Hamim Sheak",
        tag: "CST Batch 22-23",
        funnyText: "প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ার লুক নিয়ে ঘোরে\nকিন্তু ল্যাপটপে ব্যাকগ্রাউন্ডে সবসময় গেম চালানো থাকে",
      },
      {
        id: 10,
        src: "/photos/MAHAMUDUL HASSAN PURNO.jpeg",
        title: "Mahamudul Hassan Purno",
        tag: "CST Batch 22-23",
        funnyText: "ফিউচার আর ক্যারিয়ার নিয়ে ২৪ ঘণ্টা অলওয়েজ মহাচিন্তায় অস্থির!\nভবিষ্যতের প্ল্যান বানাতে বানাতেই বর্তমান পার হয়ে যায়!",
      },
      {
        id: 11,
        src: "/photos/MD Amdad Islam.jpeg",
        title: "Md Amdad Islam",
        tag: "CST Batch 22-23",
        funnyText: "সিএসটির অলরাউন্ডার আর ক্লাসের মধ্যমণি\nযার ল্যাপটপ ছাড়া পুরো ব্যাচের প্রজেক্টই অচল থাকে",
      },
      {
        id: 12,
        src: "/photos/MD MAMUN AHMED SAGOR.jpeg",
        title: "Md Mamun Ahmed Sagor",
        tag: "CST Batch 22-23",
        funnyText: "ক্লাসের এক নম্বর কৃপণ আর পকেট-লক কিং!\nভুলে গিয়েও কোনোদিন কাউকে ১ টাকার শিঙাড়াও খাওয়ায় না!",
      },
      {
        id: 13,
        src: "/photos/MD Zahidul Islam.jpeg",
        title: "Md Zahidul Islam",
        tag: "CST Batch 22-23",
        funnyText: "আচার-ব্যবহারে পুরো রাজকীয় যুবরাজ টাইপ ভালো ছেলে\nঅথচ সবার সাথে চিল করায় ক্লাসের সবচেয়ে আগে!",
      },
      {
        id: 14,
        src: "/photos/MD. SAJAL MIA.jpeg",
        title: "Md Sajal Mia",
        tag: "CST Batch 22-23",
        funnyText: "মন থেকে পরম পরহেজগার আর খাঁটি ধার্মিক ছেলে\nপরীক্ষার আগে যার দোয়ার ওপর ভরসা রাখে পুরো ব্যাচ!",
      },
      {
        id: 15,
        src: "/photos/MD.RAKIBUL HASAN RIDOY.jpeg",
        title: "Md Rakibul Hasan Ridoy",
        tag: "CST Batch 22-23",
        funnyText: "বাইরে দেখতে মাসুম হলেও তেল মারায় ক্লাসের সেরা ওস্তাদ!\nস্যারদের মাখন মেরে কাজ হাসিল করতে তার কোনো তুলনা নাই!",
      },
      {
        id: 16,
        src: "/photos/Maruf Ahamed.jpeg",
        title: "Maruf Ahamed",
        tag: "CST Batch 22-23",
        funnyText: "পড়াশোনা আর ফিউচার নিয়ে অতিরিক্ত চিন্তায় অস্থির!\nচিন্তা করতে করতে মাথার চুল পড়তে পড়তে এখন শেষ অবস্থা!",
      },
      {
        id: 17,
        src: "/photos/Md. Hasibur Rahman.jpeg",
        title: "Md Hasibur Rahman",
        tag: "CST Batch 22-23",
        funnyText: "সারাদিন মেয়েদের পেছনে পেছনে ঘুরঘুর করাই যার মূল কাজ!\nঅথচ লাভ তো কিছুই হয় না, দিনশেষে হাত একদম খালি!",
      },
      {
        id: 18,
        src: "/photos/Meraz Hossain Shafin.jpeg",
        title: "Meraz Hossain Shafin",
        tag: "CST Batch 22-23",
        funnyText: "আমাদের ক্লাসের স্বঘোষিত 'নারী বিশেষজ্ঞ'\nমেয়েদের বিষয়ে জ্ঞান দিতে তার কোনো তুলনা নাই!",
      },
      {
        id: 19,
        src: "/photos/Mohammad Najmul Hossain Shikder.jpeg",
        title: "Mohammad Najmul Hossain Shikder",
        tag: "CST Batch 22-23",
        funnyText: "ভাই রে তুই আগে বিয়াটা কইরা ফেল!\nতোর হাল দেইখা আমি বিয়া করার সাহস পামু!",
      },
      {
        id: 20,
        src: "/photos/Nahid Alam Rahat.jpeg",
        title: "Nahid Alam Rahat",
        tag: "CST Batch 22-23",
        funnyText: "গ্যাংস্টার পোজে ফটো তুলে সোশ্যাল মিডিয়ায় হিট\nক্যান্টিনের শিঙাড়া আর চায়ের টেবিলে নিয়মিত বস",
      },
      {
        id: 21,
        src: "/photos/Rabbi Hossain Nazim.jpeg",
        title: "Rabbi Hossain Nazim",
        tag: "CST Batch 22-23",
        funnyText: "সারাদিন নেশাখোরদের মতো চোখ লাল করে ক্লাসে ঝিমায়\nঅথচ আড্ডার ডাক পড়লেই একদম অল-ইন-ওয়ান ফুল অ্যাক্টিভ!",
      },
      {
        id: 22,
        src: "/photos/Robayet Rizve.jpeg",
        title: "Robayet Rizve",
        tag: "CST Batch 22-23",
        funnyText: "বিয়া করলে নাকি বউ বেশিদিন টিকবে না\nজিনিস ছোট হলেও ডায়লগ আর ভাবের শেষ নাই!",
      },
      {
        id: 23,
        src: "/photos/SURAYA ISLAM RITA.jpeg",
        title: "Suraya Islam Rita",
        tag: "CST Batch 22-23",
        funnyText: "এমনিতে দেখতে একদম শান্ত আর মিষ্টি মেয়ে\nকিন্তু ঝগড়া আর তর্কের ময়দানে একদম সার্টিফাইড এক্সপার্ট!",
      },
      {
        id: 24,
        src: "/photos/Sabikun Nahan Anni.png",
        title: "Sabikun Nahan Anni",
        tag: "CST Batch 22-23",
        funnyText: "সাইলেন্ট কিলার, তলে তলে টেম্পু চালায়\nআমরা বললে হরতাল!",
      },
      {
        id: 25,
        src: "/photos/Sagor mondol.jpeg",
        title: "Sagor Mondol",
        tag: "CST Batch 22-23",
        funnyText: "কিউট স্মাইল দিয়ে স্যারের মন গলানোর মাস্টার\nপরীক্ষার খাতায় ৩ পেজ লিখে বলে আর তো পারি না",
      },
      {
        id: 26,
        src: "/photos/Shanta Islam Eva.jpeg",
        title: "Shanta Islam Eva",
        tag: "CST Batch 22-23",
        funnyText: "কালারফুল লুকে ক্লাসের সবচেয়ে স্টাইলিশ ফ্রেন্ড\nগ্রুপ স্টাডির সময় চা-খাবারের দায়িত্ব নিয়ে নেয়",
      },
      {
        id: 27,
        src: "/photos/Shuvo.jpeg",
        title: "Shuvo",
        tag: "CST Batch 22-23",
        funnyText: "বাইকে করে ঝড়ের বেগে ক্যাম্পাসে এন্ট্রি নেয়\nকিন্তু ফার্স্ট পিরিয়ডের এটেন্ডেন্স সবসময় মিস হয়ে যায়",
      },
      {
        id: 28,
        src: "/photos/Siam.jpeg",
        title: "Siam",
        tag: "CST Batch 22-23",
        funnyText: "সব জায়গায় নাকি তার আত্মীয় আছে— চাপাবাজিতে ফার্স্ট ওস্তাদ!\nমেয়েদের প্রপোজ করে রিজেক্ট খাওয়াই যার প্রতিদিনের কাজ!",
      },
      {
        id: 29,
        src: "/photos/Tabassum.jpeg",
        title: "Tabassum",
        tag: "CST Batch 22-23",
        funnyText: "মিষ্টি হাসির কিউট আর হেল্পফুল সিএসটি স্টার\nসবাইকে ল্যাব রিপোর্ট কপি করার পারমিশন দেয়",
      },
    ],
  },
  reveal: {
    department: "COMPUTER SCIENCE",
    ampersand: "&",
    technology: "TECHNOLOGY",
    batchTag: "BATCH 2023–2026",
    institute: "NATIONAL POLYTECHNIC INSTITUTE",
  },
  title: {
    main: "FAREWELL",
    year: "2026",
    tagline: "THE END OF AN ERA • A LIFETIME OF MEMORIES",
  },
  finalMessage: {
    line1: "THIS IS NOT THE END",
    line2: "OF OUR JOURNEY TOGETHER",
    line3: "A NEW CHAPTER AWAITS US ALL",
    line4: "GOODBYE CLASS OF 2026",
  },
  eventDetails: {
    title: "FAREWELL 2026",
    department: "Computer Science & Technology",
    institute: "National Polytechnic Institute",
    date: "14 September 2026",
    time: "8:30 AM",
    organizedByLabel: "Organized by:",
    organizer: "Students of the Department of Computer Science and Technology",
    location: "Main Auditorium, National Polytechnic Institute Campus",
  },
  audio: {
    src: "https://youtu.be/ZdMlXdsoBKc?si=M7l6-JT9YzEqfku6",
    title: "Farewell Theme Song",
    subtitle: "Amader Shomoy / Smritir Kotha",
  },
  organizers: {
    badge: "SPECIAL THANKS & HONOR",
    title: "CLASS REPRESENTATIVES",
    subtitle: "আয়োজকবৃন্দ • The Visionaries Behind Farewell 2026",
    items: [
      {
        id: 1,
        name: "Foyzun Nesha Borsha",
        role: "Class Representative",
        photo: "/photos/Foyzun Nesha Borsha.jpeg",
        tagline: "Farewell Event Organizer",
      },
      {
        id: 2,
        name: "Md Rakibul Hasan Ridoy",
        role: "Class Representative",
        photo: "/photos/MD.RAKIBUL HASAN RIDOY.jpeg",
        tagline: "Farewell Event Organizer",
      },
      {
        id: 3,
        name: "Md Amdad Islam",
        role: "Class Representative",
        photo: "/photos/MD Amdad Islam.jpeg",
        tagline: "Farewell Event Organizer",
      },
      {
        id: 4,
        name: "Maruf Ahamed",
        role: "Class Representative",
        photo: "/photos/Maruf Ahamed.jpeg",
        tagline: "Farewell Event Organizer",
      },
    ],
  },
  groupPhotos: {
    badge: "UNFORGETTABLE MEMORIES",
    title: "BATCH GROUP GALLERY",
    subtitle: "একসাথে কাটানো অবিস্মরণীয় মুহূর্তসমূহ • CST Batch 2023–2026",
    items: [
      { id: 1, src: "/group/790315632_1792361225280310_205756393876469137_n.jpg", caption: "Group Memory #1" },
      { id: 2, src: "/group/794990980_1419574860279734_6751809731321332212_n.jpg", caption: "Group Memory #2" },
      { id: 3, src: "/group/796457785_1869734750658666_193876680366143503_n.jpg", caption: "Group Memory #3" },
      { id: 4, src: "/group/799525117_1458604052748468_3344306071797456532_n.jpg", caption: "Group Memory #4" },
      { id: 5, src: "/group/799634065_1073579638891946_217669340000236835_n.jpg", caption: "Group Memory #5" },
      { id: 6, src: "/group/799777353_1410819631237286_6008026586379735381_n.jpg", caption: "Group Memory #6" },
      { id: 7, src: "/group/799907072_2064689657750395_760453663763050638_n.jpg", caption: "Group Memory #7" },
      { id: 8, src: "/group/800114170_1107738875015474_2809492784701232398_n.jpg", caption: "Group Memory #8" },
      { id: 9, src: "/group/800316886_1791003765432968_3531388812176249209_n.jpg", caption: "Group Memory #9" },
      { id: 10, src: "/group/800497060_1611208867140923_7818570156711613399_n.jpg", caption: "Group Memory #10" },
      { id: 11, src: "/group/800538498_1444518734281309_564606423822487238_n.jpg", caption: "Group Memory #11" },
      { id: 12, src: "/group/800795623_1565162451496116_7629198678192654339_n.jpg", caption: "Group Memory #12" },
      { id: 13, src: "/group/801127632_28783465577924510_4948417626023620396_n.jpg", caption: "Group Memory #13" },
      { id: 14, src: "/group/801127640_826841743820028_1099427049463639401_n.jpg", caption: "Group Memory #14" },
      { id: 15, src: "/group/801243480_937456686072324_1549839257005729294_n.jpg", caption: "Group Memory #15" },
      { id: 16, src: "/group/801326064_1629999908540835_1534368898921950654_n.jpg", caption: "Group Memory #16" },
      { id: 17, src: "/group/801880574_2034309510534206_1041660780152642941_n.jpg", caption: "Group Memory #17" },
      { id: 18, src: "/group/802307281_1600118101769842_6008630403733010934_n.jpg", caption: "Group Memory #18" },
      { id: 19, src: "/group/802332671_2578560772576897_1941527214605886633_n.jpg", caption: "Group Memory #19" },
      { id: 20, src: "/group/802354949_1120545540632655_9009084748205761453_n.jpg", caption: "Group Memory #20" },
      { id: 21, src: "/group/803196615_2327541767984336_6799406200362493746_n.jpg", caption: "Group Memory #21" },
      { id: 22, src: "/group/803724269_1569608014906907_403745862699146987_n.jpg", caption: "Group Memory #22" },
      { id: 23, src: "/group/804361747_1775474140138585_3037946944887858177_n.jpg", caption: "Group Memory #23" },
      { id: 24, src: "/group/805116094_1620823692902773_7636688658221151668_n.jpg", caption: "Group Memory #24" },
      { id: 25, src: "/group/806141148_1634640501518496_2671891406522326487_n.jpg", caption: "Group Memory #25" },
      { id: 26, src: "/group/806197601_38419074611072714_7035294679358822474_n.jpg", caption: "Group Memory #26" },
      { id: 27, src: "/group/806222760_2163456184238904_6813178638706861238_n.jpg", caption: "Group Memory #27" },
      { id: 28, src: "/group/806270693_2120125741910185_7987033635302267890_n.jpg", caption: "Group Memory #28" },
      { id: 29, src: "/group/806683281_2229244924523126_1634039656381527933_n.jpg", caption: "Group Memory #29" },
      { id: 30, src: "/group/808108878_1610433137538972_5729997701667844074_n.jpg", caption: "Group Memory #30" },
      { id: 31, src: "/group/808239205_2008588919640528_5940507423441566249_n.jpg", caption: "Group Memory #31" },
      { id: 32, src: "/group/808414213_1777081270109819_2181650398056834659_n.jpg", caption: "Group Memory #32" },
      { id: 33, src: "/group/808883014_929133879791727_134690116150455269_n.jpg", caption: "Group Memory #33" },
    ],
  },
};

