import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useDaVinciDescription = () => {
    const fetchDescription = async () => {
        const res = await axios.get('/.netlify/functions/generate-description')
        return res.data
    }

    const { data, status, error } = useQuery({
        queryKey: ['description'],
        queryFn: fetchDescription,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    return {
        description: data,
        isError: status === 'error',
        isLoading: status === 'loading',
        error: error
    }
}

export default useDaVinciDescription