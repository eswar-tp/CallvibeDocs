---
sidebar_position: 8
title: GHL CRM
---

# GHL CRM Integration

The GHL CRM integration connects CallVibe with your GoHighLevel account. It automatically creates new leads as contacts, pushes call summaries into GHL contact notes (including summary, call direction, agent name, and recording URL), and logs action items as tasks in the Tasks section.

## Required Credentials

- Location ID
- Private Integration Token (PIT)

## Steps to Get Credentials

### Private Integration Token (PIT)

1. Log in to GoHighLevel at [https://www.gohighlevel.com/](https://www.gohighlevel.com/) as an admin.
2. From the left-hand menu, navigate to:
   **Settings → Private Integrations**
3. Click **Create New Integration**.
4. Give the integration a name and set permissions to **Read and Edit Contacts**.
5. Click **Create**.
6. Your Private Integration Token will appear on the screen — copy it immediately.

### Location ID

1. In the left-hand menu, navigate to:
   **Settings → Business Profile**
2. Your Location ID is displayed next to the **General Information** heading — click the copy icon to copy it.

## Setup

1. Open Settings > Integrations.
2. Select GHL CRM.
3. Enter your Location ID and Private Integration Token.
4. Click Connect.
5. Start worker.

![Settings page](/img/settings.JPG)

![GHL connection](/img/GHL.JPG)

## Validation

- Card status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.

<img src="/img/ghl-after-connection.JPG" alt="After connection" width="200" />