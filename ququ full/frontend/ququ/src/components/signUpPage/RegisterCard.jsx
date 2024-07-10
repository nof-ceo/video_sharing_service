import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    Input,
    Link,
    Modal, ModalBody,
    ModalContent, ModalFooter, ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {HideIconSvg} from "../../images/HideIconSvg";
import {ShowIconSvg} from "../../images/ShowIconSvg";
export default function RegisterCard() {

    const [input, setInput] = useState({
        email: "",
        login: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const validateEmail = (value) => value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

    const validatePassword = (passwordValue) => passwordValue.match(/.{7,}/);

    const isInvalid = React.useMemo(() => {
        if (input.email === "") return false;

        return validateEmail(input.email) ? false : true;
    }, [input.email]);

    const isInvalidPassword = React.useMemo(() => {
        if (input.password === "") return false;

        return validatePassword(input.password) ? false : true;
    }, [input.password]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!isInvalid && !isInvalidPassword && input.firstName !== "" && input.lastName !== "" && input.login !== "") {


        const response = await fetch('http://localhost:8080/api/v1/register/createAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        if (response.ok) {
            const data = await response.text();
            console.log(data);
        } else {
            console.error('Registration failed');
        }
     }
    };

    const divStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        maxWidth : 450,
        maxHeight : 490,
        left : 620,
        top : 200,
        height : "100vh",
        width : "100%",
        backgroundColor : "#171717"
    }

    const inputStyle1 = {
        display: "flex",
        width : "70%",
        flexWrap : "wrap",
        marginLeft : "1rem",
        marginTop : 0,
    }

    const inputStyle2 = {
        display: "flex",
        width : "70%",
        flexWrap : "wrap",
        marginLeft : "1rem",
        marginTop: 20,
    }

    const inputStyle3 = {
        display: "flex",
        width : "30%",
        flexWrap : "wrap",
        marginLeft : "-10rem",
        marginTop: 20,
    }

    const inputStyle4 = {
        display: "flex",
        width : "30%",
        flexWrap : "wrap",
        marginLeft : "12rem",
        marginTop : -47
    }

    const checkboxStyle = {
        display: "flex",
        width : "30%",
        flexWrap : "wrap",
        marginLeft : "-10rem",
        marginTop : 20,
    }

    const span1 = {
        display: "inline-block",
        flexWrap : "wrap",
        fontFamily : "CustomFont",
        fontSize : 16,
        color : "#606060",
    }

    const span2 = {
        display: "inline-block",
        flexWrap : "wrap",
        fontFamily : "CustomFont",
        marginLeft : 3,
        fontSize : 16,
        color : "#4E75FF",
    }

    const policyStyle = {
        marginTop : -24,
        marginLeft : -20
    }

    const buttonStyle = {
        display: "inline-block",
        flexWrap : "wrap",
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        backgroundOpacity : "46%",
        fontSize: 24,
        height: 60,
        marginTop : 20
    }

    const span3 = {
        display: "inline-block",
        flexWrap : "wrap",
        fontFamily : "CustomFont",
        fontSize : 20,
        color : "#606060",
    }

    const span4 = {
        display: "inline-block",
        flexWrap : "wrap",
        fontFamily : "CustomFont",
        marginLeft : 3,
        fontSize : 20,
        color : "#4E75FF",
        height : 25
    }

    const policyStyle2 = {
        marginTop : 10,
        marginLeft : 10
    }

    return (
        <Card style={divStyle} font shadow={"none"}>
            <div style={inputStyle1}>
                <Input name={"email"} value = {input.email} placeholder="Email" size={"lg"} type={"email"}
                       className="my-theme text-foreground" color={isInvalid ? "danger" : "default"}
                       errorMessage={isInvalid && "Please enter a valid email"} onChange={handleInput}
                        ></Input>
            </div>
            <div style={inputStyle2}>
                <Input name={"login"} value={input.login} placeholder="Login" size={"lg"} type={"text"} className="my-theme text-foreground" onChange={handleInput}></Input>
            </div>
            <div style={inputStyle2}>
                <Input name={"password"} value={input.password} placeholder="Password" size={"lg"} className="my-theme text-foreground"
                       endContent={
                           <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                               {isVisible ? (
                                   <ShowIconSvg className="text-2xl text-default-400 pointer-events-none" />
                               ) : (
                                   <HideIconSvg className="text-2xl text-default-400 pointer-events-none" />
                               )}
                           </button>
                       }
                       type={isVisible ? "text" : "password"}
                        color={isInvalidPassword ? "danger" : "default"}
                        errorMessage={isInvalidPassword && "Password must be at least 7 characters long"} onChange={handleInput}/>
            </div>
            <div style={inputStyle3}>
                <Input name={"firstName"} value={input.firstName} placeholder="First name" size={"lg"} type={"text"} className="my-theme text-foreground" onChange={handleInput}></Input>
            </div>
            <div style={inputStyle4}>
                <Input name={"lastName"} value={input.lastName} placeholder="Last name" size={"lg"} type={"text"} className="my-theme text-foreground" onChange={handleInput}></Input>
            </div>
            <div style={checkboxStyle}>
                <Checkbox size={"lg"}></Checkbox>
            </div>
            <div style={policyStyle}>
                <span style={span1}>I have read the </span>
                <Link style={span2} href={"/policy"}> user agreement</Link>
            </div>
            <div>
                <Button style={buttonStyle} size={"lg"} onPress={onOpen} onClick={handleSubmit}>Sign Up</Button>
                <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Verification</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Verification link was sent by email
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" onPress={onClose}>
                                        OK
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
            <div style={policyStyle2}>
                <span style={span3}>Already have </span>
                <Link style={span4} variant={"flat"} size={"sm"} href={"/login"}>account?</Link>
            </div>
        </Card>
    )
};