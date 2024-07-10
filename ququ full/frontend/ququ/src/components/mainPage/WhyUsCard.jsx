import React, {FunctionComponent} from "react";
import {Button, Card, CardBody} from "@nextui-org/react";
import {LinearGradient} from "react-text-gradients";

const WhyUsCard : FunctionComponent = () =>  {

    const divStyle = {
        maxWidth : 254,
        maxHeight : 253,
        height : 253,
        width : "31%",
        left : 70,
        top : 146,
        backgroundColor : "#171717"
    }

    const fontSize = {
        top : 78,
        fontSize : 48,
        wordSpacing : 1,
        left: 27,
        display : "inline-block",
        fontFamily : 'CustomFont'
    }

    const blueColor = {
        color : "#4E75FF"
    }

    return (
        <Card style={divStyle}  font shadow={"none"}>
            <CardBody style={fontSize} className="text-white">
                <span>Why </span>
                <span style={blueColor}>us?</span>
            </CardBody>
        </Card>
    )
};

export default WhyUsCard;