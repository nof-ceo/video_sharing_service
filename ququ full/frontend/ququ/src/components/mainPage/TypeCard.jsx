import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input} from "@nextui-org/react";
import thai from "../../images/Thai.svg";

const TypeCard : FunctionComponent = () => {

    const cardStyle = {
        display: "flex",
        height : 200,
        width : 200,
        marginLeft: 966,
        marginTop: -280,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    const filmsStyle = {
        marginTop : 42,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 42,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#FFFFFF"
    }

    const animeStyle = {
        marginTop : -22,
        fontSize : 48,
        wordSpacing : 1,
        marginLeft: 31,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color: "#4E75FF"
    }

    return (
        <div>
            <Card style={cardStyle} shadow={"none"}>
                <p style={filmsStyle}>Films</p>
                <p style={animeStyle}>Anime</p>
            </Card>
        </div>
    );
}

export default TypeCard