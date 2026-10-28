---
sidebar_position: 3
title: Smartflo
description: Connect Smartflo (Tata Tele) to CallVibe — generate an API token from API Connect, save it as your API key, start the worker, and validate calls.
---

# Smartflo Integration

## Required Credentials

- API key

## Steps to Get Credentials

1. Log in to Smartflo at [cloudphone.tatateleservices.com/login](https://cloudphone.tatateleservices.com/login).
2. From the left panel, navigate to **API Connect → API Tokens**.
3. Click **Generate Token**.
4. Give the token a name and click **Save**.
5. Copy the generated token.

## Setup

1. Open Settings > Integrations.
2. Select Smartflo.
3. Enter API key.
4. Click Connect.
5. Start worker.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

<ThemedScreenshot
  alt="Smartflo connection"
  light="/img/smartflo-light.JPG"
  dark="/img/smartflo-dark.JPG"
/>

## Validation

:::tip

- Status changes to Connected.
- Worker remains healthy.
- Recent records are imported.
- The Data health panel shows this provider as Receiving. A Connected card only means credentials are saved. See [Data Health](../overview.mdx#data-health).

:::

<ThemedScreenshot
  alt="After connection"
  light="/img/smartflo-connected-light.JPG"
  dark="/img/smartflo-connected-dark.JPG"
  width={200}
/>
