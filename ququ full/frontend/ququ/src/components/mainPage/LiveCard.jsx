import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input} from "@nextui-org/react";
import thai from "../../images/Thai.svg";

const LiveCard : FunctionComponent = () => {

    const cardStyle = {
        display: "flex",
        height : 153,
        width : 153,
        marginLeft: 789,
        marginTop: 55,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    const qualityStyle = {
        marginTop : 41,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 24,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#FFFFFf"
    }

    const ellipseStyle = {
        display: "flex",
        width: 20,
        height: 20,
        backgroundColor: "#FF6363",
        borderRadius: 20,
        marginLeft: 117,
        marginTop: -40,
    }

    return (
        <div>
            <Card style={cardStyle} shadow={"none"}>
                <p style={qualityStyle}>Live</p>
                <Card shadow={"none"} style={ellipseStyle}/>
            </Card>
        </div>
    );
}

export default LiveCard