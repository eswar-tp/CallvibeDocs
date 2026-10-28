---
sidebar_position: 10
title: Bonvoice
description: Connect Bonvoice cloud telephony to CallVibe — generate an API token in Developer Settings, save it, start the worker, and validate call ingestion.
---

# Bonvoice Integration

## Required Credentials

- API Token

## Steps to Get Credentials

1. Log in to your Bonvoice Cloud Telephony Portal at [pbx.bonvoice.com](https://pbx.bonvoice.com/) as an administrator.
2. Navigate to the **Developer Settings** or **API Integrations** section from the sidebar.
3. Click **Generate API Keys** (or **Add Token**).
4. Give the token a recognizable name (e.g., "CallVibe Integration").
5. Click **Generate**, then immediately copy the API Key — it will not be shown again once you leave or refresh the page.

## Setup

1. Open Settings > Integrations.
2. Select Bonvoice.
3. Enter API Token.
4. Click Connect.
5. Start worker.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

<ThemedScreenshot
  alt="Bonvoice connection"
  light="/img/bonvoice-light.jpg"
  dark="/img/bonvoice-dark.jpg"
/>

## Validation

:::tip

- Bonvoice status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.
- The Data health panel shows this provider as Receiving. A Connected card only means credentials are saved. See [Data Health](../overview.mdx#data-health).

:::

<ThemedScreenshot
  alt="After connection"
  light="/img/bonvoice-after-connection-light.jpg"
  dark="/img/bonvoice-after-connection-dark.jpg"
  width={200}
/>
