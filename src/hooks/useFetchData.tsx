import { useEffect, useState } from "react"
import axios from "axios"

export const useFetchData = () => {
    const endpoint = import.meta.env.VITE_API_ENDPOINT
    const key = import.meta.env.VITE_API_KEY || ""
    const [data, setData] = useState<any>()
    const [city, setCity] = useState<string>("london")
    const [loading, setLoading] = useState<boolean>()

    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await axios.get(`${endpoint}?q=${city}&appid=${key}`)
            setData(result.data)
        } catch (error) {
            console.log("error"+error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {
        data, 
        loading,
        fetchData,
        setCity
    }
}