import Card from "../UI/Card"
import { motion } from 'framer-motion'
import useDaVinciDescription from "../../hooks/use-DaVinciDescription"

const Summary = () => {
    const { description, isError, isLoading, error } = useDaVinciDescription()

    return <Card className="grid grid-cols-2 items-center">
        {/* sometimes the animation doesn't work, don't know why */}
        <motion.div
            className="px-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {isLoading &&
                // todo: add loading animation 
                <p className="text-[24px]">Generating description...</p>}

            {isError &&
                <p>{JSON.stringify(error)}</p>}


            <p className="font-main-content whitespace-pre-wrap px-3 text-[24px] text-center">
                {description}
            </p>
        </motion.div>
        <div className="border-l-[1px] border-primary">
            <img className="margin-auto" src='../../public/green_recolour_transparent.png' />
        </div>
    </Card>
}

export default Summary