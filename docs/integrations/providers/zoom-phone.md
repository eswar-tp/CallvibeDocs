---
sidebar_position: 12
title: Zoom Phone
description: Connect Zoom Phone to CallVibe — create a Marketplace app, add call-log and recording scopes, copy Account, Client ID, and Secret, then connect.
---

# Zoom Phone Integration

## Required Credentials

- Account ID
- Client ID
- Client Secret

## Steps to Get Credentials

1. Go to [marketplace.zoom.us](https://marketplace.zoom.us/) and sign in with your Zoom account.
2. In the bottom-left corner, click **Developer**.
3. Create an app, give it a name, and copy the **Account ID**, **Client ID**, and **Client Secret**.
4. Fill in basic app information (company name, developer name, contact email — any values are fine).
5. Skip the Features step and continue.
6. Under Scopes, add:
   - `phone:read:list_call_logs:admin`
   - `phone:read:list_call_recordings:admin`
   - `phone:read:call_recording:admin`
7. Activate the app.

## Setup

1. Open Settings > Integrations.
2. Select Zoom Phone.
3. Enter Account ID, Client ID, and Client Secret.
4. Click Connect.
5. Start worker.

![Settings page](/img/settings.JPG)

![Zoom Phone connection](/img/zoom-phone.jpg)

## Validation

:::tip

- Zoom Phone status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.

:::

<img src="/img/zoom-phone-after-connection.jpg" alt="After connection" width="200" />
