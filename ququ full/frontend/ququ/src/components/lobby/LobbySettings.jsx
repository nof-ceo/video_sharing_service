import React, {FunctionComponent, useState} from "react";
import {
    Button,
    Input, Popover, PopoverContent, PopoverTrigger, Switch
} from "@nextui-org/react";
import {Setting} from "../../images/Setting";
import {LockInput} from "../../images/LockInput";
import {UnlockInput} from "../../images/UnlockInput";

const LobbySettings : FunctionComponent = () => {

    const [isLock, setIsLock] = useState(true);

    const handleButtonClick = () => {
        setIsLock(!isLock);
    };

    const settingsPos = {
        display: "flex",
        marginLeft: 1598,
        marginTop: -720,
    }

    const buttonStyle = {
        display: "flex",
        maxWidth: 39,
        height: "10%",
        marginLeft: -150,
        background: "transparent",
    }

    const permissionStyle = {
        display: "flex",
        flexWrap : "wrap",
        marginRight: 120,
        marginTop: 32,
        color : "#606060",
        fontFamily : "CustomFont",
        fontSize: 24
    }

    const switchStyle = {
        marginTop: 7,
    }

    const text = {
        marginRight: 120,
        marginTop: 9,
        fontFamily : "CustomFont",
        fontSize: 24,
        color: "#606060",
        marginBottom: 9,
    }

    const inputStyle = {
        display: "flex",
        color: "#606060",
        fontFamily : "CustomFont",
        fontSize: 16,
        width: 209,
    }

    const participants = {
        display: "flex",
        color: "#606060",
        fontFamily : "CustomFont",
        fontSize: 16,
        width: 230,
    }

    const max = {
        marginLeft: 0,
        marginTop: 9,
        fontFamily : "CustomFont",
        fontSize: 24,
        color: "#606060",
        marginBottom: 9,
    }

    const deleteStyle = {
        display: "flex",
        width : 120,
        height: 56,
        marginTop: 165,
        marginBottom: 35,
        flexWrap : "wrap",
        color : "#FD6983",
        fontFamily : "CustomFont",
        background: "rgba(253, 105, 131, 0.50)",
        fontSize: 16
    }

    const saveStyle = {
        display: "flex",
        width : 120,
        height: 56,
        flexWrap : "wrap",
        marginLeft: 130,
        marginTop: -91,
        marginBottom: 35,
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        fontSize: 16
    }
    return (
        <div>
            <div style={settingsPos}>
            <Popover className="dark" showArrow offset={10}>
                <PopoverTrigger>
                    <Button style={buttonStyle}><Setting/></Button>
                </PopoverTrigger>

                <PopoverContent>
                    <div>
                        <p style={permissionStyle}>Public</p>
                        <Switch className="light" color="success" style={switchStyle}></Switch>
                        <p style={text}>Change title</p>
                        <Input style={inputStyle} className="setting" placeholder={"Title"}
                               readOnly={isLock}
                               endContent={<button type="button" onClick={handleButtonClick}>
                            {isLock ? (
                                <LockInput/>
                            ) : (
                                <UnlockInput/>
                            )}
                        </button>}/>

                        <p style={max}>Max participants</p>
                        <Input className="setting" type={"number"} style={participants}></Input>

                        <Button style={deleteStyle}>Delete room</Button>
                        <Button style={saveStyle}>Save changes</Button>

                    </div>
                </PopoverContent>
            </Popover>
            </div>
        </div>
    );
}

export default LobbySettings