---
sidebar_position: 1
title: API Overview
description: Explore the CallVibe API — endpoint groups for auth, calls, contacts, analytics, AI insights, tenant settings, team, WhatsApp, and tenant-scoped webhooks for pushing calls.
---

# API Overview

The CallVibe backend has endpoints for auth, calls, contacts, analytics, integrations, team, and webhooks.

## Main Endpoint Groups

- **Auth:** sign in, refresh, sign out, validate, session info
- **Calls:** records, counts, filters, audio links, manual upload
- **Contacts:** `/api/leads` for contacts, notes, statuses, and custom fields
- **Analytics:** `/api/v2` for the Overview, follow-ups, call quality, data health, and watchlist
- **Intelligence and Outlook:** insights summaries and AI summaries
- **Ask:** `/api/assistant` for the in-app assistant, including streaming chat
- **AI Insights:** categories, extraction fields, and groups
- **Tenant:** settings, worker start, stop and status, integration credentials, notifications, usage
- **Team:** invites, users, agent-name mapping, agent directory
- **WhatsApp:** chats, messages, stats, analyze
- **Webhooks:** tenant-scoped endpoints for WhatsApp and for pushing calls

## Authentication Model

- The app uses Supabase session tokens.
- Authenticated requests include a bearer token.
- The backend works out your tenant and role from the token.
- Worker start and stop, and other settings changes, need an owner (admin) account.

## Data Health Endpoint

`GET /api/v2/data-health` reports whether calls are arriving. It powers the Data health panel and the top bar pill. See [Data Health](../integrations/overview.mdx#data-health).

It returns a state (receiving, quiet, stalled, never, or unmapped agent), the last call time, call counts, per-provider status, pushed event counts, and worker status. A count is `null` when it couldn't be checked. `null` never means zero.

## Webhook Endpoints

WhatsApp:

- GET /webhooks/whatsapp/tenant-id
- POST /webhooks/whatsapp/tenant-id

Push calls from any phone system:

- POST /webhooks/calls/tenant-id

### Push Calls Webhook

Use this to send calls from a phone system that has no built-in CallVibe integration. Set it up with the Incoming webhook card in Settings > Integrations.

**Authentication:** send your webhook secret as `Authorization: Bearer <secret>`, or as a `?token=` query parameter. A missing or wrong secret returns 401.

**Body:** either JSON, or multipart form data with a `payload` part (JSON) and an `audio` part (the recording).

**Required fields in the payload:**

- `callId`: unique for each recording. Matches the recording filename without its extension.
- `startTime`: with a timezone offset, or send `startTimeEpoch`, or add a `timezone` field
- `duration`: whole seconds
- `answered`: true or false
- `inbound`: true or false
- `number`: the customer's number
- `userName`: the agent's name
- `userPhone`: the agent's number

**Responses:**

| Status | Meaning |
| --- | --- |
| 202 accepted | Stored. AI processing happens afterwards. |
| 202 already processed | This call was sent before. Safe to ignore. |
| 422 | Metadata is incomplete. The audio is kept and the response lists what to fix. Send the corrected call again with the same `callId`. |
| 400 | The request is wrong, for example invalid JSON or no `callId`. |
| 401 | Missing or invalid secret. |

Only retry on 5xx, 429, or a timeout. A 4xx fails the same way until you fix the request.

Events that need metadata show in the Pushed events section of the Data health panel.

## Recommendation

Export an OpenAPI specification and publish endpoint-level request and response schemas in this section.
