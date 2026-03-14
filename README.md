# Photo Gallery Web App — Celebrare

A high-performance, responsive photo gallery built as a pre-screening assignment for the Celebrare Frontend React Internship.

##  Tech Stack

- **Core:** React 19 + Vite
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans

##  Key Features

- **Dynamic Data Fetching:** Fetches live data from Picsum API with loading and error states.
- **Real-time Search:** Instant filtering by author name with high performance.
- **Persistent Favorites:** Users can "heart" photos, with favorites persisting across page refreshes via `localStorage`.
- **Responsive Design:** Optimized layouts for mobile (1 column), tablet (2 columns), and desktop (4 columns).
- **Modern UI:** Clean, brand-aligned purple/white aesthetic with glassmorphism and smooth transitions.

##  Technical Highlights

This project demonstrates proficiency in modern React patterns and performance optimization:

1. **Custom Hooks:** Extracted data-fetching logic into `useFetchPhotos` to separate UI from side effects.
2. **useReducer:** Implemented state management for the favorites list using a reducer to ensure predictable state transitions.
3. **useMemo:** Optimized the search filtering logic to prevent expensive re-calculations on every render.
4. **useCallback:** Memorized event handlers to minimize unnecessary re-renders of the child components.
5. **React.memo:** Used on the `PhotoCard` component to ensure only the changed cards re-render.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArijeetBanerjee07/Celebrare.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Submission Video

[Replace this with your YouTube Unlisted Link]

---
Built with 💜 for Celebrare