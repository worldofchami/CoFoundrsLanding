export default async function Page() {
    return (
        <>
        <main className="w-full h-fit flex flex-col gap-y-4 preview">
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center">
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]">
                    <img
                        src="/screens/feed_lr.jpeg"
                        alt="Feed Tab (Home Screen)"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center">
                    <h1 className="text-4xl font-benz-grotesk mb-4">Your Feed</h1>
                    <p className="text-sm leading-loose max-lg:text-sm max-lg:text-center">
                        Connect with members from all your communities in one place!
                        <br/>A tailored experience, just for you, featuring only posts from communities you're a part of.
                        <br/>Grow closer to those in your community and get to know them by leaving replies on their posts.
                    </p>
                </div>
            </section>
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center">
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]">
                    <img
                        src="/screens/events_lr.jpeg"
                        alt="Events Tab"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center">
                    <h1 className="text-4xl font-benz-grotesk mb-4">Events</h1>
                    <p className="text-sm leading-loose max-lg:text-center">
                        View events you might be interested in that are taking place near you.
                        <br/>You'll have the ability to set a reminder and be notified closer to the date.
                    </p>
                </div>
            </section>
            <section className="w-full h-screen flex max-lg:flex-col-reverse max-lg:h-[200vh] max-lg:items-center">
                <div className="w-fit h-full flex-shrink-0 relative max-lg:h-screen max-lg:w-full max-lg:flex max-lg:justify-center max-lg:bg-[#efefef]">
                    <img
                        src="/screens/communities_lr.jpeg"
                        alt="Communities Tab"
                        className="h-full"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-center p-8 relative max-lg:h-screen max-lg:items-center">
                    <h1 className="text-4xl font-benz-grotesk mb-4">Communities</h1>
                    <p className="text-sm leading-loose max-lg:text-center">
                        Join communities and keep up to date with fellow entrepreneurs and likeminded individuals!
                        <br/>You'll have the opportunity to create posts to share the latest updates on your life, or business pursuits.
                    </p>
                </div>
            </section>
        </main>
        </>
    )
}