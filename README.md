# 1% Club

A real-time multiplayer quiz game inspired by the TV show. Questions are ranked by the percentage of people expected to get them right — from 90% all the way down to 1%.

**Live:** https://flippercowboy.github.io/1-percent-club/

---

## How it works

- The **host** opens `index.html`, creates a game, adds questions, and shares a QR code
- **Players** scan the QR code on their phones and join with their name
- The host runs the game question by question — wrong answers eliminate players
- Last person (or people) standing wins

## Setup

### 1. Supabase

Create a free project at [supabase.com](https://supabase.com), then:

1. Run `setup.sql` in the Supabase SQL Editor
2. Copy your **Project URL** and **Publishable key** from Settings → API Keys
3. Paste them into `config.js`

### 2. Run locally

Serve the folder over HTTP (not via `file://`):

```bash
python3 -m http.server 8080
```

Then open `http://YOUR_LOCAL_IP:8080/index.html` on the host device.

### 3. Or use GitHub Pages

The live version at the URL above is hosted on GitHub Pages — no server needed.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Host dashboard |
| `play.html` | Player mobile view |
| `config.js` | Supabase credentials |
| `setup.sql` | Database schema (run once) |

## Tech

- Vanilla HTML / CSS / JavaScript
- [Supabase](https://supabase.com) — database + realtime
- [qrcodejs](https://github.com/davidshimjs/qrcodejs) — QR code generation
