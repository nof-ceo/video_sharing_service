import {FunctionComponent} from "react";
import video from "./video_player.svg"


const NavigationBar : FunctionComponent = () => {


    const starkidsPos = {
        position: "absolute",
        left: "714px",
        top: "187px"
    }

    const container = {
        position : "relative",

    }

    return (
        <div>
            <img style={starkidsPos} src = {video} alt=""/>
        </div>
    );
}

export default NavigationBar