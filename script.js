// คะแนนรวม
let totalScore = 0;
const totalScoreDisplay = document.getElementById('totalScore');

// คะแนนแยกแต่ละปุ่ม
const counts = {
    btnBeaver: 0,
    btnPotato: 0,
    btnHeart: 0
};

// ดึงไฟล์เสียง
const sounds = {
    btnBeaver: document.getElementById('sound1'),
    btnPotato: document.getElementById('sound2'),
    btnHeart: document.getElementById('sound3')
};

// ฟังก์ชันหลักเมื่อมีการคลิก
function handleButtonClick(buttonId) {
    // 1. เพิ่มคะแนนแยกปุ่ม
    counts[buttonId]++;
    const countDisplay = document.getElementById(buttonId).querySelector('.count');
    countDisplay.innerText = counts[buttonId];

    // 2. เพิ่มคะแนนรวม
    totalScore++;
    totalScoreDisplay.innerText = totalScore;

    // 3. เล่นเสียงประจำปุ่ม (แบบรัวได้)
    const currentSound = sounds[buttonId];
    if (currentSound) {
        currentSound.currentTime = 0;
        currentSound.play();
    }
}

// ผูก Event Listener ให้กับทั้ง 3 ปุ่ม
document.getElementById('btnBeaver').addEventListener('click', () => handleButtonClick('btnBeaver'));
document.getElementById('btnPotato').addEventListener('click', () => handleButtonClick('btnPotato'));
document.getElementById('btnHeart').addEventListener('click', () => handleButtonClick('btnHeart'));
