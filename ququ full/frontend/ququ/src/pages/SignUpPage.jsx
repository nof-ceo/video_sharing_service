import {FunctionComponent} from "react";
import {NextUIProvider} from "@nextui-org/react";
import NavigationBarSignUp from "../components/signUpPage/NavigationBarSignUp";
import RegisterCard from "../components/signUpPage/RegisterCard";

const SignUpPage : FunctionComponent = () => {
    const divStyle = {
        height : 950
    };


    return (
        <div style={divStyle}>
            <NextUIProvider>
                <NavigationBarSignUp/>
                <RegisterCard/>
            </NextUIProvider>
        </div>
    );
};

export default SignUpPage