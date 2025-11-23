# ⚡ Scroll Velocity Marquee

A smooth, infinitely looping marquee that reacts to your scroll speed and direction — built using React, TypeScript, and Motion (Framer Motion v4).
As you scroll up or down, the text speeds up or reverses direction for a dynamic, responsive parallax effect.

## ✨ Technologies

- `React`
- `TypeScript`
- `Motion / Framer Motion V4`
- `Tailwind CSS`
- `Vite`
- `Lenis` (Smooth Scrolling)

## 🚀 Features

- Infinite marquee animation with seamless looping
- Scroll velocity detection (speed + direction)
- Text accelerates as you scroll faster
- Automatically reverses when scrolling upward
- Spring-smoothed velocity for natural, fluid motion
- Fully responsive and easy to customize
- Clean TypeScript implementation with strong types

## 📍 The Process

I wanted to build a marquee component that didn’t just move endlessly, but felt alive—reactive, dynamic, and influenced by user interaction.

Framer Motion’s scroll velocity example inspired me, but I rewrote the entire thing with:

- Clean TypeScript
- Better variable naming
- Tailwind styling
- Lenis smooth scrolling
- My own improvements and spacing fixes

The result is a buttery-smooth marquee that:
- Moves infinitely without jumps
- Speeds up based on scroll velocity
- Reverses direction when scrolling up
- Works across screen sizes
It feels energetic and modern—perfect for hero sections, banners, or dynamic landing pages.

## 📦 Usage

```
<ScrollVelocityMarquee baseVelocity={-5}>
  Kuro Kuro Kuro Kuro
</ScrollVelocityMarquee>

<ScrollVelocityMarquee baseVelocity={5}>
  Scroll Velocity Marquee
</ScrollVelocityMarquee>

```

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit: `http://localhost:5173` in your browser

## 🎞️ Preview

https://github.com/user-attachments/assets/3a8af1ac-4825-4e9f-be2b-12349a0b17a0
