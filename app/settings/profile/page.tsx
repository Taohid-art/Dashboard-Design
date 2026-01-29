'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import profile from "@/public/images/Avatar Style 6.png";
import { SquarePen } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

 const Profileform = z.object({
  Name:z.string().min(3,"Full Name must be at least 3 characters long"),
  email:z.string().email("Invalid email address"),
  StoreName:z.string().min(5,"Phone number must be at least 5 digits long"),
  StoreAddress:z.string().min(5,"Address must be at least 5 characters long")
})
export type ProfileFormInput = z.infer<typeof Profileform>;



const ProfilePage = () => {
    const Router = useRouter();
     const {register, handleSubmit, formState: {errors}} = useForm<ProfileFormInput>({
        resolver:zodResolver(Profileform)
    })
  return (
    <div>
      <h1 className="text-xl font-normal py-2 px-1">Profile Image</h1>

      {/* Profile Image + Button */}
      <div className="flex items-end p-2 mb-6 gap-3 relative">
        <Image src={profile} alt="Profile Picture" width={102} height={102} />
        <Link href="/settings">
          <SquarePen
            className="absolute bottom-4 left-20 bg-[#162456] p-1 rounded-md border border-[#192D71] hover:bg-[#0F172B] cursor-pointer transition"
            size={30}
            color="#FFFFFF"
          />
        </Link>
      </div>

      <div className='max-md:w-full max-md:flex max-md:justify-center  '>
      <form action="" className='  p-6 max-md:w-full  ' onSubmit={handleSubmit(() => {
        Router.push("/settings")
      })}>
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 ">

        
        <div className='mb-2  flex flex-col gap-2 '>
          <label className='text-lg '>Name</label>
          <input type='text' className='w-full border rounded-md px-2 py-2 mt-1 bg-[#0A0A0F]/50 text-white' {...register('Name')} placeholder='Prince Mahmud' />
          {errors.Name && <p className='text-red-500 text-sm'>{errors.Name.message}</p>}
        </div>
        <div className='mb-2 flex flex-col gap-2 '>
          <label className='text-lg '>Email</label>
          <input type='text' className='w-full border rounded-md px-2 py-2 mt-1 bg-[#0A0A0F]/50 text-white' {...register('email')} placeholder='Example@gmail.com'/>
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        </div>
        <div className='mb-2 flex flex-col gap-2 '>
          <label className='text-lg '>Store Name</label>
          <input type='text' className='w-full border rounded-md px-2 py-2 mt-1 bg-[#0A0A0F]/50 text-white' {...register('StoreName')} placeholder='Ubreakfix Store'/>
          {errors.StoreName && <p className='text-red-500 text-sm'>{errors.StoreName.message}</p>}
        </div>

        <div className='mb-2 flex flex-col gap-2 '>
          <label className='text-lg '>Address</label>
          <input type='text' className='w-full border rounded-md px-2 py-2 mt-1 bg-[#0A0A0F]/50 text-white  ' {...register('StoreAddress')} placeholder='Road-NO street no' />
          {errors.StoreAddress && <p className='text-red-500 text-sm'>{errors.StoreAddress.message}</p>}
        </div>
        </div>
        < button type='submit' className='w-[373px] rounded-md m-auto px-2 py-2 flex gap-1 mt-16 bg-[#00C950] text-white text-md text-center justify-center'>
           save
           
        </button>
        
      </form>
    </div>
  




    </div>
  );
};

export default ProfilePage;
