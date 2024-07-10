import React, {FunctionComponent} from "react";
import {Button, Card, Image, Input} from "@nextui-org/react";
import thai from "../../images/Thai.svg";

const Chat : FunctionComponent = () => {

    const cardStyle = {
        display: "flex",
        height : 595,
        width : 420,
        marginLeft: 1200,
        marginTop: -674,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    return (
        <div>
            <Card style={cardStyle} shadow={"none"}>
            </Card>
        </div>
    );
}

export default Chat