import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import ResponsiveHeader from "../components/ResponsiveHeader";
import YoutubePlayList from "../components/YoutubePlayList";
import TypeNavs from "../components/TypeNavs";


export default function Upcoming() {
    const [upcoming, setUpcoming] = useState([]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}upcoming?${process.env.REACT_APP_API_STRING}=${process.env.REACT_APP_API_KEY}`)
            .then(r => r.json())
            .then(data => {
                setUpcoming([...data.results]);
            });
    }, [])
    return (

        <div className="font-montserrat text-sm bg-white dark:bg-zinc-900">
            <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
                {/* Left Sidebar */}
                <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
                    <NavBar />
                </aside>


                {/* Main Page */}
                <main class="flex-1 py-10  px-5 sm:px-10">
                    <ResponsiveHeader/>
                    <YoutubePlayList/>
                    {/* For Popular Movies */}
                    <section class="mt-9">
                        <TypeNavs/>
                        <div class="mt-4 grid grid-cols-2  sm:grid-cols-3 gap-x-5 gap-y-5">
                            {upcoming.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </section>
                </main>

            </div>

        </div>
    );
}