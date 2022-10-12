import Image from 'next/image'
type BannerProps = {
    category: string
}
const MainBanner = ({category}:BannerProps) => (
    <div className='w-screen h-auto mb-5 relative'>
        <Image src="/header-x1.png" alt='Electronics products banner' sizes='480, 1365' width={1365} height={412} className="w-screen max-h-[22.888rem] h-full"  quality={85}/>
        <div className="absolute h-full w-full top-0">
          <div className="container relative w-full h-full">
            <span className='absolute bottom-[2.667rem] md:text-[4rem] text-[1.5rem] text-white select-none'>{category}</span>
          </div>
        </div>
      </div>
)
export default MainBanner
