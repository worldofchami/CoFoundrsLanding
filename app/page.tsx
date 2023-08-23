import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { DBResponse } from "./(util)/interfaces";
import { OnboardingForm, TileGalleryDraggable } from "./client";

async function joinMailingList(email: string): Promise<DBResponse> {
	"use server"

	const supabase = createServerActionClient({ cookies });

	const { error } = await supabase
		.from("mailing_list")
		.upsert({
			email
		});

	if(error) {
		return {
			ok: false,
			message: "Error joining our mailing list. Please contact support!"
		}
	}
	
	return {
		ok: true,
		message: "Thanks for joining! We'll keep you notified of any news."
	}
}

export default async function Page() {
	return (
		<>
		<main className="w-full h-full flex bg-[#f5f5f5] max-lg:flex-col">
			<section className="w-1/2 h-full flex flex-col justify-center gap-y-4 px-8 max-lg:h-1/2 max-lg:w-full max-lg:px-4 max-lg:items-center max-lg:gap-y-6">
				<h1 className="font-benz-grotesk text-4xl max-lg:text-3xl max-lg:text-center">
					We'll be here soon!<br/>You know where to find us.
				</h1>
				<span className="font-light text-sm pl-2 text-[#909090]">
					<Link href="/preview" className="underline hover:text-[#1d1d1d]">A Little Preview</Link>
					{/* &nbsp;|&nbsp;
					<Link href="/preview" className="underline hover:text-[#1d1d1d]">Contact Us</Link> */}
				</span>
				<OnboardingForm joinMailingList={joinMailingList} />
			</section>
			<section className="w-1/2 h-full flex flex-col justify-center gap-y-4 px-8 max-lg:h-1/2 max-lg:w-full max-lg:px-4 max-lg:justify-start max-lg:items-center">
				<div className="flex flex-col">
					<h1 className="font-benz-grotesk text-8xl text-[#ff5757] max-lg:text-5xl max-lg:text-center">CoFoundrs</h1>
					<span className="pl-2 font-sg-med mb-2 max-lg:text-sm max-lg:text-center">
						A social networking platform focused on
						connecting South Africa's next generation of entrepreneurs.
					</span>
					<span className="text-[#909090] pl-2 text-xs text-center">
						Founded by <Link href="https://github.com/worldofchami/" className="underline" target="_blank">Tino Chaminuka</Link> and <Link href="https://github.com/MuchiniGun/" className="underline" target="_blank">Owen Muchini</Link>.
					</span>
				</div>
				<div className="w-full h-fit relative">
					<TileGalleryDraggable />
				</div>
			</section>
		</main>
		</>
	)
}