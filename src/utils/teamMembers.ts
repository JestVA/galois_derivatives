export interface Member {
    profile: string;
    name: string;
    title: string;
    bio: string;
}

export const teamMembers: Member[] = [
    {
        profile: '/profile/Dorin.png',
        name: 'Dorin Dumitrascuta',
        title: 'CTO',
        bio: 'A technologist at heart, I lead our team to new heights.'
    },
    {
        profile: '/profile/Garnet.png',
        name: 'Garnet Ni',
        title: 'Frontend Developer',
        bio: 'I ensure our interface is as innovative as our technology. Oh, and origami.'
    },
    {
        profile: './profile/Hronir.png',
        name: 'Hrönir',
        title: 'Manager',
        bio: 'A vigilant shepherd in the world of data.'
    },
    {
        profile: './profile/Ox.png',
        name: 'Ox',
        title: 'Data Scientist',
        bio: 'Adept at mining Twitter gold, without a pickaxe.'
    }
]