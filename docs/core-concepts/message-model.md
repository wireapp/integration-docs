# Message model

Based on [Wire message protocol definition](https://github.com/wireapp/generic-message-proto/).

## Base message properties

These properties apply to **all** message types:  

| Field            | Type        | Description                                                                           |
|------------------|-------------|---------------------------------------------------------------------------------------|
| `id`             | UUID        | Unique identifier for the message.                                                    |
| `conversationId` | QualifiedId | Identifier of the conversation the message belongs to.                                |
| `sender`         | QualifiedId | Identifier of the sender of the message, <br/>ignored when sending message using SDK. |

A **Qualified ID** identifies an entity uniquely across [federated backends](https://docs.wire.com/latest/understand/federation/index.html) by combining its local ID with its domain.

## Ephemeral message properties

Ephemeral messages automatically disappear from recipients’ conversation histories after a set time.
> `expiresAfterMillis` (nullable Long): Duration in milliseconds after the message self-destructs.  
    Null means the message does not expire.

## Replyable message properties

Non-ephemeral text, asset, and location messages can be replied to.  
> `timestamp`: The moment in time used in hash calculation to ensure the quoted message is identical for all recipients.
