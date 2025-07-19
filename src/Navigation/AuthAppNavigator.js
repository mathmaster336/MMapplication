
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import ForgotPassword from '../Screens/Authentication/ForgotPassword';
const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        </AuthStack.Navigator>
    );
}