# Managing teams and conversations

The SDK provides access to teams and conversations through the `WireApplicationManager`, available after initializing the `WireAppSDK`

```kotlin
val applicationManager = wireAppSdk.getApplicationManager()

// Get all teams the application has been invited to
val teams = applicationManager.getStoredTeams()
teams.forEach { teamId ->
    println("Team: $teamId")
}

// Get all conversations the application has access to
val conversations = applicationManager.getStoredConversations()
conversations.forEach { conversation ->
    println("Conversation: ${conversation.id} in team: ${conversation.teamId}")
}

// Get application data
val appData = applicationManager.getApplicationData()
println("Application name: ${appData.name}")
```
