---
sidebar_position: 4
title: Exotel
description: Connect Exotel cloud telephony to CallVibe — get your API credentials, configure the integration, and validate that calls are flowing.
---

# Exotel Integration

## Required Credentials

- API key
- API token
- Account SID
- Region

## Setup

1. Open Settings > Integrations.
2. Select Exotel.
3. Enter API key, token, and account SID.
4. Select region.
5. Click Connect and then start worker.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

<ThemedScreenshot
  alt="Exotel connection"
  light="/img/exotel-light.JPG"
  dark="/img/exotel-dark.JPG"
/>

## Validation

:::tip

- Exotel card shows Connected.
- Worker does not show Exotel error.
- Calls appear in Calls and Overview.
- The Data health panel shows this provider as Receiving. A Connected card only means credentials are saved. See [Data Health](../overview.mdx#data-health).

:::

<ThemedScreenshot
  alt="After connection"
  light="/img/exotel-connected-light.JPG"
  dark="/img/exotel-connected-dark.JPG"
  width={200}
/>