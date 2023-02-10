import Card from "../UI/Card"

const Team = () => {
    const teamMembers = [
        ['/profile/Dorin.png', 'Dorin Dumitrascuta', 'CTO'],
        ['/profile/Garnet.png', 'Garnet Ni', 'Frontend Developer']
    ].map(([url, name, title]) => (
        <div>
            <img className="w-[200px] h-[200px] rounded-full m-auto" src={`${url}`} alt={`${name} profile`} />
            <div className="pt-2 text-center">
                <p className="font-semibold text-[1.5rem]">{name}</p>
                <p>{title}</p>
            </div>
        </div>
    ))

    return <Card className="grid grid-cols-2 place-items-center">
        {teamMembers}
    </Card>
}

export default Team