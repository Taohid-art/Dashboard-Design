import { cn } from '@/lib/utils'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

const Card = ({ call,number,percent,type,icon}: { call: string, number: string, percent: string, type: string, icon: string | StaticImageData }) => {
  return (
    <div className='h-[146] w-[374] bg-[#0F172B] border-[#2B7FFF]/20 border rounded-md p-4 flex justify-between '>
        <div className='flex flex-col gap-2'>
            <p className='text-[#90A1B9] text-sm'>{call}</p>
            <h2 className='text-white text-[30px]' >{number}</h2>
            <span className={cn("text-sm ", type === 'missed' && "text-red-500",
                type === 'incoming' && "text-[#05DF72]",
            )}>{percent}</span>
        </div>
         <div className='h-12 w-12'>        <Image src={icon} alt="card image"  />
</div>
    </div>
  )
}

export default Card