---
sidebar_position: 8
title: RingCentral
---

# RingCentral Integration

## Required Credentials

- Client ID
- Client Token
- JWT Token

## Steps to Get Credentials

1. **Sign in to the RingCentral Developer Console** as an administrator at [developers.ringcentral.com](https://developers.ringcentral.com/).

2. **Navigate to your apps** — from the top navigation, go to:
   **Console → Apps**

3. **Register a new app** — if you haven't created an app yet, click **Register App** and complete the registration form to enable API access.

4. **Open your app** — once the app is created (or if it already exists), click on the app name to open its details page.

5. **Download the Credentials JSON file** — on the app details page, locate the option to download the **Credentials JSON** file. This file contains all the required credentials including the **Client ID**, **Client Token**, and **JWT Token**. Copy these values and use them during the CallVibe integration setup.

## Setup

1. Open Settings > Integrations.
2. Select RingCentral.
3. Enter Client ID, Client Token, and JWT Token.
4. Click Connect.
5. Start worker.

![Settings page](/img/settings.JPG)

![Ringcentral connection](/img/ringcentral.JPG)

## Validation

- Card status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.

<img src="/img/ringcentral-after-connection.JPG" alt="After connection" width="200" />