# Managing App Tokens

The Wire SDK uses an App Token to authenticate itself against the Wire backend.
Once an App Token [has been created](../manage-apps/create-app.md) it must be handled with the same care as any other sensitive credential.
This section provides guidance on secure storage, exposure prevention, rotation, and revocation.

## Storage

Store the App Token in a dedicated secrets manager such as:

* HashiCorp Vault
* AWS Secrets Manager
* Kubernetes Secrets
* or any comparable, encrypted key store

Avoid embedding tokens directly in:

* configuration files,
* source code, or
* environment variables checked into version control.

When the SDK requires access, fetch the token programmatically from the secrets manager at runtime.
Ensure access to the secret is restricted to the minimum set of processes or services that need it.

## Token Exposure

Never expose the token to end users or client-side code.
Ensure your implementation does not echo or return tokens, even in error messages or logs.

If your app needs to reuse a stored token, consider implementing a middleware layer to handle token access securely, rather than embedding or returning it directly in your app’s code.
This prevents the app token from being directly stored or transmitted by your app code.

## Rotation and Revocation

If an App Token is compromised, suspected of misuse, or no longer needed, revoke it immediately.

You can do this by:

* [Deleting the app](../manage-apps/delete-app.md), or
* [Regenerating the associated app token](../manage-apps/regenerate-auth-token.md)

In case you are decommissioning an app, you should as well revoke the app's token by deleting the app.
