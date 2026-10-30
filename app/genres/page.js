"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ─── Genre Data ──────────────────────────────────────────────────────────── */

const MOVIE_GENRES_LIST = [
  { id: 28,    name: "Action",      icon: "flame-outline",         icon_color: "#e50914", color: "linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(229, 9, 20, 0.03) 100%)",     border: "rgba(229, 9, 20, 0.25)",    glow: "rgba(229, 9, 20, 0.3)"    },
  { id: 12,    name: "Adventure",   icon: "compass-outline",       icon_color: "#10b981", color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.03) 100%)", border: "rgba(16, 185, 129, 0.25)",  glow: "rgba(16, 185, 129, 0.3)"  },
  { id: 16,    name: "Animation",   icon: "color-palette-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)",  glow: "rgba(236, 72, 153, 0.3)"  },
  { id: 35,    name: "Comedy",      icon: "happy-outline",         icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)",  glow: "rgba(245, 197, 24, 0.3)"  },
  { id: 80,    name: "Crime",       icon: "shield-half-outline",   icon_color: "#6366f1", color: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.03) 100%)", border: "rgba(99, 102, 241, 0.25)",  glow: "rgba(99, 102, 241, 0.3)"  },
  { id: 99,    name: "Documentary", icon: "videocam-outline",      icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)",   border: "rgba(6, 182, 212, 0.25)",   glow: "rgba(6, 182, 212, 0.3)"   },
  { id: 18,    name: "Drama",       icon: "sad-outline",           icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)",  glow: "rgba(168, 85, 247, 0.3)"  },
  { id: 10751, name: "Family",      icon: "people-outline",        icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)",   border: "rgba(244, 63, 94, 0.25)",   glow: "rgba(244, 63, 94, 0.3)"   },
  { id: 14,    name: "Fantasy",     icon: "sparkles-outline",      icon_color: "#8b5cf6", color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.03) 100%)", border: "rgba(139, 92, 246, 0.25)",  glow: "rgba(139, 92, 246, 0.3)"  },
  { id: 36,    name: "History",     icon: "library-outline",       icon_color: "#b45309", color: "linear-gradient(135deg, rgba(180, 83, 9, 0.2) 0%, rgba(180, 83, 9, 0.03) 100%)",     border: "rgba(180, 83, 9, 0.25)",    glow: "rgba(180, 83, 9, 0.3)"    },
  { id: 27,    name: "Horror",      icon: "skull-outline",         icon_color: "#ef4444", color: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.03) 100%)",   border: "rgba(239, 68, 68, 0.25)",   glow: "rgba(239, 68, 68, 0.3)"   },
  { id: 10402, name: "Music",       icon: "musical-notes-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)",  glow: "rgba(236, 72, 153, 0.3)"  },
  { id: 9648,  name: "Mystery",     icon: "help-circle-outline",   icon_color: "#94a3b8", color: "linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(148, 163, 184, 0.03) 100%)",border: "rgba(148, 163, 184, 0.25)", glow: "rgba(148, 163, 184, 0.3)" },
  { id: 10749, name: "Romance",     icon: "heart-outline",         icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)",   border: "rgba(244, 63, 94, 0.25)",   glow: "rgba(244, 63, 94, 0.3)"   },
  { id: 878,   name: "Sci-Fi",      icon: "planet-outline",        icon_color: "#3b82f6", color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.03) 100%)", border: "rgba(59, 130, 246, 0.25)",  glow: "rgba(59, 130, 246, 0.3)"  },
  { id: 53,    name: "Thriller",    icon: "eye-outline",           icon_color: "#f97316", color: "linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.03) 100%)", border: "rgba(249, 115, 22, 0.25)",  glow: "rgba(249, 115, 22, 0.3)"  },
  { id: 10752, name: "War",         icon: "hammer-outline",        icon_color: "#78716c", color: "linear-gradient(135deg, rgba(120, 113, 108, 0.2) 0%, rgba(120, 113, 108, 0.03) 100%)",border: "rgba(120, 113, 108, 0.25)", glow: "rgba(120, 113, 108, 0.3)" },
  { id: 37,    name: "Western",     icon: "trail-sign-outline",    icon_color: "#d97706", color: "linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.03) 100%)",   border: "rgba(217, 119, 6, 0.25)",   glow: "rgba(217, 119, 6, 0.3)"   },
];

