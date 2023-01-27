import Layout from "components/layout/Layout"
import './app.css'

const App = () => {
  return <Layout>
    <div className="flex flex-row p-10 lg:py-20 justify-center gap-5 border-double border-4">
      <div className="heading-background">
        <h1 className='inline text-[10vw] xl:text-[7vw] font-bold font-heading text-8xl'>G A L O I S . A I</h1>
      </div>
      <h2 className="max-lg:hidden text-xl text-gray-500">
        Nurture <br />
        Abstract <br />
        Information
      </h2>
    </div>
    <div className="grid pt-10 md:grid-cols-2 flex items-center px-10 lg:gap-7">
      <div className="post md:max-lg:translate-x-10">
        <p className="text-xl text-center">Quant trading algorithm that treats market participants as first rate citizens. Information emerges and it's used to cluster randomness and inform trade decisions.</p>
      </div>
      <div className='pt-10 rounded-xl shadow-md md:pd-0 md:max-lg:-translate-x-10 '>
        <img className='rounded-xl scale-70' src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='phone' />
      </div>
    </div>
  </Layout>
}

export default App