import ReactPlayer from 'react-player/lazy';

export default function YoutubePlayList(){
    return (
        <section>
        {/* <CategoryNav movies={movies}/> */}
        <div className="bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover">
            <ReactPlayer className="react-player" playing muted controls url={[
                'https://youtu.be/SsK9Y9_WnDk',
                'https://www.youtube.com/embed/pyM3z73oMAk',
                'https://youtu.be/svnAD0TApb8'
            ]}
                width='100%'
                height='100%' />
        </div>
    </section>
    )
}