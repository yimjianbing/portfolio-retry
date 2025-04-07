'use client'
import { useDevice } from "../DeviceProvider";
import MobileProjects from "./MobileProjects";
import DesktopProjects from "./DesktopProjects";

export default function Projects() {
    
    const { isMobile } = useDevice();

    return (
        <div className="relative">
            {isMobile ? <MobileProjects/> : <DesktopProjects/>}
        </div>
    )

}    
