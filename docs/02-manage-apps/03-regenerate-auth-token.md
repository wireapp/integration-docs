# Regenerate authentication token

If your token is lost or compromised, generate a new one

## On desktop (macOS, Windows, or on Wire for web)

In the app:

1. Select *Settings*, then select *Manage team* or go to [teams.wire.com](https://teams.wire.com/).
2. Log in with your account credentials:

![log in](/img/team-management/log_in.png)

3. Select *Integrations*.

![integrations tab](/img/team-management/integrations_tab.png)

4. Select the three dots (•••) next to app name.

![integrations tab dots](/img/team-management/integrations_tab_three_dots.png)

5. Select *Get new token*.

:::warning

Regenerating the token immediately invalidates the old one.  
Your app won’t be able to connect until it uses the new token.

:::

![get new token](/img/team-management/get_new_token.png)

6. Enter your password.

![copy new token](/img/team-management/copy_new_token.png)

7. Copy the new token. Keep it secure.

## After generating a new token:
 - Update your app’s `APP_TOKEN` environmental variable.
 - Restart or redeploy all instances of your app.
