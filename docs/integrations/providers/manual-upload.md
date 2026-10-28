---
sidebar_position: 11
title: Upload Center
description: Import historical call recordings into CallVibe with Upload Center — upload one call or a CSV batch, and run the audio through AI transcription and analysis.
---

# Upload Center

Upload Center lets you add recordings by hand, for calls your phone system never sent. The AI analyzes them like any other call, so they get the same transcript, categories, and sentiment. There are no credentials to connect. It's always available.

Each analyzed call uses AI minutes. The page shows how many you have left. See [Usage & Limits](../../admin/usage.md).

## Required Files

- **Audio file:** MP3, WAV, M4A, AAC, OGG, or WebM, up to 15 MB each
- **For bulk import:** a metadata CSV, plus the matching audio files

## Open Upload Center

1. Open Settings.
2. Click Manual upload.

You can also go to Settings > Integrations, find Upload centre, and click Open the upload centre.

<ThemedScreenshot alt="Settings page" light="/img/settings-light.JPG" dark="/img/settings-dark.JPG" />

The page has two tabs: **Single call** and **Bulk CSV import**.

## Single Call Upload

1. On the Single call tab, drag and drop an audio file, or click to choose one. Agent and customer details are guessed from the filename. You can edit them.
2. Fill in Agent name, Agent phone, Customer name, Customer phone, and Started at. Use phone numbers with the country code.
3. Choose Inbound or Outbound.
4. Turn off "The call was answered" for a missed call or voicemail.
5. Click Upload and analyse.

## Bulk CSV Import

1. Open the Bulk CSV import tab.
2. Click Download CSV template and fill it in. Each row needs a filename that matches one of your audio files.
3. Choose the CSV file.
4. Choose the audio files, up to 50 per batch. Filenames must match the CSV.
5. Click Parse and review.
6. Check the table. Fix any names, phone numbers, or direction. Remove rows you don't want.
7. Click Import.

<ThemedScreenshot alt="Bulk upload review" light="/img/bulk-upload-light.jpg" dark="/img/bulk-upload-dark.jpg" />

The CSV must have these columns: filename, customer_phone, customer_name, agent_phone, agent_name. The template also has direction and start_time.

A progress bar shows the import. AI analysis carries on in the background.

## After Uploading

:::tip

- Each call shows as Analyzing, then Completed.
- Analyzed calls appear in Calls.
- If some rows fail, click Retry to upload only the failed ones.
- If the analysis is taking long, it carries on in the background. Check Calls shortly.

:::
