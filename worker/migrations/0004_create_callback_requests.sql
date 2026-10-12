
CREATE TABLE IF NOT EXISTS callback_requests (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    organization TEXT,
    service_group TEXT NOT NULL,
    service_id TEXT NOT NULL,
    service_title TEXT NOT NULL,
    message TEXT,
    intent TEXT NOT NULL
        CHECK (intent IN ('callback', 'demo')),
    status TEXT NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'contacted', 'closed')),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_callback_requests_status
ON callback_requests(status);

CREATE INDEX IF NOT EXISTS idx_callback_requests_created_at
ON callback_requests(created_at);
