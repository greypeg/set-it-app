import Link from "next/link"
import { Header, LoginForm } from "./partials"

export const LoginView: React.FC = ({ }) => {

    return (
        <div className="flex flex-col pt-8 items-center min-h-screen">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <LoginForm />
            <div className="flex items-center justify-between gap-12 pt-8 ">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-[#5856B9] border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <Link href="#" className="font-medium text-purple-600 hover:text-purple-500">
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </div>
    )
}