/*
 * Ping IndexNow (Bing, Yandex, Seznam, Naver...) after a deploy so they recrawl
 * the portfolio within minutes instead of days. Google does not use IndexNow -
 * use "Request indexing" in Search Console for Google.
 *
 * Usage (after the Vercel deploy is live):  npm run indexnow
 */
const HOST = "rahulchoudhary05.vercel.app"
const KEY = "5e8b7691199d51b248e586b131310b76" // must match public/<KEY>.txt
const URLS = [`https://${HOST}/`, `https://${HOST}/llms.txt`]

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: URLS }),
})
  .then((res) => console.log(`IndexNow: HTTP ${res.status} ${res.status < 300 ? "(accepted)" : res.statusText}`))
  .catch((err) => {
    console.error("IndexNow ping failed:", err.message)
    process.exitCode = 1
  })
