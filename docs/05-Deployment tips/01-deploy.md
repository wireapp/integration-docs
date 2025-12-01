# Deployment good-to-knows

After building your Application leveraging the SDK, you need to find a place to let it run. At its core, the SDK is working as a client for the Wire Backend, with some storage for crypto data and for conversations (local `SQLite` database). This means that generally it needs only to be able to do two things:
* Reaching the public **internet**, at least the Wire backend (by default the production cloud host, but you can attach to your on-premise Wire backend)
* Allowing the app to **create folders** and files. Specifically, a directory called `storage` in the application path, containing a few MB of files

You can take the artifacts built from your Application and run it in any server, on-premise or in the cloud, or Dockerize the Application and do the same. Note that you want 1 instance of the Application running and it can/should run indefinitely. At it's core the SDK opens a webSocket connection and tries to keep it online as long as possible, while reading/writing some local files for statefulness.

## Locations

For example, giving that the app does not need HTTPS certificates, DNS, CDN, simpler deployment processes are available.

The simplest setup after writing your code, would be to package it (depending on the language you are using), or build a simple Docker application on top.
Then, if you don't have a server already, simply find a service for it online.


For very basic setups in Java/Kotlin, an example is: [Heroku - Java](https://devcenter.heroku.com/articles/getting-started-with-java).

If you want a bit more control over it, get a basic VPS like *Hetzner, DigitalOcean or StackIt*, install Docker and just run the docker image there.