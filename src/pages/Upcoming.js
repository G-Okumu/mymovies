import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";
import ResponsiveHeader from "../components/ResponsiveHeader";
import YoutubePlayList from "../components/YoutubePlayList";


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
                        <div class="flex items-center justify-between">
                            <NavLink to="/"
                                exact="true"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >
                                <span class="font-semibold text-base dark:text-white">Trending Movies</span>

                            </NavLink>


                            <NavLink to="/upcoming"
                                exact="true"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >
                                <span class="font-semibold text-base dark:text-white">Upcoming Movies</span>

                            </NavLink>

                            <div class="flex items-center space-x-2 fill-gray-500">
                                <svg class="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                                </svg>
                                <svg class="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                                </svg>
                            </div>
                        </div>

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