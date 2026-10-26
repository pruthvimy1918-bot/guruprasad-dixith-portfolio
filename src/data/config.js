// ====== EDIT YOUR DETAILS HERE ======
export const NAME = "GURUPRASAD DIXITH";
export const WHATSAPP = "919999999999"; // country code + number, no + or spaces
export const PHONE_DISPLAY = "+91 99999 99999";
export const CITY = "Mysuru, Karnataka";

// Photos: put files in /public/photos and use "/photos/xyz.jpg"
export const GALLERY = [];

export const SLIDES = [
{
  video: "/videos/video1.mp4",   // ← add this line
 
  ms: 12000,                       // optional: time on screen
  kn: "ಶುಭ ಕಾರ್ಯಗಳಿಗೆ ಶಾಸ್ತ್ರೋಕ್ತ ಪೂಜೆ",
  a: "Sacred Rituals,",
  b: "Performed with Devotion",
  t: "Traditional Vedic poojas...",
},
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3E8ZtJ1DNI_oPVfyNO7Ao-F6sQEts3Qd_Ne-5o0hxY4rqF9wQ3UDmeVT&s=10", kn: "ಹೋಮ • ಹವನ • ಶಾಂತಿ", a: "Homas & Shanti", b: "For Peace and Prosperity", t: "Ganapathi, Navagraha, Sudarshana and Mrityunjaya homas conducted with correct vidhi." },
  { img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=1600", kn: "ಮದುವೆ • ಗೃಹಪ್ರವೇಶ • ನಾಮಕರಣ", a: "Life's Auspicious", b: "Moments, Blessed", t: "Weddings, griha pravesha and namakarana, guided with clarity and warmth." },
];

export const REVIEWS = [
  { t: "The griha pravesha was conducted with great devotion and clarity. Everything was explained so well.", n: "Family name, Mysuru" },
  { t: "Punctual, knowledgeable and calm. Our wedding rituals were perfect.", n: "Family name, Bengaluru" },
  { t: "Every mantra was explained in simple language. Highly recommended.", n: "Family name, Mandya" },
];

export const ABOUT_TEXT = `Rooted in Vedic tradition, ${NAME} performs ceremonies with correct mantras, proper vidhi and a calm, welcoming presence. Each pooja is explained to the family, so everyone can take part with understanding and devotion.`;
export const STATS = [["10+", "Years of service"], ["500+", "Ceremonies"], ["14", "Types of poojas"]];

export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
