# SDK Overview

We provide an official **Kotlin SDK** to help developers build apps quickly and safely.
Technically speaking, you could make some API calls yourself to the Wire backend, but due to the nature of E2EE clients also need to setup cryptographic material.
Therefore they work in a stateful manner. Our SDK takes care of these aspects, allowing you to spend time on the actual business logic

### Why use the SDK
- Handles authentication for you
- Provides event handling
- Makes sending and receiving messages easier
- Strongly typed for Kotlin developers

## Key Characteristics
- **Independent from core code**  
  Apps are not bundled into the frontend or backend binaries. They live outside the main system.

- **Pluggable and flexible**  
  Apps can be added, updated, or removed without requiring a frontend/backend release.

- **User-driven installation**  
  Unlike system features that require admin deployment, apps can often be enabled (installed) directly by end users.

- **Open for third parties**  
  Apps are not limited to our company’s developers — external teams and third parties can build and operate their own apps.

### Future plans
We currently support **Kotlin**, and plan to expand to more languages (JavaScript, Python, etc.) so every developer can build apps in the language they know best.

For technical SDK usage and code examples, see the [Developer Documentation on GitHub](https://github.com/wireapp/wire-apps-jvm-sdk/blob/main/docs/APPLICATION.md).