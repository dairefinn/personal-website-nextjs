"use client";

import './Button.scss'

import { PropsWithChildren } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface ButtonProps {
    actionIsRoute?: boolean;
    route?: string;
    disabled?: boolean;
    title?: string;
    onClick?: () => void;
}

function Button({
    disabled = false,
    route,
    title,
    onClick,
    children
}: PropsWithChildren<ButtonProps>) {    
    const router = useRouter();
    const pathname = usePathname();

    const onClickInner = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (route) {
            router.push(route);
        }
    };

    const isActive = route && pathname === route;

    return (
        <div className={ "container-component-button"  +  (disabled ? " disabled" : "") + (isActive ? " active" : "")} onClick={disabled ? undefined : onClickInner} title={title}>
            {children}
        </div>
    )
}

export default Button