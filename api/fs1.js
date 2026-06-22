export default async function handler(req, res) {

  const target =
    "http://45.139.122.199:2095/live/ftU3Se0G/nSgzwb7/2432261.m3u8";

  const response = await fetch(target, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const text = await response.text();

  res.setHeader(
    "Content-Type",
    "application/vnd.apple.mpegurl"
  );

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.status(200).send(text);
}
