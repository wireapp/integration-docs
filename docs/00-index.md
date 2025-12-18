---
slug: /
---
# Extend Wire with secure Apps

Apps bring your ideas to the [Wire secure communications platform](https://wire.com/).  
Automate workflows, connect with third-party services, and boost collaboration.  
Customize Wire to fit your team's needs. All with Wire's end-to-end encryption and security intact.

## How Apps Work
Apps are separate pieces of software that communicate with the platform’s frontend and backend through a **common protocol** (such as APIs or events).  
They remain independent, but can seamlessly interact with the system and its users.

An **App** is a way to extend and automate your team’s experience on Wire.
Apps can listen to messages, send responses, and integrate with external services.

Apps are owned and managed at the **team level**, giving administrators control over:
- Which Apps can be installed
- What data Apps can access

## How to create an App

There are 2 main aspects:
1. Developing your app using one of the Wire SDKs for Apps
2. Registering the App and getting credentials on Wire Team management

### The SDK at a glance
- Handles authentication for you
- Provides event handling
- Makes sending and receiving messages easier
- Strongly typed for Kotlin developers

For the technical part, check out the tutorial/quickstart or the technical concepts' explanation:

➡️ [Check out the Quickstart guide](01-quickstart-advanced.mdx)

➡️ [Check out all the capabilities of the SDK](03-developer-interface/index.mdx)

Then for the registration, check out [Onboarding apps](./02-manage-apps/01-create-app.md).
