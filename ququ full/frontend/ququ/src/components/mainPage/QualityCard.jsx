import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input} from "@nextui-org/react";
import thai from "../../images/Thai.svg";

const QualityCard : FunctionComponent = () => {

    const cardStyle = {
        display: "flex",
        height : 563,
        width : 693,
        marginLeft: 70,
        marginTop: -542,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    const qualityStyle = {
        marginTop : 34,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 117,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#4E75FF"
    }

    const videoStyle = {
        marginTop : 0,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 0,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#FFFFFF"
    }

    const thaiStyle = {
        marginLeft: 14,
        marginTop: 21,
    }

    return (
        <div>
            <Card style={cardStyle} shadow={"none"}>
                <div style={qualityStyle}>
                    <p>Quality <span style={videoStyle}>of video player</span></p>
                </div>
                <Image src={thai} style={thaiStyle} ></Image>
            </Card>
        </div>
    );
}

export default QualityCard