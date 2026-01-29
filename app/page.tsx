import Card from '@/components/Card'
import CardBox1 from '@/components/CardBox1'
import Cardbox2 from '@/components/Cardbox2'
import ChartAreaDefault from '@/components/Chart'
import icon1 from "@/public/images/Container (1).png"
import icon2 from "@/public/images/Container (2).png"
import icon3 from "@/public/images/Container (3).png"
import icon4 from "@/public/images/Container (4).png"
import icon5 from "@/public/images/Container (5).png"
import icon6 from "@/public/images/Container (6).png"




const Home  = () => {
  return (
    <div className="bg-[linear-gradient(125deg,#0F172B,#162456,#020618)] w-full min-h-screen p-4 grid grid-cols-2 gap-2">
       <div className='grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 col-span-2  gap-2'>
        <Card call='Total calls today' number='127' percent='+12%' type='incoming' icon={icon1}/>
        <Card call='AI-Handled Calls' number='98' percent='77%' type='incoming' icon={icon2}/>
        <Card call='Warm Transfer' number='23' percent='+18%' type='incoming' icon={icon3}/>
        <Card call='Appointments Booked' number='34' percent='+8%' type='incoming' icon={icon4}/>
        <Card call='Missed/Failed Calls' number='6' percent='+3%' type='missed' icon={icon5}/>
        <Card call='Avg Call Duration' number='3:42' percent='+15%' type='incoming' icon={icon6}/>
       
       </div>
       <div className='max-h-[426] col-span-2 '>
        <ChartAreaDefault />
       </div>
       <div className='col-span-1 max-md:col-span-2 h-[386] bg-[#0F172B] border-[#2B7FFF]/20 border rounded-md'>
        <CardBox1 />
       </div>
       <div className='col-span-1 max-md:col-span-2 h-[386] bg-[#0F172B] border-[#2B7FFF]/20 border rounded-md'>
          <Cardbox2 />
       </div>
     </div>
  )
}

export default Home 
