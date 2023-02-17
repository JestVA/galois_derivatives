import { Member } from "../../utils/teamMembers"

const TeamMember = ({ name, title, bio, profile }: Member) => {
    return <div className="px-8">
        <img className="w-[200px] h-[200px] rounded-full m-auto" src={`${profile}`} alt={`${name} profile`} />
        <div className="pt-2 text-center">
            <p className="font-semibold text-[1.5rem]">{name}</p>
            <p className="font-semibold text-[1.1rem]">{title}</p>
            <p className='italic'>{bio}</p>
        </div>
    </div>
}

export default TeamMember