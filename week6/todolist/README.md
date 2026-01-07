# Todo List Application - Improved Version

แอปพลิเคชัน Todo List แบบ Vanilla JavaScript สำหรับจัดการรายการงานที่ต้องทำ พร้อมฟีเจอร์ครบครันและปรับปรุงพิเศษ

## 📝 เกี่ยวกับโปรเจค

Todo List Application ฉบับปรับปรุงพิเศษ สำหรับ LAB6 - JavaScript DOM Manipulation พร้อมฟีเจอร์เพิ่มเติมที่ทำให้การจัดการงานสะดวกและมีประสิทธิภาพมากขึ้น

## ✨ ฟีเจอร์ที่เพิ่มเติม

### ✅ ฟีเจอร์ตามโจทย์ LAB6 (Required)

1. **เครื่องหมาย ✓ เมื่อคลิกว่าเสร็จงาน**
   - Custom checkbox สวยงาม
   - คลิกเพื่อ toggle สถานะเสร็จ/ไม่เสร็จ
   - แสดงเครื่องหมาย ✓ สีขาวบนพื้นสีม่วง

2. **ขีดคร่อมข้อความเมื่อเสร็จงาน**
   - ใช้ CSS `text-decoration: line-through`
   - เปลี่ยนสีข้อความเป็นสีเทาอ่อน
   - ลดความทึบของ item

3. **Alert confirm box เพื่อยืนยันการลบ Task**
   - ใช้ `window.confirm()` ก่อนลบ
   - ป้องกันการลบโดยไม่ตั้งใจ
   - แสดงข้อความยืนยันที่ชัดเจน

4. **เช็คความยาวของข้อความ (ไม่เกิน 50 characters)**
   - HTML: `maxlength="50"` attribute
   - JavaScript: validation ใน `addTodo()`
   - แสดง error message เมื่อเกินความยาว
   - แสดง character counter แบบ real-time

### 🎁 ฟีเจอร์พิเศษเพิ่มเติม (Bonus)

- ✅ **Character Counter แบบ Real-time**
  - แสดงจำนวนตัวอักษรปัจจุบัน
  - เปลี่ยนสีเป็นแดงเมื่อใกล้ถึง limit (45+ characters)
  - อัพเดททันทีที่พิมพ์

- ✅ **Error Messages**
  - แสดงข้อความ error เมื่อ validation ไม่ผ่าน
  - หายอัตโนมัติหลัง 3 วินาที
  - แสดงเฉพาะเมื่อมีข้อผิดพลาด

- ✅ **Statistics Dashboard**
  - Total Tasks: จำนวน task ทั้งหมด
  - Completed: จำนวน task ที่เสร็จแล้ว
  - Pending: จำนวน task ที่ยังไม่เสร็จ
  - อัพเดทแบบ real-time

- ✅ **Empty State**
  - แสดงข้อความเมื่อยังไม่มี task
  - Icon และข้อความที่เป็นมิตร
  - หายไปเมื่อมี task แล้ว

- ✅ **Modern UI/UX**
  - Gradient background สวยงาม
  - Smooth animations และ transitions
  - Hover effects
  - Responsive design

## 📁 โครงสร้างไฟล์

```
todolist-improved/
├── public/
│   ├── index.html      # หน้าเว็บหลัก
│   ├── style.css       # การจัดรูปแบบและ animations
│   ├── script.js       # Logic ของ application
│   └── guide.html      # คู่มือการพัฒนาแบบละเอียด 8 ขั้นตอน
└── README.md           # เอกสารนี้
```

## 🚀 วิธีใช้งาน

### การเปิดไฟล์

**วิธีที่ 1: เปิดไฟล์โดยตรง**
```bash
# เปิด index.html ในเบราว์เซอร์
open public/index.html  # macOS
start public/index.html # Windows
xdg-open public/index.html # Linux
```

**วิธีที่ 2: ใช้ Live Server (แนะนำ)**
1. เปิดโปรเจคด้วย VS Code
2. ติดตั้ง Extension "Live Server"
3. คลิกขวาที่ `public/index.html` และเลือก "Open with Live Server"

### การใช้งาน

1. **เพิ่ม Task**
   - พิมพ์ task ในช่อง input (ไม่เกิน 50 ตัวอักษร)
   - ดู character counter แสดงจำนวนตัวอักษร
   - กดปุ่ม "Add" หรือกด Enter
   - Task จะปรากฏในรายการ

