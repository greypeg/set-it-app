import { NextPage } from "next";
import { ComingSoon } from "~/components/coming-soon-page/coming-soon";
import { SignupView } from "~/view/signup";

const SignUp: NextPage = () => {
    return (
        <div>
            <SignupView />
        </div>
    );
};

export default SignUp;