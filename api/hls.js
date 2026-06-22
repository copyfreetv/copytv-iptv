export default async function handler(req, res) {

  const path = req.query.path;

  const target =
    "http://45.139.122.199:2095" + path;

  const headers = {};

  if (req.headers.range) {
    headers.Range = req.headers.range;
  }

  const response = await fetch(target, {
    headers
  });

  const buffer = Buffer.from(
    await response.arrayBuffer()
  );

  res.status(response.status);

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.setHeader(
    "Accept-Ranges",
    "bytes"
  );

  const contentType =
    response.headers.get("content-type");

  if (contentType) {
    res.setHeader(
      "Content-Type",
      contentType
    );
  }

  const contentRange =
    response.headers.get("content-range");

  if (contentRange) {
    res.setHeader(
      "Content-Range",
      contentRange
    );
  }

  res.send(buffer);
}
