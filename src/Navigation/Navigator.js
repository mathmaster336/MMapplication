import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthAppNavigator';


const RootStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Auth" component={AuthNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}