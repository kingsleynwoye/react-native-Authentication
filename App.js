import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
 import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Navigation />
    </>
  );
}

// export default function App() {
//     return (
//       <>
//         <StatusBar style="light" />
//         <WelcomeScreen />
//       </>
//     );
//   }

  // {
  //   "name": "react-native-authentication",
  //   "version": "1.0.0",
  //   "main": "node_modules/expo/AppEntry.js",
  //   "scripts": {
  //     "start": "expo start",
  //     "android": "expo start --android",
  //     "ios": "expo start --ios",
  //     "web": "expo start --web",
  //     "eject": "expo eject"
  //   },
  //   "dependencies": {
  //     "@react-native-community/masked-view": "^0.1.11",
  //     "@react-navigation/native": "^6.0.10",
  //     "@react-navigation/native-stack": "^6.6.2",
  //     "@react-navigation/stack": "^6.2.1",
  //     "expo": "~44.0.0",
  //     "expo-status-bar": "~1.2.0",
  //     "react": "17.0.1",
  //     "react-dom": "17.0.1",
  //     "react-native": "0.64.3",
  //     "react-native-safe-area-context": "^4.2.5",
  //     "react-native-web": "0.17.1"
  //   },
  //   "devDependencies": {
  //     "@babel/core": "^7.12.9"
  //   },
  //   "private": true
  // }
  