import Card from "../UI/Card"

const Team = () => {
    const teamMembers = [
        ['/profile/Dorin.png', 'Dorin Dumitrascuta', 'CTO', 'I train elephants how to wiggle their tail'],
        ['/profile/Garnet.png', 'Garnet Ni', 'Frontend Developer', 'I use React to develop front-end apps'],
        ['./profile/Hronir.png', 'Hrönir', 'Manager', ' I make sure nothing is lost in feature engineering & processing pipelines.'],
        ['./profile/Ox.png', 'OX', 'Data Manager', 'Spend way too much time on Twitter. Sometimes I also find alpha.']
    ].map(([url, name, title, bio]) => (
        <div className="px-8" key={name}>
            <img className="w-[200px] h-[200px] rounded-full m-auto" src={`${url}`} alt={`${name} profile`} />
            <div className="pt-2 text-center">
                <p className="font-semibold text-[1.5rem]">{name}</p>
                <p className="font-semibold text-[1.1rem]">{title}</p>
                <p className='italic'>{bio}</p>
            </div>
        </div>
    ))

    return <Card className="grid grid-cols-2 place-items-center gap-y-8">
        {teamMembers}
    </Card>
}

export default Team