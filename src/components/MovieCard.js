import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="relative hover:-skew-y-2 rounded-xl overflow-hidden">
            <img src={`${process.env.REACT_APP_IMAGE_PATH}/${movie.backdrop_path}`} className="object-cover h-full w-full -z-10" alt={movie.title} />
            <div className="absolute top-0 h-full w-full  p-3 flex flex-col justify-between">
                <h2 className="p-2.5 bg-gray-800/80 rounded-lg text-white hover:bg-blue-600/80">{movie.title}</h2>
                <Link to={`moviedetail/${movie.id}`}  singeleMovie={movie}>
                    <span className="bg-black text-white rounded-lg p-2 float-right">Read More info!!</span>
                </Link>
            </div>
        </div>
    );
}