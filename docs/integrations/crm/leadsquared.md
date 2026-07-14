---
sidebar_position: 9
title: LeadSquared CRM
---

# LeadSquared CRM Integration

## Required Credentials

- Access Key
- Secret Key
- Region (API Host)

## Steps to Get Credentials

1. Log in to LeadSquared at [app.leadsquared.com](https://app.leadsquared.com/) as an admin user.
2. Navigate to:
   **My Account → Settings → API and Webhooks → API Access Keys**
3. Click **Generate Key** to create an Access Key and Secret Key. Use the keys of an Admin user to avoid role-based restrictions.
4. Note your Host URL shown on the same page — it tells you which Region to select in CallVibe.

## Setup

1. Open Settings > Integrations.
2. Select LeadSquared.
3. Enter Access Key and Secret Key.
4. Select your Region to match your LeadSquared Host URL (India Mumbai, India Hyderabad, Singapore, United States, Ireland, or Canada).
5. Click Connect.
6. Start worker.

![Settings page](/img/settings.JPG)

![LeadSquared connection](/img/lead-squared.jpg)

## Validation

- Card status shows Connected.
- Worker remains running.
- Call ingestion is visible in Calls.

<img src="/img/lead-squared-after-connection.jpg" alt="After connection" width="200" />
