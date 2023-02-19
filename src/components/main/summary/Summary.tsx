import Card from "../../UI/Card"
import { AnimatePresence } from 'framer-motion'
import useDaVinciDescription from "../../../hooks/use-DaVinciDescription"
import FetchError from "./FetchError"
import Loading from "./Loading"
import Description from "./Description"


const Summary = () => {
    const { description, isError, isLoading, isSuccess, error } = useDaVinciDescription()

    return <Card className="grid grid-cols-2 place-items-center">
        <div className="px-3 font-main-content whitespace-pre-wrap text-[24px] text-center">
            <AnimatePresence mode='wait'>
                {isLoading && <Loading key='loading' />}
                {isError && <FetchError error={error} key='error' />}
                {isSuccess && <Description description={description} key='description' />}
            </AnimatePresence>
        </div>
        <div className="">
            <img className="margin-auto" src='../../public/green_recolour_transparent.png' />
        </div>
    </Card>
}

export default Summary