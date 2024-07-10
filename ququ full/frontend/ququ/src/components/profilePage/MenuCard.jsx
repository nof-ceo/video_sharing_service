import React, {FunctionComponent, useState} from "react";
import {QuquLogo} from "../mainPage/QuquLogo";
import {
    Button,
    Card,
    Input, Link,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {PluseRectangle} from "../../images/PluseRegtangle";
import {Search} from "../../images/Search";
import {FriendsIcon} from "../../images/FriendsIcon";
import {Notification} from "../../images/Notification";
import {Achievements} from "../../images/Achievements";
import {Setting} from "../../images/Setting";
import {useNavigate} from "react-router-dom";

const MenuCard : FunctionComponent = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    let navigate = useNavigate();

    const room = () => {
        navigate("/lobby");
    }

    const divStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        maxWidth : 239,
        maxHeight : 905,
        minHeight: 905,
        left : 69,
        top : 29,
        height : "auto",
        width : "100%",
        borderRadius : 32,
        backgroundColor : "#171717"
    }

    const fontSize = {
        fontSize : 20,
        fontFamily : 'SF-Display',
        color : "#606060"
    }

    const mainPage = () => {
        window.location.reload();
    }
   
    const sizeIcon = {
        width : 150,
        height : 35,
        top : -480,
    }

    const posButtons = {
        marginTop: -400,
        marginLeft: 10
    }

    const modalbg = {
        color: "#606060"
    }

    const buttonCreateStyle = {
        color: "#4E75FF",
        background: "rgba(78, 117, 255, 0.46)",    }

    return (
        <Card style={divStyle}  font shadow={"none"}>
            <Button isIconOnly color = "transparent" disableAnimation style={sizeIcon} onClick={mainPage}>
                <QuquLogo/>
            </Button>
            <div style={posButtons}>
                <Button color="transparent" startContent={<PluseRectangle/>} onPress={onOpen} style={fontSize}>
                    Create lobby
                </Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                    backdrop={"blur"}
                    className="my-theme colors-primary"
                    style={modalbg}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Create lobby</ModalHeader>
                                <ModalBody>
                                    <Input
                                        autoFocus
                                        label="Lobby title"
                                        placeholder="Enter your title"
                                        variant="bordered"
                                    />
                                    <Input
                                        label="Max participants"
                                        placeholder="Number of participants"
                                        type="number"
                                        variant="bordered"
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button style={buttonCreateStyle} onPress={room}>
                                        Create
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            );
                <Button color="transparent" startContent={<Search/>} style={fontSize}>
                    Find lobby
                </Button>
                <Button color="transparent" startContent={<FriendsIcon/>} style={fontSize}>
                    Friends
                </Button>
                <Button color="transparent" startContent={<Notification/>} style={fontSize}>
                    Notifications
                </Button>
                <Button color="transparent" startContent={<Achievements/>} style={fontSize}>
                    Achievements
                </Button>
                <Button color="transparent" startContent={<Setting/>} style={fontSize}>
                    Settings
                </Button>
            </div>
        </Card>
    )
};

export default MenuCard