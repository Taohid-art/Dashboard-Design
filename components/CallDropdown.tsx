import React from 'react'

const CallDropdown = ({ type }: { type: string }) => {
  return (
    <div>
        {/* Dropdown content goes here */}
        <select name="callType" id="callType" className="w-full h-full bg-transparent text-white border-none outline-none cursor-pointer">
          <option value="all">{type}</option>
          <option value="incoming">Incoming</option>
          <option value="outgoing">Outgoing</option>
        </select>
    </div>
  )
}

export default CallDropdown