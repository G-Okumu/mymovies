import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ResponsiveHeader from "../components/ResponsiveHeader";

export default function MovieDetail({ singleMovie }) {
    const params = useParams();
    const id = params.id
    const movie = singleMovie.find(movie => movie.id.toString() === id)

    return (
        <div className="font-montserrat text-sm bg-white dark:bg-zinc-900">
            <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700">
                {/* Left Sidebar */}
                <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
                    <NavBar />
                </aside>


                {/* Main Page */}
                <main class="flex-1 py-10  px-5 sm:px-10">
                    <ResponsiveHeader />
                    <section>
                        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                            <div class="py-3 sm:max-w-xl sm:mx-auto">
                                <div class="bg-white shadow-lg border-gray-100 max-h-100 border sm:rounded-3xl p-8 flex space-x-8">
                                    <div class="h-48 overflow-visible w-1/2">
                                        <img class="rounded-3xl shadow-lg" src={`${process.env.REACT_APP_IMAGE_PATH}/${movie.backdrop_path}`} alt={movie.title} />
                                    </div>
                                    <div class="flex flex-col w-1/2 space-y-4">
                                        <div class="flex justify-between items-start">
                                            <h2 class="text-3xl font-bold">{movie.title}</h2>
                                            <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.vote_average}</div>
                                        </div>
                                        <div>
                                            <div class="text-gray-800"><span className="text-lg font-2xl">Release Date: </span>{movie.release_date}</div>
                                        </div>
                                        <p class=" text-gray-600 max-h-50 overflow-y-auto">{movie.overview}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>

        </div>
    )
}