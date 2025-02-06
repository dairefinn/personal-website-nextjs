import "./Sidebar.scss";

import { RESUME_DOWNLOAD_LINK } from "@/data/career";
import SidebarLink, { SidebarLinkItem } from "../SidebarLink/SidebarLink";

const internalLinks: SidebarLinkItem[] = [
    {
        title: "Home",
        icon: "fa fa-fw fa-home",
        route: "/home",
        itemType: "INTERNAL",
    },
    {
        title: "Projects",
        icon: "far fa-fw fa-folder-open",
        route: "/projects",
        itemType: "INTERNAL",
    },
    {
        title: "Career",
        icon: "fa fa-fw fa-briefcase",
        route: "/career",
        itemType: "INTERNAL",
    },
    {
        title: "Contact",
        icon: "fa fa-fw fa-envelope",
        route: "/contact",
        itemType: "INTERNAL",
    },
];

const externalLinks: SidebarLinkItem[] = [
    {
        title: "GitHub",
        icon: "fa-brands fa-fw fa-github",
        route: "https://github.com/dairefinn",
        itemType: "EXTERNAL",
    },
    {
        title: "LinkedIn",
        icon: "fa-brands fa-fw fa-linkedin",
        route: "https://www.linkedin.com/in/daire-finn-44b883263/",
        itemType: "EXTERNAL",
    },
    {
        title: "Spotify",
        icon: "fa-brands fa-fw fa-spotify",
        route: "https://open.spotify.com/user/dman355/",
        itemType: "EXTERNAL",
    },
    {
        title: "Instagram",
        icon: "fa-brands fa-fw fa-instagram",
        route: "https://www.instagram.com/dairefinn/",
        itemType: "EXTERNAL",
    },
];

const downloadLinks: SidebarLinkItem[] = [
    {
        title: "My resume",
        icon: "fa fa-fw fa-file-pdf",
        route: RESUME_DOWNLOAD_LINK,
        itemType: "DOWNLOAD",
    },
];

function Sidebar() {
    return (
        <div className="container-component-sidebar">
            <div className="area-branding">
                <div>Daire Finn</div>
            </div>

            <div className="area-navigation">
                <ul className="area-internal-links">
                    {internalLinks.map((sidebarItem) => {
                        return (
                            <SidebarLink key={sidebarItem.title} sidebarItem={sidebarItem} />
                        );
                    })}
                </ul>

                <div className="navigation-heading">My profiles</div>

                <ul className="area-external-links">
                    {externalLinks.map((sidebarItem) => {
                        return (
                            <SidebarLink key={sidebarItem.title} sidebarItem={sidebarItem} />
                        );
                    })}
                </ul>

                <div className="navigation-heading">Downloads</div>

                <ul className="area-download-links">
                    {downloadLinks.map((sidebarItem) => {
                        return (
                            <SidebarLink key={sidebarItem.title} sidebarItem={sidebarItem} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
