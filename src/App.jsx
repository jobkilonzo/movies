import { useEffect, useState } from "react";

const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dcc5eb45cemshef131723b6d507ep18c5a7jsn87c5d7763852',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};
const App = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const fetchApi = async () => {
        const res = await fetch(url, options)
        const data = await res.json()
        setUpcomingMovies(data.results)
        console.log(data)
    }

    useEffect(() => {

        fetchApi()
    }, [])
    return (
        <div>
            {upcomingMovies.map((movie) => (
                <div key={movie.id}>
                   
                    <p>{movie.originalTitleText.text}</p>
                    <p>{movie.releaseDate.day}/{movie.releaseDate.month}/{movie.releaseDate.year}</p>


                </div>
            ))}
        </div>
    )
}

export default App