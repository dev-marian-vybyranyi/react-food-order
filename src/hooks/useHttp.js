import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config, initialData) {
    const response = await fetch(url, config)
    const resData = await response.json()
    if (!response.ok) {
        throw new Error(resData.message || "Request failed!")
    }
    return resData;
}

export const useHttp = (url, config) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const sendRequest = useCallback(async () => {
        setIsLoading(true)
        try {
            const resData = await sendHttpRequest(url, config)
            setData(resData)
        } catch (error) {
            setError(error.message || "Something went wrong!")
        }
        setIsLoading(false);
    }, [url, config])

    useEffect(() => {
        if (config && config.method === "GET" || !config.method || !config) {
            sendRequest();
        }
    }, [sendRequest, config])

    return { data, isLoading, error, sendRequest }
};