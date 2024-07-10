import {FunctionComponent} from "react";
import {NextUIProvider} from "@nextui-org/react";
import NavigationBarSignUp from "../components/signUpPage/NavigationBarSignUp";
import LoginComp from "../components/signUpPage/LoginComp";

const LoginPage : FunctionComponent = () => {
    const divStyle = {
        height : 950
    };


    return (
        <div style={divStyle}>
            <NextUIProvider>
                <NavigationBarSignUp/>
                <LoginComp/>
            </NextUIProvider>
        </div>
    );
};

export default LoginPage