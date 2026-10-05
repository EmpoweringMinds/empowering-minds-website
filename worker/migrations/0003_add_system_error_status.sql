-- Migration number: 0003
-- Separate attendee cancellation from system-side registration failures.

PRAGMA foreign_keys = OFF;

-- 1. Rebuild registrations with the new SYSTEM_ERROR status.

CREATE TABLE registrations_new (
  id TEXT PRIMARY KEY,
  workshop_id TEXT NOT NULL,
  attendee_name TEXT NOT NULL,
  attendee_email TEXT NOT NULL,
  attendee_phone TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING_PAYMENT'
    CHECK (
      status IN (
        'PENDING_PAYMENT',
        'REGISTERED',
        'CANCELLED',
        'SYSTEM_ERROR'
      )
    ),
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 2. Copy existing registrations.

INSERT INTO registrations_new (
  id,
  workshop_id,
  attendee_name,
  attendee_email,
  attendee_phone,
  status,
  amount,
  currency,
  created_at,
  updated_at
)
SELECT
  id,
  workshop_id,
  attendee_name,
  attendee_email,
  attendee_phone,
  status,
  amount,
  currency,
  created_at,
  updated_at
FROM registrations;

-- 3. Rebuild payments so its foreign key points to the
--    newly created registrations table.

CREATE TABLE payments_new (
  id TEXT PRIMARY KEY,
  registration_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_order_id TEXT UNIQUE,
  provider_payment_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'CREATED'
    CHECK (
      status IN (
        'CREATED',
        'AUTHORIZED',
        'CAPTURED',
        'FAILED',
        'CANCELLED',
        'EXPIRED'
      )
    ),
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (registration_id)
    REFERENCES registrations_new(id)
);

-- 4. Copy existing payments.

INSERT INTO payments_new (
  id,
  registration_id,
  provider,
  provider_order_id,
  provider_payment_id,
  status,
  amount,
  currency,
  created_at,
  updated_at
)
SELECT
  id,
  registration_id,
  provider,
  provider_order_id,
  provider_payment_id,
  status,
  amount,
  currency,
  created_at,
  updated_at
FROM payments;

-- 5. Remove the old tables.

DROP TABLE payments;
DROP TABLE registrations;

-- 6. Rename the rebuilt tables.

ALTER TABLE registrations_new
RENAME TO registrations;

ALTER TABLE payments_new
RENAME TO payments;

-- 7. Recreate registration indexes from migrations 0001 + 0002.

CREATE INDEX idx_registrations_workshop_email
ON registrations (workshop_id, attendee_email);

CREATE INDEX idx_registrations_status
ON registrations (status);

CREATE UNIQUE INDEX idx_registrations_workshop_email_unique
ON registrations (workshop_id, attendee_email);

-- 8. Recreate payment indexes from migration 0001.

CREATE INDEX idx_payments_registration_id
ON payments (registration_id);

CREATE INDEX idx_payments_status
ON payments (status);

PRAGMA foreign_keys = ON;