2. **ทำเครื่องหมายว่าเสร็จ**
   - คลิกที่ checkbox ด้านซ้ายของ task
   - เครื่องหมาย ✓ จะปรากฏ
   - ข้อความจะถูกขีดคร่อมและเปลี่ยนสี
   - สถิติจะอัพเดทอัตโนมัติ

3. **ลบ Task**
   - กดปุ่ม "Delete" ด้านขวาของ task
   - ยืนยันการลบใน confirm dialog
   - Task จะถูกลบออกจากรายการ

4. **ดูสถิติ**
   - ดูสถิติด้านล่างรายการ
   - **Total**: จำนวนทั้งหมด
   - **Completed**: จำนวนที่เสร็จแล้ว (สีเขียว)
   - **Pending**: จำนวนที่ค้างอยู่ (สีส้ม)

## 💻 โค้ดสำคัญ

### 1. Character Counter (JavaScript)

```javascript
function updateCharCounter() {
    const length = todoInput.value.length;
    charCounter.textContent = `${length} / 50 characters`;
    
    // เปลี่ยนสีเตือนเมื่อใกล้ถึง limit
    if (length >= 45) {
        charCounter.classList.add('warning');
    } else {
        charCounter.classList.remove('warning');
    }
}

// อัพเดททันทีที่พิมพ์
todoInput.addEventListener('input', updateCharCounter);
```

### 2. Validation (JavaScript)

```javascript
function addTodo() {
    const todoText = todoInput.value.trim();
    
    // ตรวจสอบความยาว
    if (todoText.length > 50) {
        showError('Task must not exceed 50 characters!');
        return;
    }
    
    // ตรวจสอบว่าไม่ว่าง
    if (todoText.length === 0) {
        showError('Please enter a task!');
        return;
    }
    
    // เพิ่ม task...
}
```

### 3. Delete with Confirmation (JavaScript)

```javascript
function deleteTodo(id) {
    // แสดง confirmation dialog
    const confirmed = confirm('Are you sure you want to delete this task?');
    
    if (confirmed) {
        todos = todos.filter((todo) => todo.id !== id);
        renderTodos();
        updateStats();
    }
}
```

### 4. Custom Checkbox (HTML + CSS)

```html
<div class="checkbox-wrapper">
    <div class="custom-checkbox ${todo.completed ? 'checked' : ''}"></div>
</div>
```

```css
.custom-checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #667eea;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.custom-checkbox.checked {
    background: #667eea;
}

.custom-checkbox.checked::after {
    content: '✓';
    color: white;
    font-weight: bold;
    font-size: 16px;
}
```

### 5. Strikethrough Text (CSS)

```css
li.completed .todo-text {
    text-decoration: line-through;
    color: #999;
    opacity: 0.6;
}
```

### 6. Statistics Update (JavaScript)

```javascript
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    
    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}
```

## 🎯 การทำงาน

### Flow ของ Application

**1. เพิ่ม Task**:
```
User พิมพ์ข้อความ
    ↓
Character counter อัพเดท real-time
    ↓
กด Add/Enter
    ↓
Validate ความยาว (≤ 50 chars)
    ↓
Validate ว่าไม่ว่าง
    ↓
สร้าง todo object { id, text, completed }
    ↓
เพิ่มเข้า todos array
    ↓
renderTodos() + updateStats()
```

**2. Toggle Complete**:
```
User คลิก checkbox
    ↓
Toggle completed property
    ↓
Re-render list
    ↓
อัพเดทสถิติ
```

**3. Delete Task**:
```
User คลิก Delete
    ↓
แสดง confirmation dialog
    ↓
ถ้ายืนยัน → filter ออกจาก array
    ↓
Re-render และอัพเดทสถิติ
```

### Data Structure

```javascript
const todo = {
    id: Date.now(),        // Unique ID (timestamp)
    text: "Task text",     // ข้อความ task
    completed: false       // สถานะเสร็จหรือยัง
};

// ตัวอย่าง array
const todos = [
    { id: 1704614400000, text: "Complete assignment", completed: false },
    { id: 1704614500000, text: "Buy groceries", completed: true }
];
```

## 🎨 CSS Features

### Animations

```css
/* Slide in animation เมื่อเพิ่ม task */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Fade in animation */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

li {
    animation: slideIn 0.3s ease;
}
```

