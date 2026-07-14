---
sidebar_position: 11
title: Upload Center
description: Import historical call recordings into CallVibe with Upload Center — single or bulk CSV upload runs audio through AI transcription and sentiment.
---

# Upload Center Integration

Upload Center lets you import historical call recordings directly, without a telephony provider connected, so they run through CallVibe's AI pipeline for transcription, categorization, and sentiment. Unlike other providers, it has no credentials to connect — it's always available.

## Required Files

- Audio file: MP3, WAV, M4A, AAC, OGG, or WebM, up to 15 MB per file
- For bulk import: a metadata CSV (filename, customer_phone, customer_name, agent_phone, agent_name, direction, start_time)

## Setup

1. Open Settings > Integrations.
2. Select Upload Center.
3. Click Open Upload Workspace.

![Settings page](/img/settings.JPG)

## Single Call Upload

1. Drag and drop or click to select an audio file. Agent and customer details are guessed from the filename automatically and can be edited.
2. Fill in Agent Name, Agent Phone, Customer Name, Customer Phone, Start Date & Time, and Direction.
3. Uncheck "Call was answered" for missed calls or voicemails.
4. Click Upload & Analyze.

## Bulk CSV Import

1. Click Download CSV Template and fill it in, matching each row's filename to an audio file you will upload.
2. Select the metadata CSV file and up to 50 audio files.
3. Click Parse & Review Metadata.
4. Correct any names or details in the review table, then click Proceed & Process.

![Bulk upload review](/img/bulk-upload.jpg)

5. Recordings upload with concurrent processing; AI analysis continues in the background and can be tracked from the queue status list.

![Bulk upload processing](/img/bulk-upload-process.jpg)

## Validation

:::tip

- Upload status changes to Analyzing, then Completed for each call.
- Processed calls appear in Call Records.
- Failed rows can be retried individually from the completed screen.

:::
