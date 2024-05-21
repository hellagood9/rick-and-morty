# Rick and Morty Demo App

This is a demo application that uses the [Rick and Morty API](https://rickandmortyapi.com/) to display information about characters from the show. The app is built using React Native and supports both iOS and Android platforms.

## Features

- **Redux (RTK)**: State management using Redux Toolkit.
- **Axios**: For making API requests.
- **TypeScript**: Strongly typed programming language.
- **Infinite Scroll**: Load more characters as you scroll down.
- **Favorites**: A tab section to view favorite characters.
- **App Icon and Splash Screen**: Custom icons and splash screens for iOS and Android.
- **AsyncStorage**: Persistent storage for favorite characters.

## Functionality

- **GetAll Characters (Home View)**: Displays a list of all characters with infinite scroll.
- **GetById Character (Detail View)**: Shows detailed information about a selected character.
- **Search Character**: Search characters by name.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/rick-and-morty.git

   ```

2. Navigate to the project directory:

   ```sh
   cd rick-and-morty

   ```

3. Install dependencies:

   ```sh
   yarn install

   ```

4. Install iOS dependencies:
   ```sh
   cd ios
   pod install
   cd ..
   ```

## Running the App

- iOS:

  ```sh
  yarn react-native run-ios

  ```

- Android:
  ```sh
  yarn react-native run-android
  ```

## Usage

| Feature     | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| Home View   | Displays a list of all characters. Scroll down to load more characters. |
| Detail View | Click on a character to see detailed information.                       |
| Search      | Use the search bar to find characters by name.                          |
| Favorites   | Add characters to your favorites and view them in the Favorites tab.    |

## Dependencies

- **react-native**: Framework for building native apps using React.
- **@reduxjs/toolkit**: Official, opinionated, batteries-included toolset for efficient Redux development.
- **axios**: Promise based HTTP client for the browser and node.js.
- **@react-navigation/native**: Routing and navigation for your React Native apps.
- **@react-navigation/stack**: Stack navigator for React Navigation.
- **@react-native-async-storage/async-storage**: An asynchronous, persistent, key-value storage system for React Native.
- **typescript**: JavaScript with syntax for types.

## License

This project is licensed under the MIT License.
