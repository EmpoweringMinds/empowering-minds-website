CREATE UNIQUE INDEX idx_registrations_workshop_email_unique
ON registrations (workshop_id, attendee_email);