const TV_GENRES_LIST = [
  { id: 10759, name: "Action & Adventure", icon: "flame-outline",         icon_color: "#e50914", color: "linear-gradient(135deg, rgba(229, 9, 20, 0.2) 0%, rgba(229, 9, 20, 0.03) 100%)",     border: "rgba(229, 9, 20, 0.25)",    glow: "rgba(229, 9, 20, 0.3)"    },
  { id: 16,    name: "Animation",          icon: "color-palette-outline", icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)",  glow: "rgba(236, 72, 153, 0.3)"  },
  { id: 35,    name: "Comedy",             icon: "happy-outline",         icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)",  glow: "rgba(245, 197, 24, 0.3)"  },
  { id: 80,    name: "Crime",              icon: "shield-half-outline",   icon_color: "#6366f1", color: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.03) 100%)", border: "rgba(99, 102, 241, 0.25)",  glow: "rgba(99, 102, 241, 0.3)"  },
  { id: 99,    name: "Documentary",        icon: "videocam-outline",      icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)",   border: "rgba(6, 182, 212, 0.25)",   glow: "rgba(6, 182, 212, 0.3)"   },
  { id: 18,    name: "Drama",              icon: "sad-outline",           icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)",  glow: "rgba(168, 85, 247, 0.3)"  },
  { id: 10751, name: "Family",             icon: "people-outline",        icon_color: "#f43f5e", color: "linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(244, 63, 94, 0.03) 100%)",   border: "rgba(244, 63, 94, 0.25)",   glow: "rgba(244, 63, 94, 0.3)"   },
  { id: 10762, name: "Kids",               icon: "balloon-outline",       icon_color: "#10b981", color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.03) 100%)", border: "rgba(16, 185, 129, 0.25)",  glow: "rgba(16, 185, 129, 0.3)"  },
  { id: 9648,  name: "Mystery",            icon: "help-circle-outline",   icon_color: "#94a3b8", color: "linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(148, 163, 184, 0.03) 100%)",border: "rgba(148, 163, 184, 0.25)", glow: "rgba(148, 163, 184, 0.3)" },
  { id: 10763, name: "News",               icon: "newspaper-outline",     icon_color: "#06b6d4", color: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.03) 100%)",   border: "rgba(6, 182, 212, 0.25)",   glow: "rgba(6, 182, 212, 0.3)"   },
  { id: 10764, name: "Reality",            icon: "trophy-outline",        icon_color: "#f5c518", color: "linear-gradient(135deg, rgba(245, 197, 24, 0.2) 0%, rgba(245, 197, 24, 0.03) 100%)", border: "rgba(245, 197, 24, 0.25)",  glow: "rgba(245, 197, 24, 0.3)"  },
  { id: 10765, name: "Sci-Fi & Fantasy",   icon: "planet-outline",        icon_color: "#3b82f6", color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.03) 100%)", border: "rgba(59, 130, 246, 0.25)",  glow: "rgba(59, 130, 246, 0.3)"  },
  { id: 10766, name: "Soap",               icon: "water-outline",         icon_color: "#ec4899", color: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.03) 100%)", border: "rgba(236, 72, 153, 0.25)",  glow: "rgba(236, 72, 153, 0.3)"  },
  { id: 10767, name: "Talk",               icon: "chatbubbles-outline",   icon_color: "#a855f7", color: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.03) 100%)", border: "rgba(168, 85, 247, 0.25)",  glow: "rgba(168, 85, 247, 0.3)"  },
  { id: 10768, name: "War & Politics",     icon: "ribbon-outline",        icon_color: "#78716c", color: "linear-gradient(135deg, rgba(120, 113, 108, 0.2) 0%, rgba(120, 113, 108, 0.03) 100%)",border: "rgba(120, 113, 108, 0.25)", glow: "rgba(120, 113, 108, 0.3)" },
  { id: 37,    name: "Western",            icon: "trail-sign-outline",    icon_color: "#d97706", color: "linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.03) 100%)",   border: "rgba(217, 119, 6, 0.25)",   glow: "rgba(217, 119, 6, 0.3)"   },
];

