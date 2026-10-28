---
sidebar_position: 4
title: AI Insights
description: Configure CallVibe AI Insights — system and custom insights, field types, scoring rubrics, top layer, scorecards, and industry templates to pull signals from every call.
---

# AI Insights

AI Insights decide what the AI pulls out of every call. Open them from Settings > AI Insights. Every insight you set up becomes a column or chart across CallVibe, such as scores, categories, and the themes on Intelligence.

<ThemedScreenshot
  alt="AI Insights settings page"
  light="/img/ai-insights-settings-light.jpg"
  dark="/img/ai-insights-settings-dark.jpg"
/>

The page has two tabs:

- **Insights:** System insights and your custom insights.
- **Top layer & groups:** How insights are organized. See [Top Layer and Groups](#top-layer-and-groups).

## System Insights

These are built in. You can edit their instructions, but you can't delete them.

- **Call Category:** A dropdown that sorts each call. Drives call classification. You can add a notification criteria to each option to get alerted.
- **Call Sentiment:** A dropdown for the overall tone of the call.
- **Call Summary:** A short written summary of the call.
- **Call to Action:** The next step from the call.
- **Brand Names:** Brand, product, or company names the AI should always spell correctly.

## Custom Insights

Custom insights are your own fields. The page shows how many you've used, for example "20 / 20 fields". The limit depends on your plan.

### Types

- **Free text:** A short written answer. Choose Paragraph or Bullet points.
- **Dropdown:** The AI picks one option from a list you define, up to 25 options.
- **Scoring:** The AI gives a number, from 0 up to a maximum you set.

## Manage AI Insights

### Edit a System Insight

1. Open Settings > AI Insights.
2. Click Edit on a system insight.
3. Change the AI instruction. For a dropdown, you can also edit the options and their notification criteria.
4. Click Save.

<ThemedScreenshot
  alt="Edit a system insight"
  light="/img/ai-insights-system-edit-light.jpg"
  dark="/img/ai-insights-system-edit-dark.jpg"
  width={420}
/>

### Add a Custom Insight

1. Open Settings > AI Insights.
2. Click Start from scratch, or Browse templates.
3. Enter what you want to capture.
4. Choose what the AI should return: Free text, Dropdown, or Scoring.
5. Fill in the options for your type (see below).
6. Add extra instructions for the AI. This is optional. If you leave it blank, CallVibe writes it for you.
7. Keep Active on, then click Create insight.

<ThemedScreenshot
  alt="New custom insight form"
  light="/img/ai-insights-add-light.jpg"
  dark="/img/ai-insights-add-dark.jpg"
  width={420}
/>

**Free text**

- Choose the output format: Paragraph or Bullet points.
- Choose a Dashboard view. This sets how the insight shows under Conversation themes on Intelligence:
  - Summary + top topics
  - Summary + top questions
  - Summary only
  - Hidden

CallVibe suggests a view from the name. You can pick another.

**Dropdown**

Add each option with a short description so the AI knows when to pick it.

**Scoring**

Choose one:

- **Simple score:** Set a maximum. The AI gives a number from 0 to that maximum.
- **Scoring rubric:** Add levels, each with a score and a description. The AI picks one level.

### Edit a Custom Insight

Click the pencil icon on an insight, change the fields, and click Save changes.

<ThemedScreenshot
  alt="Edit insight form"
  light="/img/ai-insights-edit-light.jpg"
  dark="/img/ai-insights-edit-dark.jpg"
  width={420}
/>

### Turn an Insight Off

Turn off Active to stop extracting it from new calls, without deleting it. Inactive insights are not extracted from new calls.

### Delete a Custom Insight

Click the trash icon and confirm. Data already extracted from past calls is not removed. New calls won't fill this field.

## Use a Template

Click Browse templates for ready-made insights. There are over 100, across 16 industries such as Healthcare, Real Estate, and Financial Services.

1. Search by name, industry, or option, or filter by Industry and Type (Dropdown, Scoring, Text).
2. Click Use template on a card.
3. The New insight form opens, pre-filled. Edit anything, then save.

<ThemedScreenshot
  alt="Template library"
  light="/img/ai-insights-templates-light.jpg"
  dark="/img/ai-insights-templates-dark.jpg"
/>

## Top Layer and Groups

Open the **Top layer & groups** tab to organize your insights. It has three parts: Top layer, Scorecards, and Classification groups.

### Top Layer

The top layer is one dropdown insight, such as Call Category. On every call, the AI picks one of its options first. Then it only runs the insights set to that option, plus the ones set to every call.

Without a top layer, every insight runs on every call.

<ThemedScreenshot
  alt="Top layer set to Call Category"
  light="/img/ai-insights-top-layer-call-category-light.jpg"
  dark="/img/ai-insights-top-layer-call-category-dark.jpg"
/>

**Pick a top layer**

1. Open Settings > AI Insights > Top layer & groups.
2. Under Top layer, choose a dropdown insight. Choose None to turn it off.

You need at least one dropdown insight with options. If you have none, create one first. Good choices are Call Category, or something like Lead Temperature with Hot, Warm, and Cold.

**What the page shows**

- **Runs on every call:** Insights that run on every call. The system insights run too. Click **Edit options & prompts** to change the top layer's options.
- **One card per option:** Each card shows how many insights run for that option, its description, the scorecards and classification groups it uses, and the insights that run **only** on that option.
- **On every call:** Listed at the bottom of each card.

Each option needs a short description. It tells the AI when to pick that option. If one is missing, the card shows **Add a description so the AI knows when to pick it**.

**Choose where an insight runs**

When you add or edit an insight, use **Runs on**:

- **All calls:** The default.
- **Only when the top layer is:** Tick one or more options. On other calls the AI isn't asked for it, and nothing is saved.

Insight cards show a **Runs on** tag so you can see where each one applies. The top layer itself always runs on every call, so it has no Runs on setting.

:::warning

Switching to a different top layer clears Runs on for every insight, because the options change. They run on every call until you set them again. Your earlier Runs on settings come back if you switch back. CallVibe asks you to confirm first.

:::

### Scorecards

A scorecard adds up scoring insights into one total. Each call gets one score per scorecard, out of the points that applied to that call. This lets you compare different call types by percentage.

<ThemedScreenshot
  alt="Scorecards"
  light="/img/ai-insights-top-layer-scorecards-light.jpg"
  dark="/img/ai-insights-top-layer-scorecards-dark.jpg"
/>

Each scorecard card lists its insights, where each one runs, and its points. The footer shows the total **Out of** for each top layer option. A total of 0 means the scorecard isn't used for that option.

**Create a scorecard**

1. Click **New scorecard**.
2. Enter a Name, such as "Agent Score". Add a Description if you like.
3. Click Save.
4. Open a scoring insight, choose the scorecard under **Scorecard**, and save.

With no scorecard, the score shows on the call but isn't added to any total.

Use the pencil icon to edit a scorecard.

### Classification Groups

Group related dropdown insights, such as Budget, Timeline, and Decision maker, so they appear together on the call. This is for display only. There are no totals, and each dropdown keeps its own Runs on.

<ThemedScreenshot
  alt="Classification groups"
  light="/img/ai-insights-top-layer-classification-groups-light.jpg"
  dark="/img/ai-insights-top-layer-classification-groups-dark.jpg"
/>

**Create a classification group**

1. Click **New classification group**.
2. Enter a Name, such as "Lead Profile". Add a Description if you like.
3. Click Save.
4. Open a dropdown insight, choose the group under **Classification group**, and save.

### Delete a Group

Click the trash icon and confirm. Its insights stay, just ungrouped. Past calls keep the totals they already have.
