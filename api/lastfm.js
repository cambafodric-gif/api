// /api/lastfm.js — runs on Vercel like a little server goblin
export default async function handler(req, res) {
  const { artist, album } = req.query;
  
  const apiKey = "YOUR_LASTFM_API_KEY";
  const username = "YOUR_LASTFM_USERNAME";

  const url = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&username=${username}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to fetch", details: err.message });
  }
}
