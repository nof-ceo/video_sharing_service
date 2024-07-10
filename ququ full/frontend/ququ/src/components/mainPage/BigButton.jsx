import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input, Link} from "@nextui-org/react";
import {QuquLogo} from "./QuquLogo";

const BigButton : FunctionComponent = () => {

    const buttonStyle = {
        width: 576,
        height: 296,
        color : "#4E75FF",
        fontSize : 64,
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.20)",
        backgroundOpacity : "46%",
        borderWidth : 2,
        borderColor : "#4E75FF",
        marginLeft: "30%",
        marginTop: "20%",
    }

    const sizeLogo = {
        height: 50,
        width: 132,
        marginLeft: 12,
        marginTop: 5,
    }

    return (
        <div>
            <Button as={Link} style={buttonStyle} href="/signup">Watch with
                <div style={sizeLogo}>
                <QuquLogo></QuquLogo>
                </div>
            </Button>
        </div>
    );
}

export default BigButton