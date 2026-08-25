import React from 'react'
import { useContext } from 'react'
import { appContext } from '@/context/appContext'

const lastbar = () => {
 const { hourlyForecast } = useContext(appContext);
  return (
   <div className="rounded-xl w-full max-lg:h-fit p-4 col-start-3 col-end-4 row-start-1 row-end-6 bg-surface"> 
   <p>Hourly Forecast</p>
   
   
   
   </div>
  )
}

export default lastbar