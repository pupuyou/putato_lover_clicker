// ดึง Element ของปุ่มและเสียงมาเตรียมไว้
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const s1 = document.getElementById('sound1');
const s2 = document.getElementById('sound2');
const s3 = document.getElementById('sound3');

// ฟังก์ชันสำหรับเล่นเสียง (รีเซ็ตเวลาเพื่อให้กดรัวได้)
function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

// ผูกปุ่มเข้ากับเสียง
btn1.addEventListener('click', () => playSound(s1));
btn2.addEventListener('click', () => playSound(s2));
btn3.addEventListener('click', () => playSound(s3));
