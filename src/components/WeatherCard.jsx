import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setisCelsius] = useState(true)

    const handleClick = () => {
        setisCelsius(!isCelsius)
    }


    return (
        <article className='card'>
            <header className='card__header'>
                <h1 className='card__title'>Weather App</h1>
                <h2 className='card__subtitle'>{weather?.name},{weather?.sys.country}</h2>
            </header>
            <section className='card__icon-container'>
                <img className='card__icon' src={weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ''} alt="" />
                <h3 className='card__temp'>{
                    isCelsius ? `${temp?.celsius} ºC`
                        : `${temp?.ferenheit} ºF`} </h3>
            </section>
            <section>
                <h2 className='card__description'>"{weather?.weather[0].description}"</h2>
                <ul className='card__list'>
                    <li className='card__item'><span>Wind speed:</span> {weather?.wind.speed}m/s</li>
                    <li className='card__item'><span>Clouds:</span> {weather?.clouds.all} %</li>
                    <li className='card__item'><span>Pressure:</span> {weather?.main.pressure} hPa</li>
                </ul>
            </section>
            <footer className='card__footer'>

                <button className='card__btn' onClick={handleClick}>Change to {isCelsius ? 'ºF' : 'ºC'}</button>
            </footer>

        </article >
    )
}

export default WeatherCard