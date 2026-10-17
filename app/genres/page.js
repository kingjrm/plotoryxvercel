"use client";

import { useState } from "react";
import Link from "next/link";

const MOVIE_GENRES_LIST = [
  { id: 28, name: "Action", icon: "flame-outline", icon_color: "#e50914", color: "linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(229, 9, 20, 0.03) 100%)", border: "rgba(229, 9, 20, 0.25)", glow: "rgba(229, 9, 20, 0.3)" },
  { id: 12, name: "Adventure", icon: "compass-outline", icon_color: "#10b981", color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.03) 100%)", border: "rgba(16, 185, 129, 0.25)", glow: "rgba(16, 185, 129, 0.3)" },
  { id: 16, name: "Animation", icon: "color-palette-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)", glow: "rgba(236, 72, 153, 0.3)" },
  { id: 35, name: "Comedy", icon: "happy-outline", icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)", glow: "rgba(245, 197, 24, 0.3)" },
  { id: 80, name: "Crime", icon: "shield-half-outline", icon_color: "#6366f1", color: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.03) 100%)", border: "rgba(99, 102, 241, 0.25)", glow: "rgba(99, 102, 241, 0.3)" },
  { id: 99, name: "Documentary", icon: "videocam-outline", icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)", border: "rgba(6, 182, 212, 0.25)", glow: "rgba(6, 182, 212, 0.3)" },
  { id: 18, name: "Drama", icon: "sad-outline", icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)", glow: "rgba(168, 85, 247, 0.3)" },
  { id: 10751, name: "Family", icon: "people-outline", icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)", border: "rgba(244, 63, 94, 0.25)", glow: "rgba(244, 63, 94, 0.3)" },
  { id: 14, name: "Fantasy", icon: "sparkles-outline", icon_color: "#8b5cf6", color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.03) 100%)", border: "rgba(139, 92, 246, 0.25)", glow: "rgba(139, 92, 246, 0.3)" },
  { id: 36, name: "History", icon: "library-outline", icon_color: "#b45309", color: "linear-gradient(135deg, rgba(180, 83, 9, 0.2) 0%, rgba(180, 83, 9, 0.03) 100%)", border: "rgba(180, 83, 9, 0.25)", glow: "rgba(180, 83, 9, 0.3)" },
  { id: 27, name: "Horror", icon: "skull-outline", icon_color: "#ef4444", color: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.03) 100%)", border: "rgba(239, 68, 68, 0.25)", glow: "rgba(239, 68, 68, 0.3)" },
  { id: 10402, name: "Music", icon: "musical-notes-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)", glow: "rgba(236, 72, 153, 0.3)" },
  { id: 9648, name: "Mystery", icon: "help-circle-outline", icon_color: "#94a3b8", color: "linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(148, 163, 184, 0.03) 100%)", border: "rgba(148, 163, 184, 0.25)", glow: "rgba(148, 163, 184, 0.3)" },
  { id: 10749, name: "Romance", icon: "heart-outline", icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)", border: "rgba(244, 63, 94, 0.25)", glow: "rgba(244, 63, 94, 0.3)" },
  { id: 878, name: "Sci-Fi", icon: "planet-outline", icon_color: "#3b82f6", color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.03) 100%)", border: "rgba(59, 130, 246, 0.25)", glow: "rgba(59, 130, 246, 0.3)" },
  { id: 53, name: "Thriller", icon: "eye-outline", icon_color: "#f97316", color: "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.03) 100%)", border: "rgba(249, 115, 22, 0.25)", glow: "rgba(249, 115, 22, 0.3)" },
  { id: 10752, name: "War", icon: "hammer-outline", icon_color: "#78716c", color: "linear-gradient(135deg, rgba(120, 113, 108, 0.2) 0%, rgba(120, 113, 108, 0.03) 100%)", border: "rgba(120, 113, 108, 0.25)", glow: "rgba(120, 113, 108, 0.3)" },
  { id: 37, name: "Western", icon: "trail-sign-outline", icon_color: "#d97706", color: "linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.03) 100%)", border: "rgba(217, 119, 6, 0.25)", glow: "rgba(217, 119, 6, 0.3)" }
];

