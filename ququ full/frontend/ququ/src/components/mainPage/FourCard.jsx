import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input} from "@nextui-org/react";
import thai from "../../images/Thai.svg";

const FourCard : FunctionComponent = () => {

    const cardStyle = {
        display: "flex",
        height : 153,
        width : 153,
        marginLeft: 789,
        marginTop: -490,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    const qualityStyle = {
        marginTop : 41,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 48,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#4E75FF"
    }

    return (
        <div>
            <Card style={cardStyle} shadow={"none"}>
                <p style={qualityStyle}>4K</p>
            </Card>
        </div>
    );
}

export default FourCard