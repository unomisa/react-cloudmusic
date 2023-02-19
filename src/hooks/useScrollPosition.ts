import { throttle } from "@/utils";
import { useSyncExternalStore } from "react";

type Selector = (position: { scrollX: number; scrollY: number }) => number;

export function useScrollPosition(selector: Selector) {
    function subscribe(onStateChange: () => void): () => void {
        const change = throttle(onStateChange, 100);

        window.addEventListener("scroll", change);
        return () => window.removeEventListener("scroll", change);
    }

    return useSyncExternalStore(subscribe, () =>
        selector({
            scrollX: window.scrollX,
            scrollY: window.scrollY
        })
    );
}
