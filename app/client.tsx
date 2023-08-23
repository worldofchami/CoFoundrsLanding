"use client"

import Image from "next/image";
import { MutableRefObject, PropsWithChildren, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDraggable } from "react-use-draggable-scroll";
import { submitForm } from "./(util)/actions";

function Tile({ src }: { src: string }) {
	return (
		<>
		<div className="h-full aspect-square relative">
			<img
				src={src}
				alt="Image Tile"
                draggable={false}
				className="h-full w-full object-cover rounded-md cursor-grab"
			/>
		</div>
		</>
	)
}

function TileGallery({ children }: PropsWithChildren) {
	return (
		<>
		<div className="h-full w-fit flex gap-x-4 cursor-grab">
			{children}
		</div>
		</>
	)
}

export function TileGalleryDraggable() {
    const draggable = useRef<HTMLDivElement | null>(null);
    const { events } = useDraggable(draggable as MutableRefObject<HTMLDivElement>);
    
    const smoothScroll = (start: number, end: number, direction: (1 | -1)) => {
        const ease = 0.1;

        if(((direction === 1 && start < end) || (direction === -1 && start > end)) && draggable) {
            const animate = () => {
                draggable.current?.scrollTo({
                    left: end,
                    behavior: "smooth"
                });
            }

            requestAnimationFrame(animate);

            smoothScroll(start + (direction * 15 * (1-ease)), end, direction);

            animate();
        }
    }
    
    const [currScroll, setCurrScroll] = useState(0);

    const changeScroll = () => {
        if(draggable && draggable.current?.scrollLeft !== undefined) setCurrScroll(draggable.current?.scrollLeft);
    }

    useEffect(() => {
        draggable?.current?.addEventListener("scroll", changeScroll);

        if(draggable) {
            smoothScroll(0, 150, 1);
            setCurrScroll(150);
        }

        return () => {
            draggable?.current?.removeEventListener("scroll", changeScroll);
        }

    }, []);

    const handleScrollBack = () => {
        if(draggable && draggable.current?.scrollLeft !== undefined) {
            smoothScroll(draggable.current?.scrollLeft, draggable.current?.scrollLeft-175, -1)
        }
    }

    const handleScrollForward = () => {
        if(draggable && draggable.current?.scrollLeft !== undefined) {
            smoothScroll(draggable.current?.scrollLeft, draggable.current?.scrollLeft+175, 1)
        }
    }

    const isAtStart = () => {
        // will either be 0, undefined (both falsy) or a value > 0 (truthy)
        return currScroll === 0;
    }

    const isAtEnd = () => {
        // hard-coded, couldn't find exact scroll width
        return currScroll > 1000;
    }

    return (
        <>
        <button
            className={`w-8 h-8 absolute my-auto top-0 bottom-0 left-1 bg-[#ff5757] hover:opacity-[.85] rounded-full p-1 z-10 ${isAtStart() ? 'opacity-[.85]' : 'opacity-1'}`}
            onClick={handleScrollBack}
        >
            <img src="/icons/left.svg" alt="Scroll Back" />
		</button>
        <div
            { ...events }
            ref={draggable}
            className="w-full h-56 relative overflow-x-auto overflow-y-hidden cursor-grab"
        >
			<TileGallery>
				{
					[1,2,3,4,5,6,7].map((num) => {
						return <Tile key={num} src={`/images/${num}.jpg`} />
					})
				}
			</TileGallery>
		</div>
        <button
            className={`w-8 h-8 absolute my-auto top-0 bottom-0 right-1 bg-[#ff5757] hover:opacity-[.85] rounded-full p-1 z-10 ${isAtEnd() ? 'opacity-[.85]' : 'opacity-1'}`}
            onClick={handleScrollForward}
        >
			<img src="/icons/left.svg" alt="Scroll Forward" className="rotate-180" />
		</button>
        </>
    )
}

export function OnboardingForm() {
	async function submit(formData: FormData) {
        const loadingToast = toast.loading("Joining...");

        const { ok, message } = await submitForm(formData);

        toast.remove(loadingToast);

        if(ok) {
            toast.success(message);
        }

        else {
            toast.error(message);
        }
	}

    return (
        <>
        <form action={submit} className="w-full flex flex-col max-lg:items-center gap-y-4">
        	<div className="w-full h-12 flex rounded-md input__holder bg-transparent border-[.5px] border-[#1d1d1d]">
				<div className="w-8 h-full flex justify-end">
					<Image
						src="/icons/mail.svg"
						alt="Join Our Mailing List"
						width={20}
						height={12}
					/>
				</div>
				<input
					type="email"
					name="email"
					className="w-full font-sg-reg px-4 py-2 bg-transparent"
					placeholder="johndoe@gmail.com"
					autoComplete="on"
        	        autoFocus
				/>
			</div>
            <button
				className="w-fit h-fit rounded-md border-[.5px] border-[#1d1d1d] px-4 py-2 bg-[#dedede] hover:bg-[#f5f5f5]"
        	    type="submit"
			>
				Be Notified
			</button>
       	</form>
        </>
    )
}