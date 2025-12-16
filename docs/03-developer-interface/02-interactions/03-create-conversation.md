# Creating conversations

Through the WireApplicationManager (standalone or through events) you can create conversations (One to One or Group).
Here are an example for both on the standalone way:

```kotlin
val applicationManager = wireAppSdk.getApplicationManager()

// For Group Conversations there is no need to pass the App user ID as it will be added to the conversation by default.
val createdGroupConversationId = applicationManager.createGroupConversationSuspending(
    name = "Conversation Name",
    userIds = listOf(
        QualifiedId(userId1, userDomain1),
        QualifiedId(userId2, userDomain2)
    )
)

// For One to One Conversations you need to pass only the user whom the App will create the One to One conversation with.
val createdOneToOneConversationId = applicationManager.createOneToOneConversationSuspending(
    userId = QualifiedId(otherUserId, otherUserDomain)
)

// Channel Conversations are similar to Group Conversations, with the difference of passing the Team ID.
val createdChannelConversationId = applicationManager.createChannelConversationSuspending(
    name = "Channel Name",
    userIds = listOf(
        QualifiedId(userId1, userDomain1),
        QualifiedId(userId2, userDomain2)
    ),
    teamId = TeamId(value = UUID.fromString("my-team-id"))
)
```

> **_Java:_** Use `createGroupConversation` for Group Conversations

> **_Java:_** Use `createOneToOneConversation` for One to One Conversations
