/**
 * ฟังก์ชันหลักสำหรับเล่นเสียง
 * รองรับไฟล์เสียงทั้ง 8 ไฟล์ตามที่กำหนดใน HTML
 * @param {string} id - ID ของ HTML Audio Element (เช่น click1, clickpuyou)
 */
function play(id) {
    const audio = document.getElementById(id);
    
    if (audio) {
        // รีเซ็ตเวลาให้เริ่มที่ 0 ทันทีเพื่อให้กดซ้ำๆ (Spam click) ได้โดยเสียงไม่ขาดช่วง
        audio.currentTime = 0;
        
        // สั่งให้เล่นเสียง
        // ใช้ .catch เพื่อป้องกัน Error ในกรณีที่ Browser บล็อกการเล่นเสียงอัตโนมัติ
        audio.play().catch(error => {
            console.warn("ระบบบล็อกเสียง: กรุณาคลิกที่หน้าเว็บก่อน 1 ครั้งเพื่อเปิดใช้งานเสียงนะคะ", error);
        });
    } else {
        console.error("หาไฟล์เสียงไม่เจอ: ตรวจสอบว่า ID '" + id + "' ใน HTML ตรงกับใน Script หรือไม่");
    }
}

// เพิ่มลูกเล่นเล็กน้อย: ป้องกันการค้างของปุ่มเวลาที่ผู้ใช้กดย้ำๆ บนมือถือ
document.addEventListener('touchstart', function() {}, {passive: true});
