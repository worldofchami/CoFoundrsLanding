"use client"

import { MutableRefObject, useEffect, useRef } from "react"
import { useCustomRef } from "../(util)/hooks";

export const PreviewPages = () => {
    const pageOne = useCustomRef<HTMLElement>();
    const pageTwo = useCustomRef<HTMLElement>();
    const pageThree = useCustomRef<HTMLElement>();

    const handleClickToScroll = (ref: MutableRefObject<HTMLElement>) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const forceStopScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    useEffect(() => {
        window.addEventListener<"wheel">("wheel", forceStopScroll, { passive: false });
        window.addEventListener<"touchstart">("touchstart", forceStopScroll, { passive: false });
        window.addEventListener<"touchmove">("touchmove", forceStopScroll, { passive: false });

        return () => {
            window.removeEventListener<"wheel">("wheel", forceStopScroll);
            window.removeEventListener<"touchstart">("touchstart", forceStopScroll);
            window.removeEventListener<"touchmove">("touchmove", forceStopScroll);    
        }

    }, []);

    return (
        <>
        <main className="w-full h-fit flex flex-col gap-y-4 max-lg:w-[100dvh]">
            <section className="w-full h-screen flex relative max-lg:flex-col" ref={pageOne}>
                <div className="w-fit h-full flex-shrink-0">
                    <img
                        src="/screens/feed.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:absolute max-lg:bottom-0 max-lg:h-fit max-lg:p-2 max-lg:bg-black">
                    <h1 className="text-4xl font-benz-grotesk mb-4">Your Feed</h1>
                    <p className="text-sm leading-loose max-lg:text-xs">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                    <div
                        onClick={() => handleClickToScroll(pageTwo)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute bottom-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                </div>
            </section>
            <section className="w-full h-screen flex" ref={pageTwo}>
                <div className="w-fit h-full flex-shrink-0">
                    <img
                        src="/screens/feed.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative">
                    <div
                        onClick={() => handleClickToScroll(pageOne)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute top-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <h1 className="text-4xl font-benz-grotesk mb-4">Events</h1>
                    <p className="text-sm leading-loose">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                    <div
                        onClick={() => handleClickToScroll(pageThree)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute bottom-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                </div>
            </section>
            <section className="w-full h-screen flex" ref={pageThree}>
                <div className="w-fit h-full flex-shrink-0">
                    <img
                        src="/screens/feed.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative">
                    <div
                        onClick={() => handleClickToScroll(pageTwo)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute top-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <h1 className="text-4xl font-benz-grotesk mb-4">Communities</h1>
                    <p className="text-sm leading-loose">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                </div>
            </section>
        </main>
        </>
    )
}