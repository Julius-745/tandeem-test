import { useEffect, useState } from "react"
import axios from "axios"
import { useToast } from "@chakra-ui/react"

export const useFetchData = () => {
    const endpoint = import.meta.env.VITE_API_ENDPOINT
    const key = import.meta.env.VITE_API_KEY || ""
    const toast = useToast()
    const [data, setData] = useState<any>()
    const [units, setUnits] = useState<string>("metric")
    const [city, setCity] = useState<string>("Jakarta")
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>()
    

    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await axios.get(`${endpoint}?q=${city}&appid=${key}&units=${units}`)
            setData(result.data)
        } catch (error: any) {
            setError(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(error !== ""){
        toast({
            title: "Please Search Valid City",
            status: "error",
            description: error,
            isClosable: true
        })
            setError("")
            setCity("")
        }
    }, [error, toast])

    useEffect(() => {
        fetchData()
    },[])

    return {
        data,
        units, 
        loading,
        city,
        fetchData,
        setCity,
        setUnits,
        error
    }
}