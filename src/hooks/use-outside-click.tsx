// in /hooks/use-outside-click.tsx
import React, { useEffect } from "react";

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: Function) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Check if ref and ref.current exist
            // Also check if the click target is contained within the ref element
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
