// Barcha 12 ta zamon ma'lumotlar bazasi
const tensesData = [
    {
        id: "present-simple",
        name: "Present Simple",
        category: "Present",
        formula: "Subject + V1 / V-s(es)",
        description: "Doimiy takrorlanib turadigan, odatiy, qonun-qoidalar va umumiy haqiqat bo'lgan harakatlar uchun ishlatiladi.",
        signals: [
            { word: "Always", trans: "Har doim" },
            { word: "Usually", trans: "Odatda" },
            { word: "Often", trans: "Tez-tez" },
            { word: "Sometimes", trans: "Ba'zan" },
            { word: "Every day/week", trans: "Har kuni/haftada" },
            { word: "Never", trans: "Hech qachon" }
        ],
        examples: [
            { en: "I study English every day.", uz: "Men har kuni ingliz tilini o'rganaman." },
            { en: "The sun rises in the east.", uz: "Quyosh sharqdan chiqadi." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Present+Simple+tenses+uzbek"
    },
    {
        id: "present-continuous",
        name: "Present Continuous",
        category: "Present",
        formula: "Subject + am/is/are + V-ing",
        description: "Ayni damda (gapirilayotgan vaqtda) sodir bo'layotgan yoki vaqtinchalik harakatlar uchun ishlatiladi.",
        signals: [
            { word: "Now", trans: "Hozir" },
            { word: "At the moment", trans: "Ayni damda" },
            { word: "Look!", trans: "Qara!" },
            { word: "Listen!", trans: "Eshit!" },
            { word: "Currently", trans: "Hozirda" }
        ],
        examples: [
            { en: "I am learning English right now.", uz: "Men hozirda ingliz tilini o'rganyapman." },
            { en: "Look! It is raining outside.", uz: "Qara! Tashqarida yomg'ir yog'yapti." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Present+Continuous+tenses+uzbek"
    },
    {
        id: "present-perfect",
        name: "Present Perfect",
        category: "Present",
        formula: "Subject + have/has + V3",
        description: "O'tmishda sodir bo'lgan, lekin natijasi hozirgi vaqtda muhim bo'lgan yoki endigina tugallangan harakatlar.",
        signals: [
            { word: "Already", trans: "Allaqachon" },
            { word: "Just", trans: "Hozirgina" },
            { word: "Yet", trans: "Hali (inkor/so'roq)" },
            { word: "Ever", trans: "Qachondir" },
            { word: "Never", trans: "Hech qachon" },
            { word: "Since / For", trans: "...dan beri / ...davomida" }
        ],
        examples: [
            { en: "I have already finished my homework.", uz: "Men uy vazifamni allaqachon tugatdim." },
            { en: "She has lived here for 5 years.", uz: "U bu yerda 5 yildan beri yashaydi." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Present+Perfect+tense+uzbek"
    },
    {
        id: "present-perfect-continuous",
        name: "Present Perfect Continuous",
        category: "Present",
        formula: "Subject + have/has been + V-ing",
        description: "O'tmishda boshlanib, hozirgacha davom etayotgan va hali ham davom etishi kutilayotgan harakatlar.",
        signals: [
            { word: "For 2 hours", trans: "2 soatdan beri" },
            { word: "Since morning", trans: "Ertalabdan beri" },
            { word: "All day", trans: "Kun bo'yi" }
        ],
        examples: [
            { en: "I have been reading this book for two hours.", uz: "Men ikki soatdan beri ushbu kitobni o'qiyapman." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Present+Perfect+Continuous+uzbek"
    },
    {
        id: "past-simple",
        name: "Past Simple",
        category: "Past",
        formula: "Subject + V2 / V-ed",
        description: "O'tmishda aniq bir vaqtda sodir bo'lgan va tugagan oddiy harakatlar.",
        signals: [
            { word: "Yesterday", trans: "Kecha" },
            { word: "Last week/year", trans: "O'tgan hafta/yili" },
            { word: "An hour ago", trans: "Bir soat oldin" },
            { word: "In 2020", trans: "2020-yilda" }
        ],
        examples: [
            { en: "I visited Samarkand last month.", uz: "O'tgan oyi Samarqandga tashrif buyurdim." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Past+Simple+tense+uzbek"
    },
    {
        id: "past-continuous",
        name: "Past Continuous",
        category: "Past",
        formula: "Subject + was/were + V-ing",
        description: "O'tmishda ma'lum bir vaqtda jarayonda bo'lgan (boshqa harakat bo'lib turgan paytda to'xtatib turgan) harakatlar.",
        signals: [
            { word: "At 5 o'clock yesterday", trans: "Kecha soat 5 da" },
            { word: "While", trans: "-gan vaqtida" },
            { word: "When", trans: "-ganda" }
        ],
        examples: [
            { en: "I was watching TV when you called.", uz: "Siz qo'ng'iroq qilganingizda men TV ko'rayotgandim." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Past+Continuous+tense+uzbek"
    },
    {
        id: "past-perfect",
        name: "Past Perfect",
        category: "Past",
        formula: "Subject + had + V3",
        description: "O'tmishdagi boshqa bir harakatdan oldinroq sodir bo'lib, tugagan harakatlar.",
        signals: [
            { word: "Before", trans: "Oldin" },
            { word: "After", trans: "So'ng" },
            { word: "By the time", trans: "-vaqtga kelib" }
        ],
        examples: [
            { en: "The train had left before I arrived.", uz: "Men yetib kelishimdan oldin poezd jo'nab ketgandi." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Past+Perfect+tense+uzbek"
    },
    {
        id: "past-perfect-continuous",
        name: "Past Perfect Continuous",
        category: "Past",
        formula: "Subject + had been + V-ing",
        description: "O'tmishdagi ma'lum bir vaqtgacha davom etib turgan va o'sha paytda tugagan jarayon.",
        signals: [
            { word: "For 3 hours before...", trans: "...dan oldin 3 soat davomida" }
        ],
        examples: [
            { en: "He had been working for 5 hours before he took a break.", uz: "U tanaffus qilishdan oldin 5 soat davomida ishlayotgan edi." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Past+Perfect+Continuous+uzbek"
    },
    {
        id: "future-simple",
        name: "Future Simple",
        category: "Future",
        formula: "Subject + will + V1",
        description: "Kelajakda rejalashtirilmagan, o'sha on qaror qilingan yoki taxminiy harakatlar.",
        signals: [
            { word: "Tomorrow", trans: "Ertaga" },
            { word: "Next week", trans: "Keyingi hafta" },
            { word: "Soon", trans: "Tez orada" },
            { word: "In the future", trans: "Kelajakda" }
        ],
        examples: [
            { en: "I will call you tomorrow.", uz: "Men ertaga sizga qo'ng'iroq qilaman." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Future+Simple+tense+uzbek"
    },
    {
        id: "future-continuous",
        name: "Future Continuous",
        category: "Future",
        formula: "Subject + will be + V-ing",
        description: "Kelajakda ma'lum bir vaqtda jarayonda bo'ladigan harakatlar.",
        signals: [
            { word: "At this time tomorrow", trans: "Ertaga shu vaqtda" },
            { word: "At 8 PM tonight", trans: "Bugun kechki soat 8 da" }
        ],
        examples: [
            { en: "At 5 PM tomorrow, I will be playing football.", uz: "Ertaga soat 5 da men futbol o'ynayotgan bo'laman." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Future+Continuous+tense+uzbek"
    },
    {
        id: "future-perfect",
        name: "Future Perfect",
        category: "Future",
        formula: "Subject + will have + V3",
        description: "Kelajakdagi ma'lum bir vaqtga kelib to'liq tugallangan bo'ladigan harakatlar.",
        signals: [
            { word: "By tomorrow", trans: "Ertagacha" },
            { word: "By next year", trans: "Keyingi yilgacha" }
        ],
        examples: [
            { en: "I will have finished my project by next Monday.", uz: "Dushanbagacha loyihamni tugatgan bo'laman." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Future+Perfect+tense+uzbek"
    },
    {
        id: "future-perfect-continuous",
        name: "Future Perfect Continuous",
        category: "Future",
        formula: "Subject + will have been + V-ing",
        description: "Kelajakdagi ma'lum vaqtgacha qancha muddat davom etishini ko'rsatuvchi zamon.",
        signals: [
            { word: "By next month for 2 years", trans: "Keyingi oyga kelib 2 yildan beri" }
        ],
        examples: [
            { en: "By next year, I will have been living here for 5 years.", uz: "Keyingi yilga kelib, men bu yerda yashayotganimga 5 yil bo'ladi." }
        ],
        videoUrl: "https://www.youtube.com/results?search_query=Future+Perfect+Continuous+uzbek"
    }
];

// Holatni boshqarish o'zgaruvchilari
let currentCategory = 'all';
let currentSelectedId = tensesData[0].id;

// DOM yuklangandan so'ng ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderSidebar(currentCategory);
    renderDetails(currentSelectedId);
    setupEventListeners();
}

// Sidebar ro'yxatini yasash va chizish
function renderSidebar(category) {
    const sidebarEl = document.getElementById('tenseList');
    sidebarEl.innerHTML = '';

    const filtered = category === 'all' 
        ? tensesData 
        : tensesData.filter(t => t.category === category);

    filtered.forEach(tense => {
        const item = document.createElement('div');
        item.className = `tense-item ${tense.id === currentSelectedId ? 'active' : ''}`;
        item.innerHTML = `
            <span>${tense.name}</span>
            <span style="font-size: 0.8rem; opacity: 0.7;">➔</span>
        `;
        
        // Zamon ustiga bosilganda sodir bo'ladigan hodisa
        item.addEventListener('click', () => {
            currentSelectedId = tense.id;
            
            // Faol element sinfini yangilash
            document.querySelectorAll('.tense-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            
            renderDetails(tense.id);
        });

        sidebarEl.appendChild(item);
    });
}

// Asosiy ma'lumotlarni ekranga chiqarish (Main Content)
function renderDetails(id) {
    const tense = tensesData.find(t => t.id === id);
    if (!tense) return;

    const contentEl = document.getElementById('tenseDetails');

    // Signal so'zlarni shakllantirish
    const signalsHTML = tense.signals.map(s => `
        <div class="signal-badge" title="Tarjimasi: ${s.trans}">
            ${s.word} <span style="color: var(--text-muted); font-size: 0.85rem; font-weight: 400;">(${s.trans})</span>
        </div>
    `).join('');

    // Misollarni shakllantirish
    const examplesHTML = tense.examples.map(ex => `
        <div class="example-card">
            <div class="example-en">"${ex.en}"</div>
            <div class="example-uz">Tarjimasi: ${ex.uz}</div>
        </div>
    `).join('');

    // HTML shablonni joylash
    contentEl.innerHTML = `
        <div class="content-header">
            <h2>${tense.name}</h2>
            <a href="${tense.videoUrl}" target="_blank" class="youtube-btn" rel="noopener noreferrer">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                YouTube Video Dars
            </a>
        </div>

        <div class="formula-box">
            <strong>Formula:</strong> ${tense.formula}
        </div>

        <div class="section-box">
            <div class="section-title">📌 Qoida va Ishlatilishi:</div>
            <p class="description">${tense.description}</p>
        </div>

        <div class="section-box">
            <div class="section-title">🔑 Signal So'zlar va Tarjimalari:</div>
            <div class="signals-list">
                ${signalsHTML}
            </div>
        </div>

        <div class="section-box">
            <div class="section-title">💬 Misol Gaplar:</div>
            ${examplesHTML}
        </div>
    `;
}

// Filtrlash tugmalariga hodisalarni ulash
function setupEventListeners() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Faol sinfni o'zgartirish
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Kategoriyani aniqlash va ro'yxatni yangilash
            const categoryAttr = e.target.getAttribute('onclick');
            // Agar HTML dagi inline onclick ishlatilmasa, quyidagicha o'qiymiz:
            if(e.target.textContent.includes('Barchasi')) {
                currentCategory = 'all';
            } else if(e.target.textContent.includes('Present')) {
                currentCategory = 'Present';
            } else if(e.target.textContent.includes('Past')) {
                currentCategory = 'Past';
            } else if(e.target.textContent.includes('Future')) {
                currentCategory = 'Future';
            }

            renderSidebar(currentCategory);
        });
    });
}