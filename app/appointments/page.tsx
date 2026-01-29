"use client";

import { useState } from "react";
import { appointments } from "@/lib/mockAppointments";

import { Calendar, CircleCheckBig, Copy,  Info } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function AppointmentsContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(appointments.length / ITEMS_PER_PAGE);

  const currentData = appointments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCopy = () => {
    navigator.clipboard.writeText("https://techstore.com/book?id=store123");
  };

  return (
    <div className="bg-[linear-gradient(125deg,#0F172B,#162456,#020618)] w-full min-h-screen h-auto p-4 ">
      

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4  max-h-42.5   mb-2">
       <div className="bg-[#0F172B]/70 border border-blue-500/20 rounded-xl p-4 max-w-89 ">
        <div className="flex items-center gap-2">
        <Calendar height={20  } width={20} className="text-[#51A2FF]"/>
       <p className="text-gray-400 text-sm">Total Booked</p>
        </div>
       <h2 className="text-2xl font-normal mt-2">34</h2>
       <p className="text-xs text-green-400 mt-2">+8 this week</p>
    </div>

     <div className="bg-[#0F172B]/70 border border-blue-500/20 rounded-xl p-4 max-w-89 ">
        <div className="flex items-center gap-2">
        <CircleCheckBig height={20  } width={20} className="text-[#05DF72]"/>
       <p className="text-gray-400 text-sm">Ai Booked</p>
        </div>
       <h2 className="text-2xl font-normal mt-2">28</h2>
       <p className="text-xs text-gray-400 mt-2">82% of total</p>
    </div>


     <div className="bg-[#0F172B]/70 border border-blue-500/20 rounded-xl p-4 max-w-89 ">
        <div className="flex items-center gap-2">
        <Info height={20  } width={20} className="text-[#FDC700]"/>
       <p className="text-gray-400 text-sm">Pending</p>
        </div>
       <h2 className="text-2xl font-normal mt-2">3</h2>
       <p className="text-xs text-gray-400 mt-2">Awaiting confirmationv</p>
    </div>
      </div>

      {/* Booking Link */}
      <div className="bg-gradient-to-t from-[#16213E] to-[#1A1A2E] max-h-35 border border-[#00FF88]/20 rounded-xl p-4 mb-6 ">
          <p className="text-lg p-2">Booking Link</p>
        <div className="flex items-center justify-between gap-4 m-2">
          <p className="bg-[#0A0A0F] flex items-center max-h-13 border border-[#00FF88]/20 rounded-xl p-4 w-full">https://techstore.com/book?id=store123</p>
         <button onClick={handleCopy} className="flex min-w-32 items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm">
          <Copy size={16} /> Copy Link
        </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0F172B]/60 border border-blue-500/30 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#162456] text-gray-300">
            <tr className="text-left h-16">
              <Th>Client Name</Th>
              <Th>Client Phone</Th>
              <Th>Client Mail</Th>
              <Th>Device</Th>
              <Th>Repair Type</Th>
              <Th>Date</Th>
              <Th>Slot</Th>
              <Th>Start Time</Th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-t h-16 border-blue-500/10 hover:bg-blue-500/5"
              >
                <Td className="text-blue-400">{item.clientName}</Td>
                <Td>{item.clientPhone}</Td>
                <Td>{item.clientEmail}</Td>
                <Td>{item.device}</Td>
                <Td>{item.repairType}</Td>
                <Td>{item.date}</Td>
                <Td>{item.slot}</Td>
                <Td>{item.startTime}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6 text-sm">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 rounded bg-[#162456] hover:bg-blue-600 disabled:opacity-40"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600"
                : "bg-[#162456] hover:bg-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="px-3 py-1 rounded bg-[#162456] hover:bg-blue-600 disabled:opacity-40"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}



function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-medium">{children}</th>;
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
}