/* ─── Quiz Data ───────────────────────────────────────────────────────────── */

const VIBE_MAP = {
  laugh:  { id: 35,   name: "Comedy",  icon: "happy-outline",        color: "#f5c518" },
  scared: { id: 27,   name: "Horror",  icon: "skull-outline",        color: "#ef4444" },
  think:  { id: 9648, name: "Mystery", icon: "help-circle-outline",  color: "#94a3b8" },
  pumped: { id: 28,   name: "Action",  icon: "flame-outline",        color: "#e50914" },
  feel:   { id: 18,   name: "Drama",   icon: "sad-outline",          color: "#a855f7" },
  escape: { id: 878,  name: "Sci-Fi",  icon: "planet-outline",       color: "#3b82f6" },
};

const QUIZ_STEPS = [
  {
    question: "What's your vibe right now?",
    key: "vibe",
    options: [
      { value: "laugh",  emoji: "😂", label: "Laugh" },
      { value: "scared", emoji: "😱", label: "Get Scared" },
      { value: "think",  emoji: "🤔", label: "Think Hard" },
      { value: "pumped", emoji: "💪", label: "Get Pumped" },
      { value: "feel",   emoji: "😢", label: "Feel Something" },
      { value: "escape", emoji: "🌌", label: "Escape Reality" },
    ],
  },
  {
    question: "How long do you want to watch?",
    key: "mediaType",
    options: [
      { value: "movie", emoji: "🎬", label: "Movie (under 2h)" },
      { value: "tv",    emoji: "📺", label: "Binge a Series" },
    ],
  },
  {
    question: "Which era?",
    key: "era",
    options: [
      { value: "classic", emoji: "🕰️", label: "Classic (pre-2000)" },
      { value: "modern",  emoji: "📅", label: "Modern (2000s)" },
      { value: "recent",  emoji: "🔥", label: "Recent (2020+)" },
      { value: "any",     emoji: "🤷", label: "Don't Care" },
    ],
  },
];

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function GenreGrid({ genres, baseHref }) {
  return (
    <div className="genre-grid">
      {genres.map((g, i) => (
        <Link
          key={g.id}
          href={`${baseHref}?genre=${g.id}`}
          className="genre-card"
          style={{
            "--accent-color": g.icon_color,
            animationDelay: `${i * 30}ms`,
          }}
        >
          {/* left accent bar */}
          <span className="card-accent-bar" style={{ background: g.icon_color }} />
          {/* icon */}
          <ion-icon name={g.icon} style={{ color: g.icon_color }} />
          {/* name */}
          <span className="card-name">{g.name}</span>
          {/* arrow */}
          <span className="card-browse">Browse →</span>
          {/* glass shimmer overlay */}
          <span className="card-shimmer" />
        </Link>
      ))}
    </div>
  );
}

