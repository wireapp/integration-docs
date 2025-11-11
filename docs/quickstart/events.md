## Wire Events

When implementing the events handler `WireEventsHandler` your App will be notified when an event is received from the Websocket connection.

Below is a table of existing events that can be received and what are their purpose:

| Event                      | Description                                                                                                                               |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| onTextMessageReceived      | A Text message was received.                                                                                                              |
| onAppAddedToConversation   | The App has been added to a conversation. This is a good opportunity to introduce the App and provide usage instructions to the users.    |
| onConversationDeleted      | A conversation that the App was part of, was deleted.                                                                                     |
| onAssetMessageReceived     | An Asset (file) was received.                                                                                                             |
| onCompositeMessageReceived | A Composite message was received. Composite messages are a combination of text and buttons in a single message.                           |
| onButtonClicked            | A button action (button press/click) was received. From a composite message.                                                              |
| onButtonClickConfirmed     | Sent from the SDK that it received the button action.                                                                                     |
| onPingReceived             | Also known as `ping` (to call for attention in a conversation) was received.                                                              |
| onLocationMessageReceived  | A message containing location details (longitude, latitude).                                                                              |
| onMessageDeleted           | When a message is deleted.                                                                                                                |
| onMessageDelivered         | When your message was `DELIVERED` or another user has read your message.                                                                  |
| onTextMessageEdited        | An existing message was edited.                                                                                                           |
| onCompositeMessageEdited   | An existing Composite message was edited.                                                                                                 |
| onMessageReactionReceived  | When a user has reacted to a message.                                                                                                     |
| onInCallReactionReceived   | Received an emoji while in a call.                                                                                                        |
| onInCallHandRaiseReceived  | Received the Hand Raise emoji while in a call.                                                                                            |
| onUserJoinedConversation   | When one or more users joined a conversation the App is part of.                                                                          |
| onUserLeftConversation     | When one or more members leave or are removed from a conversation, including cases where the app itself is removed from the conversation. |
