export default async function handler(req, res) {

  const path = req.query.path;

  const target =
    "http://45.139.122.199:2095" + path;

  const response = await fetch(target);

  const buffer = Buffer.from(
    await response.arrayBuffer()
  );

  res.setHeader(
    "Content-Type",
    "video/mp2t"
  );

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.status(200).send(buffer);
}
