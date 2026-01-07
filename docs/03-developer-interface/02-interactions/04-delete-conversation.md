# Creating conversations

Through the WireApplicationManager you can delete Group conversations.
Here are an example for both on the standalone way:

```kotlin
val applicationManager = wireAppSdk.getApplicationManager()

// Pass the conversationId as a QualifiedId object. 
// Note that your app should be admin in the conversation for successful completion of the process.
val createdGroupConversationId = applicationManager.deleteConversation(
    conversationId = QualifiedId(
        id = UUID.randomUUID(),
        domain = "my_domain"
    )
)
```
