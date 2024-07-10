import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/react";

export default function AchievementsCard() {
    const divStyle = {
        maxWidth : 448,
        maxHeight : 532,
        height : 532,
        width : "31%",
        left : 908,
        top : -500,
        backgroundColor : "#171717"
    }

    const cardStyle2 = {
        maxWidth : 322,
        maxHeight : 63,
        height : 63,
        width : "100%",
        left: 63,
        top: 109,
        backgroundColor: "#222222"
    }

    const header = {
        display: "flex",
        fontFamily : 'CustomFont',
        fontSize : 48,
        color : "white",
        margintTop: 16,
        marginLeft : 76,
    }

    const achieveName = {
        fontFamily : 'CustomFont',
        fontSize : 20,
        color : "white",
        left : 70,
    }

    const cardStylePlayboi = {
        display: "flex",
        height : 63,
        width : 322,
        backgroundColor : "#222222",
        marginTop: 36,
        marginLeft: 63,
        borderRadius: 20,
    }

    const achievePlayboi = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#4E75FF",
        marginTop: 17,
        marginLeft: 19,
        borderRadius: 3,
    }

    const achieveTitlePos = {
        marginLeft: 64,
        marginTop: -44,
    }

    const achieveTitle = {
        fontFamily: "CustomFont",
        fontSize: 20,
        color: "#FFFFFF"
    }

    const inventoryPos = {
        marginTop: 5,
        marginLeft: 120,
    }

    const achieveDescription = {
        fontFamily: "CustomFont",
        fontSize: 14,
        marginLeft: 64,
        marginTop: -3,
        color: "#606060"
    }

    const inventoryCard = {
        display: "flex",
        height : 245,
        width : 322,
        backgroundColor : "#222222",
        marginTop: 65,
        marginLeft: 63,
        borderRadius: 20,
    }

    const achieve1 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#4E75FF",
        marginTop: 46,
        marginLeft: -173,
        borderRadius: 3,
    }

    const achieve2 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#373737",
        marginTop: 105,
        marginLeft: -28,
        borderRadius: 3,
    }

    const achieve3 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#373737",
        marginTop: 164,
        marginLeft: -28,
        borderRadius: 3,
    }

    const achieve4 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#00FFB2",
        marginTop: 46,
        marginLeft: 28,
        borderRadius: 3,
    }

    const achieve5 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#FFAE4E",
        marginTop: 46,
        marginLeft: 28,
        borderRadius: 3,
    }

    const achieve6 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#FF4EC3",
        marginTop: 46,
        marginLeft: 28,
        borderRadius: 3,
    }

    const achieve7 = {
        display: "flex",
        height : 29,
        width : 29,
        backgroundColor : "#373737",
        marginTop: 46,
        marginLeft: 28,
        borderRadius: 3,
    }

    return (
        <div>
            <Card style={divStyle} shadow={"none"}>
                <div style={header}>
                    <p>Achievements</p>
                </div>
                <div>
                    <Card style={cardStylePlayboi} shadow={"none"}>
                        <div style={achievePlayboi}>
                            <Card shadow={"none"}/>
                        </div>
                        <div style={achieveTitlePos}>
                            <p style={achieveTitle}>I know</p>
                        </div>
                        <div style={achieveDescription}>
                            <p>10+ hours of Playboy Carti</p>
                        </div>
                    </Card>
                </div>
                <div style={inventoryCard}>
                    <Card shadow={"none"}>
                    </Card>
                    <div style={inventoryPos}>
                        <p style={achieveTitle}>Inventory</p>
                    </div>
                    <div style={achieve1}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve2}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve3}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve4}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve2}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve3}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve5}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve2}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve3}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve6}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve2}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve3}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve7}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve2}>
                        <Card shadow={"none"}/>
                    </div>
                    <div style={achieve3}>
                        <Card shadow={"none"}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}