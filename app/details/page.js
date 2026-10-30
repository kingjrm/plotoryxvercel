import { fetchFromTMDB } from "@/config/tmdb";
import DetailsClient from "@/components/DetailsClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams.id;
  const type = resolvedSearchParams.type || "movie";

  if (!id) return {};

  try {
    const details = await fetchFromTMDB(`/${type}/${id}`, {});
    const title = details?.title || details?.name || "Plotoryx";
    const description = details?.overview
      ? details.overview.slice(0, 160)
      : "Watch this on Plotoryx for free.";
    const poster = details?.poster_path
      ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
      : "https://plotoryx.vercel.app/Plotoryx-Logo.png";
    const backdrop = details?.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`
      : poster;
    const year = (details?.release_date || details?.first_air_date || "").slice(0, 4);
    const fullTitle = year ? `${title} (${year}) | Plotoryx` : `${title} | Plotoryx`;

    return {
      title: fullTitle,
      description,
      openGraph: {
        title: fullTitle,
        description,
        url: `https://plotoryx.vercel.app/details?id=${id}&type=${type}`,
        siteName: "Plotoryx",
        images: [
          { url: backdrop, width: 1280, height: 720, alt: title },
          { url: poster, width: 500, height: 750, alt: title },
        ],
        type: type === "tv" ? "video.tv_show" : "video.movie",
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description,
        images: [backdrop],
      },
    };
  } catch {
    return {};
  }
}

export default async function DetailsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams.id;
  const type = resolvedSearchParams.type || "movie";

  if (!id) notFound();

  const appendFields = type === "tv"
    ? "credits,videos,recommendations,content_ratings,seasons"
    : "credits,videos,recommendations,release_dates";

  const details = await fetchFromTMDB(`/${type}/${id}`, {
    append_to_response: appendFields,
  });

  if (!details) notFound();

  // For TV: fetch Season 1 episodes
  let seasonEpisodes = [];
  if (type === "tv") {
    try {
      const seasonData = await fetchFromTMDB(`/tv/${id}/season/1`, {});
      seasonEpisodes = seasonData?.episodes || [];
    } catch (e) {}
  }

  return (
    <DetailsClient
      details={{ ...details, season_episodes: seasonEpisodes }}
      id={id}
      type={type}
    />
  );
}
