import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import {LinearGradient} from "react-text-gradients";

export default function WatchFriendCard() {
    const divStyle = {
        maxWidth : 553,
        maxHeight : 404,
        height : 404,
        width : "31%",
        left : 70,
        top : 91,
        backgroundColor : "#171717"
    }

    const fontSize = {
        fontSize : 48,
        wordSpacing : 1,
        left: 43,
    }

    const fontSize2 = {
        fontSize : 32,
        left : 43,
        top: -50,
        height: 200
    }

    const buttonPos = {
        top : 50,
        width: "50%",
        left : 70,
        height: "40%",
        color : "#4E75FF",
        fontSize : 44,
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        backgroundOpacity : "46%",
        borderWidth : 2,
        borderColor : "#4E75FF"
    }

    const forFreeStyle = {
        background: "linear-gradient(90deg, rgba(78,117,255,1) 0%, rgba(196,209,255,1) 25%)",
        fontFamily: "CustomFont",
        webkitTextFillColor: "transparent",
        webkitBackgroundClip: "text",
        fontSize : 32,
    }


    return (
        <Card style={divStyle}  font shadow={"none"}>
            <CardBody style={fontSize} className="text-white">
                <p style={{fontFamily : 'CustomFont'}}>Watch content with your friends</p>
            </CardBody>
            <CardBody style={fontSize2} className="text-white">
                    <p style={forFreeStyle}>for free</p>
                <Button as={Link} style={buttonPos} variant={"flat"} href="/signup" >Right Now</Button>
            </CardBody>
        </Card>
    );
}
