---
sidebar_position: 2
title: SalesTrail
---

# SalesTrail Integration

## Required Credentials

- API key

## Steps to Get Credentials

1. Log in to your SalesTrail Call Analytics Dashboard at [standalone.salestrail.io/login](https://standalone.salestrail.io/login).
2. At the top of the page, open the API documentation panel.
3. Click **Generate Pull API credentials**.
4. Copy the generated Username and Password immediately — the password disappears once you refresh or leave the page.
5. Base64-encode `username:password` and use that value as the API key in CallVibe.

## Setup

1. Open Settings > Integrations.
2. Select SalesTrail.
3. Enter API key.
4. Click Connect.
5. Start worker.

![Settings page](/img/settings.JPG)

![Salestrail connection](/img/salestrail.JPG)

## Validation

- Integration status shows Connected.
- Worker runs without provider error.
- New calls appear in Calls view.

<img src="/img/salestrail-connected.JPG" alt="After connection" width="200" />