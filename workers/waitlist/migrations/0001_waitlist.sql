-- Trilogicon waitlist — D1 migration
-- Apply: wrangler d1 migrations apply DB --remote

CREATE TABLE waitlist_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  email TEXT NOT NULL,
  x_handle TEXT,
  source TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- One row per email; duplicate INSERT is rejected at DB layer.
CREATE UNIQUE INDEX idx_waitlist_email_unique ON waitlist_entries (email);

-- Optional reporting / admin inspection by time.
CREATE INDEX idx_waitlist_created_at ON waitlist_entries (created_at);
