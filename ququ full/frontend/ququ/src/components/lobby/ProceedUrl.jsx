import React, {FunctionComponent} from "react";
import {Button, Card, Input} from "@nextui-org/react";
import {CopyLink} from "../../images/CopyLink";
import {InviteFriend} from "../../images/InviteFriend";

const ProceedUrl : FunctionComponent = () => {

    const paramUrlInput = {
        display: "flex",
        width : 611,
        flexWrap : "wrap",
        marginLeft: 70,
        marginTop: 120
    }

    const paramProceedButton = {
        display: "flex",
        width : 115,
        height: 47,
        flexWrap : "wrap",
        marginLeft: 705,
        marginTop: -47,
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        fontSize: 20
    }

    const colorUrlInput = {
        color: "#606060",
        fontFamily : "CustomFont",
        fontSize: 20
    }

    const mediaPlayer = {
        display: "flex",
        height : 507,
        width : 750,
        marginLeft: 70,
        marginTop: 32,
        backgroundColor : "#171717",
        borderRadius: 20,
    }

    const copyLinkStyle = {
        display: "flex",
        width : 154,
        height: 47,
        flexWrap : "wrap",
        marginLeft: 70,
        marginTop: 32,
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        fontSize: 20
    }

    const inviteStyle = {
        display: "flex",
        width : 180,
        height: 47,
        flexWrap : "wrap",
        marginLeft: 247,
        marginTop: -47,
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        fontSize: 20
    }


    return (
        <div>
            <div style={paramUrlInput}>
            <Input style={colorUrlInput} name={"url"}  placeholder="URL" size={"lg"} type={"text"} className="dark" ></Input>
            </div>
            <Button style={paramProceedButton}>Proceed</Button>
            <Card style={mediaPlayer} shadow={"none"}/>
            <Button style={copyLinkStyle}><CopyLink/>Copy link</Button>
            <Button style={inviteStyle}><InviteFriend/>Invite friends</Button>
        </div>
    );
    }

export default ProceedUrl