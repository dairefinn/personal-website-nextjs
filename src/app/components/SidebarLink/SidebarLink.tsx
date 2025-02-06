"use client";

import './SidebarLink.scss'

import { usePathname } from 'next/navigation';

export interface SidebarLinkItem {
    title: string;
    icon: string;
    route: string;
    itemType: 'EXTERNAL' | 'INTERNAL' | 'DOWNLOAD';
}

interface SidebarLinkProps {
    sidebarItem: SidebarLinkItem;
}

function SidebarLink({ sidebarItem }: SidebarLinkProps) {
    const pathname = usePathname();

    if (!sidebarItem) return null;

    const LINK_INNER_CONTENT = () => (
        <>
            <span className={sidebarItem.icon}></span>
            <span className="navigation-link-title">{sidebarItem.title}</span>
            {(() => {
                switch(sidebarItem.itemType) {
                    case 'EXTERNAL':
                        return <span className="sidebar-type-icon fa fa-fw fa-external-link"></span>
                    case 'DOWNLOAD':
                        return <span className="sidebar-type-icon fa fa-fw fa-download"></span>
                }
            })()}
        </>
    )

    return (
        <li>
            {(() => {
                switch(sidebarItem.itemType) {
                    case 'EXTERNAL':
                        return (
                            <a href={sidebarItem.route} target="_blank">
                                { LINK_INNER_CONTENT() }
                            </a>
                        )
                    case 'INTERNAL':
                        return (
                            <a href={sidebarItem.route} className={(pathname.includes(sidebarItem.route)) ? "active" : ""}>
                                { LINK_INNER_CONTENT() }
                            </a>
                        )
                    case 'DOWNLOAD':
                        return (
                            <a href={sidebarItem.route} download>
                                { LINK_INNER_CONTENT() }
                            </a>
                        )
                }

                return null;
            })()}
        </li>
    )
}

export default SidebarLink