---
sidebar_position: 1
title: Common Issues
description: Fix common CallVibe issues — worker not starting, no calls arriving, agent access problems, pushed calls needing metadata, missing WhatsApp messages, and sign-in or password problems.
---

# Common Issues

Start with the **Data health** panel at the top of Settings > Integrations, or the status pill in the top bar. It tells you whether calls are arriving and which kind of problem you have. See [Data Health](../integrations/overview.mdx#data-health).

## No calls are visible

Check the Data health panel first, then follow the message it shows:

- **Nothing is arriving:** Calls have stopped. Check your integration in Settings > Integrations, and check the provider end.
- **No calls yet:** No call has ever arrived. Finish setting up the integration.
- **Quiet:** Nothing recent, but it's within normal opening hours. Wait, or check again later.
- **Account not linked:** Your login isn't linked to an agent name. Ask an owner to map you in Team & access.

Then:

1. Check the provider row in Data health. Look for Setup incomplete, Switched off, or Waiting for first event.
2. Check the date filter on Calls and Overview.
3. Click Check again in Data health to re-run the check.

A card showing **Connected** only means credentials are saved. It doesn't mean calls are arriving.

## Worker does not start

Possible causes:

- No provider credentials saved
- Invalid provider credentials
- Tenant worker service issue

Checks:

1. Open the Worker card in Settings > Integrations. Only owners can start or stop it.
2. Verify at least one provider is connected and all required fields are filled.
3. Click Start worker again and read the error message.

:::note

Some accounts don't need a worker. If your calls are pushed to CallVibe or uploaded, the worker status can show Unknown. That's normal and doesn't mean something is wrong.

:::

## Pushed calls are held (needs metadata)

If you send calls to the Incoming webhook, the Pushed events section of Data health shows Processed, Pending, Needs metadata, and Failed.

1. A call that needs metadata is held, not lost. Check the details are complete.
2. Send the corrected call again with the same `callId`.
3. If you get 401, check the webhook secret.

See [API Overview](../api/overview.md#push-calls-webhook) for the required fields.

## Invited user cannot access data

1. Verify role assignment in Team & access.
2. Verify agent-name mapping for agent users. An agent with no agent names sees no calls.
3. Ask the user to sign out and sign in again.

## Cannot sign in or see the app

- **Verification in Progress:** A new account is being reviewed. This usually takes 1-2 business days. See [Account and Access](../user-guide/account-and-access.md#signup-and-approval).
- **Trial expired:** Upgrade your plan to get access again. Your data is not lost.
- **Account paused:** Contact CallVibe to resume your workspace.

## AI analysis stopped

1. Open Settings > Usage & limits.
2. If the balance is exhausted, new calls are stored but not analyzed. Contact your administrator to top up.

## WhatsApp messages not appearing

1. Verify webhook URL matches tenant.
2. Confirm provider is sending message:new events.
3. Re-copy webhook URL from the WhatsApp card in Integrations.

## Password reset problems

1. Confirm reset email was sent.
2. Ensure user opens latest reset link.
3. Verify update-password page is reachable.
