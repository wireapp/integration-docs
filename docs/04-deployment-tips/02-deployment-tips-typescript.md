# Typescript application

After building your Application with the SDK, you need to find a place to run it. At its core, the SDK works as a client for the Wire Backend, with some storage for crypto data and for conversations (a local `SQLite` database). In practice the application only needs two things:
* Network access to the public **Internet**, at least to the Wire backend.
* Permission to create a **`storage` directory** with files holding cryptographic material and App data.

You can take the artifacts built from your Application and run them on any server, on-premise or in the cloud, or Dockerize the Application and do the same. Note that you want one instance of the Application running, and it can/should run indefinitely. At its core the SDK opens a WebSocket connection and tries to keep it online as long as possible (reconnecting automatically with exponential backoff), while reading/writing some local files for statefulness.

## Runtime requirements

* **Node.js v22** (see `engines` in `package.json`).

### Persistent storage

The SDK manages its own local storage under `./storage`, relative to the process working directory:

```text
storage/
├── apps.db
└── cryptography
    ├── <App_ID>
    ├── <App_ID>-shm
    └── <App_ID>-wal
```

This directory holds cryptographic identity and conversation state, so it must survive restarts. Losing this directory means losing the client's crypto identity — the App will re-register as a fresh device.

## Locations

For example, given that the App does not need HTTPS certificates, DNS, CDN, simpler deployment processes are available.

The simplest setup after writing your code is to package it, or build a small Docker image on top of a `node:22` base.

Container platforms / PaaS (Fly.io, Render, Railway, Heroku, etc.) work well. Just make sure you attach a persistent disk for `./storage` and that native modules are rebuilt for the platform's architecture.

If you want more control, get a basic VPS (*Hetzner, DigitalOcean, StackIt*), install Docker, and just run the image there.