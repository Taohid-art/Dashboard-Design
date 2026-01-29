'use client';
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Battery,
  Smartphone,
  CheckCircle2,
  XCircle,
  CircleCheckBig,
  CirclePlay,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import icon from "@/public/images/Container (1).png"

// Define types for our call data
interface CallLog {
  id: string;
  phoneNumber: string;
  date: string;
  time: string;
  type: "Dropped" | "Appointment" | "Warm Transfer" | "AI Resolved";
  duration?: string;
  issue: "Unknown" | "Battery" | "Software" | "Screen";
  outcome?: "Call Dropped" | "Appointment Booked" | "Escalated to technician" | "Quote Provided";
  
}



const mockCallLogs: CallLog[] = [
  {
    id: "1",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    type: "AI Resolved",
    duration: "5:23",
    issue: "Screen",
    outcome: "Quote Provided"

      },
  {
    id: "2",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-15",
    time: "09:42 AM",
    type: "Warm Transfer",
    duration: "2:15",
    issue: "Battery",
    outcome: "Escalated to technician"
  },
  {
    id: "3",
    phoneNumber: "+1 (555) 123-4567",
    date: "2025-12-14",
    time: "02:30 PM",
    duration:"5:00",
    type: "Appointment",
    issue: "Unknown",
    outcome: "Appointment Booked"
  },
  {
    id: "4",
    phoneNumber: "+1 (555) 987-6543",
    date: "2025-12-14",
    time: "11:15 AM",
    type: "Dropped",
    duration: "10:45",
    issue: "Software",
    outcome: "Call Dropped"
  },
  {
    id: "5",
    phoneNumber: "+1 (555) 234-5678",
    date: "2025-12-13",
    time: "04:20 PM",
    type: "AI Resolved",
    duration: "3:30",
    issue: "Unknown",
    outcome: "Quote Provided"
  },
  {
    id: "6",
    phoneNumber: "+1 (555) 876-5432",
    date: "2025-12-12",
    time: "09:05 AM",
    type: "Dropped",
    issue: "Unknown",
    outcome: "Call Dropped"
  },
  {
    id: "7",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-11",
    time: "01:45 PM",
    type: "Warm Transfer",
    duration: "7:12",
    issue: "Unknown",
    outcome: "Escalated to technician"
  },
];


