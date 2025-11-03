# Events

When implementing the events handler `WireEventsHandler` your App will be notified when an event is received from the Websocket connection.

Below is a table of existing events that can be received and what are their purpose:

| Name                                                              | Description                                                                                                                               |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [`onMessage`](on_message.mdx)                                     | A Text message was received.                                                                                                              |
| [`onConversationJoin`](on_conversation_join.mdx)                  | The App has been added to a conversation.                                                                                                 |
| [`onConversationDelete`](on_conversation_delete.mdx)              | A conversation that the App was part of, was deleted.                                                                                     |
| [`onAsset`](on_asset.mdx)                                         | An Asset (file) was received.                                                                                                             |
| [`onComposite`](on_composite.mdx)                                 | A Composite message was received. Composite messages are a combination of text and buttons in a single message.                           |
| [`onButtonAction`](on_button_action.mdx)                          | A button action (button press/click) was received. From a composite message.                                                              |
| [`onButtonActionConfirmation`](on_button_action_confirmation.mdx) | Sent from the SDK that it received the button action.                                                                                     |
| [`onKnock`](on_knock.mdx)                                         | Also known as `ping` (to call for attention in a conversation) was received.                                                              |
| [`onLocation`](on_location.mdx)                                   | A message containing location details (longitude, latitude).                                                                              |
| [`onDeletedMessage`](on_deleted_message.mdx)                      | When a message is deleted.                                                                                                                |
| [`onReceiptConfirmation`](on_receipt_confirmation.mdx)            | When your message was `DELIVERED` or another user has read your message.                                                                  |
| [`onTextEdited`](on_text_edited.mdx)                              | An existing message was edited.                                                                                                           |
| [`onCompositeEdited`](on_composite_edited.mdx)                    | An existing Composite message was edited.                                                                                                 |
| [`onReaction`](on_reaction.mdx)                                   | When a user has reacted to a message.                                                                                                     |
| [`onInCallEmoji`](on_in_call_emoji.mdx)                           | Received an emoji while in a call.                                                                                                        |
| [`onInCallHandRaise`](on_in_call_hand_raise.mdx)                  | Received the Hand Raise emoji while in a call.                                                                                            |
| [`onMemberJoin`](on_member_join.mdx)                              | When one or more users joined a conversation the App is part of.                                                                          |
| [`onMemberLeave`](on_member_leave.mdx)                            | When one or more members leave or are removed from a conversation, including cases where the app itself is removed from the conversation. |
