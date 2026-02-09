"use client"

import { useState } from "react"
import { Cloud, Droplets, Wind, Thermometer, Search, MapPin } from "lucide-react"

interface WeatherData {
  city: string
  temp: number
  condition: string
  humidity: number
  wind: number
  feelsLike: number
  icon: string
}

const mockWeatherData: Record<string, WeatherData> = {
  "new york": { city: "New York", temp: 22, condition: "Partly Cloudy", humidity: 65, wind: 14, feelsLike: 24, icon: "partly-cloudy" },
  "london": { city: "London", temp: 15, condition: "Rainy", humidity: 82, wind: 20, feelsLike: 13, icon: "rainy" },
  "tokyo": { city: "Tokyo", temp: 28, condition: "Sunny", humidity: 55, wind: 8, feelsLike: 30, icon: "sunny" },
  "paris": { city: "Paris", temp: 18, condition: "Cloudy", humidity: 70, wind: 12, feelsLike: 17, icon: "cloudy" },
  "mumbai": { city: "Mumbai", temp: 32, condition: "Humid", humidity: 90, wind: 10, feelsLike: 38, icon: "humid" },
  "kolkata": { city: "Kolkata", temp: 30, condition: "Partly Cloudy", humidity: 78, wind: 15, feelsLike: 34, icon: "partly-cloudy" },
  "delhi": { city: "Delhi", temp: 35, condition: "Sunny", humidity: 40, wind: 18, feelsLike: 38, icon: "sunny" },
  "sydney": { city: "Sydney", temp: 20, condition: "Clear", humidity: 60, wind: 16, feelsLike: 19, icon: "sunny" },
  "dubai": { city: "Dubai", temp: 40, condition: "Hot", humidity: 30, wind: 22, feelsLike: 45, icon: "sunny" },
  "berlin": { city: "Berlin", temp: 12, condition: "Overcast", humidity: 75, wind: 25, feelsLike: 9, icon: "cloudy" },
}

export function WeatherApp() {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState("")

  const searchWeather = () => {
    const key = query.toLowerCase().trim()
    if (mockWeatherData[key]) {
      setWeather(mockWeatherData[key])
      setError("")
    } else {
      setWeather(null)
      setError(`City "${query}" not found. Try: New York, London, Tokyo, Paris, Mumbai, Kolkata, Delhi, Sydney, Dubai, Berlin`)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-2xl font-display font-bold gradient-text text-center mb-6">Weather App</h3>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchWeather()}
            placeholder="Search city..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <button
          type="button"
          onClick={searchWeather}
          className="px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="text-center text-sm text-red-400 mb-4">{error}</p>
      )}

      {weather && (
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">{weather.city}</span>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Cloud className="w-16 h-16 text-primary" />
            <div>
              <p className="text-5xl font-display font-bold text-foreground">{weather.temp}°C</p>
              <p className="text-muted-foreground">{weather.condition}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <Droplets className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-foreground font-semibold">{weather.humidity}%</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <Wind className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="text-foreground font-semibold">{weather.wind} km/h</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <Thermometer className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Feels Like</p>
              <p className="text-foreground font-semibold">{weather.feelsLike}°C</p>
            </div>
          </div>
        </div>
      )}

      {!weather && !error && (
        <p className="text-center text-muted-foreground text-sm">Search for a city to see weather data</p>
      )}
    </div>
  )
}
