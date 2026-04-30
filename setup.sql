-- ============================================================
-- 1% Club — Database Setup
-- Run this entire script in your Supabase SQL Editor once.
-- ============================================================

-- Tables
CREATE TABLE IF NOT EXISTS games (
  id                     UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  game_code              TEXT        NOT NULL UNIQUE,
  status                 TEXT        NOT NULL DEFAULT 'lobby',
  current_question_index INTEGER     NOT NULL DEFAULT -1,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS players (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id     UUID        NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  name        TEXT        NOT NULL,
  eliminated  BOOLEAN     NOT NULL DEFAULT FALSE,
  joined_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS questions (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id        UUID        NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  question_index INTEGER     NOT NULL,
  text           TEXT        NOT NULL,
  options        JSONB       NOT NULL,
  correct_answer TEXT        NOT NULL,
  percentage     TEXT        NOT NULL DEFAULT '50%',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS answers (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id      UUID        NOT NULL REFERENCES games(id) ON DELETE CASCADE,
  player_id    UUID        NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  question_id  UUID        NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  answer       TEXT        NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (player_id, question_id)
);

-- Full replica identity so Realtime UPDATE events include the complete row
ALTER TABLE games    REPLICA IDENTITY FULL;
ALTER TABLE players  REPLICA IDENTITY FULL;
ALTER TABLE answers  REPLICA IDENTITY FULL;

-- Row Level Security (open access for anon key — tighten for production)
ALTER TABLE games     ENABLE ROW LEVEL SECURITY;
ALTER TABLE players   ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_all_games"     ON games     FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_players"   ON players   FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_questions" ON questions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_answers"   ON answers   FOR ALL TO anon USING (true) WITH CHECK (true);

-- Enable Realtime on the tables that drive live updates
ALTER PUBLICATION supabase_realtime ADD TABLE games;
ALTER PUBLICATION supabase_realtime ADD TABLE players;
ALTER PUBLICATION supabase_realtime ADD TABLE answers;
