---
sidebar_position: 1
title: API Overview
---

# API Overview

CallVibe backend exposes endpoints for auth, analytics, integrations, users, and webhooks.

## Main Endpoint Groups

- Auth: signin, refresh, signout, validate, session info
- Calls and Customers: records, counts, filters, search
- Analytics: overview, sentiment, volume, action items
- Tenant: settings, worker state, integration credentials
- Team: invites, users, agent-name mapping
- WhatsApp: chats, messages, stats, analyze
- Webhooks: tenant-scoped WhatsApp webhook endpoint

## Authentication Model

- Frontend uses Supabase session tokens.
- Authenticated requests include bearer token.
- Backend resolves tenant scope and role.

## Webhook Endpoint Pattern

- GET /webhooks/whatsapp/tenant-id
- POST /webhooks/whatsapp/tenant-id

## Recommendation

Export an OpenAPI specification and publish endpoint-level request and response schemas in this section.
