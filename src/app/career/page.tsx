"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

function CareerPage() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.endsWith('/career')) {
            router.push('/career/history');
        }
    });

    return <></>;
}

export default CareerPage