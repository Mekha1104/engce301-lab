// เลือก links ทั้งหมดใน nav
const navLinks = document.querySelectorAll('nav a');

// เพิ่ม click handler สำหรับแต่ละ link
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (event) {
        event.preventDefault(); // ป้องกันไม่ให้ link ทำงาน
        alert(this.textContent); // แสดงข้อความของ link
    });
}