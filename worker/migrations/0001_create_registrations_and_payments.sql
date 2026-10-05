-- Migration number: 0001 	 2026-10-01T10:08:23.092Z
CREATE TABLE registrations (
  id TEXT PRIMARY KEY,
  workshop_id TEXT NOT NULL,
  attendee_name TEXT NOT NULL,
  attendee_email TEXT NOT NULL,
  attendee_phone TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING_PAYMENT'
    CHECK (status IN ('PENDING_PAYMENT', 'REGISTERED', 'CANCELLED')),
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_registrations_workshop_email
ON registrations (workshop_id, attendee_email);

CREATE INDEX idx_registrations_status
ON registrations (status);

CREATE TABLE payments (
  id TEXT PRIMARY KEY,
  registration_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_order_id TEXT UNIQUE,
  provider_payment_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'CREATED'
    CHECK (status IN (
      'CREATED',
      'AUTHORIZED',
      'CAPTURED',
      'FAILED',
      'CANCELLED',
      'EXPIRED'
    )),
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (registration_id) REFERENCES registrations(id)
);

CREATE INDEX idx_payments_registration_id
ON payments (registration_id);

CREATE INDEX idx_payments_status
ON payments (status);