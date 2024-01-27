"use server";
export async function getNFLScores() {
  const scoreboard = process.env.NFL_SCOREBOARD;
  try {
    const res = await fetch(`${scoreboard}`);
    const scores = await res.json();
    console.log("server.events:", scores.events);
    return scores.events;
  } catch (err) {
    console.log(err);
  }
}
