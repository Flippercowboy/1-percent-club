# 1% Club — Host Guide

## What You Need

- A laptop or desktop computer to run the host dashboard
- A screen or projector so the room can see your display
- A stable Wi-Fi connection that all players can also access
- Questions prepared in advance (or load one of the built-in question packs)

---

## Step 1 — Open the Host Dashboard

Open `index.html` in your browser. You will see the 1% Club start screen.

Click **Create New Game**.

---

## Step 2 — Add Your Questions

You will land on the Setup screen. Add questions one at a time using the form on the left:

1. Type the question
2. Fill in the four answer options (A, B, C, D)
3. Select which option is correct
4. Choose a difficulty level:

| Difficulty | Meaning |
|------------|---------|
| 90% | Almost everyone gets this right |
| 75% | Easy |
| 50% | Medium |
| 30% | Hard |
| 10% | Very hard |
| 5% | Expert |
| 1% | The 1% — almost nobody gets it |

Click **+ Add Question** to add it to the list on the right. Repeat for each question.

**Or load a question pack** — below the form you will see a grid of pre-built packs. Click any pack to instantly load its questions. This replaces whatever is currently in the list, so choose your pack first before adding any custom questions on top.

The following packs are included:

| Pack | Topic |
|------|-------|
| General Knowledge | Broad mix — suits any group |
| Science & Nature | Planets, elements, biology |
| History & Geography | Dates, capitals, world events |
| Sport & Entertainment | Football, music, film, Olympics |

Questions should ideally run from easy to hard — this builds tension as the game progresses.

---

## Step 3 — Open the Lobby

Once you have at least one question added, click **Open Lobby**.

The lobby screen shows:
- A **QR code** players can scan to join
- The **6-character game code** (e.g. `XK7P2R`) for players who prefer to type it in

Share the game code with your players verbally, on a slide, or on screen. Players visit **play.html** in their browser (or scan the QR code) and enter the code plus their name.

You will see each player appear as a chip on screen as they join.

---

## Step 4 — Start the Game

When everyone is in, click **Start Game**.

The first question appears on your screen. Players will simultaneously see the question and four answer options on their own devices and must tap to lock in their answer.

You can see a live counter showing how many players have answered. Wait until most players have answered before revealing — but there is no enforced timer, so use your judgement.

---

## Step 5 — Reveal the Answer

Click **Reveal Answer** when you are ready.

The correct answer highlights on your screen. You will see three stats:

- **Got it right** — total players who answered correctly
- **Eliminated this round** — players who answered incorrectly
- **Still in the game** — surviving players

The names of players eliminated this round appear in red. If any previously eliminated players answered correctly and earned their way back in, their names appear in blue under **Back In The Game**.

The player icon grid at the bottom shows every player — blue icons are still in, grey icons are eliminated.

---

## Step 6 — Continue or End

Click **Next Question** to move to the next round. Repeat steps 5 and 6 until the final question.

After the last question (or if everyone is eliminated), click **End Game** to go to the results screen, which shows the survivors.

---

## How Elimination Works

- A player who answers **incorrectly** (or does not answer) is eliminated.
- Eliminated players are **not locked out** — they still see and can answer every subsequent question on their device.
- If an eliminated player answers a future question **correctly**, they are **reinstated** and back in the game.
- This continues for every round — there is always a route back in.

---

## Player Instructions (Tell Your Players)

> "Open your browser, go to **play.html** or scan the QR code on screen. Enter the game code and your name, then tap Join Game. Answer each question before the host reveals — tap your answer to lock it in. If you get eliminated, keep playing — a correct answer on any future question brings you back."

---

## Adding a New Question Pack

Question packs live in the file `question-packs.js` in the project folder. To add a new pack:

1. Open `question-packs.js` in any text editor
2. Copy the template at the top of the file
3. Paste it as a new entry inside the `QUESTION_PACKS` array (before the closing `];`)
4. Fill in the `id`, `name`, `description`, and `questions`
5. Save the file — the new pack will appear in the picker next time a game is created

Each question needs:
- `text` — the question
- `options` — exactly four answer strings in an array
- `correct_answer` — must match one of the four options exactly (copy and paste to be safe)
- `percentage` — the difficulty: `90%`, `75%`, `50%`, `30%`, `10%`, `5%`, or `1%`

---

## Tips

- **Question order matters** — start easy to keep everyone in early rounds, save the hard ones for the end.
- **Pause before revealing** — build suspense. Give a countdown before you click Reveal Answer.
- **Call out the reinstated players** — when someone comes back in, it is worth calling out their name to the room.
- **Player cap** — the game supports up to approximately 195 players via the real-time connection.
- **Reconnecting** — if a player's browser refreshes or closes mid-game, they can re-enter the same code and name to rejoin from where they left off.
- **Host reconnecting** — if your browser refreshes, reopen `index.html` and the game will resume automatically.