const TV_GENRES_LIST = [
  { id: 10759, name: "Action & Adventure", icon: "flame-outline", icon_color: "#e50914", color: "linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(229, 9, 20, 0.03) 100%)", border: "rgba(229, 9, 20, 0.25)", glow: "rgba(229, 9, 20, 0.3)" },
  { id: 16, name: "Animation", icon: "color-palette-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)", glow: "rgba(236, 72, 153, 0.3)" },
  { id: 35, name: "Comedy", icon: "happy-outline", icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)", glow: "rgba(245, 197, 24, 0.3)" },
  { id: 80, name: "Crime", icon: "shield-half-outline", icon_color: "#6366f1", color: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.03) 100%)", border: "rgba(99, 102, 241, 0.25)", glow: "rgba(99, 102, 241, 0.3)" },
  { id: 99, name: "Documentary", icon: "videocam-outline", icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)", border: "rgba(6, 182, 212, 0.25)", glow: "rgba(6, 182, 212, 0.3)" },
  { id: 18, name: "Drama", icon: "sad-outline", icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)", glow: "rgba(168, 85, 247, 0.3)" },
  { id: 10751, name: "Family", icon: "people-outline", icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)", border: "rgba(244, 63, 94, 0.25)", glow: "rgba(244, 63, 94, 0.3)" },
  { id: 10762, name: "Kids", icon: "balloon-outline", icon_color: "#10b981", color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.03) 100%)", border: "rgba(16, 185, 129, 0.25)", glow: "rgba(16, 185, 129, 0.3)" },
  { id: 9648, name: "Mystery", icon: "help-circle-outline", icon_color: "#94a3b8", color: "linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(148, 163, 184, 0.03) 100%)", border: "rgba(148, 163, 184, 0.25)", glow: "rgba(148, 163, 184, 0.3)" },
  { id: 10763, name: "News", icon: "newspaper-outline", icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)", border: "rgba(6, 182, 212, 0.25)", glow: "rgba(6, 182, 212, 0.3)" },
  { id: 10764, name: "Reality", icon: "trophy-outline", icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)", glow: "rgba(245, 197, 24, 0.3)" },
  { id: 10765, name: "Sci-Fi & Fantasy", icon: "planet-outline", icon_color: "#3b82f6", color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.03) 100%)", border: "rgba(59, 130, 246, 0.25)", glow: "rgba(59, 130, 246, 0.3)" },
  { id: 10766, name: "Soap", icon: "water-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)", glow: "rgba(236, 72, 153, 0.3)" },
  { id: 10767, name: "Talk", icon: "chatbubbles-outline", icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)", glow: "rgba(168, 85, 247, 0.3)" },
  { id: 10768, name: "War & Politics", icon: "ribbon-outline", icon_color: "#78716c", color: "linear-gradient(135deg, rgba(120, 113, 108, 0.2) 0%, rgba(120, 113, 108, 0.03) 100%)", border: "rgba(120, 113, 108, 0.25)", glow: "rgba(120, 113, 108, 0.3)" },
  { id: 37, name: "Western", icon: "trail-sign-outline", icon_color: "#d97706", color: "linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.03) 100%)", border: "rgba(217, 119, 6, 0.25)", glow: "rgba(217, 119, 6, 0.3)" }
];

