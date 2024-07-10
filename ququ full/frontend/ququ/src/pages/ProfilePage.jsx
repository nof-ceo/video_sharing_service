import {FunctionComponent} from "react";
import {NextUIProvider} from "@nextui-org/react";
import MenuCard from "../components/profilePage/MenuCard";
import UserCard from "../components/profilePage/UserCard";
const ProfilePage : FunctionComponent = () => {
    const divStyle = {
        minHeight : 950,
        maxHeight : 950
    };


    return (
        <div style={divStyle}>
            <NextUIProvider>
                <MenuCard/>
                <UserCard/>
            </NextUIProvider>
        </div>
    );
};

export default ProfilePage