### Transitions

```css
li {
    transition: all 0.3s ease;
}

li:hover {
    background-color: #e9ecef;
    transform: translateX(5px);
}

button:hover {
    transform: scale(1.05);
}
```

### Gradient Background

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}
```

## 📱 Responsive Design

Application ปรับตัวตามขนาดหน้าจอ:

**Desktop (> 600px)**:
- Layout แบบ horizontal
- Font ขนาดปกติ
- Statistics แนวนอน

**Mobile (≤ 600px)**:
- Input และปุ่มแนวตั้ง (100% width)
- Statistics แนวตั้ง
- Font size ปรับเล็กลง
- Padding ลดลง

```css
@media (max-width: 600px) {
    .input-container {
        flex-direction: column;
    }
    
    #todo-input {
        width: 100%;
    }
    
    .stats {
        flex-direction: column;
        gap: 10px;
    }
}
```

## 🔧 เทคโนโลยีที่ใช้

**HTML5**: 
- Semantic elements (`<main>`, `<section>`)
- Form validation attributes (`maxlength`, `required`)
- Accessibility attributes

**CSS3**:
- Flexbox layout
- CSS Animations และ Transitions
- CSS Variables (Custom Properties)
- Gradient backgrounds
- Custom checkboxes
- Media Queries (Responsive)
- Pseudo-elements (`::after`, `::before`)

**JavaScript (ES6+)**:
- DOM Manipulation
- Event Listeners
- Array methods (`map`, `filter`, `forEach`, `find`)
- Template literals
- Arrow functions
- Ternary operators
- Destructuring

## ✅ การ Validate ข้อมูล

### ระดับ HTML
```html
<input 
    type="text" 
    id="todo-input"
    maxlength="50" 
    placeholder="Add a new task..."
/>
```

### ระดับ JavaScript
```javascript
// ตรวจสอบความยาว
if (todoText.length > 50) {
    showError('Task must not exceed 50 characters!');
    return;
}

