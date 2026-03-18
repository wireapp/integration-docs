---
slug: /
---
# Wire Apps

#### Apps bring your ideas to the [Wire secure communications platform](https://wire.com/)
Automate workflows, connect with third-party services, and boost collaboration.  
Customize Wire to fit your team's needs. All with Wire's end-to-end MLS encryption and security intact.

Apps are separate pieces of software that communicate with Wire through a common protocol.  
They remain independent, but can seamlessly interact with the system and its users.

Send and receive messages — including assets, emojis, and interactive buttons — create and manage conversations, and integrate external services.

To build an App, you don't have to write it from scratch, you can use the **Wire Apps SDK**.

## What can you do with them?
1. **Extend Wire functionality**, by writing your own automations, for example an App that sends scheduled reminders or can summarize a message
2. **Connect an external system to wire**. Build an App to accept events from an API and then send a message inside Wire, like alerts or updates. Or the other way around, have actions performed inside Wire be propagated to an external software -> [Webhook](001-webhook.mdx)

## Get started
The Wire SDK is a developer toolkit that allows developers to build Apps(Integrations) for their team, working inside Wire's encrypted environment. Unlike most collaboration platforms where Apps run on server infrastructure outside the encrypted client boundary, Wire applications participate directly in encrypted conversations.

What does it mean? - In Wire, an App behaves like a real participant in the conversation and receives the encryption keys needed to read and send messages.

### Develop your App using Wire Integrations SDK

The SDK handles authentication for you, notifies about events, and makes sending and receiving messages straightforward.
It’s strongly typed for Kotlin, helping you write safer, more predictable code with less overhead.

➡️ Start right away: [follow the Quickstart guide](01-quickstart-advanced.mdx)

➡️ Discover [all the ways of interacting with Wire](03-developer-interface/index.mdx)

### Register the App

For identification and secure connection to Wire, your App needs credentials.

Follow the [steps to onboard your App](./02-manage-apps/01-create-app.md).

### Deploy secure apps

You own and host your app, with full control over your infrastructure and data.

Apps are owned and managed at the team level. The administrator decides which Apps are installed.

Wire never has access to the messages your App receives or sends.

You need to secure your deployment and protect the data your App handles. 
Follow the [secure integration guidelines](05-secure-integration-guidelines/01-security-privacy-basics.md) and review the [deployment tips](04-deployment-tips/index.md).

## See Apps in action

Discover what’s possible, get inspired, and [see how Apps extend Wire in practice](/showcase). 
