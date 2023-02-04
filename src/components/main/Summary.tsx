import { Link } from "react-router-dom"

const Summary = () => {
    return <div className="grid grid-cols-2 items-center border-4 rounded-[5px] py-[63px] px-[25px]">
        <div className="px-[25px] border-r-[1px] border-primary">
            <p className="font-main-content whitespace-pre-wrap text-[24px] text-center">
                Galois Derivatives is a proprietary hedge fund utilizing advanced technology and quantitative strategies to trade crypto futures contracts.
                The fund has been successfully trading XBTUSD inverse perpetual contract on BitMEX since 2021 and in 2023 it has deployed the algorithm to trade the BTCUSDT linear contract. The fund's performance can be accessed on our <Link to='/optics' className="underline hover:activeClass">/optics</Link> page.
            </p>
        </div>
        <div>
            <img src='../../public/green_recolour_transparent.png' />
        </div>
    </div>
}

export default Summary