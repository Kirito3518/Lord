# LordX3D → 0JAYSNOWY — แจ้งย้ายเว็บไซต์

เว็บ HTML/CSS/JavaScript พร้อมใช้งานบน Vercel โดยไม่ต้อง build หรือติดตั้ง dependencies

## Deploy บน Vercel

1. อัปโหลดไฟล์ในโฟลเดอร์นี้ไปยัง GitHub repository
2. ใน Vercel เลือก Add New → Project แล้ว import repository
3. เลือก Framework Preset: Other
4. ปล่อย Build Command และ Output Directory ว่าง แล้วกด Deploy
5. เพิ่มโดเมนเดิมใน Settings → Domains หากต้องการใช้เป็นหน้าแจ้งย้าย

## เปิดดูบนเครื่อง

ใช้ `python -m http.server 3000` ในโฟลเดอร์นี้ แล้วเปิด http://localhost:3000

## ปรับค่า

- เปลี่ยนปลายทางใน `index.html` และ `destination` ใน `script.js`
- เปลี่ยนเวลานับถอยหลังที่ `duration` ใน `script.js` (หน่วยมิลลิวินาที) และข้อความเริ่มต้นใน `index.html`

เมื่อเข้าหน้าจะมีแจ้งเตือนและนับถอยหลัง 10 วินาที ปุ่มหยุดสามารถหยุดและนับต่อได้ ปุ่มไปเว็บไซต์ใหม่ใช้งานได้แม้ปิด JavaScript

ฟอนต์ Google Fonts มี Tahoma/sans-serif เป็นฟอนต์สำรอง
