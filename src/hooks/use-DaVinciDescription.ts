import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useDaVinciDescription = () => {
    const fetchDescription = async () => {
        const res = await axios.get('/.netlify/functions/generate-description')
        return res.data
    }

    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['description'],
        queryFn: fetchDescription,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    return {
        description: data,
        isError,
        isLoading,
        isSuccess,
        error,
    }
}

export default useDaVinciDescription