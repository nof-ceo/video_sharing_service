import { FunctionComponent } from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand} from "@nextui-org/react";
import {QuquLogo} from "./QuquLogo";
import {useNavigate} from "react-router-dom";
const NavigationBar : FunctionComponent = () =>  {

    let navigate = useNavigate();

    const divStyle = {
        backgroundColor : "#171717",
    }

    const sizeIcon = {
        width : 100,
        height : 100,
    }

    const mainPage = () => {
        let path = '/';
        navigate(path);
    }

    const buttonStyle = {
        color : "#4E75FF",
        fontFamily : "CustomFont",
        background: "rgba(78, 117, 255, 0.46)",
        backgroundOpacity : "46%",
    }

    return (
        <Navbar style={divStyle} className="flex gap-4 items-center">
            <NavbarBrand>
                <Button isIconOnly disableAnimation color="transparent" aria-label="Like" style={sizeIcon} onClick={mainPage}>
                    <QuquLogo/>
                </Button>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link isBlock showAnchorIcon className="my-theme colors-primary" href="/">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock showAnchorIcon className="my-theme colors-primary" href="/">
                        FAQ
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/signup" variant="flat" style={buttonStyle}>
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


export default NavigationBar
