import { Search } from "lucide-react";
import CallDropdown from "@/components/CallDropdown";
import CallListComponent from "@/components/CallList";

const Call = () => {
  return (
    <div className="bg-[linear-gradient(125deg,#0F172B,#162456,#020618)] w-full min-h-screen p-6">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full max-md:flex-col  gap-2 mb-6">
        
        {/* 🔍 Search Box (Left Side) */}
        <div className="flex items-center w-[550px] h-12 px-4 bg-[#0F172B] border border-[#2B7FFF]/20 rounded-md gap-2 max-md:w-full">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="bg-transparent w-full focus:outline-none text-sm placeholder:text-gray-500 text-white"
          />
        </div>

        {/* 🧩 Right Side Buttons */}
        <div className="flex gap-3 max-md:w-full">
          <div className="w-[158px] max-md:w-27 max-md:text-sm h-12 bg-[#0F172B] border border-[#2B7FFF]/20 rounded-md flex items-center justify-center gap-1" > <CallDropdown type=" All Issues" /></div>
          <div className="w-[158px] max-md:w-27 max-md:text-sm h-12 bg-[#0F172B] border border-[#2B7FFF]/20 rounded-md flex items-center justify-center gap-1"><CallDropdown type=" All Types" /></div>
          <div className="w-[158px] max-md:w-27 max-md:text-sm h-12 bg-[#0F172B] border border-[#2B7FFF]/20 rounded-md flex items-center justify-center gap-1" > <CallDropdown type="Today" /></div>

        </div>

      </div>
      <CallListComponent />
    </div>
  );
};

export default Call;
