### Instalation
First you need to install the expo cli globaly.
 bash
$ npm i --g expo-cli

Install the packages after cloning the repo.
 bash
$ yarn install


### Basic usage
First you need to have the expo app installed on your phone. Expo app is available on both [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US) and [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
Then open the terminal in the proect and run the following command to start the server(your mobile and computer should be connected to the same wifi).
 bash
# dev server with hot reload at http://localhost:19002
$ expo start


Navigate to [http://localhost:19002](http://localhost:19002). The app will automatically reload if you change any of the source files. Open the Expo app and scan the QR code. It run the app on you mobile.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and compoenents. You'll see something like this:


├── src/             # project root
│   ├── assets/      # images, icons, etc.
│   ├── components/  # common components - header, footer, sidebar, etc.
│   ├── navigation/  # all the navigation
│   ├── screens/     # application screens
│   ├── ...
├── App.tsx          # Root level compoenent
└── package.json