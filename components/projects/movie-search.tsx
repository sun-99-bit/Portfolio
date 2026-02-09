"use client"

import { useState } from "react"
import { Search, Star, Calendar, Film } from "lucide-react"

interface Movie {
  title: string
  year: string
  rating: string
  genre: string
  plot: string
  director: string
  poster: string
}

const mockMovies: Record<string, Movie[]> = {
  "avengers": [
    { title: "The Avengers", year: "2012", rating: "8.0", genre: "Action, Sci-Fi", plot: "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.", director: "Joss Whedon", poster: "" },
    { title: "Avengers: Endgame", year: "2019", rating: "8.4", genre: "Action, Drama, Sci-Fi", plot: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.", director: "Anthony Russo, Joe Russo", poster: "" },
  ],
  "batman": [
    { title: "The Dark Knight", year: "2008", rating: "9.0", genre: "Action, Crime, Drama", plot: "When the menace known as the Joker wreaks havoc on Gotham, Batman must confront one of the greatest tests.", director: "Christopher Nolan", poster: "" },
    { title: "The Batman", year: "2022", rating: "7.8", genre: "Action, Crime, Drama", plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.", director: "Matt Reeves", poster: "" },
  ],
  "inception": [
    { title: "Inception", year: "2010", rating: "8.8", genre: "Action, Sci-Fi, Thriller", plot: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.", director: "Christopher Nolan", poster: "" },
  ],
  "interstellar": [
    { title: "Interstellar", year: "2014", rating: "8.7", genre: "Adventure, Drama, Sci-Fi", plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", director: "Christopher Nolan", poster: "" },
  ],
  "spider": [
    { title: "Spider-Man: No Way Home", year: "2021", rating: "8.2", genre: "Action, Adventure, Fantasy", plot: "Peter Parker seeks help from Doctor Strange when his identity is revealed, causing a rift in the multiverse.", director: "Jon Watts", poster: "" },
    { title: "Spider-Man: Into the Spider-Verse", year: "2018", rating: "8.4", genre: "Animation, Action, Adventure", plot: "Teen Miles Morales becomes the Spider-Man of his universe and crosses paths with other Spider-People.", director: "Bob Persichetti", poster: "" },
  ],
  "iron man": [
    { title: "Iron Man", year: "2008", rating: "7.9", genre: "Action, Adventure, Sci-Fi", plot: "After being held captive, industrialist Tony Stark builds a high-tech suit of armor and becomes Iron Man.", director: "Jon Favreau", poster: "" },
  ],
  "titanic": [
    { title: "Titanic", year: "1997", rating: "7.9", genre: "Drama, Romance", plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious Titanic.", director: "James Cameron", poster: "" },
  ],
  "matrix": [
    { title: "The Matrix", year: "1999", rating: "8.7", genre: "Action, Sci-Fi", plot: "A computer programmer discovers that reality as he knows it is a simulation and joins a rebellion.", director: "Lana Wachowski, Lilly Wachowski", poster: "" },
  ],
}

export function MovieSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Movie[]>([])
  const [searched, setSearched] = useState(false)

  const searchMovies = () => {
    const key = query.toLowerCase().trim()
    setSearched(true)
    const found: Movie[] = []
    for (const [k, movies] of Object.entries(mockMovies)) {
      if (k.includes(key) || key.includes(k)) {
        found.push(...movies)
      }
    }
    if (found.length === 0) {
      // Search in titles
      for (const movies of Object.values(mockMovies)) {
        for (const m of movies) {
          if (m.title.toLowerCase().includes(key)) found.push(m)
        }
      }
    }
    setResults(found)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-display font-bold gradient-text text-center mb-6">Movie Search</h3>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchMovies()}
            placeholder="Search movies... (try: avengers, batman, inception)"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <button
          type="button"
          onClick={searchMovies}
          className="px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Search
        </button>
      </div>

      {searched && results.length === 0 && (
        <p className="text-center text-muted-foreground">No movies found. Try: avengers, batman, inception, interstellar, spider, iron man, titanic, matrix</p>
      )}

      <div className="flex flex-col gap-4">
        {results.map((movie) => (
          <div key={movie.title} className="p-5 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-16 h-20 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Film className="w-8 h-8 text-primary/60" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-display font-bold text-foreground">{movie.title}</h4>
                <div className="flex flex-wrap items-center gap-3 mt-1 mb-2">
                  <span className="flex items-center gap-1 text-sm text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" /> {movie.rating}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" /> {movie.year}
                  </span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-primary/10">{movie.genre}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{movie.plot}</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Director: {movie.director}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!searched && (
        <p className="text-center text-muted-foreground text-sm">Search for movies to see results</p>
      )}
    </div>
  )
}
