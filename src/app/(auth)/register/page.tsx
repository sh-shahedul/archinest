import RegistrationForm from "@/components/form/RegisrationForm";
import React from "react";
import Image from "next/image";
import registerImage from "../../../../public/reg.png"; 

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center text-[#005461]">
            Create Your Account
          </h1>
          <p className="text-sm text-center text-muted-foreground">
            Start your journey with ArchiNest
          </p>

          <RegistrationForm />

        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto flex justify-center items-center">
        <Image
          src={registerImage}
          alt="Registration"
          
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
