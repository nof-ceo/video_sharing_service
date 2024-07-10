import React, {FunctionComponent} from "react";
import {Avatar, Card, CardBody, Input} from "@nextui-org/react";
import purpleAvatar from "./Avatar.svg"
import redAvatar from "./AvatarRed.svg"
import greenAvatar from "./AvatarGreen.svg"
import yellowAvatar from "./AvatarYellow.svg"

// аватарки будут хранится в облаке, поэтому локальный путь изменится на url
const ChatCard : FunctionComponent = () => {
    const fontSize = {
        top : -10,
        fontSize : 64,
        wordSpacing : 1,
        left: 163,
        display : "inline-block",
        fontFamily : 'CustomFont',
        color : "white"
    }

    const divStyle = {
        maxWidth : 508,
        maxHeight : 558,
        height : 558,
        width : "31%",
        left : 362,
        top : -107,
        backgroundColor : "#171717"
    }

    const divStyle2 = {
        maxWidth : 440,
        maxHeight : 405,
        height : 405,
        width : "100%",
        left : 38,
        top : -50,
        backgroundColor : "#222222"
    }

    const mainAvatarPos = {
        left : 377,
        top: 9,
    }

    const mockUser1 = {
        left : 30,
        marginTop: 32,
    }

    const fontStyle = {
        fontFamily: 'CustomFont',
        fontSize: 16,
        marginLeft: 70,
        marginTop: -172,
        color: "white"
    }

    const fontStyle2 = {
        fontFamily: 'CustomFont',
        fontSize: 16,
        marginLeft: 70,
        marginTop: 15,
        color: "white"
    }

    const inputStyle = {
        display: "flex",
        width : 405,
        flexWrap : "wrap",
        color:"#606060",
        fontFamily: "CustomFont",
        fontSize: 16,
    }

    const inputPos = {
        display: "flex",
        width : 405,
        flexWrap : "wrap",
        marginLeft: 16,
        marginTop: 50,
    }

    const cardPos = {
        top: -40,
        height: 230,
    }


    return (
        <Card style={divStyle} font shadow={"none"} >
            <CardBody style={fontSize}>Chat</CardBody>
            <Card style={divStyle2} shadow={"none"}>
                <Avatar style={mainAvatarPos} src={purpleAvatar} size={"lg"}/>
                <div>
                    <CardBody style={cardPos}>
                        <div>
                            <Avatar style={mockUser1} src={redAvatar} size={"sm"}/>
                            <Avatar style={mockUser1} src={greenAvatar} size={"sm"}/>
                            <Avatar style={mockUser1} src={yellowAvatar} size={"sm"}/>
                        </div>
                        <div style={fontStyle}>
                            <p>elephann_</p>
                            <p style={{color: "#FD6983"}}>Hello there!</p>
                        </div>
                        <div style={fontStyle2}>
                            <p>needpizza</p>
                            <p style={{color: "#77DFB7"}}>wanna watch irl?</p>
                        </div>
                        <div style={fontStyle2}>
                            <p>maajins</p>
                            <p style={{color: "#FDB85A"}}>nooooooooooooooooooo</p>
                        </div>
                    </CardBody>
                </div>
                <div className="dark" style={inputPos}>
                    <Input style={inputStyle} variant={"flat"} size={"lg"} type={"email"} placeholder={"Type your message..."}></Input>
                </div>
            </Card>
        </Card>
    )
}

export default ChatCard