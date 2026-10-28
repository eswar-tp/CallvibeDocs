---
sidebar_position: 5
title: Kaleyra
description: Connect Kaleyra Voice to CallVibe — create an API key from Developers → APIs, receive it by email, save it in CallVibe, and validate calls.
---

# Kaleyra Integration

## Required Credentials

- API key

## Steps to Get Credentials

1. Sign in to your Kaleyra Voice account at [voice.kaleyra.com](https://voice.kaleyra.com/).
2. From the left-hand menu, navigate to:
   **Developers → APIs**
   (or directly visit: [https://voice.kaleyra.com/apis](https://voice.kaleyra.com/apis))
3. Click **+ New** to create a new API key, then click **Save**.
4. An email containing your API key will be sent to your registered email address.

## Setup

1. Open Settings > Integrations.
2. Select Kaleyra.
3. Enter API key.
4. Click Connect.
5. Start worker.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

<ThemedScreenshot
  alt="Kaleyra connection"
  light="/img/kaleyra2-light.JPG"
  dark="/img/kaleyra2-dark.JPG"
/>

## Validation

:::tip

- Card status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.
- The Data health panel shows this provider as Receiving. A Connected card only means credentials are saved. See [Data Health](../overview.mdx#data-health).

:::

<ThemedScreenshot
  alt="After connection"
  light="/img/kaleyra-after-connection-light.JPG"
  dark="/img/kaleyra-after-connection-dark.JPG"
  width={200}
/>
