# React Mini Project: Movie Survey Form Validation
This readme describe about "My Working Process to Make Movie Survey Form Validation Website with React and Tailwind"
<br/><br/>

## 🛠️ Step 1: Set Up Project

1. สร้างโฟลเดอร์โปรเจกต์
2. เข้าไปยังโฟลเดอร์นั้น:
   ```bash
   cd your-folder-name
3. ติดตั้ง React ด้วย Vite: ดูวิธีติดตั้งได้ที่เว็บไซต์ [React.js](https://react.dev/learn/build-a-react-app-from-scratch)
   ```bash
   npm create vite@latest my-app -- --template react
4. ติดตั้ง และ ตั้งค่า Tailwind CSS: ดูวิธีติดตั้งได้ที่เว็บไซต์ [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
   ```bash
   npm install tailwindcss @tailwindcss/vite
5. ลองใช้ Tailwind แล้วลองรันดูเพื่อทดสอบว่ามันใช้งานได้
   ```bash
   npm run dev
<br/>

## 🚧 Step 2: Implementing
### Folder Structure 📁
✅ มอง UI แล้วแยกก่อนว่าจะมี Component ไหนบ้าง สร้าง folder : src / components ไว้เก็บไฟล์ component 
<br/><br/><br/>

### State 1: Form Layout 🧱
✅ ใช้แท็ก form ครอบเนื้อหาทั้งหมดภายใน ประกอบด้วย
- <label> ถ้าอยากแสดง ชื่อ* ให้ใช้ <span>*<span> แล้วใช้ Tailwind Style เอา

- <input> ถ้าอยากให้มีข้อความข้างใน ใช้ placeholder
- <input> ถ้าอยากให้มีเส้นขอบ ใช้ Tailwind Style เอา
- <input> เวลาใช้แท็ก input ควรระบุ type ให้มันเสมอว่าเป็น text, number, email, radio, …

- <form> อยากให้ทุกแท็กภายในฟอร์มเรียงแบบ cols ใช้ Tailwind Style ที่แท็ก form ว่า flex flex-col
- ใน Tailwind อยากให้กล่องมีเงาใช้คำสั่ง shadow-lg/md/…
  
- อยากให้กล่องข้อความ teaxtarea มีขนาดตามกำหนด และมีเส้นขอบ ให้ ใช้ Tailwind Style เอา
  
- อยากสไตล์ 2 ปุ่มที่ต่างกันแค่สี และ ข้อความในปุ่ม ใช้ concept เรื่อง props
  
- อยากให้ 2 ปุ่มใส่ icon ที่แตกต่างกัน รับค่า icon เข้ามา แล้วทำ Ternary Operater เก็บค่าไอคอนๆว้ในตัวแปร แล้วเอาตัวแปรมาใช้

- อยากให้กลุ่มของ input type radio button มีขอบคลุม ต้องมี <div> มาครอบแล้วใช้ Tailwind Style ใน <div> ใส่ขอบ border border-gray-300 rounded-lg ให้มัน
- อยากให้กลุ่มของ input type radio button เรียงตัวแบบ column ต้องใช้ Tailwind Style ใน <div> ที่ครอบมันด้วย flex flex-col
- อยากใช้ .map มาวนลูปแสดงค่าตามข้อมูลใน Array ใช้
  - สร้างโฟลเดอร์ data/movieList.js มาเก็บข้อมูลก่อน
  - เรียกใช้
  - เอา data มา .map โดยใช้ javascript (.map) ตรงไหนต้องใช้ {ปีกกา} ครอบส่วนนั้นเอาไว้ ใส่ key ที่ <div> นอกเสมอ และต้องเป็น uniqueue element ที่อยู่ใน callback function คือ element ที่ทำซ้ำๆ
<br/>




