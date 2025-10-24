# Security and Privacy Practices

The Wire App SDK independently handles **authentication**, **transport encryption**, **end-to-end encryption (E2EE)**, and certain aspects of **storage encryption**.

However, some responsibilities remain with the **application developer** to maintain the same security and privacy guarantees when building Wire Apps.

The following sections describe the key areas that require developer attention in regards to security and privacy.

This includes the:

* secure handling of tokens and credentials,
* protection of locally stored data, and
* privacy-conscious data management

to ensure your integration upholds Wire’s overall security standards.

## End-to-End Encryption Awareness

End-to-end encryption is completely handled by the Wire SDK.
All conversation data sent through the Wire SDK is end-to-end encrypted (E2EE).

## Transport Encryption

The Wire SDK automatically establishes and manages TLS connections, so developers don’t need to manually configure encryption for data in transit, ensuring data between the client and the Wire server transport encrypted.

Please verify that the SDK is communication with the correct backend. The backend domain can be configured via the *apiHost* variable.

## Managing Token and Credentials

### Wire App Tokens

If you are creating a new app from the Wire Team interface, as described [in the creation workflow](../manage-apps/create-app.md), you receive an **App ID** and an **App Token**.

The App ID is a unique UUID that identifies your application. It is not considered sensitive information and can be safely included in code or configuration.

While the App ID allows Wire to recognize your application, it does not grant any permissions. To perform authenticated actions on behalf of your app, you must use the App Token which must kept secret.

Guidance on securely storing, rotating, and managing App Tokens is provided in the [Managing App Tokens](./managing-app-tokens.md) section.

### Storage Encryption Password

The Wire SDK uses a password, the *cryptographyStoragePassword* to encrypt and decrypt the cryptographic material (used for message encryption) at rest.

As a developer, to ensure strong protection:

* **Use a cryptographically secure random number generator (CSRNG).**
Do not use fixed, human-readable passwords or predictable strings. Make sure that the random generator is **cryptographically secure**. When available, use hardware-backed encryption mechanisms to generate and securely store cryptographic keys. An example for the generation of a password using a CSRNG could look like this:

```kotlin
import java.security.SecureRandom
import java.util.Base64

fun generateSecurePassword(length: Int = 32): String {
    val random = SecureRandom()
    val bytes = ByteArray(length)
    random.nextBytes(bytes)
    return Base64.getEncoder().encodeToString(bytes)
}
```

* **Enforce password length and format.**
The password **must be exactly 32 characters** long to meet the SDK's requirements.
* **Store the password securely.**
Ideally, store it in a hardware-backed secure storage provided by the platform.
* **Do not log or transmit the password in plaintext** under any circumstances.

Following these steps ensures that cryptographic material managed by the Wire SDK is encrypted-at-rest and remains protected even if the underlying storage is compromised.

## Secure Local Storage of Conversation Content

The Wire SDK enables developers to have access to decrypted messages and identifiers of conversations and teams, the app is added to. If there is a need to store some of that information, it is your responsibility to protect this data by making sure it is securely stored. Such measures include the **encryption-at-rest** using industry standards such as AES-256, as well as **securely generating** and **storing** the **encryption key**.

Make sure that any data collection and storage is in accordance with the [Data Minimization & Privacy Principles](#data-minimization--privacy-principles).

### Local Data Handling

If your application stores data locally, such as temporary tokens, configuration files, or logs, it must be protected in accordance with Wire’s security standards.

Follow these best practices:

* Store runtime secrets using environment variables injected by your orchestration or deployment system.
* If applicable, use the platform’s native secure storage mechanisms (e.g., keychain or keystore) to protect sensitive data such as tokens and credentials.
* Use ephemeral or in-memory storage for session data and temporary credentials whenever possible.
* Encrypt sensitive files at rest with strong encryption algorithms, such as AES-256.

### Encryption at Rest

Do not store sensitive information in plain files. Use hardware backed encryption, like Secure Enclave, for generating and storing cryptographic keys when available.

If your app is not web-based, ensure that you are using recommendations for the platform it's running on for how to store secrets. You should never have an instance in which you are writing a token to disk in plaintext when there is a system keychain or other encryption mechanism available.

## Data Minimization & Privacy Principles

**Only collect** and process **the data strictly necessary** for the integration's function.

Ensure that your app respects applicable privacy regulations (e.g., GDPR). If your integration handles user data, clearly document:

* What data is collected
* The purpose of the data collection
* Where it is stored
* How long it is retained

Note that you as the app developer are responsible for the App's data collection behavior.

## Logging and Secure Diagnostics

Focus on only logging information that is needed for troubleshooting.

**Avoid logging sensitive data** such as:

* Message bodies
* User content and user specific identifiers
* Any cryptographic key material
* Credentials (passwords, access tokens, etc.)

## Secure coding practices

Ensure that the integration of the Wire SDK adheres to secure coding practices.

Since the Wire SDK has the capability to read messages, always consider sanitizing user input by enforcing strict validation, canonicalization, and output encoding to prevent injection and data corruption.

For further reference on secure coding best practices, have a look at the [OWASP Secure Coding Practices Guidance](https://cheatsheetseries.owasp.org/index.html).
