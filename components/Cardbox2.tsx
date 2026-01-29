import { Progress } from "@/components/ui/progress"

const CardBox1 = () => {
    const activity = [
        {request: '157 request', text: 'Screen Repair', value: '157'},
        {request: '89 request', text: 'Battery Replacement', value: '89'},
        {request: '67 request', text: 'Water Damage Repair', value: '67'},
        {request: '45 request', text: 'Software Troubleshooting', value: '45'},
        ]
  return (
    <div className='h-full w-full p-6 flex flex-col gap-4 overflow-hidden min-h-0'>
     <h1 className="text-white text-xl">Top Repair Requests</h1>
     <div className='flex flex-col gap-1.5 p-1.5 justify-center min-h-0'>
      

      {activity.map((item, index) => (
        
        <div key={index} className="flex flex-col justify-center gap-1 scrollbar-hide  p-3 rounded-md">
          <div className='flex justify-between items-center gap-2'>
           <p className="text-white">{item.text}</p>
            <div className={`text-sm rounded-full text-[#C0CCDD] mr-1`}>{item.request}</div>
        </div>
          <div>
<Progress
  
  value={(parseInt(item.value)/200)*100}
  className="h-2"
  indicatorClassName="
    bg-gradient-to-r 
    from-[#2B7FFF] 
     
    to-[#00B8DB] 
    shadow-inner
  "
/>
                   </div>
        </div>
      ))}
      
      
     </div>
    </div>
  )
}

export default CardBox1