export default function GenresPage() {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <>
      <div className="genres-hero">
        <div className="container">
          <h1 className="genres-title">Explore by Genre</h1>
          <p className="genres-subtitle">Choose a genre category to search our extensive list of blockbuster movies and award-winning television series instantly.</p>
          
          <div className="genre-tabs">
            <button
              className={`genre-tab-btn ${activeTab === "movies" ? "active" : ""}`}
              onClick={() => setActiveTab("movies")}
            >
              <ion-icon name="film-outline"></ion-icon> Movies
            </button>
            <button
              className={`genre-tab-btn ${activeTab === "tv" ? "active" : ""}`}
              onClick={() => setActiveTab("tv")}
            >
              <ion-icon name="tv-outline"></ion-icon> TV Shows
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "60px" }}>
        {/* Movies Grid */}
        <div id="moviesGenreGrid" className={`genre-grid-container ${activeTab === "movies" ? "active" : ""}`}>
          {MOVIE_GENRES_LIST.map((g) => (
            <Link
              key={g.id}
              href={`/movies?genre=${g.id}`}
              className="premium-genre-card"
              style={{
                background: g.color,
                borderColor: g.border,
                "--genre-color": g.icon_color,
                color: g.icon_color,
              }}
            >
              <ion-icon name={g.icon} style={{ color: g.icon_color }}></ion-icon>
              <span>{g.name}</span>
            </Link>
          ))}
        </div>

        {/* TV Shows Grid */}
        <div id="tvGenreGrid" className={`genre-grid-container ${activeTab === "tv" ? "active" : ""}`}>
          {TV_GENRES_LIST.map((g) => (
            <Link
              key={g.id}
              href={`/tv?genre=${g.id}`}
              className="premium-genre-card"
              style={{
                background: g.color,
                borderColor: g.border,
                "--genre-color": g.icon_color,
                color: g.icon_color,
              }}
            >
              <ion-icon name={g.icon} style={{ color: g.icon_color }}></ion-icon>
              <span>{g.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Scoped page styles for genres */
        .genres-hero {
          position: relative;
          padding-top: calc(var(--header-height) + 50px);
          padding-bottom: 24px;
          text-align: center;
          background: linear-gradient(180deg, rgba(229, 9, 20, 0.06) 0%, transparent 100%);
        }
        .genres-title {
          font-size: 3.2rem;
          font-weight: 400;
          margin-bottom: 12px;
          font-family: 'Bebas Neue', var(--font-family-title), sans-serif;
          letter-spacing: 3px;
          color: white;
        }
        .genres-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          max-width: 560px;
          margin: 0 auto 32px;
          font-weight: 400;
          line-height: 1.6;
        }
        .genre-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
        }
        .genre-tab-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5);
          padding: 9px 24px;
          border-radius: 99px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(10px);
        }
        .genre-tab-btn:hover {
          background: rgba(255,255,255,0.09);
          color: white;
          border-color: rgba(255,255,255,0.14);
        }
        .genre-tab-btn.active {
          background: white;
          border-color: white;
          color: #111;
        }
        .genre-grid-container {
          display: none;
          animation: fadeInUp 0.35s ease forwards;
        }
        .genre-grid-container.active {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        .premium-genre-card {
          height: 100px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          padding: 0 20px;
          position: relative;
          overflow: hidden;
          transition: transform 0.22s ease, border-color 0.2s, box-shadow 0.2s;
          background: #111;
        }
        .premium-genre-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: currentColor;
          border-radius: 4px 0 0 4px;
        }
        .premium-genre-card ion-icon {
          font-size: 2rem;
          transition: transform 0.25s ease;
          z-index: 2;
          flex-shrink: 0;
        }
        .premium-genre-card span {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          font-family: var(--font-family);
          z-index: 2;
          letter-spacing: 0.2px;
        }
        .premium-genre-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }
        .premium-genre-card:hover ion-icon {
          transform: scale(1.15);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .genres-title { font-size: 2.4rem; }
          .genres-subtitle { font-size: 0.92rem; padding: 0 20px; }
          .genre-grid-container.active {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .premium-genre-card { height: 80px; padding: 0 14px; gap: 12px; }
          .premium-genre-card ion-icon { font-size: 1.6rem; }
          .premium-genre-card span { font-size: 0.88rem; }
        }
      `}</style>
    </>
  );
}
