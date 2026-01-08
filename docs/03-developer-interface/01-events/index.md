# Handling Events

Running an app containing the SDK allows you to send messages or perform other actions. At the same time, when the app is online it will fetch *events* send to it (e.g. receiving a message).
The SDK parses these events and then allows you to setup a "callback", triggering actions based on specific events being received.

For example, you might want to "react" to "text message received", and make a Rest call when the message contains a specific string, or you might want to track when a new users joins a conversation where the app is present.

Practically, when you implement some of the events handler of `WireEventsHandler`, your App will be notified when an event is received from the WebSocket connection.

Below is a table of existing events that can be received and what are their purpose:

| Name                                                                 | Description                                                                                                                               |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [`onTextMessageReceived`](03-on-text-message-received.mdx)           | A Text message was received.                                                                                                              |
| [`onAppAddedToConversation`](04-on-app-added-to-conversation.mdx)    | The App has been added to a conversation.                                                                                                 |
| [`onConversationDeleted`](05-on-conversation-deleted.mdx)            | A conversation that the App was part of, was deleted.                                                                                     |
| [`onAssetMessageReceived`](06-on-asset-message-received.mdx)         | An Asset (file) was received.                                                                                                             |
| [`onButtonClicked`](08-on-button-clicked.mdx)                        | A button action (button press/click) was received. From a composite message.                                                              |
| [`onPingReceived`](10-on-ping-received.mdx)                          | Attention-getting message was received.                                                                                                   |
| [`onLocationMessageReceived`](11-on-location-message-received.mdx)   | A message containing location details (longitude, latitude).                                                                              |
| [`onMessageDeleted`](12-on-message-deleted.mdx)                      | When a message is deleted.                                                                                                                |
| [`onMessageDelivered`](13-on-message-delivered.mdx)                  | When your message was `DELIVERED` or another user has read your message.                                                                  |
| [`onTextMessageEdited`](14-on-text-message-edited.mdx)               | An existing message was edited.                                                                                                           |
| [`onMessageReactionReceived`](16-on-message-reaction-received.mdx)   | When a user has reacted to a message.                                                                                                     |
| [`onInCallReactionReceived`](17-on-in-call-reaction-received.mdx)    | Received an emoji while in a call.                                                                                                        |
| [`onInCallHandRaiseReceived`](18-on-in-call-hand-raise-received.mdx) | Received the Hand Raise emoji while in a call.                                                                                            |
| [`onUserJoinedConversation`](19-on-user-joined-conversation.mdx)     | When one or more users joined a conversation the App is part of.                                                                          |
| [`onUserLeftConversation`](20-on-user-left-conversation.mdx)         | When one or more members leave or are removed from a conversation, including cases where the app itself is removed from the conversation. |
