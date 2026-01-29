

const CardBox1 = () => {
    const activity = [
        {clr: 'bg-green-500', text: 'Call connected successfully', time: '2 mins ago'},
        {clr: 'bg-red-500', text: 'Missed call from +123456789', time: '10 mins ago'},
        {clr: 'bg-green-500', text: 'Appointment booked with John Doe', time: '30 mins ago'},
        {clr: 'bg-yellow-500', text: 'Call on hold', time: '1 hour ago'},
    ]
  return (
    <div className='h-full w-full p-6 flex flex-col gap-4 overflow-hidden min-h-0'>
     <h1 className="text-white text-xl">Recent Activity</h1>
     <div className='flex flex-col gap-1.5 p-1.5 justify-center min-h-0'>
      
      {activity.map((item, index) => (
        
        <div key={index} className="flex flex-col justify-center gap-1 scrollbar-hide bg-[#1D293D] p-3 rounded-md">
          <div className='flex items-center gap-2'>
            <div className={`w-3 h-3 rounded-full ${item.clr}`}></div>
           <p className="text-white">{item.text}</p>
        </div>
          <div>
            <p className="text-gray-400 text-sm ml-auto">{item.time}</p>
            </div>
        </div>
      ))}
      
      
     </div>
    </div>
  )
}

export default CardBox1
