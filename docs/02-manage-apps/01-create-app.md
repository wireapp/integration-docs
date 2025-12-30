# Create App

Create an app and get credentials for your integration

:::note

This feature isn’t available yet in the team settings page.
Please follow the [manual process](00-create-app-manually.mdx).

:::

:::info

Apps are available on paid plans.  
Upgrade to unlock integrations that simplify workflows and connect Wire to your existing tools. 
[See plans and pricing](https://wire.com/pricing).

:::

## On desktop (macOS, Windows, or on Wire for web)

In the app:

1. Select *Settings*, then select *Manage team* or go to [teams.wire.com](https://teams.wire.com/).
2. Log in with your account credentials:

![log in](/img/team-management/log_in.png)

3. Select *Integrations*.

![empty integrations tab](/img/team-management/empty_integrations_tab.png)

4. Select *Create App*.

| ![create app](/img/team-management/create_app.png) | ![add app details](/img/team-management/add_app_details.png) |
|----------------------------------------------------|--------------------------------------------------------------|

5. Add your App details.

![authentication token](/img/team-management/authentication_token.png)

6. You’ll see the token once. 
    Save it now, then set it as the `APP_TOKEN` environmental variable.   
   **You won’t be able to view it again.**

![integrations tab](/img/team-management/integrations_tab_three_dots.png)

7. After the app is created, you’ll return to the Integrations tab.  
   Select the three dots next to your app, then choose *View details* to find the rest of your credentials: **App ID**, **host**, and **domain**.

![app details](/img/team-management/app_details.png)

## What’s next
Now that you have the credentials, you’re ready to connect your app.
Go to [Quickstart](../01-quickstart-advanced.mdx) to include the SDK in your project and continue setup.
