import Image from "next/image";
import { PropsWithChildren } from "react";

function Tile({ src }: { src: string }) {
	return (
		<>
		<div className="h-full aspect-square relative">
			<img
				src={src}
				alt="Image Tile"
				className="h-full w-full object-cover rounded-md"
			/>
		</div>
		</>
	)
}

function TileGallery({ children }: PropsWithChildren) {
	return (
		<>
		<button className="absolute">
			
		</button>
		<div className="h-full w-fit flex gap-x-4">
			{children}
		</div>
		<button className="absolute">
			
		</button>
		</>
	)
}

export default async function Page() {
	return (
		<>
		<main className="w-full h-full flex bg-[#f5f5f5] max-lg:flex-col">
			<section className="w-1/2 h-full flex flex-col justify-center gap-y-4 px-8 max-lg:h-1/2 max-lg:w-full max-lg:px-4">
				<h1 className="font-benz-grotesk text-4xl max-lg:text-3xl max-lg:text-center">
					We'll be here soon!<br/>You know where to find us.
				</h1>
				<div>
					<form action="" className="flex flex-col gap-y-4 max-lg:items-center max-lg:gap-y-6">
						<div className="w-full h-12 flex rounded-md bg-transparent border-[.5px] border-[#1d1d1d]">
							<div className="w-8 h-full flex justify-end">
								<Image
									src="/icons/mail.svg"
									alt="Join Our Mailing List"
									width={20}
									height={12}
								/>
							</div>
							<input
								type="text"
								className="w-full font-sg-reg px-4 py-2 bg-transparent"
								placeholder="johndoe@gmail.com"
							/>
						</div>
						<button
							className="w-fit h-fit rounded-md border-[.5px] border-[#1d1d1d] px-4 py-2 bg-[#dedede] hover:bg-[#f5f5f5]"
						>
							Be Notified
						</button>
					</form>
				</div>
			</section>
			<section className="w-1/2 h-full flex flex-col justify-center gap-y-4 px-8 max-lg:h-1/2 max-lg:w-full max-lg:px-4 max-lg:justify-start max-lg:items-center">
				<div className="flex flex-col">
					<h1 className="font-benz-grotesk text-8xl text-[#ff5757] max-lg:text-5xl max-lg:text-center">CoFoundrs</h1>
					<span className="pl-2 font-sg-med max-lg:text-sm max-lg:text-center">Empowering South Africa's next generation of entrepreneurs.</span>
				</div>
				<div className="w-full h-56 relative overflow-auto">
					<TileGallery>
						{
							[1,2,3,4,5,6,7].map((num) => {
								return <Tile key={num} src={`/images/${1}.jpg`} />
							})
						}
					</TileGallery>
				</div>
			</section>
		</main>
		</>
	)
}