function shufflePick(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

function QuizSection() {
  const [step, setStep]               = useState(0);
  const [answers, setAnswers]         = useState({});
  const [result, setResult]           = useState(null);
  const [animKey, setAnimKey]         = useState(0);
  const [picks, setPicks]             = useState([]);
  const [displayPicks, setDisplayPicks] = useState([]);
  const [picksLoading, setPicksLoading] = useState(false);

  const totalSteps = QUIZ_STEPS.length;

  // Fetch movie picks when result is set
  useEffect(() => {
    if (!result) return;
    setPicksLoading(true);
    fetch(`/api/discover?type=movie&genre=${result.genre.id}&page=1`)
      .then(r => r.json())
      .then(d => {
        const results = d.results || [];
        setPicks(results);
        setDisplayPicks(shufflePick(results, 6));
      })
      .catch(() => {})
      .finally(() => setPicksLoading(false));
  }, [result]);

  function handleAnswer(key, value) {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    if (step < totalSteps - 1) {
      setAnimKey(k => k + 1);
      setStep(s => s + 1);
    } else {
      const genre = VIBE_MAP[newAnswers.vibe] ?? VIBE_MAP.escape;
      setResult({ genre, answers: newAnswers });
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
    setPicks([]);
    setDisplayPicks([]);
    setAnimKey(k => k + 1);
  }

  function handleShuffle() {
    setDisplayPicks(shufflePick(picks, 6));
  }

  // ── Result Screen ──────────────────────────────────────────────────────────
  if (result) {
    const { genre, answers: ans, randomized } = result;
    const eraLabels  = { classic: "classics", modern: "2000s hits", recent: "the latest releases", any: "everything" };
    const eraText    = eraLabels[ans?.era] ?? "everything";

    function pickAnotherGenre() {
      const vibes = Object.keys(VIBE_MAP);
      let vibe;
      do { vibe = vibes[Math.floor(Math.random() * vibes.length)]; }
      while (VIBE_MAP[vibe].id === genre.id && vibes.length > 1);
      setResult({ genre: VIBE_MAP[vibe], answers: { vibe, mediaType: "movie", era: "any" }, randomized: true });
      setPicks([]);
      setDisplayPicks([]);
    }

    return (
      <div className="quiz-wrapper">
        {/* Genre result badge */}
        <div className="result-card" style={{ "--result-color": genre.color, borderColor: `${genre.color}22` }}>
          <div className="result-glow-ring" style={{ background: genre.color }} />
          <p className="result-label">{randomized ? "Random pick" : "Your genre match"}</p>
          <h2 className="result-genre-name" style={{ color: genre.color }}>{genre.name}</h2>
          <p className="result-desc">
            {randomized
              ? <>We rolled the dice — you got <strong style={{ color: genre.color }}>{genre.name}</strong>. Give it a shot!</>
              : <>Based on your answers, you&apos;ll love <strong style={{ color: genre.color }}>{genre.name}</strong>. Dive into {eraText}.</>
            }
          </p>
          <div className="result-ctas">
            <Link href={`/movies?genre=${genre.id}`} className="result-btn" style={{ background: genre.color, borderColor: genre.color }}>
              <ion-icon name="film-outline" /> {genre.name} Movies
            </Link>
            <Link href={`/tv?genre=${genre.id}`} className="result-btn result-btn--secondary">
              <ion-icon name="tv-outline" /> {genre.name} Shows
            </Link>
          </div>
          <div className="result-footer-row">
            <button className="result-random-btn" onClick={pickAnotherGenre}>
              <ion-icon name="dice-outline" /> Roll Again
            </button>
            <button className="try-again-btn" onClick={reset}>
              <ion-icon name="refresh-outline" /> Retake Quiz
            </button>
          </div>
        </div>

        {/* Movie picks */}
        <div className="picks-section">
          <div className="picks-header">
            <span className="picks-title">Top Picks For You</span>
          </div>

          {picksLoading ? (
            <div className="picks-loading">
              <ion-icon name="sync-outline" style={{ fontSize: "1.8rem", animation: "spin 1s linear infinite" }} />
              <span>Finding picks…</span>
            </div>
          ) : displayPicks.length > 0 ? (
            <>
              <div className="picks-grid">
                {displayPicks.map(movie => {
                  const img  = movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : movie.poster_path
                      ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                      : null;
                  const year = (movie.release_date || "").slice(0, 4);
                  const rating = movie.vote_average ? Math.round(movie.vote_average * 10) / 10 : null;
                  return (
                    <Link key={movie.id} href={`/details?id=${movie.id}&type=movie`} className="pick-card">
                      <div className="pick-thumb">
                        {img
                          ? <img src={img} alt={movie.title} loading="lazy" />
                          : <div className="pick-thumb-fallback"><ion-icon name="film-outline" /></div>
                        }
                        <div className="pick-thumb-overlay">
                          <div className="pick-play-btn"><ion-icon name="play" /></div>
                        </div>
                      </div>
                      <div className="pick-info">
                        <div className="pick-title">{movie.title}</div>
                        <div className="pick-meta">
                          {year && <span>{year}</span>}
                          {rating && <><span className="pick-dot" /><span className="pick-rating">★ {rating}</span></>}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link href={`/movies?genre=${genre.id}`} className="picks-browse-link">
                Browse All {genre.name} <ion-icon name="arrow-forward-outline" />
              </Link>
            </>
          ) : null}
        </div>
      </div>
    );
  }

  // ── Quiz Screen ────────────────────────────────────────────────────────────
  const current  = QUIZ_STEPS[step];

  function randomizeGenre() {
    const vibes = Object.keys(VIBE_MAP);
    const vibe  = vibes[Math.floor(Math.random() * vibes.length)];
    const genre = VIBE_MAP[vibe];
    setResult({ genre, answers: { vibe, mediaType: "movie", era: "any" }, randomized: true });
  }

  return (
    <div className="quiz-wrapper">
      {/* Segmented progress bar */}
      <div className="quiz-segments">
        {QUIZ_STEPS.map((_, i) => (
          <div
            key={i}
            className={`quiz-segment ${i < step ? "done" : i === step ? "active" : ""}`}
          />
        ))}
      </div>
      <p className="quiz-step-label">Question {step + 1} of {totalSteps}</p>

      {/* Question card */}
      <div className="quiz-card" key={animKey}>
        <h2 className="quiz-question">{current.question}</h2>
        <div className={`quiz-options quiz-options--${current.options.length <= 2 ? "two" : current.options.length <= 4 ? "four" : "six"}`}>
          {current.options.map(opt => (
            <button
              key={opt.value}
              className="quiz-opt-btn"
              onClick={() => handleAnswer(current.key, opt.value)}
            >
              <span className="opt-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Random picker */}
      <div className="quiz-random-row">
        <span className="quiz-random-label">Not feeling the quiz?</span>
        <button className="quiz-random-btn" onClick={randomizeGenre}>
          <ion-icon name="dice-outline" /> Pick for me
        </button>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function GenresPage() {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <>
      {/* Hero */}
      <div className="genres-hero">
        <div className="container">
          <h1 className="genres-title">Explore by Genre</h1>
          <p className="genres-subtitle">
            Discover your next obsession — browse by genre or let us pick one for you.
          </p>

          {/* Top nav tabs */}
          <div className="genre-tabs">
            <button
              className={`genre-tab-btn ${activeTab === "movies" ? "active" : ""}`}
              onClick={() => setActiveTab("movies")}
            >
              <ion-icon name="film-outline" /> Browse Movies
            </button>
            <button
              className={`genre-tab-btn ${activeTab === "tv" ? "active" : ""}`}
              onClick={() => setActiveTab("tv")}
            >
              <ion-icon name="tv-outline" /> Browse TV Shows
            </button>
            <button
              className={`genre-tab-btn genre-tab-btn--game ${activeTab === "quiz" ? "active" : ""}`}
              onClick={() => setActiveTab("quiz")}
            >
              <ion-icon name="dice-outline" /> What Should I Watch?
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container genres-body">
        {activeTab === "movies" && (
          <GenreGrid genres={MOVIE_GENRES_LIST} baseHref="/movies" />
        )}
        {activeTab === "tv" && (
          <GenreGrid genres={TV_GENRES_LIST} baseHref="/tv" />
        )}
        {activeTab === "quiz" && <QuizSection />}
      </div>

      <style jsx global>{`
        /* ── Hero ── */
        .genres-hero {
          position: relative;
          padding-top: calc(var(--header-height) + 50px);
          padding-bottom: 10px;
          text-align: center;
          background: linear-gradient(180deg, rgba(229, 9, 20, 0.07) 0%, transparent 100%);
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
          max-width: 520px;
          margin: 0 auto 32px;
          font-weight: 400;
          line-height: 1.6;
        }

        /* ── Top Tabs ── */
        .genre-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .genre-tab-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.5);
          padding: 9px 22px;
          border-radius: 99px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 7px;
          backdrop-filter: blur(10px);
          font-family: var(--font-family);
        }
        .genre-tab-btn:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: rgba(255,255,255,0.14);
        }
        .genre-tab-btn.active {
          background: white;
          border-color: white;
          color: #111;
        }
        .genre-tab-btn--game {
          border-color: rgba(229, 9, 20, 0.4);
          color: rgba(255, 180, 180, 0.8);
          background: rgba(229, 9, 20, 0.08);
        }
        .genre-tab-btn--game:hover {
          background: rgba(229, 9, 20, 0.15);
          color: #ff6b6b;
          border-color: rgba(229, 9, 20, 0.5);
        }
        .genre-tab-btn--game.active {
          background: #e50914;
          border-color: #e50914;
          color: white;
        }

        /* ── Body ── */
        .genres-body {
          margin-bottom: 70px;
        }

        /* ── Genre Grid ── */
        .genre-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
          animation: gridFadeIn 0.3s ease forwards;
        }

        /* ── Genre Card ── */
        .genre-card {
          position: relative;
          height: 62px;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 18px 0 22px;
          text-decoration: none;
          overflow: hidden;
          opacity: 0;
          animation: cardFadeInUp 0.45s ease forwards;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .genre-card:hover {
          transform: translateY(-3px);
          background: #161a20;
          border-color: rgba(255,255,255,0.16);
          box-shadow: 0 8px 28px rgba(0,0,0,0.55), 0 0 0 1px rgba(var(--accent-color-raw), 0.08);
        }
        .genre-card:hover .card-shimmer {
          opacity: 1;
        }
        .genre-card:hover ion-icon {
          transform: scale(1.15);
        }
        .card-accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 12px 0 0 12px;
          opacity: 0.9;
          flex-shrink: 0;
        }
        .genre-card ion-icon {
          font-size: 1.7rem;
          flex-shrink: 0;
          z-index: 2;
          transition: transform 0.25s ease;
        }
        .card-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          z-index: 2;
          letter-spacing: 0.2px;
          flex: 1;
        }
        .card-browse {
          font-size: 0.76rem;
          color: rgba(255,255,255,0.3);
          z-index: 2;
          white-space: nowrap;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .genre-card:hover .card-browse {
          color: rgba(255,255,255,0.65);
        }
        .card-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.025) 50%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Quiz Wrapper ── */
        .quiz-wrapper {
          max-width: 680px;
          margin: 40px auto 0;
        }

        /* ── Segmented Progress Bar ── */
        .quiz-segments {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
        }
        .quiz-segment {
          flex: 1;
          height: 3px;
          border-radius: 99px;
          background: rgba(255,255,255,0.08);
          transition: background 0.35s ease;
        }
        .quiz-segment.done { background: rgba(255,255,255,0.5); }
        .quiz-segment.active { background: white; }
        .quiz-step-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          text-align: right;
          margin-bottom: 24px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── Quiz Card ── */
        .quiz-card {
          background: linear-gradient(135deg, #111318 0%, #0d1117 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 40px 36px 36px;
          animation: slideInUp 0.38s cubic-bezier(0.34, 1.3, 0.64, 1) forwards;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .quiz-question {
          font-size: 1.55rem;
          font-weight: 800;
          color: white;
          margin-bottom: 28px;
          line-height: 1.25;
          text-align: center;
          font-family: var(--font-family);
        }

        /* ── Quiz Options ── */
        .quiz-options {
          display: grid;
          gap: 10px;
        }
        .quiz-options--six  { grid-template-columns: repeat(3, 1fr); }
        .quiz-options--four { grid-template-columns: repeat(2, 1fr); }
        .quiz-options--two  { grid-template-columns: repeat(2, 1fr); }
        .quiz-opt-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          font-family: var(--font-family);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.18s ease;
          letter-spacing: 0.2px;
        }
        .quiz-opt-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.35);
        }
        .quiz-opt-btn:active { transform: scale(0.97); }

        /* ── Random row ── */
        .quiz-random-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
        .quiz-random-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          font-weight: 500;
        }
        .quiz-random-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.6);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-family);
        }
        .quiz-random-btn:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }

        /* ── Result Card ── */
        .result-card {
          background: linear-gradient(135deg, #111318 0%, #0d1117 100%);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px;
          padding: 48px 36px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.5s cubic-bezier(0.34, 1.3, 0.64, 1) forwards;
          box-shadow: 0 24px 70px rgba(0,0,0,0.5);
        }
        .result-glow-ring {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          opacity: 0.14;
          filter: blur(60px);
          animation: pulseGlow 2.5s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .result-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-weight: 700;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
        }
        .result-genre-name {
          font-family: 'Bebas Neue', var(--font-family-title), sans-serif;
          font-size: 3.6rem;
          letter-spacing: 4px;
          font-weight: 400;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
          text-shadow: 0 0 40px currentColor;
          animation: bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }
        .result-desc {
          font-size: 0.92rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          max-width: 400px;
          margin: 0 auto 28px;
          position: relative;
          z-index: 2;
        }
        .result-ctas {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        .result-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          border-radius: 99px;
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: var(--font-family);
          border: 1px solid transparent;
        }
        .result-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
        .result-btn--secondary {
          background: rgba(255,255,255,0.07) !important;
          color: rgba(255,255,255,0.75);
          border-color: rgba(255,255,255,0.1) !important;
        }
        .result-btn--secondary:hover {
          background: rgba(255,255,255,0.12) !important;
          color: white;
        }
        .result-footer-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }
        .result-random-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.6);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-family);
        }
        .result-random-btn:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: rgba(255,255,255,0.22);
        }
        .try-again-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.07);
          background: transparent;
          color: rgba(255,255,255,0.3);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-family);
        }
        .try-again-btn:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(255,255,255,0.15);
        }

        /* ── Picks Section ── */
        .picks-section {
          margin-top: 28px;
        }
        .picks-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .picks-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(255,255,255,0.5);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .shuffle-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-family);
        }
        .shuffle-btn:hover {
          background: rgba(255,255,255,0.09);
          color: white;
          border-color: rgba(255,255,255,0.18);
        }
        .picks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .pick-card {
          border-radius: 10px;
          overflow: hidden;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.05);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .pick-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.55);
          border-color: rgba(255,255,255,0.12);
        }
        .pick-thumb {
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #1a1a1a;
          position: relative;
        }
        .pick-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .pick-card:hover .pick-thumb img { transform: scale(1.06); }
        .pick-thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .pick-card:hover .pick-thumb-overlay { opacity: 1; }
        .pick-play-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .pick-thumb-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.1);
          font-size: 1.8rem;
        }
        .pick-info {
          padding: 8px 10px;
        }
        .pick-title {
          font-size: 0.78rem;
          font-weight: 600;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }
        .pick-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 3px;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.35);
        }
        .pick-dot {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
        }
        .pick-rating { color: rgba(255,200,50,0.7); }
        .picks-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 40px;
          color: rgba(255,255,255,0.3);
          font-size: 0.88rem;
        }
        .picks-browse-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }
        .picks-browse-link:hover {
          color: white;
          gap: 10px;
        }

        /* ── Keyframes ── */
        @keyframes gridFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cardFadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          from { opacity: 0.08; }
          to   { opacity: 0.22; }
        }
        @keyframes bounceIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .genres-title { font-size: 2.4rem; }
          .genres-subtitle { font-size: 0.92rem; padding: 0 20px; }
          .genre-tabs { gap: 6px; }
          .genre-tab-btn { font-size: 0.8rem; padding: 8px 16px; }
          .genre-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 9px;
          }
          .genre-card { height: 54px; gap: 10px; padding: 0 12px 0 16px; }
          .genre-card ion-icon { font-size: 1.4rem; }
          .card-name { font-size: 0.85rem; }
          .card-browse { display: none; }
          .quiz-card { padding: 28px 18px 24px; }
          .quiz-question { font-size: 1.25rem; }
          .quiz-options--six { grid-template-columns: repeat(2, 1fr); }
          .quiz-opt-btn { min-height: 46px; }
          .result-card { padding: 36px 18px 28px; }
          .result-genre-name { font-size: 2.6rem; }
          .result-ctas { flex-direction: column; align-items: stretch; }
          .result-btn { justify-content: center; }
          .result-footer-row { flex-direction: column; align-items: center; gap: 8px; }
          .picks-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .quiz-wrapper { max-width: 100%; }
        }
      `}</style>
    </>
  );
}
