import { Variants } from "framer-motion"

export const pageTransitionOne: Variants = {
    out: {
        opacity: 0,
        x: '-100%',
    },

    in: {
        opacity: 1,
        x: 0
    },
}

export const pageTransitionTwo: Variants = {
    out: {
        opacity: 0,
        x: '100%',
    },

    in: {
        opacity: 1,
        x: 0
    }
}

export const fadeInOut: Variants = {
    out: {
        opacity: 0
    },
    in: {
        opacity: 1
    }
}