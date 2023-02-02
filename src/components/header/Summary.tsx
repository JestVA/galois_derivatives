const Summary = () => {
    return <div className="grid pt-10 md:grid-cols-2 flex items-center px-10 lg:gap-7">
        <div className="post md:max-lg:translate-x-10">
            <p className="text-xl text-center"> Galois Derivatives is a proprietary hedge fund utilizing advanced technology and quantitative strategies to trade crypto futures contracts.</p>
            <p className='text-xl text-center'>The fund has been successfully trading XBTUSD inverse perpetual contract on BitMEX since 2021 and in 2023 it has deployed the algorithm to trade the  BTCUSDT linear contract. The fund's performance can be accessed on our galois.cloud/optics page. </p>
        </div>
        <div className='pt-10 rounded-xl shadow-md md:pd-0 md:max-lg:-translate-x-10 '>
            <img className='rounded-xl scale-70' src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='phone' />
        </div>
    </div>
}

export default Summary