const CallListComponent = () => {

  const [openChat, setopenChat] = useState<string | null>(null);

 const toggleChat = ({id}: {id: string}) => {
    setopenChat(openChat == id ? null : id);
  };

  const formatDateDisplay = (date: string) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    if (date === today) return "Today";
    if (date === yesterday) return "Yesterday";
    
    return date;
  };

  const getCallTypeText = (type: CallLog["type"]) => {
    switch(type) {
      case "AI Resolved": return <span className="text-xs w-fit border border-[#00C950]/30 rounded-md bg-[#00BC7D]/20 px-2 py-1 text-green-500" > AI Resolved</span>;
      case "Appointment": return <span className="text-xs w-fit border border-[#2B7FFF]/30 rounded-md bg-[#00B8DB]/20 px-2 py-1 text-blue-500 " > Appointment</span>;
      case "Dropped": return <span className="text-xs w-fit border border-[#FF6900]/30 rounded-md bg-[#FB2C36]/20 px-2 py-1 text-red-500" > Dropped</span>;
      case "Warm Transfer": return <span className="text-xs w-fit border border-[#FF6900]/30 rounded-md bg-[#FB2C36]/20 px-2 py-1 text-[#FF8904]" > Warm Transfer</span>;
    }
  };

 

  return (
    <div className={"w-full flex max-md:flex-col items-start justify-between gap-6"}>

    <div className="bg-[#0F172B]/50 text-white rounded-lg p-6 shadow-lg max-md:w-full w-[555px]  border border-[#2B7FFF]/30">
      
      <div className="grid  gap-6">
        {/* Left Column - Call List */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4 border-b border-[#2B7FFF]/30 pb-2">
            <h3 className="text-lg font-medium">Call List</h3>
                     </div>

          <ScrollArea className="h-[500px] pr-4">
            <div>
              {mockCallLogs.map((call) => (
                <div 
                key={call.id} 
                onClick={() => toggleChat({id: call.id})}
                className="  border-b border-[#2B7FFF]/30  px-4 py-1.5 hover:bg-[#2D3748] transition-colors cursor-pointer  hover:border-[#2B7FFF]/30"
                >
                  <div className="flex items-start justify-between pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Image src={icon} alt="Call Type Icon" height={40} width={40} />
                      <div>
                        <div className="text-md/[24] font-normal ">{call.phoneNumber}</div>
                        <div className="text-xs text-[#90A1B9] font-normal ">
                          {formatDateDisplay(call.date)} . {call.time}
                        </div>
                      
                      </div>
                    </div>
                    {getCallTypeText(call.type)}
                    </div>
                   <div className="flex items-center gap-2">
                     <div className="flex items-center gap-1 text-sm justify-start text-[#90A1B9] mb-1">
                        <Clock className="h-4 w-4 text-[#90A1B9]" />
                        <span>{call.duration}</span>
                     </div>
                     <div className="flex items-center gap-1 text-sm justify-start text-[#90A1B9] mb-1">
                        <CircleCheckBig className="h-4 w-4 text-[#90A1B9]" />
                        <span>{call.outcome}</span>
                     </div>
                     <span className="text-xs border border-[#2B7FFF]/30 rounded-md bg-[#00B8DB]/20 px-2 py-1 text-blue-500 " > {call.issue}</span>
                   
                   </div>
                   
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
       </div>

       
     </div>

         <div className="bg-[#0F172B]/50 text-white rounded-lg p-6 shadow-lg max-md:w-full  w-[580px]  border border-[#2B7FFF]/30">
          {openChat ?
           <div>
            <h3 className="text-lg font-normal pb-4 border-b border-[#2B7FFF]/30">Call Details</h3> 
            {/* Right upper section    */}

            <div>
              <div className="flex items-center  gap-4 mt-4">
                <div className="flex flex-col gap-1 w-62.5">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Phone Number</h3>
                  <p className="text-white font-normal text-lg">{mockCallLogs.find(call => call.id === openChat)?.phoneNumber}</p>
                </div>
                <div className="flex flex-col gap-1 w-62.5">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Duration</h3>
                  <p className="text-white font-normal text-lg">{mockCallLogs.find(call => call.id === openChat)?.duration}</p>
                </div>
                </div>
                <div className="flex items-center  gap-4 mt-4">
                <div className="flex flex-col gap-1 w-62.5">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Date & Time</h3>
                  <p className="text-white font-normal text-lg">{mockCallLogs.find(call => call.id === openChat)?.date} {mockCallLogs.find(call => call.id === openChat)?.time}</p>
                </div>
                <div className="flex flex-col gap-1 w-62.5">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Issue Type</h3>
                  <p className="text-white font-normal text-lg">{mockCallLogs.find(call => call.id === openChat)?.issue}</p>
                </div>
                </div>
                <div className="flex flex-col gap-1 w-62.5 mt-4">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Call Type</h3>
                  {getCallTypeText(mockCallLogs.find(call => call.id === openChat)?.type!)}
                </div>
                <div className="flex flex-col gap-1 w-62.5 mt-4">
                  <h3 className="text-sm font-normal text-[#90A1B9]">Outcome</h3>
                  <p className="text-white font-normal text-lg">{mockCallLogs.find(call => call.id === openChat)?.outcome}</p>
                </div>
            </div>
              <button className="cursor-pointer hover:bg-[#AD46FF]/30 hover:text-white transition-all duration-100 flex items-center justify-center gap-2 h-13 max-md:w-full w-128.75 border rounded-lg bg-gradient-to-r from-[#AD46FF]/20 to-[#F6339A]/20 my-4 text-[#C27AFF] text-xl border-[#AD46FF]/30 outline-none  text-center ">
              <CirclePlay />
              Play Audio Recording</button> 
              <div className="flex items-center gap-2 ">
                <FileText className="h-5 w-5 text-[#51A2FF]" />
              <h3 className="text-lg font-normal pb-4 ">Conversation Transcript</h3>
              </div>
              {/* Transcript Section */}
               <div>
                <ScrollArea className="h-[300px] pr-4">
                 <div>
                  <div className="flex flex-col items-center  gap-3 mt-1">
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#05DF72]">Ai Assistant:</h3>
                  <p className="text-white font-normal text-sm">Thank you for calling UBreakiFix! How can I help you today?</p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#51A2FF]">Customer:</h3>
                  <p className="text-white font-normal text-sm">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#05DF72]">Ai Assistant:</h3>
                  <p className="text-white font-normal text-sm">I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#51A2FF]">Customer:</h3>
                  <p className="text-white font-normal text-sm">Yes, please! When are you available?</p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#05DF72]">Ai Assistant:</h3>
                  <p className="text-white font-normal text-sm">Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-sm font-normal text-[#51A2FF]">Customer:</h3>
                  <p className="text-white font-normal text-sm">Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                </div>


                </div>
                 </div>
                </ScrollArea>
               </div>
            </div> : <p>Click on a call to view details</p>
          }
        </div>

</div>
  );
};

export default CallListComponent;