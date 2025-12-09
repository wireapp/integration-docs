# Wire Integrations Documentation

This repository contains the official documentation for building "Wire Apps" using [Docusaurus](https://docusaurus.io/).

## About This Documentation

Wire Applications enable developers to extend the Wire messaging platform by building custom apps, bots, and services. These integrations are modular components that work independently from Wire's core codebase, allowing for automation, external system connections, and platform customization.

This project is intended to be built and published as a website, and be read by internal and external developers of Wire. It covers the basics and some tutorials, without
going into technical details (which might be different based on the SDK being used, as they are built with different languages)

This documentation covers:

- **Core Concepts**: Understanding Wire apps and their architecture
- **Quickstart Guides**: Getting started with event handling and app development
- **SDK Documentation**: Using the Wire JVM SDK for Kotlin and Java applications
- **App Management**: Creating, editing, and managing Wire apps
- **Security Guidelines**: Best practices for secure integration development

At its core, Docusaurus takes some MD files and some stylistic rules and builds them into a website

## Getting Started

### Prerequisites

- Node.js >= 22.0
- npm (included with Node.js)

### Installation

First, install the project dependencies:

```bash
npm ci
```

### Local Development

Generate static content:

```bash
npm run build
```

Start a local development server with hot reload, displaying the static content generated:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The documentation site will be available at `http://localhost:3000`.

### Publishing

GitHub actions take care of building and publishing the content to a public AWS S3 bucket, currently the website is https://dev.wire.com

## Resources

- [Wire Official Website](https://wire.com/)
- [Wire Official Core Documentation](https://docs.wire.com/latest)
- [Wire GitHub Organization](https://github.com/wireapp/)
- [Wire JVM SDK](https://github.com/wireapp/wire-apps-jvm-sdk)
- [Wire TS/JS SDK](https://github.com/wireapp/wire-apps-js-sdk)
- [Docusaurus Documentation](https://docusaurus.io/docs)

## License

Copyright � 2025 Wire Swiss GmbH
