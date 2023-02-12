import Card from "../UI/Card"
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

const Summary = () => {
    const fetchDescription = async () => {
        const res = await axios.get('/.netlify/functions/generate-description')
        return res.data
    }

    const response = useQuery({
        queryKey: ['description'],
        queryFn: fetchDescription,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    return <Card className="grid grid-cols-2 items-center">
        <motion.div
            className="px-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {response.status === 'loading' &&
                <p className="text-[24px]">Generating description...</p>}

            {response.status === 'error' &&
                <p>{JSON.stringify(response.error)}</p>}


            <p className="font-main-content whitespace-pre-wrap px-3 text-[24px] text-center">{response.data}</p>

            {/* <p className="font-main-content whitespace-pre-wrap text-[24px] text-center">
                    Galois Derivatives is a proprietary hedge fund utilizing advanced technology and quantitative strategies to trade crypto futures contracts.
                    The fund has been successfully trading XBTUSD inverse perpetual contract on BitMEX since 2021 and in 2023 it has deployed the algorithm to trade the BTCUSDT linear contract. The fund's performance can be accessed on our <Link to='/optics' className="underline hover:activeClass">/optics</Link>
                </p> */}

        </motion.div>
        <div className="border-l-[1px] border-primary">
            <img className="margin-auto" src='../../public/green_recolour_transparent.png' />
        </div>
    </Card>
}

export default Summary