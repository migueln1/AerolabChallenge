import Image from 'next/image'
type BannerProps = {
    category: string
}
const MainBanner = ({category}:BannerProps) => (
    <div className='w-screen h-auto mb-5 relative'>
      <div className='relative w-screen h-[22rem]'>
        <Image src="https://res.cloudinary.com/migueln1/image/upload/v1666231888/header-x1_f5ukxm.png" 
          alt={`${category} products banner`}
          layout="fill"
          objectFit='cover'
          sizes='480, 1365' quality={85}/>
      </div>
      <div className="absolute h-full w-full top-0">
        <div className="container relative w-full h-full">
          <span className='absolute bottom-[2.667rem] md:text-[4rem] text-[1.5rem] text-white select-none'>{category}</span>
        </div>
      </div>
    </div>
)
export default MainBanner
