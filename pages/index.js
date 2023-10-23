import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import 'dotenv/config'
import Weather from '@/components/Weather';

export default function Home() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  const getWeather = (event) => {
  event.preventDefault();
  axios
    .get(url)
    .then((response) => {
      setWeather(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Request Error:", error.message);
      }
    })
    .finally(() => {
      setCity('');
    });
};


  return (
    <div className='bg-home bg-cover w-full h-screen overflow-hidden items-center justify-center'>
      <Head>
        <title>Weather App</title>
      </Head>
      
      <div className='relative flex justify-between items-center max-w-[400px] w-full m-auto pt-4 text-white z-10'>
        <form onSubmit={getWeather} className='flex justify-between items-center w-full m-auto p-4 bg-white  text-white rounded-2xl'>
          <div>
            <input 
              onChange={(e)=>setCity(e.target.value)}
              type='text' 
              placeholder='Search' 
              className='bg-transparent border-none text-black focus:outline-none text-2xl'
            />
          </div>
          <button onClick={getWeather}><FaSearchLocation size={30} className='text-slate-500'/></button>
        </form>
      </div>

      {weather.main && <Weather data={weather} />}
      
    </div>
  )
}
