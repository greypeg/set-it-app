import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useForm, Controller } from "react-hook-form";
import { Button } from "baseui/button";
import { GoogleIcon } from "~/components/icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface LoginFormInputs {
    email: string;
    password: string;
    rememberMe: boolean;
}


export const LoginForm: React.FC = () => {
    const router = useRouter();
    const { handleSubmit, control } = useForm<LoginFormInputs>({
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // const onSubmit: SubmitHandler<LoginFormInputs> = (props) => console.log(props)

    return (
        <div className="flex flex-col pt-4 gap-12">

            <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
                <span className="flex gap-4 text-center">
                    <GoogleIcon /> Login with Google
                </span>
            </Button>

            <form className="flex flex-col">
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <FormControl
                            label={() => "Email"}>
                            <Input {...field} />
                        </FormControl>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <FormControl
                            label={() => "Password"}>
                            <Input {...field} type='password' />
                        </FormControl>
                    )}
                />
                <Button type="submit" overrides={{
                    BaseButton: {
                        style: () => ({
                            background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                        })
                    }
                }}>
                    Login
                </Button>
            </form>
        </div>
    )
};