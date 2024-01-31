"use server";
export async function getNFLNews() {
  const news = process.env.NFL_NEWS;
  try {
    const res = await fetch(`${news}`);
    const articles = await res.json();
    console.log("server.events:", articles);
    return articles;
  } catch (err) {
    console.log(err);
  }
}
