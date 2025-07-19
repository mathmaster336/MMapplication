import "./global.css"
import { Text, View } from "react-native";
import Login from "./src/Screens/Authentication/Login";
import Register from "./src/Screens/Authentication/Register";
import ForgotPassword from "./src/Screens/Authentication/ForgotPassword";
import Navigator from "./src/Navigation/Navigator";

export default function App() {
  return (


    // <Login />
    // <Register />
    <Navigator />
    // <ForgotPassword />
  );
}