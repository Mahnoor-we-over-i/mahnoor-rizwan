# Mahnoor Rizwan - Portfolio

A beautiful, modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, minimalist design with soft pastel colors
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🚀 Fast performance with Vite
- 🎯 All sections as specified: Hero, About, Projects, Skills, Contact

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Your Photo

Replace the placeholder in `src/components/About.jsx` (line ~32) with your actual photo:

```jsx
<img 
  src="/path-to-your-photo.jpg" 
  alt="Mahnoor Rizwan" 
  className="w-full h-full rounded-full object-cover"
/>
```

### Adding Your CV

Update the CV download link in:
- `src/components/About.jsx` (handleDownloadCV function)
- `src/components/Contact.jsx` (CV button)

Place your CV file in the `public` folder and update the href.

### Updating Links

- LinkedIn: Update the href in `src/components/Hero.jsx` and `src/components/Contact.jsx`
- GitHub: Update the href in `src/components/Contact.jsx`
- Email: Already set to mahnoorrizwan411@gmail.com

### Color Customization

Edit `tailwind.config.js` to modify the color palette:
- peach, lavender, teal, sage, lilac, blush

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Inter, Poppins, Sora fonts

## License

Personal portfolio - All rights reserved.