// ตรวจสอบค่าว่าง
if (todoText.length === 0) {
    showError('Please enter a task!');
    return;
}
```

### User Feedback
- **Character counter** (real-time) - แสดงจำนวนตัวอักษรขณะพิมพ์
- **Error messages** (auto-hide after 3s) - ข้อความแจ้งเตือน
- **Visual warnings** (สีแดง) - เตือนเมื่อใกล้เกิน limit

## 🎓 สิ่งที่เรียนรู้จากโปรเจคนี้

**1. Form Validation**:
- Multiple validation levels (HTML + JavaScript)
- User-friendly error messages
- Real-time feedback

**2. DOM Manipulation**:
- Creating elements dynamically (`createElement`)
- Event delegation
- Class manipulation (`classList.add/remove/toggle`)

**3. State Management**:
- Maintaining application state ด้วย array
- Updating UI based on state changes
- Synchronizing data and display

**4. User Confirmation**:
- Using `window.confirm()` API
- Preventing accidental destructive actions

**5. CSS Techniques**:
- Custom form elements (checkbox)
- Animations และ transitions
- Pseudo-elements for visual enhancements
- Responsive design patterns

**6. Event Handling**:
- Multiple event types (click, input, keypress)
- Event bubbling และ stopPropagation
- Event delegation for dynamic elements

## 🐛 การแก้ปัญหา (Troubleshooting)

### ปัญหา 1: Checkbox ไม่ทำงานเมื่อคลิก
**สาเหตุ**: Event bubbling ทำให้ event ถูกส่งต่อไปยัง parent
**วิธีแก้**: 
```javascript
checkbox.addEventListener('click', (e) => {
    e.stopPropagation(); // หยุด event bubbling
    toggleCompleted(todo.id);
});
```

### ปัญหา 2: Character counter ไม่อัพเดท
**สาเหตุ**: ไม่มี input event listener
**วิธีแก้**: 
```javascript
todoInput.addEventListener('input', updateCharCounter);
```

### ปัญหา 3: ลบได้โดยไม่ยืนยัน
**สาเหตุ**: ไม่มี confirmation dialog
**วิธีแก้**: 
```javascript
const confirmed = confirm('Are you sure you want to delete this task?');
if (!confirmed) return;
```

### ปัญหา 4: Task ไม่แสดงหลังจาก refresh
**สาเหตุ**: ไม่มีการบันทึกข้อมูล
**วิธีแก้**: ใช้ localStorage (ดูส่วนการพัฒนาต่อ)

## 📚 การพัฒนาต่อ (Future Enhancements)

ไอเดียสำหรับฟีเจอร์เพิ่มเติม:

**Data Persistence**:
- [ ] บันทึก todos ใน localStorage
- [ ] Export/Import ข้อมูลเป็น JSON
- [ ] Backup และ Restore

**Task Management**:
- [ ] แก้ไขงานที่มีอยู่ (Edit Task)
- [ ] Drag and drop เพื่อเรียงลำดับ
- [ ] ลบงานหลายรายการพร้อมกัน

**Filtering & Sorting**:
- [ ] Filter tasks (All/Active/Completed)
- [ ] Sort tasks (by date, alphabetical, priority)
- [ ] Search functionality

**Additional Features**:
- [ ] Due dates และ deadlines
- [ ] Priority levels (High/Medium/Low)
- [ ] Categories/Tags
- [ ] Sub-tasks
- [ ] Notifications
- [ ] Dark mode
- [ ] Multiple lists
- [ ] Collaboration features

**UI/UX Improvements**:
- [ ] Keyboard shortcuts
- [ ] Undo/Redo functionality
- [ ] Progress bar
- [ ] Themes และ color schemes

## 📖 คู่มือการพัฒนา

สำหรับขั้นตอนการพัฒนาแบบละเอียดทีละขั้น กรุณาดูที่ไฟล์ `public/guide.html` 

**8 ขั้นตอนการพัฒนา**:
1. สร้างโครงสร้าง HTML พื้นฐาน
2. สร้างฟอร์มเพิ่มงาน
3. สร้างรายการงาน (Todo List)
4. เขียน CSS สำหรับ Styling
5. เพิ่ม JavaScript - ฟังก์ชัน addTodo()
6. เพิ่ม JavaScript - ฟังก์ชัน deleteTodo()
7. เพิ่ม JavaScript - ฟังก์ชัน toggleCompleted()
8. ทดสอบและปรับปรุง

แต่ละขั้นตอนมี:
- คำอธิบายรายละเอียด
- ตัวอย่างโค้ด
- จุดสำคัญที่ต้องระวัง
- คำแนะนำเพิ่มเติม

## 🧪 การทดสอบ

### Test Cases

**Test 1: เพิ่ม Task ปกติ**
- Input: "Buy milk"
- Expected: Task ถูกเพิ่มในรายการ, input ถูกล้าง

**Test 2: เพิ่ม Task เกิน 50 ตัวอักษร**
- Input: "This is a very long task that exceeds fifty characters"
- Expected: แสดง error message

**Test 3: เพิ่ม Task ว่าง**
- Input: ""
- Expected: แสดง error message

**Test 4: Toggle Complete**
- Action: คลิก checkbox
- Expected: เครื่องหมายถูก, ขีดคร่อม, สถิติอัพเดท

**Test 5: Delete with Cancel**
- Action: คลิก Delete → Cancel
- Expected: Task ยังคงอยู่

**Test 6: Delete with Confirm**
- Action: คลิก Delete → OK
- Expected: Task ถูกลบ, สถิติอัพเดท

## 💡 เคล็ดลับการใช้งาน

1. **กด Enter เพื่อเพิ่ม Task เร็วขึ้น** แทนการคลิกปุ่ม Add
2. **ดู Character Counter** เพื่อไม่ให้เกิน 50 ตัวอักษร
3. **ใช้ Confirm Dialog** เพื่อป้องกันการลบโดยไม่ตั้งใจ
4. **ดูสถิติ** เพื่อติดตามความคืบหน้าของงาน
5. **Responsive Design** ใช้งานได้ทั้งบนมือถือและคอมพิวเตอร์

## 📄 License

โปรเจคนี้สร้างขึ้นเพื่อการศึกษาในรายวิชา ENGCE301 - Web Application Development  
สามารถนำไปใช้และปรับปรุงได้อย่างอิสระ

## 👨‍💻 ผู้พัฒนา

สร้างเพื่อใช้ในการเรียนการสอน LAB6 - JavaScript DOM Manipulation

---

**สนุกกับการจัดการงานของคุณ! 🎯✨**

*ถ้ามีคำถามหรือพบปัญหา สามารถดูคู่มือใน `guide.html` หรือติดต่อผู้สอน*
