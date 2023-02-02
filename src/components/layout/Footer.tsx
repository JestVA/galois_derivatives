const Footer = () => {
    const year = new Date().getFullYear()
    return <footer className='flex justify-center items-center p-5 bg-slate-500 text-silver-600'>
        <p className="text-semibold">{year} Galois Derivaties | Email: hello@galois.cloud</p>
    </footer>
}

export default Footer