export default async function handler(req, res) {

  const target =
    "http://195.128.27.223:8080/live/play/ZUhCUFJHNUdLM2xUTURSUFVHYzJlVGQzZGxGVmVFcENWa2sxUjNwYVlrSkVTMWRVVUhrNU9HZ3pNRDA9/2432261";

  const response = await fetch(target);

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
