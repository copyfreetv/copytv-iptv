export default async function handler(req, res) {
  try {
    const path = req.query.path;

    const target =
      "http://45.139.122.199:2095" + path;

    const response = await fetch(target, {
      headers: {
        "User-Agent":
          "Mozilla/5.0",
        "Referer":
          "http://45.139.122.199:2095/",
        "Origin":
          "http://45.139.122.199:2095"
      }
    });

    const text = await response.text();

    console.log("TARGET =", target);
    console.log("STATUS =", response.status);
    console.log("BODY =", text.substring(0, 300));

    return res.status(200).json({
      target,
      status: response.status,
      body: text.substring(0, 300)
    });

  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
}
