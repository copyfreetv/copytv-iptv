export default async function handler(req, res) {
  const path = req.query.path;

  const target =
    "http://45.139.122.199:2095" + path;

  const headers = {
    "User-Agent":
      "Lavf/58.45.100",
    "Referer":
      "http://45.139.122.199:2095/",
    "Origin":
      "http://45.139.122.199:2095"
  };

  if (req.headers.range) {
    headers["Range"] = req.headers.range;
  }

  const response = await fetch(target, {
    headers
  });

  const buffer = Buffer.from(
    await response.arrayBuffer()
  );

  res.status(response.status);

  response.headers.forEach((value, key) => {
    try {
      res.setHeader(key, value);
    } catch {}
  });

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.send(buffer);
}
