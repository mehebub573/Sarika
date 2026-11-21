import nikahPortraitImg from '../assets/images/gallery_nikah_portrait_1794936150764.jpg';
import gayeHoludImg from '../assets/images/gallery_gaye_holud_1794936151528.jpg';
import mehendiHandsImg from '../assets/images/gallery_mehendi_hands_1794936151871.jpg';
import eveningReceptionImg from '../assets/images/gallery_evening_reception_1794936151773.jpg';

export type Language = 'bn' | 'en';

export type EventKey = 'holud' | 'biye' | 'boubhat';

export interface CeremonyEvent {
  key: EventKey;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  dateLabel: Record<Language, string>;
  timeLabel: Record<Language, string>;
  venueName: Record<Language, string>;
  venueAddress: Record<Language, string>;
  landmark: Record<Language, string>;
  mapQuery: string;
  coords: {lat: number; lng: number};
  icsStart: string;
  icsEnd: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  aspect: 'landscape' | 'portrait' | 'wide';
  title: Record<Language, string>;
  caption: Record<Language, string>;
  momentDate: Record<Language, string>;
}

export const WEDDING_TARGET_ISO = '2030-03-30T19:00:00+06:00';

export const MUSIC_TRACK = {
  title: 'Alfaaz',
  artist: 'Hamza Malik & Zain Zohaib',
  youtubeId: 'Vug4YLiIsaU',
  youtubeUrl: 'https://www.youtube.com/watch?v=Vug4YLiIsaU',
};

