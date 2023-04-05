import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, second) => {
    const [endPoint, setEndPoint] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setEndPoint(res.data))
            .catch(err => console.log(err))
    }, [second])


    return endPoint
}

export default useFetch