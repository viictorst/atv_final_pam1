// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: '',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: '',
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}