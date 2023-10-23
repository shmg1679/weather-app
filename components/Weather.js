import React from 'react'
import Image from 'next/image'

function Weather({data}) {

    return (
        <div className='relative flex flex-col justify-between max-w-[1200px] w-full h-[vh] m-auto p-4 text-white'>
            <div className='flex items-center justify-between pt-12 pb-10 max-w-[500px] mx-auto gap-x-[100px]'>

                <div className='flex flex-col items-center'>
                    <Image 
                        src={`https://openweathermap.org/img/wn/10d@2x.png`} 
                        alt=''
                        width={100}
                        height={100}
                    />
                    <p className='text-2xl'>{data.weather[0].main}</p>
                </div>
                <p className='text-5xl'>{data.main.temp.toFixed(0)}&#176;F</p>
                <p className='text-5xl'>{((data.main.temp - 32) * 5/9).toFixed(0)}&#176;C</p>
            </div>
            

            <div className='bg-[#303030]/60 relative rounded-lg p-5'>
                <p className='text-2xl text-center pb-4'>Weather in {data.name} ({data.sys.country})</p>
                <div className='flex justify-between text-center pb-4'>
                    <div>
                        <p className='text-xl'>Feels like</p>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;F | {((data.main.feels_like - 32) * 5/9).toFixed(0)}&#176;C</p>
                    </div>
                    <div>
                        <p className='text-xl'>Humidity</p>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                    </div>
                    <div>
                        <p className='text-xl'>Wind</p>
                        <p className='font-bold text-2xl'>{data.wind.speed}MPH</p>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Weather