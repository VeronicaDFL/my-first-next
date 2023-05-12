import Hero from "./Hero.jsx"

export const metadata = { //what it shows when you send your link
    title: "Um...Whatev",
    description: "This is custom metadata for this route."
}
export default function  Page() {


    return (
        <main classname= "p-8">
            <Hero />
        <h1 classname= "font-bold text-2xl">Whatev</h1>
        <p>Routes in Next.js are too easy.</p>
    
        </main>)
}