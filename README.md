# Simple Blog App

* Written in React Native
* Built with Expo CLI

## API Configuration
This project requires a JSON server to run. Please setup `json-server` and `ngrok` first: https://github.com/ntta/blog-post-json-server
After ngrok running, replace `baseURL` in `./src/api/jsonServer.js` with *your* Forwarding in ngrok.

## Installation
* Assuming that you have [Node 12 LTS](https://nodejs.org/en) or greater installed
* Use npm to install the Expo CLI
```
npm install -g expo-cli
```
* Change directory to restaurant-search-react-native, run `npm install` to install all required packages
* Run `npm start` to start metro bundler
* Use Expo Client ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) / [iOS](https://apps.apple.com/app/apple-store/id982107779)) to scan barcode from the metro bundler

## Snack
Try this app on Snack: https://snack.expo.io/@erron/blog-post
