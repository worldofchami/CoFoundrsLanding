"use client"

import { MutableRefObject, useEffect, useRef } from "react"
import { useCustomRef } from "../(util)/hooks";

export const PreviewPages = () => {
    const pageOne = useCustomRef<HTMLElement>();
    const pageTwo = useCustomRef<HTMLElement>();
    const pageThree = useCustomRef<HTMLElement>();

    const pageFour = useCustomRef<HTMLDivElement>();
    const pageFive = useCustomRef<HTMLDivElement>();
    const pageSix = useCustomRef<HTMLDivElement>();

    const pageSeven = useCustomRef<HTMLDivElement>();
    const pageEight = useCustomRef<HTMLDivElement>();
    const pageNine = useCustomRef<HTMLDivElement>();

    const handleClickToScroll = (ref: MutableRefObject<HTMLElement>) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const forceStopScroll = (e: Event) => {
        // e.preventDefault();
        // e.stopPropagation();

        // return false;
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
        <main className="w-full h-fit flex flex-col gap-y-4 preview">
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center" ref={pageOne}>
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]" ref={pageFour}>
                    <div
                        onClick={() => handleClickToScroll(pageSix)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute top-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/up.svg" alt="Next Section" />
                    </div>
                    <img
                        src="/screens/feed.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                    <div
                        onClick={() => handleClickToScroll(pageFive)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute bottom-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center" ref={pageSix}>
                    <h1 className="text-4xl font-benz-grotesk mb-4">Your Feed</h1>
                    <p className="text-sm leading-loose max-lg:text-sm max-lg:text-center">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                    <div
                        onClick={() => handleClickToScroll(pageTwo)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute bottom-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer max-lg:hidden"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                    <div
                        onClick={() => handleClickToScroll(pageFour)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute bottom-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                </div>
            </section>
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center" ref={pageTwo}>
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]" ref={pageNine}>
                    <div
                        onClick={() => handleClickToScroll(pageFive)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute top-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/up.svg" alt="Next Section" />
                    </div>
                    <img
                        src="/screens/events.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                    <div
                        onClick={() => handleClickToScroll(pageSeven)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute bottom-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center" ref={pageFive}>
                    <div
                        onClick={() => handleClickToScroll(pageFour)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute top-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <div
                        onClick={() => handleClickToScroll(pageOne)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute top-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer max-lg:hidden"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <h1 className="text-4xl font-benz-grotesk mb-4">Events</h1>
                    <p className="text-sm leading-loose max-lg:text-center">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                    <div
                        onClick={() => handleClickToScroll(pageThree)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute bottom-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer max-lg:hidden"
                    >
                        <img src="/icons/down.svg" alt="Next Section" />
                    </div>
                    <div
                        onClick={() => handleClickToScroll(pageNine)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute bottom-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/down.svg" alt="Previous Section" />
                    </div>
                </div>
            </section>
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center" ref={pageThree}>
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]" ref={pageEight}>
                    <div
                        onClick={() => handleClickToScroll(pageSeven)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute top-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <img
                        src="/screens/communities.svg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center" ref={pageSeven}>
                    <div
                        onClick={() => handleClickToScroll(pageNine)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute top-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <div
                        onClick={() => handleClickToScroll(pageTwo)}
                        className="w-6 h-6 rounded-full bg-[#ff5757] absolute top-6 left-0 right-0 mx-auto hover:opacity-80 cursor-pointer max-lg:hidden"
                    >
                        <img src="/icons/up.svg" alt="Previous Section" />
                    </div>
                    <h1 className="text-4xl font-benz-grotesk mb-4">Communities</h1>
                    <p className="text-sm leading-loose max-lg:text-center">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                    <div
                        onClick={() => handleClickToScroll(pageEight)}
                        className="w-10 h-10 rounded-full bg-[#ff5757] absolute bottom-6 right-6 hover:opacity-80 cursor-pointer hidden max-lg:block"
                    >
                        <img src="/icons/down.svg" alt="Previous Section" />
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}