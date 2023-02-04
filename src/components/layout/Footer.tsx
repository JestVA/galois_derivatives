const Footer = () => {
    const year = new Date().getFullYear()
    return <footer className="flex justify-center items-center pb-[22px]" >
        <div className="p-3 border-y-[1px] border-primary">
            <p className="text-bold text-[20px] font-nav">{year} Galois Derivaties | Email: hello@galois.cloud</p>
        </div>
    </footer>
}

export default Footer