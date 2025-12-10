# 🎯 Habit Tracker

A beautiful, interactive habit tracking application built with **Next.js 14**, **React**, and **Tailwind CSS**. Track multiple daily habits with visual progress rings, timers, and an intuitive dashboard interface.

---

## ✨ Features

### Core Functionality
- **6 Interactive Habit Cards** with real-time progress tracking:
  - 🏃 **Run 2.3 KM** - Running habit with countdown timer
  - 🚭 **Don't Smoke** - Smoking cessation tracker
  - 🥕 **Eat a Healthy Meal** - Nutrition habit with clickable progress
  - 🪥 **Brush Your Teeth** - Daily dental hygiene with timer
  - 🐕 **Walk the Dog** - Pet exercise tracker with timer
  - ➕ **Add Task** - Expandable for custom habits

### UI Components
- **Visual Progress Rings** - Circular progress indicators for each habit
- **Countdown Timers** - Real-time countdown for timed habits (running, brushing, walking dog)
- **Play/Pause Controls** - Start/stop timers on demand
- **Responsive Design** - Mobile-optimized layout for screens as small as 376px
- **Gradient Background** - Beautiful gradient from blue → purple → pink

### Design Elements
- Icons from **Lucide React** for clean, modern visuals
- Smooth animations and transitions
- Custom progress ring component (`Progressring`)
- White/transparent card design with glass-morphism effects
- Dark text on white backgrounds for accessibility

---

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14 (React 18+)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, FontAwesome
- **State Management:** React Hooks (useState, useEffect)
- **Client-Side Rendering:** "use client" directive

---

## 📂 Project Structure

```
Habit-tracker project/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Main homepage (habitat tracker)
│   │   ├── globals.css        # Global styles
│   │   ├── api/               # API routes (notes management)
│   │   │   └── notes/
│   │   │       ├── route.js
│   │   │       └── [id]/route.js
│   │   └── server/
│   │       └── page.js        # Server-side page
│   └── Components/
│       └── Progressring.js    # Custom progress ring component
├── public/
│   └── Imgur/                 # Image assets
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Habit-tracker project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

---

## 💻 Component Overview

### Homepage (`src/app/page.js`)
Main habit tracking dashboard with 6 habit cards:

```javascript
- Running: 10-minute countdown timer
- Don't Smoke: Static counter (goal: 5 days)
- Healthy Meal: Clickable progress counter (70 items)
- Brush Teeth: 10-minute countdown timer
- Walk Dog: 10-minute countdown timer
- Add Task: Placeholder for future custom habits
```

### Progressring (`src/Components/Progressring.js`)
Reusable circular progress indicator component with:
- Configurable radius and stroke width
- Dynamic progress percentage
- Customizable styling with Tailwind classes
- Child element support for icons/text

---

## ⚙️ Core Logic

### State Management
```javascript
const [change, setchange] = useState(false);        // Brush teeth timer active
const [walkdog, setwalkdog] = useState(false);      // Walk dog timer active
const [running, setrunning] = useState(false);      // Running timer active
const [dogrun, setdogrun] = useState(600);          // Walk dog countdown (seconds)
const [count, setcount] = useState(600);            // Brush teeth countdown (seconds)
const [vegger, setvegger] = useState(70);           // Healthy meals counter
const [countrun, setcountrun] = useState(600);      // Running countdown (seconds)
```

### Timer Implementation
Three `useEffect` hooks manage independent countdown timers:
- Decrements every 800ms when active
- Stops at zero
- Clears interval on unmount or deactivation

### Progress Calculation
```javascript
let progress = (count / fullTime) * 100;       // Brush teeth progress %
let runner = (countrun / fullTime) * 100;      // Running progress %
let veggie = vegger;                           // Healthy meal progress
```

---

## 🎨 Customization

### Modify Habit Timers
Edit the initial state values in `page.js`:
```javascript
const [count, setcount] = useState(600); // Change to desired seconds (e.g., 300 = 5 minutes)
```

### Change Progress Colors
Update the `Progressring` component styling:
```javascript
stroke={9}        // Increase for thicker ring
radius={89}       // Adjust circle size
progress={value}  // 0-100 percentage
```

### Add New Habits
Duplicate a habit card structure and add new state variables for tracking.

---

## 📱 Responsive Breakpoints

- **Mobile (≤376px):** Reduced font sizes, smaller icons, adjusted spacing
- **Tablet & Desktop:** Full-size layout with 2-column grid

Classes use Tailwind's `max-[376px]:` prefix for mobile optimizations.

---

## 🔄 API Routes

The project includes API endpoints for notes management:
- `src/app/api/notes/route.js` - CRUD operations for notes
- `src/app/api/notes/[id]/route.js` - Individual note management

---

## 📦 Dependencies

Key packages in `package.json`:
- `next` - React framework
- `react` - UI library
- `tailwindcss` - Styling
- `lucide-react` - Icon library
- `@fortawesome/react-fontawesome` - FontAwesome integration
- `postcss` - CSS processing

---

## 🐛 Known Issues & Future Improvements

### Current Limitations
- Timers reset on page refresh (no persistence)
- No data storage or backend integration
- All values hardcoded in component state

### Planned Features
- ✅ Local storage persistence
- ✅ Backend database integration
- ✅ User authentication
- ✅ Custom habit creation
- ✅ Habit history & statistics
- ✅ Notifications/reminders
- ✅ Export habit data

---

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created by [Your Name] - Habit Tracker Project

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

3. **Open in your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## Customization

- **Sidebar:**  
  Edit `Sidebar.js` to add or remove navigation items.

- **Search Bar:**  
  Update `Searchbar.js` to change the dropdown options or icons.

- **Main Window:**  
  Place your main content inside `Window.js`.

---

## Dependencies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

---

## Screenshots

![Dashboard Skeleton Example](./public/maaz.jpeg)

---

##