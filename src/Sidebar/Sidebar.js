import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import SidebarChannel from './SidebarChannel'
import { Avatar } from "@material-ui/core"
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3 className="sidebar__title">Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>テキストチャンネル</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src="https://yt3.ggpht.com/yti/ANoDKi59xxtEgzgwVPYeqSRLmfkrJQFpRCbStZdrtmoolw=s88-c-k-c0x00ffffff-no-rj-mo" />
                <div className="sidebar__profileInfo">
                    <h3>daiki_fujii</h3>
                    <p>#thisIsMyID</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
