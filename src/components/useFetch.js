import React, { useEffect, useState } from "react"

const useFetch =(url)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    useEffect(()=>{
        const fetch = async()=>{
            setLoading(true)
            try {
                const res = fetch(url)
                setData(res.data)
            } catch (error) {
                setErr(err)
            }
            setLoading(false)
        }
        fetch()
    },[url])
    const refetch = async()=>{
        setLoading(true)
        try {
            const res = await fetch(url)
            setData(res.data)
        } catch (error) {
            setErr(err)
        }
        setLoading(false)
    }
    return {data,loading,err,refetch}
}

export default useFetch
