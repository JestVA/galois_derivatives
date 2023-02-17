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
        bio: 'I train elephants how to wiggle their tail'
    },
    {
        profile: '/profile/Garnet.png',
        name: 'Garnet Ni',
        title: 'Frontend Developer',
        bio: 'I use React to develop front-end apps'
    },
    {
        profile: './profile/Hronir.png',
        name: 'Hrönir',
        title: 'Manager',
        bio: 'I make sure nothing is lost in feature engineering & processing pipelines'
    },
    {
        profile: './profile/Ox.png',
        name: 'Ox',
        title: 'Data Scientist',
        bio: 'Spend way too much time on Twitter. Sometimes I also find alpha.'
    }
]