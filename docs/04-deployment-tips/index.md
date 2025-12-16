# Deployment tips

After building your Application with the SDK, you need to find a place to run it. At its core, the SDK is working as a client for the Wire Backend, with some storage for crypto data and for conversations (local `SQLite` database). In practice the application only needs two things:
* Network access to the public **Internet**, at least the Wire backend (by default the production cloud host, but you can attach to your on-premise Wire backend)
* Permission to **create `storage` directory** with files storing cryptographic material and App data

You can take the artifacts built from your Application and run it in any server, on-premise or in the cloud, or Dockerize the Application and do the same. Note that you want one instance of the Application running and it can/should run indefinitely. At its core the SDK opens a WebSocket connection and tries to keep it online as long as possible, while reading/writing some local files for statefulness.

## Locations

For example, given that the App does not need HTTPS certificates, DNS, CDN, simpler deployment processes are available.

The simplest setup after writing your code, would be to package it (depending on the language you are using), or build a simple Docker application on top.
Then, if you don't have a server already, simply find a service for it online.


For very basic setups in Java/Kotlin, an example is: [Heroku - Java](https://devcenter.heroku.com/articles/getting-started-with-java).

If you want a bit more control over it, get a basic VPS like *Hetzner, DigitalOcean or StackIt*, install Docker and just run the docker image there.