import {FunctionComponent} from "react";
import NavigationBar from "../components/mainPage/NavigationBar";
import WatchFriendCard from "../components/mainPage/WatchFriendCard";
import {NextUIProvider} from "@nextui-org/react";
import VideoPlayerScreenshot from "../components/mainPage/VideoPlayerScreenshot";
import WhyUsCard from "../components/mainPage/WhyUsCard";
import ChatCard from "../components/mainPage/ChatCard";
import AchievementsCard from "../components/mainPage/AchievementsCard";
import QualityCard from "../components/mainPage/QualityCard";
import FourCard from "../components/mainPage/FourCard";
import LiveCard from "../components/mainPage/LiveCard";
import TypeCard from "../components/mainPage/TypeCard";
import BigButton from "../components/mainPage/BigButton";

const MainPage : FunctionComponent = () => {
    const divStyle = {
        height : 2395
    };


    return (
        <div style={divStyle}>
            <NextUIProvider>
                <NavigationBar/>
                <WatchFriendCard/>
                <VideoPlayerScreenshot/>
                <WhyUsCard/>
                <ChatCard/>
                <AchievementsCard/>
                <QualityCard/>
                <FourCard/>
                <LiveCard/>
                <TypeCard/>
                <BigButton/>
            </NextUIProvider>
        </div>
    );
};

export default MainPage