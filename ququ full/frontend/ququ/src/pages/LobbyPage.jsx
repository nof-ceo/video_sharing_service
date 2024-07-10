import React, {FunctionComponent} from "react";
import {Button, NextUIProvider} from "@nextui-org/react";
import {QuquLogo} from "../components/mainPage/QuquLogo";
import {useNavigate} from "react-router-dom";
import ProceedUrl from "../components/lobby/ProceedUrl";
import Chat from "../components/lobby/Chat";
import LobbySettings from "../components/lobby/LobbySettings";

const LobbyPage : FunctionComponent = () => {

    let navigate = useNavigate();

    const divStyle = {
        height : 950
    };

    const sizeIcon = {
        width : 150,
        height : 35,
        top : 24,
        left : 70,
    }

    const profilePage = () => {
        let path = '/profile';
        navigate(path);
    }


    return (
        <div style={divStyle}>
            <NextUIProvider>
                <Button isIconOnly color = "transparent" disableAnimation style={sizeIcon} onClick={profilePage}>
                    <QuquLogo/>
                </Button>
                <ProceedUrl/>
                <Chat/>
                <LobbySettings/>
            </NextUIProvider>
        </div>
    );
};

export default LobbyPage