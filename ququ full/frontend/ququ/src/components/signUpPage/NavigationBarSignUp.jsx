import {FunctionComponent} from "react";
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {QuquLogo} from "../mainPage/QuquLogo";

const NavigationBarSignUp : FunctionComponent = () => {

    const sizeIcon = {
        width : 200,
        height : 200,
        left : -100,
    }

    return (
        <Navbar>
            <NavbarBrand></NavbarBrand>
            <NavbarContent justify={"start"}>
                <NavbarItem>
                    <Button isIconOnly disableAnimation color="transparent" aria-label="Like" style={sizeIcon} as={Link} href={"/"}>
                        <QuquLogo/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
;}

export default NavigationBarSignUp