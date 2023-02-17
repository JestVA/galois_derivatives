import Card from "../UI/Card"
import { teamMembers } from "../../utils/teamMembers"
import TeamMember from "./TeamMember"

const Team = () => {

    return <Card className="grid grid-cols-2 place-items-center gap-y-8">
        {teamMembers.map(member => (
            <TeamMember
                key={member.name}
                name={member.name}
                bio={member.bio}
                profile={member.profile}
                title={member.title}
            />
        ))}
    </Card>
}

export default Team