export const CEREMONY_EVENTS: CeremonyEvent[] = [
  {
    key: 'holud',
    title: {
      bn: 'গায়ে হলুদ',
      en: 'Gaye Holud',
    },
    tagline: {
      bn: 'হলুদ, গান আর হাসিমুখে থাক এক চিরকাল',
      en: 'Turmeric, songs, marigolds, and joyful laughter',
    },
    dateLabel: {
      bn: 'বৃহস্পতিবার, ২৮ মার্চ ২০৩০',
      en: 'Thursday, 28 March 2030',
    },
    timeLabel: {
      bn: 'বিকেল ৫টা থেকে রাত ১০টা',
      en: '5:00 PM – 10:00 PM',
    },
    venueName: {
      bn: 'গুলশান লেকশোর কনভেনশন',
      en: 'Gulshan Lakeshore Convention',
    },
    venueAddress: {
      bn: 'রোড ৭১, গুলশান-২, ঢাকা ১২১২, বাংলাদেশ',
      en: 'Road 71, Gulshan-2, Dhaka 1212, Bangladesh',
    },
    landmark: {
      bn: 'গুলশান ২ গোলচত্বরের পূর্ব পাশে · ভ্যালে পার্কিং সুবিধা রয়েছে',
      en: 'East of Gulshan 2 Circle · Valet parking available',
    },
    mapQuery: 'Gulshan 2 Dhaka Bangladesh',
    coords: {lat: 23.7949, lng: 90.4144},
    icsStart: '20300328T170000',
    icsEnd: '20300328T220000',
  },
  {
    key: 'biye',
    title: {
      bn: 'বিয়ে',
      en: 'Wedding & Nikah',
    },
    tagline: {
      bn: 'ভালোবাসার বন্ধনে আবদ্ধ হওয়ার শুভ মুহূর্ত',
      en: 'The blessed moment of two hearts uniting forever',
    },
    dateLabel: {
      bn: 'শনিবার, ৩০ মার্চ ২০৩০',
      en: 'Saturday, 30 March 2030',
    },
    timeLabel: {
      bn: 'সন্ধ্যা ৭টা থেকে',
      en: 'From 7:00 PM Onwards',
    },
    venueName: {
      bn: 'দ্য অলিভস',
      en: 'The Olives',
    },
    venueAddress: {
      bn: 'রোড ২৭, বনানী, ঢাকা ১২১৩, বাংলাদেশ',
      en: 'Road 27, Banani, Dhaka 1213, Bangladesh',
    },
    landmark: {
      bn: 'বনানী চেয়ারম্যান বাড়ি সংলগ্ন · মূল গেট দিয়ে প্রবেশ',
      en: 'Near Banani Chairman Bari · Main Gate Entry & Valet',
    },
    mapQuery: 'Banani Road 27 Dhaka 1213 Bangladesh',
    coords: {lat: 23.7937, lng: 90.4066},
    icsStart: '20300330T190000',
    icsEnd: '20300330T233000',
  },
  {
    key: 'boubhat',
    title: {
      bn: 'বউভাত',
      en: 'Bou Bhat (Walima)',
    },
    tagline: {
      bn: 'নতুন বধূ বরণ ও প্রীতিভোজের সাদর আমন্ত্রণ',
      en: 'Welcoming the bride with warmth and festive dining',
    },
    dateLabel: {
      bn: 'রবিবার, ৩১ মার্চ ২০৩০',
      en: 'Sunday, 31 March 2030',
    },
    timeLabel: {
      bn: 'দুপুর ১টা থেকে বিকেল ৫টা',
      en: '1:00 PM – 5:00 PM',
    },
    venueName: {
      bn: 'সেনা মালঞ্চ',
      en: 'Sena Malancha',
    },
    venueAddress: {
      bn: 'বিমানবন্দর সড়ক, ঢাকা ক্যান্টনমেন্ট, ঢাকা ১২০৬',
      en: 'Airport Road, Dhaka Cantonment, Dhaka 1206',
    },
    landmark: {
      bn: 'কাকলী মোড়ের উত্তরে · আমন্ত্রিত অতিথিদের জন্য পার্কিং পাস',
      en: 'North of Kakoli Intersection · Dedicated guest parking',
    },
    mapQuery: 'Sena Malancha Dhaka Cantonment Bangladesh',
    coords: {lat: 23.8103, lng: 90.4031},
    icsStart: '20300331T130000',
    icsEnd: '20300331T170000',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'nikah-portrait',
    src: nikahPortraitImg,
    aspect: 'portrait',
    title: {
      bn: 'শুভ পরিণয় — মেহেবুব ও সারিকা',
      en: 'Mehebub & Sarika — Eternal Promise',
    },
    caption: {
      bn: 'আলোকসজ্জার নিচে দুটি হৃদয়ের চিরন্তন অঙ্গীকার',
      en: 'Hand in hand beneath warm twilight fairy lights',
    },
    momentDate: {
      bn: '৩০ মার্চ ২০৩০',
      en: '30 March 2030',
    },
  },
  {
    id: 'gaye-holud',
    src: gayeHoludImg,
    aspect: 'landscape',
    title: {
      bn: 'গায়ে হলুদের রঙিন আসর',
      en: 'Marigolds & Golden Holud',
    },
    caption: {
      bn: 'গাঁদা ফুল, কাঁচা হলুদ আর প্রিয়জনদের ভালোবাসা',
      en: 'Fresh marigold garlands, turmeric blessings, and laughter',
    },
    momentDate: {
      bn: '২৮ মার্চ ২০৩০',
      en: '28 March 2030',
    },
  },
  {
    id: 'mehendi-hands',
    src: mehendiHandsImg,
    aspect: 'landscape',
    title: {
      bn: 'মেহেদি ও জামদানির সাজ',
      en: 'Bridal Mehendi & Crimson Jamdani',
    },
    caption: {
      bn: 'জামদানি শাড়ি, বেলি ফুলের মালা ও হাতের সূক্ষ্ম মেহেদি',
      en: 'Handwoven crimson Jamdani silk paired with fresh jasmine',
    },
    momentDate: {
      bn: '২৯ মার্চ ২০৩০',
      en: '29 March 2030',
    },
  },
  {
    id: 'evening-reception',
    src: eveningReceptionImg,
    aspect: 'wide',
    title: {
      bn: 'আলোকিত বিবাহ বাসর',
      en: 'Twilight Reception Mandap',
    },
    caption: {
      bn: 'হাজারো আলোর ঝলকানিতে প্রিয় অতিথিদের সাথে আনন্দময় সন্ধ্যা',
      en: 'An enchanting candlelit garden evening celebrating together',
    },
    momentDate: {
      bn: '৩০ মার্চ ২০৩০',
      en: '30 March 2030',
    },
  },
];

