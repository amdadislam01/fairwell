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
        funnyText: "পঞ্জাবি পইড়া একদম হিরো লুক নিয়ে ক্লাসে আসে\nকিন্তু ল্যাবে কোড করতে বললে দোস্তের পিসি দেখতে থাকে",
      },
      {
        id: 2,
        src: "/photos/Afifa Aktar Turza.jpeg",
        title: "Afifa Aktar Turza",
        tag: "CST Batch 22-23",
        funnyText: "ক্লাসের সবচেয়ে শান্ত আর মিষ্টি মেয়েটা\nঅথচ অ্যাসাইনমেন্ট জমা দেওয়ার সময় সবার আগে থাকে",
      },
      {
        id: 3,
        src: "/photos/Akhi Akter.jpeg",
        title: "Akhi Akter",
        tag: "CST Batch 22-23",
        funnyText: "সারাদিন চিল মুডে ঘুরে বেড়ায় সবসময়\nপরীক্ষার আগের রাতে হঠাৎ পড়ে সেরা রেজাল্ট করে ফেলে",
      },
      {
        id: 4,
        src: "/photos/Anamul Dewan.jpeg",
        title: "Anamul Dewan",
        tag: "CST Batch 22-23",
        funnyText: "ভাইভা বোর্ডে খুব সিরিয়াস মুখ করে বসে থাকে\nস্যার প্রশ্ন করতেই বলে স্যার একটু পরেই তো আসছি",
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
        funnyText: "ল্যাব ক্লাসে সবসময় হাতের সুন্দর নোট তৈরি রাখে\nপরীক্ষার আগে পুরো ক্লাসের সিআর হয়ে সাহায্য করে",
      },
      {
        id: 7,
        src: "/photos/Forhad Hossain.jpeg",
        title: "Forhad Hossain",
        tag: "CST Batch 22-23",
        funnyText: "চশমার পেছনে লুকিয়ে থাকা সিএসটির গ্যাংস্টার\nক্যান্টিনে গিয়ে বিল দেওয়ার সময় পকেটে হাত দেয় না",
      },
      {
        id: 8,
        src: "/photos/Foyzun Nesha Borsha.jpeg",
        title: "Foyzun Nesha Borsha",
        tag: "CST Batch 22-23",
        funnyText: "সুন্দর শাড়ি পরে ফটোশুটে একদম মডেল ভাইব\nঅথচ গ্রুপ প্রজেক্টের দিনে হঠাৎ গায়েব হয়ে যায়",
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
        funnyText: "সব কাজের কাজী আর ক্লাসের আসল হাসির রাজা\nটিচার আসার আগে দরজায় পাহাড়াদার হয়ে দাঁড়িয়ে থাকে",
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
        funnyText: "ব্ল্যাক শার্ট পরে ভাইভা দিতে ঢোকে নায়কের মতো\nকিন্তু প্রেজেন্টেশন স্লাইড ওপেন করতেই ভুলে যায়",
      },
      {
        id: 13,
        src: "/photos/MD Zahidul Islam.jpeg",
        title: "Md Zahidul Islam",
        tag: "CST Batch 22-23",
        funnyText: "ক্লাসের সবচেয়ে ভদ্র আর গুড বয় টাইপ বন্ধু\nপরীক্ষার হলে রোল নম্বর ডেকে ডেকে সাহায্য করে",
      },
      {
        id: 14,
        src: "/photos/MD. SAJAL MIA.jpeg",
        title: "Md Sajal Mia",
        tag: "CST Batch 22-23",
        funnyText: "ল্যাব রিপোর্টে সিগনেচার নেওয়ার লাইনে সব সময় ফাস্ট\nকিন্তু ক্লাস বাঙ্কের প্ল্যান হলে সবার আগে রাজি হয়",
      },
      {
        id: 15,
        src: "/photos/MD.RAKIBUL HASAN RIDOY.jpeg",
        title: "Md Rakibul Hasan Ridoy",
        tag: "CST Batch 22-23",
        funnyText: "চশমা পরে ভাব নেয় খুব বড়মাপের প্রোগ্রামার\nকোডে রান এরর আসলে দোস্তদের বলে পিসি নষ্ট রে",
      },
      {
        id: 16,
        src: "/photos/Maruf Ahamed.jpeg",
        title: "Maruf Ahamed",
        tag: "CST Batch 22-23",
        funnyText: "রাজকীয় স্টাইলে ক্লাসের পডিয়ামে ছবি তোলে\nঅথচ টিচার এটেন্ডেন্স ডাকলে শেষ মুহূর্তে বলে প্রেজেন্ট স্যার",
      },
      {
        id: 17,
        src: "/photos/Md. Hasibur Rahman.jpeg",
        title: "Md Hasibur Rahman",
        tag: "CST Batch 22-23",
        funnyText: "স্যুট-টাই পরে কর্পোরেট বস টাইপ অ্যাটিটিউড\nকিন্তু প্র্যাকটিকাল প্রজেক্ট জমা দিতে রাত জাগে",
      },
      {
        id: 18,
        src: "/photos/Meraz Hossain Shafin.jpeg",
        title: "Meraz Hossain Shafin",
        tag: "CST Batch 22-23",
        funnyText: "সবসময় চিল মুডে থাকে আর আড্ডা মাতিয়ে রাখে\nপরীক্ষার আগের রাতে গ্রুপ কলে সবাইকে পড়া বুঝায়",
      },
      {
        id: 19,
        src: "/photos/Mohammad Najmul Hossain Shikder.jpeg",
        title: "Mohammad Najmul Hossain Shikder",
        tag: "CST Batch 22-23",
        funnyText: "চশমার আড়ালে থাকা ব্রিলিয়ান্ট ভাবুক কবি\nল্যাব ক্লাসে কোড না লিখে ভবিষ্যৎ পরিকল্পনা করে",
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
        funnyText: "সুঠাম দেহের ড্যাশিং লুক নিয়ে ক্লাসে পা রাখে\nকিন্তু ভাইভায় স্যার প্রশ্ন করলে মুচকি হেসে বসে থাকে",
      },
      {
        id: 22,
        src: "/photos/Robayet Rizve.jpeg",
        title: "Robayet Rizve",
        tag: "CST Batch 22-23",
        funnyText: "লাল পঞ্জাবিতে যেন কলেজের ব্র্যান্ড অ্যাম্বাসেডর\nল্যাবে কোড সাবমিট না করেই ক্যান্টিনে রওনা দেয়",
      },
      {
        id: 23,
        src: "/photos/SURAYA ISLAM RITA.jpeg",
        title: "Suraya Islam Rita",
        tag: "CST Batch 22-23",
        funnyText: "ট্রেডিশনাল লুকে যেন একদম রাজকন্যা ভাইব\nক্লাস টপ করার পর বলে আমি তো কিছুই পড়ি নাই",
      },
      {
        id: 24,
        src: "/photos/Sabikun Nahan Anni.png",
        title: "Sabikun Nahan Anni",
        tag: "CST Batch 22-23",
        funnyText: "এস্থেটিক শাড়িতে ফটোশুটের মাস্টারমাইন্ড\nঅথচ প্রজেক্ট কভার পেজ বানাতে দোস্তদের নক দেয়",
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
        funnyText: "হিরোইক লুকে ক্যাম্পাসের আসল পোস্টার বয়\nপরীক্ষার হলে খাতা আড়াল করে সবাইকে সিগন্যাল দেয়",
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
};

