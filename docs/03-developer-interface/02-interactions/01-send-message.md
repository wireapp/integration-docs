# Sending messages

You can make your application send messages to specific conversations.

For when you to send a message. It can be achieved when you have the conversation ID it needs to be sending a message.
```kotlin
val applicationManager = wireAppSdk.getApplicationManager()
applicationManager.sendMessageSuspending(
    message = WireMessage // All WireMessage event types are supported through this method
)
```
> **_Java:_**  Use `applicationManager.sendMessage`

For when you upload and send an asset (file) to a conversation.

Nots: When sending an asset message, you need to provide the file, name and mime type, while we take
care of the encryption and metadata based on file mime type.
```kotlin
// Get local File
val resourcePath = javaClass.classLoader.getResource("my-file.png")?.path
    ?: throw IllegalStateException("Test resource 'my-file.png' not found")
val asset = File(resourcePath)

// Get File data in ByteArray
val originalData = asset.readBytes()

// Send File with necessary parameters
applicationManager.sendAssetSuspending(
    conversationId = wireMessage.conversationId,
    asset = AssetResource(originalData),
    name = asset.name,
    mimeType = "image/png",
    retention = AssetRetention.ETERNAL
)
```
> **_Java:_**  Use `applicationManager.sendAsset`