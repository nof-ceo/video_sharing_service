import React, {useState} from "react";
import {Button, Card, Input, Link} from "@nextui-org/react";
import {ShowIconSvg} from "../../images/ShowIconSvg";
import {HideIconSvg} from "../../images/HideIconSvg";
import {useAuth} from "../AuthProvider";

export default function LoginComp() {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [input, setInput] = useState({
        login: "",
        password: "",
    });

    const auth = useAuth();
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.login !== "" && input.password !== "") {
            auth.loginAction(input);
            return;
        } else
            alert("please provide a valid input");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const divStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        maxWidth : 450,
        maxHeight : 378,
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

    const textColor = {
        color: "#606060",
    }


    return (
        <Card style={divStyle} font shadow={"none"}>
            <div style={inputStyle2}>
                <Input style={textColor} name={"login"} value={input.login} placeholder="Login" size={"lg"} type={"text"} className="my-theme text-foreground" onChange={handleInput}></Input>
            </div>
            <div style={inputStyle2}>
                <Input style={textColor} name={"password"} value={input.password} placeholder="Password" size={"lg"} className="my-theme text-foreground" onChange={handleInput}
                       endContent={
                           <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                               {isVisible ? (
                                   <ShowIconSvg className="text-2xl text-default-400 pointer-events-none" />
                               ) : (
                                   <HideIconSvg className="text-2xl text-default-400 pointer-events-none" />
                               )}
                           </button>
                       }
                       type={isVisible ? "text" : "password"}/>
            </div>
            <div>
                <Button style={buttonStyle} size={"lg"} onClick={handleSubmitEvent}>Log in</Button>
            </div>
            <div style={policyStyle2}>
                <span style={span3}>Don't have an </span>
                <Link style={span4} variant={"flat"} size={"sm"} href={"/signup"}>account?</Link>
            </div>
        </Card>
    )
};