import json, os, time, feedparser
from datetime import datetime, timezone

# Where the JSON lives in the site
OUT_PATH = "docs/data/newsletters.json"

# Load existing file (to keep names/descriptions)
with open(OUT_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

updated_feeds = []
headers = {"User-Agent": "framelab-newsletters-bot/1.0 (+github-actions)"}

def best_date(entry):
    for k in ("published_parsed", "updated_parsed"):
        t = entry.get(k)
        if t:  # time.struct_time
            return time.strftime("%Y-%m-%dT%H:%M:%SZ", t)
    return ""

for f in data.get("feeds", []):
    rss = f.get("rss")
    latest = []
    if rss:
        parsed = feedparser.parse(rss, request_headers=headers)
        for e in parsed.entries[:5]:
            latest.append({
                "title": e.get("title", "")[:140],
                "url": e.get("link", ""),
                "date": best_date(e) or ""
            })
    f["latest"] = latest[:3]
    updated_feeds.append(f)

out = {
    "updated": datetime.now(timezone.utc).isoformat(),
    "feeds": updated_feeds
}

os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)
print("Wrote", OUT_PATH)
