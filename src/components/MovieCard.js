import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    // // console.log(movie.id);
    function handleClick() {
        // alert(movie.id);
        alert(movie.id);
    }


    return (
        <div className="relative hover:-skew-y-6 rounded-xl overflow-hidden">
            <img src={`${process.env.REACT_APP_IMAGE_PATH}/${movie.backdrop_path}`} className="object-cover h-full w-full -z-10" alt={movie.title} />
            <div className="absolute top-0 h-full w-full  p-3 flex flex-col justify-between">
                <h2 className="p-2.5 bg-gray-800/80 rounded-lg text-white hover:bg-blue-600/80">{movie.title}</h2>

                <div className="self-center flex flex-col items-center space-y-2">
                    <span className="capitalize bg-black p-2 text-white font-medium drop-shadow-md">Release Date:</span>
                    <span className="text-gray-300 bg-black p-2 text-sm">{movie.release_date}</span>

                </div>
                <Link to={`moviedetail/${movie.id}`}  singeleMovie={movie}>
                    <span>Get More info!!</span>
                </Link>
            </div>
        </div>
    );
}