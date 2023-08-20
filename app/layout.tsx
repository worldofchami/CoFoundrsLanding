import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
    title: "CoFoundrs - The Social Networking Platform of the Future.",
    description: "Empowering South Africa's next generation of entrepreneurs.",
	icons: {
		icon: "favicon.png"
	}
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <link rel="icon" href="favicon.png" sizes="any" />
            <body>
                <main className="h-screen w-full max-lg:h-[100dvh]">
					<Toaster
						toastOptions={{ style: { background: "#f5f5f5" } }}
					/>
					{children}
				</main>
            </body>
        </html>
    );
}
