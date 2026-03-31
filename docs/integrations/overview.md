---
sidebar_position: 1
title: Integrations Overview
---

# Integrations Overview

CallVibe supports tenant-scoped vendor integrations with centralized worker orchestration.

## Setup Sequence

1. Open Settings > Integrations.
2. Add provider credentials.
3. Save and verify provider status.
4. Start worker.
5. Validate calls appear in Calls and Dashboard.

## Supported Providers

- SalesTrail: API key
- Smartflo: API key
- Exotel: API key, API token, account SID, region
- Kaleyra: API key
- 8x8: API key, username, password, API secret
- WhatsApp: webhook URL and message:new events

## Worker Behavior

- Worker starts only when at least one provider is configured.
- Status values include running, starting, stopped, and error.
- Error messages are displayed in the Integrations UI.

## Security Notes

- Credentials are stored per tenant.
- Use least-privilege API keys.
- Rotate secrets periodically.

Continue with provider guides in this section.
