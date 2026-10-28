---
sidebar_position: 2
title: SalesTrail
description: Connect SalesTrail Call Analytics to CallVibe — generate Pull API credentials, Base64-encode username:password, save the API key, and validate calls.
---

# SalesTrail Integration

## Required Credentials

- API key

## Steps to Get Credentials

1. Log in to your SalesTrail Call Analytics Dashboard at [standalone.salestrail.io/login](https://standalone.salestrail.io/login).
2. In the left menu, open **Integrations** and select **Pull API**. This opens the Salestrail Analytics API page.
3. Click **Generate Pull API credentials**.
4. Copy the generated Username and Password right away, then Base64-encode `username:password`. The password disappears when you refresh or leave the page.
5. On the same page, click the green **Authorize** button. Enter your SalesTrail Username and Password in the pop-up, then click **Authorize**.
6. Scroll down to `GET /export/calls/byCreated/csv`. Click it, then click **Try it out**, then **Execute**. This only reads data and changes nothing in SalesTrail.
7. In the response, find the cURL command and look for `-H "Authorization: Basic ..."`.
8. Copy only the long string after `Basic `. Don't copy the word `Basic` or the quotes. For example, in `-H "Authorization: Basic YWZkZWE0ZDItZjM5Mi00NGQyLcHI="`, your API key is `YWZkZWE0ZDItZjM5Mi00NGQyLcHI=`.

## Setup

1. Open Settings > Integrations.
2. Select SalesTrail.
3. Enter API key.
4. Click Connect.
5. Start worker.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

<ThemedScreenshot
  alt="Salestrail connection"
  light="/img/salestrail-light.JPG"
  dark="/img/salestrail-dark.JPG"
/>

## Validation

:::tip

- Integration status shows Connected.
- Worker runs without provider error.
- New calls appear in Calls view.
- The Data health panel shows this provider as Receiving. A Connected card only means credentials are saved. See [Data Health](../overview.mdx#data-health).

:::

<ThemedScreenshot
  alt="After connection"
  light="/img/salestrail-connected-light.JPG"
  dark="/img/salestrail-connected-dark.JPG"
  width={200}
/>