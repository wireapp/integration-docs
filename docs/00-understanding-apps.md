---
slug: /
---
# Understanding Apps

Apps — sometimes called *integrations*, *services*, or *third-party applications* — are modular components that extend the platform without being part of its core codebase.

## Why Apps?
- **Automation**: Reduce manual tasks and streamline workflows.
- **Integration**: Connect external systems (CRMs, support tools, monitoring).
- **Customization**: Tailor the platform to your team’s needs.

## How Apps Work
Apps are separate pieces of software that communicate with the platform’s frontend and backend through a **common protocol** (such as APIs or events).  
They remain independent, but can seamlessly interact with the system and its users.

An **App** is a way to extend and automate your team’s experience on Wire].
Apps can listen to messages, send responses, and integrate with external services.

Apps are owned and managed at the **team level**, giving administrators control over:
- Which Apps can be installed
- What data Apps can access

## How to create an App

There are 2 main aspects:
1. Developing your app using one of the Wire SDKs for Apps
2. Registering the App and getting credentials on Wire Team management

For the technical part, check out the tutorial/quickstart or a simple app example:

➡️ [Check out the Quickstart guide](01-quickstart-advanced.md)

➡️ [Check out the "Echo" app example](03-example/01-demo-echo-app.mdx)

Then for the registration, check out [Onboarding apps](./02-manage-apps/01-create-app.md).
