"use-client";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "baseui/button";
import { GoogleIcon } from "~/components/icons";
import { api } from "~/utils/api";
import { signIn } from "next-auth/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/router";
import { z } from "zod";

interface SignUpFormInputs {
    name: string;
    email: string;
    password: string;
}

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z.string().min(8, { message: "Password must be atleast 6 characters" })
        .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
        .regex(new RegExp(".*[a-z].*"), "One lowercase character")
        .regex(
            new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
            "One special character"
        ),
});


export const SignUpForm: React.FC = () => {
    const router = useRouter();
    const { handleSubmit, control } = useForm<SignUpFormInputs>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            email: "",
            // password: "",
        },
    })
    const userSignUpMutation = api.user.signUp.useMutation({
    });

    const onSubmit: SubmitHandler<SignUpFormInputs> = (data: SignUpFormInputs) => {
        try {
            userSignUpMutation.mutate({
                name: data.name,
                email: data?.email,
                password: data.password,
            });

            router.push('/dashboard')
        }
        catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }
    }

    return (
        <div className="flex flex-col pt-4 gap-12">

            <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
                <span className="flex gap-4 text-center">
                    <GoogleIcon /> Sign up with Google
                </span>
            </Button>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <FormControl
                            label={() => "Name"}>
                            <Input {...field} />
                        </FormControl>
                    )}
                />
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
                    Sign Up
                </Button>
            </form>
        </div>
    )
};