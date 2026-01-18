"use client";

import React, { useState } from "react";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email, 
      password: data.password,
    });

    setLoading(false);

    if (res?.ok) {
      toast.success('Login Successful')
      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center text-[#005461]">
        Login to your account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div className="grid gap-2">
          <Label>Email</Label>
          <InputGroup>
            <InputGroupInput
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
            />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <Label>Password</Label>
          <InputGroup>
            <InputGroupInput
              {...register("password", {
                required: "Password is required",
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputGroupAddon>
              <LockIcon />
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-400 hover:bg-orange-500 text-white"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      {/* Google Login */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn("google")}
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Continue with Google
      </Button>

      {/* Register Link */}
      <p className="text-xs text-center text-muted-foreground mt-2">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-black underline hover:text-orange-400"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
