export function getWorkshopDateState(workshop) {
  const sessions = workshop.schedule?.sessions ?? [];

  if (!sessions.length) {
    return {
      status: "unknown",
      start: null,
      end: null,
    };
  }

  const starts = sessions
    .map((session) => new Date(session.start))
    .filter((date) => !Number.isNaN(date.getTime()));

  const ends = sessions
    .map((session) => new Date(session.end))
    .filter((date) => !Number.isNaN(date.getTime()));

  if (!starts.length || !ends.length) {
    return {
      status: "unknown",
      start: null,
      end: null,
    };
  }

  const start = new Date(Math.min(...starts.map((date) => date.getTime())));
  const end = new Date(Math.max(...ends.map((date) => date.getTime())));

  const now = new Date();

  return {
    status: end > now ? "upcoming" : "past",
    start,
    end,
  };
}