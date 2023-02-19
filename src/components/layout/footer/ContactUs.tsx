import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

const ContactUs = () => {
    return <WithAnimation
        variants={fadeInOut}
    >
        <a href='mailto:hello@galois.cloud'>
            Contact Us
        </a>
    </WithAnimation>
}

export default ContactUs