import { Member } from "../../utils/teamMembers"

const TeamMember = ({ name, title, bio, profile }: Member) => {
    return <div className="px-8">
        <img className="w-[100px] h-[100px] rounded-full m-auto" src={`${profile}`} alt={`${name} profile`} />
        <div className="pt-2 text-center">
            <p className="font-semibold text-[1.5rem]">{name}</p>
            <p className="font-semibold text-[1rem]">{title}</p>
            <p>{bio}</p>
        </div>
    </div>
}

export default TeamMember