export const COPY = {
  bn: {
    brand: 'মেহেবুব ও সারিকা',
    nav: {
      invite: 'নিমন্ত্রণ',
      schedule: 'অনুষ্ঠানসূচি',
      gallery: 'ফটো গ্যালারি',
      map: 'লোকেশন',
      rsvp: 'উপস্থিতি (RSVP)',
    },
    hero: {
      familyLine: 'দুটি পরিবারের পক্ষ থেকে',
      couple: 'মেহেবুব ও সারিকা',
      inviteLine: 'সাদর আমন্ত্রণ জানানো যাচ্ছে বিবাহের',
      date: 'শনিবার, ৩০ মার্চ ২০৩০',
      venue: 'দ্য অলিভস, বনানী, ঢাকা ১২১৩, বাংলাদেশ',
      ctaOpen: 'মূল আমন্ত্রণপত্র দেখুন',
      ctaRsvp: 'উপস্থিতি নিশ্চিত করুন',
    },
    bismillah: {
      meaning: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে',
      eyebrow: 'আন্তরিক নিবেদন',
      heading: 'সাদর নিমন্ত্রণ',
      body: 'পরম করুণাময় আল্লাহর অশেষ রহমতে ও আমাদের উভয় পরিবারের সম্মতিতে আগামী ৩০ মার্চ ২০৩০ তারিখে মেহেবুব ও সারিকার শুভ বিবাহ অনুষ্ঠানের আয়োজন করা হয়েছে। এই আনন্দঘন মুহূর্তে আপনার ও আপনার পরিবারের সাদর উপস্থিতি ও আন্তরিক দোয়া আমাদের একান্ত কাম্য।',
      signoff: 'হোসেন ও চৌধুরী পরিবার',
    },
    coupleSection: {
      eyebrow: 'দুই পরিবারের এক বন্ধন',
      heading: 'দুই ঘর, এক উৎসব',
      groomLabel: 'বর',
      groomName: 'মেহেবুব',
      groomParents: 'জনাব আনোয়ার হোসেন ও জনাবা সালমা আক্তারের জ্যেষ্ঠ পুত্র',
      brideLabel: 'কনে',
      brideName: 'সারিকা',
      brideParents: 'জনাব রফিকুল ইসলাম ও জনাবা নাসরিন সুলতানার কনিষ্ঠ কন্যা',
    },
    schedule: {
      eyebrow: 'আয়োজনের দিনক্ষণ',
      heading: 'অনুষ্ঠানসূচি',
      bannerNote: 'হলুদ ছোঁয়া এই মনে',
      viewMap: 'ম্যাপে দেখুন',
      saveCal: 'ক্যালেন্ডারে সেভ',
    },
    countdown: {
      eyebrow: 'ক্ষণগণনা',
      heading: 'দিন গুনছি',
      days: 'দিন',
      hours: 'ঘণ্টা',
      minutes: 'মিনিট',
      seconds: 'সেকেন্ড',
      arrived: 'শুভ বিবাহের শুভ দিন উপস্থিত!',
    },
    mapSection: {
      eyebrow: 'ভেন্যু ও পথনির্দেশ',
      heading: 'অনুষ্ঠানস্থল ও লোকেশন ম্যাপ',
      signLabel: 'অনুষ্ঠানস্থল',
      directionsBtn: 'Google Maps-এ দিকনির্দেশনা',
      copyAddressBtn: 'ঠিকানা কপি করুন',
      copiedText: 'কপি হয়েছে',
    },
    gallery: {
      eyebrow: 'স্মৃতির অ্যালবাম',
      heading: 'আমাদের ফটো গ্যালারি',
      subtitle: 'হলুদ, মেহেদি ও শুভ পরিণয়ের কিছু আনন্দঘন মুহূর্তের ঝলক',
    },
    rsvp: {
      eyebrow: 'আপনার উপস্থিতি নিশ্চিত করুন',
      heading: 'আরএসভিপি (RSVP)',
      subtitle: 'আসন ও আপ্যায়নের সুব্যবস্থার জন্য অনুগ্রহ করে আপনার উপস্থিতি নিশ্চিত করুন।',
      nameLabel: 'অতিথির পূর্ণ নাম',
      namePlaceholder: 'যেমন: তানভীর আহমেদ',
      contactLabel: 'মোবাইল নম্বর বা ইমেইল',
      contactPlaceholder: '০১৭XXXXXXXX বা email@example.com',
      attendingLabel: 'আপনি কি উপস্থিত থাকবেন?',
      yesOption: 'অবশ্যই আসছি',
      noOption: 'দুঃখিত, আসতে পারছি না',
      eventsLabel: 'কোন কোন অনুষ্ঠানে অংশ নেবেন?',
      guestsLabel: 'মোট অতিথি সংখ্যা',
      messageLabel: 'বর-কনের জন্য শুভেচ্ছা বার্তা (ঐচ্ছিক)',
      messagePlaceholder: 'মেহেবুব ও সারিকার নতুন জীবনের জন্য আপনার দোয়া ও শুভেচ্ছা লিখুন...',
      submitBtn: 'উপস্থিতি নিশ্চিত করুন',
      submittingBtn: 'সংরক্ষণ হচ্ছে...',
      successTitle: 'আপনার উপস্থিতি সাদরে গৃহীত হয়েছে!',
      successBody: 'ধন্যবাদ! ৩০ মার্চ ২০৩০ তারিখে আপনাকে বরণ করার অপেক্ষায় রইলাম।',
      anotherBtn: 'আরেকজন অতিথির তথ্য যোগ করুন',
      confirmedGuestsLabel: 'নিশ্চিতকৃত অতিথি',
      responsesLabel: 'মোট সাড়া',
      wishesHeading: 'অতিথিদের শুভেচ্ছা বার্তা',
      emptyWishes: 'প্রথম শুভেচ্ছা বার্তাটি আপনিই লিখুন।',
    },
    finale: {
      heading: 'আপনার উপস্থিতির অপেক্ষায় রইলাম',
      subtitle: 'আপনাদের উপস্থিতি আমাদের আনন্দকে পূর্ণ করবে',
      couple: 'মেহেবুব ও সারিকা',
      datePlace: '৩০ · ০৩ · ২০৩০ · ঢাকা',
      familySign: 'হোসেন ও চৌধুরী পরিবার',
      credit: 'ভালোবাসা ও কৃতজ্ঞতায়',
      rsvpCta: 'উপস্থিতি নিশ্চিত করুন (RSVP)',
    },
    music: {
      nowPlaying: 'চলছে এখন',
      paused: 'বিরতিতে',
      listenOnYt: 'YouTube-এ শুনুন',
      playPrompt: 'গান বাজান: Alfaaz',
    },
  },
  en: {
    brand: 'Mehebub & Sarika',
    nav: {
      invite: 'Invitation',
      schedule: 'Schedule',
      gallery: 'Gallery',
      map: 'Location',
      rsvp: 'RSVP',
    },
    hero: {
      familyLine: 'With the blessings of both families',
      couple: 'Mehebub & Sarika',
      inviteLine: 'Cordially invite you to celebrate their wedding',
      date: 'Saturday, 30 March 2030',
      venue: 'The Olives, Banani, Dhaka 1213, Bangladesh',
      ctaOpen: 'Open Invitation',
      ctaRsvp: 'Confirm Attendance',
    },
    bismillah: {
      meaning: 'In the name of Allah, the Most Gracious, the Most Merciful',
      eyebrow: 'Heartfelt Invitation',
      heading: 'Cordial Invitation',
      body: 'With the infinite grace of Almighty Allah and the blessings of both families, we joyfully announce the wedding ceremony of Mehebub & Sarika on 30 March 2030. Your presence and warm prayers on this auspicious day will complete our celebration.',
      signoff: 'The Hossain & Chowdhury Families',
    },
    coupleSection: {
      eyebrow: 'Two Families, One Bond',
      heading: 'Two Homes, One Celebration',
      groomLabel: 'Groom',
      groomName: 'Mehebub',
      groomParents: 'Eldest son of Mr. Anwar Hossain & Mrs. Salma Akter',
      brideLabel: 'Bride',
      brideName: 'Sarika',
      brideParents: 'Youngest daughter of Mr. Rafiqul Islam & Mrs. Nasrin Sultana',
    },
    schedule: {
      eyebrow: 'Celebration Dates',
      heading: 'Event Schedule',
      bannerNote: 'A touch of golden turmeric',
      viewMap: 'View Map',
      saveCal: 'Save Calendar',
    },
    countdown: {
      eyebrow: 'Countdown',
      heading: 'Counting the Days',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      arrived: 'The joyful wedding day has arrived!',
    },
    mapSection: {
      eyebrow: 'Venue & Directions',
      heading: 'Wedding Location Map',
      signLabel: 'Wedding Venue',
      directionsBtn: 'Open in Google Maps',
      copyAddressBtn: 'Copy Address',
      copiedText: 'Copied',
    },
    gallery: {
      eyebrow: 'Cherished Moments',
      heading: 'Photo Gallery',
      subtitle: 'Highlights of turmeric, mehendi, and timeless wedding moments',
    },
    rsvp: {
      eyebrow: 'Confirm Your Presence',
      heading: 'Guest RSVP',
      subtitle: 'Kindly confirm your attendance so we can prepare a warm welcome for you.',
      nameLabel: 'Guest Full Name',
      namePlaceholder: 'e.g. Tanvir Ahmed',
      contactLabel: 'Phone Number or Email',
      contactPlaceholder: '+880 17XX-XXXXXX or email@example.com',
      attendingLabel: 'Will you be attending?',
      yesOption: 'Joyfully Attending',
      noOption: 'Regretfully Unable',
      eventsLabel: 'Which ceremonies will you attend?',
      guestsLabel: 'Number of Guests',
      messageLabel: 'Blessing or Note for the Couple (Optional)',
      messagePlaceholder: 'Write a warm wish for Mehebub & Sarika...',
      submitBtn: 'Confirm RSVP',
      submittingBtn: 'Saving...',
      successTitle: 'Your RSVP is Confirmed!',
      successBody: 'Thank you! We look forward to welcoming you on 30 March 2030.',
      anotherBtn: 'Submit Another Response',
      confirmedGuestsLabel: 'Confirmed Guests',
      responsesLabel: 'Responses',
      wishesHeading: 'Guest Blessings',
      emptyWishes: 'Be the first guest to leave a warm blessing.',
    },
    finale: {
      heading: 'We Await Your Presence',
      subtitle: 'Your presence will fill our celebration with joy',
      couple: 'Mehebub & Sarika',
      datePlace: '30 · 03 · 2030 · Dhaka',
      familySign: 'The Hossain & Chowdhury Families',
      credit: 'With Love & Gratitude',
      rsvpCta: 'Confirm Attendance (RSVP)',
    },
    music: {
      nowPlaying: 'Now Playing',
      paused: 'Paused',
      listenOnYt: 'Open on YouTube',
      playPrompt: 'Play Alfaaz',
    },
  },
} as const;

export function toLocalDigits(value: number | string, lang: Language): string {
  const str = String(value);
  if (lang === 'en') return str;
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/\d/g, (d) => bnDigits[Number(d)] ?? d);
}

export function downloadEventIcs(event: CeremonyEvent, lang: Language): void {
  const summary = `${event.title[lang]} — Mehebub & Sarika`;
  const location = `${event.venueName[lang]}, ${event.venueAddress[lang]}`;
  const description = `${event.tagline[lang]} (${event.timeLabel[lang]})`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MehebubSarikaWedding//EN',
    'BEGIN:VEVENT',
    `UID:${event.key}-20300330@mehebubsarika.wedding`,
    `DTSTAMP:20261117T000000Z`,
    `DTSTART;TZID=Asia/Dhaka:${event.icsStart}`,
    `DTEND;TZID=Asia/Dhaka:${event.icsEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], {type: 'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `mehebub-sarika-${event.key}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
