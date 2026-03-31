---
sidebar_position: 1
title: Common Issues
---

# Common Issues

## Worker does not start

Possible causes:

- No provider credentials saved
- Invalid provider credentials
- Tenant worker service issue

Checks:

1. Verify at least one provider is connected.
2. Confirm all required provider fields are populated.
3. Start worker again and read error message.

## No calls are visible

1. Confirm worker status is running.
2. Check provider connection status.
3. Validate date filters on Calls and Dashboard.
4. Confirm tenant and role mapping.

## Invite user cannot access data

1. Verify role assignment.
2. Verify agent-name mapping for agent users.
3. Ask user to sign out and sign in again.

## WhatsApp messages not appearing

1. Verify webhook URL matches tenant.
2. Confirm provider is sending message:new events.
3. Re-copy webhook URL from Integrations page.

## Password reset problems

1. Confirm reset email was sent.
2. Ensure user opens latest reset link.
3. Verify update-password page is reachable.
