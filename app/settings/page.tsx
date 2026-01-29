import Image from "next/image";
import Link from "next/link";
import profile from "@/public/images/Avatar Style 6.png";

const Settings = () => {
  return (
    <div className="text-white">
      {/* Section Title */}
      <h1 className="text-xl font-normal py-2 px-1">Profile Image</h1>

      {/* Profile Image + Button */}
      <div className="flex items-end p-2 mb-6 gap-3">
        <Image
          src={profile}
          alt="Profile Picture"
          width={102}
          height={102}
          
        />

        <Link
          href="/settings/profile"
          className="px-3 py-1.5 border border-[#192D71] rounded-lg hover:bg-[#162456] transition"
        >
          Edit Profile
        </Link>
      </div>

      {/* Info Section */}
      <div className="space-y-4 mt-4">

        <div className="flex justify-start gap-8 items-center border-b border-[#2B7FFF]/20 pb-3">
          <span className="text-white/90 text-lg w-20">Name:</span>
          <span className="text-white text-lg font-medium text-right max-w-[60%]">
            Jane D.v
          </span>
        </div>

        <div className="flex justify-start gap-8 items-center border-b border-[#2B7FFF]/20 pb-3">
          <span className="text-white/90 text-lg w-20">Email:</span>
          <span className="text-white text-lg font-medium text-right max-w-[60%] break-words">
            jane@gmail.com
          </span>
        </div>

        <div className="flex justify-start gap-8 items-center border-b border-[#2B7FFF]/20 pb-3">
          <span className="text-white/90 text-lg w-20">Store Name:</span>
          <span className="text-white text-lg font-medium text-right max-w-[60%]">
            Ubreakfix Store
          </span>
        </div>

        <div className="flex justify-start gap-8 items-center border-b border-[#2B7FFF]/20 pb-3">
          <span className="text-white/90 text-lg w-20">Store Address:</span>
          <span className="text-white text-lg font-medium text-right max-w-[60%]">
            123 Main Street, New York
          </span>
        </div>

      </div>
    </div>
  );
};

export default Settings;
