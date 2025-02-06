"use client";

import { useEffect, useRef } from 'react';

const RichDescription = ({ description }: { description: string }) => {
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (descriptionRef.current) {
            descriptionRef.current.innerHTML = description;
        }
    }, [description]);

    return <p ref={descriptionRef}></p>;
}

export default RichDescription;