let count = 0;
const scoreDisplay = document.getElementById('score');
const clickBtn = document.getElementById('clickBtn');
const levelText = document.getElementById('levelText');

// ดึงไฟล์เสียงมาเก็บในตัวแปร
const s1 = document.getElementById('sound1');
const s2 = document.getElementById('sound2');
const s3 = document.getElementById('sound3');

clickBtn.addEventListener('click', () => {
    count++;
    scoreDisplay.innerText = count;

    let currentSound;

    // Logic การเลือกเสียงตามคะแนน
    if (count <= 20) {
        currentSound = s1;
        levelText.innerText = "Level: 1";
    } else if (count <= 50) {
        currentSound = s2;
        levelText.innerText = "Level: 2 (New Sound!)";
        clickBtn.style.backgroundColor = "#ffa502";
        clickBtn.style.borderBottomColor = "#e69500";
    } else {
        currentSound = s3;
        levelText.innerText = "Level: MAX (Super Sound!)";
        clickBtn.style.backgroundColor = "#ff4757";
        clickBtn.style.borderBottomColor = "#ff2e44";
    }

    // เล่นเสียงที่เลือก (แบบรัวได้)
    if (currentSound) {
        currentSound.currentTime = 0;
        currentSound.play();
    }
});
