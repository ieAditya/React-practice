// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    // const [apiData, setApiData] = useState([])

    // useEffect(() => {
    //     const apiUrl = "https://api.github.com/users/ieAditya"
    //     // const apiUrl = "https://api.github.com/users/hiteshchoudhary"
    //     fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         setApiData(res)
    //     });
    // },[]);

    const apiData = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h1 className=''>
            Github followers: {apiData.followers}
        </h1>
        <img src={apiData.avatar_url} alt="Git pic" width={300} />
    </div>
  )
}

export default Github