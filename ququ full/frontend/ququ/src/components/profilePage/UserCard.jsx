import React, {FunctionComponent, useEffect, useState,} from "react";
import {Avatar, Button, Card, CardBody} from "@nextui-org/react";
import purpleAvatar from "../../images/Avatar.svg";
import {jwtDecode} from 'jwt-decode';
const UserCard : FunctionComponent = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUsername(decodedToken.sub);
        }
    }, []);


    const divStyle = {
        display : "flex",
        maxWidth : 1200,
        maxHeight : 905,
        minHeight : 905,
        height : "auto",
        marginLeft : 400,
        marginTop : -876,
        borderRadius : 32,
        backgroundColor : "#171717"
    }

    const avatarSize = {
        display: "flex",
        alignSelf: "flex-start",
        height: 150,
        width: 150,
        marginLeft: 70,
        marginTop: 40,
    }

    const userName = {
        width: "300px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        alignSelf: "center",
        fontSize : 48,
        fontFamily : 'CustomFont',
        color : "#FFFFFF",
        marginTop: -150,
        marginLeft: -400,
    }

    const userDescription = {
        display: "flex",
        alignSelf: "center",
        fontSize : 24,
        fontFamily : 'CustomFont',
        color : "#606060",
        marginTop: -10,
        marginLeft: -520,
    }

    const userLobbiesAndActivities = {
        display: "flex",
        alignSelf: "center",
        fontSize : 48,
        fontFamily : 'CustomFont',
        color : "#4E75FF",
        marginTop: 80,
    }

    const cards = {
        display : "flex",
        maxWidth : 900,
        maxHeight : 200,
        minHeight : 200,
        height : "auto",
        marginLeft : 150,
        marginTop : 10,
        borderRadius : 32,
        backgroundColor : "#222222"
    }

    return (
        <Card style={divStyle} font shadow={"none"}>
            <Avatar style={avatarSize} src={purpleAvatar}></Avatar>
            <p style={userName}>{username}</p>
            <p style={userDescription}>smth description</p>

            <p style={userLobbiesAndActivities}>Friends lobbies</p>
            <Card style={cards} font shadow={"none"}></Card>

            <p style={userLobbiesAndActivities}>Last activity</p>
            <Card style={cards} font shadow={"none"}></Card>
        </Card>
    )
};

export default UserCard