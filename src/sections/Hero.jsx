import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../Constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


const Hero = () => {
const [ bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (




<section id="home" className="w-full 
   flex flex-col justify-center 
 min-h-screen gap-10 max-container xl:flex-row ">

<div className="relative xl:w-2/5 flex flex-col justify-center
 items-start w-full max-xl:padding-x pt-28"  >
<p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82px] font-bold">
  <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">  The New Arrival</span>
<br/>
<span className="text-coral-red inline-block mt-3">Nike </span> <span>shoes</span>

</h1>
<p className="font-montserrat text-slate-500 text-lg leading-8 
mt-6 mb-14 max-sm:max-w-sm">Discover stylish NIke arrivals,quality comfort, and innovation 
  for your active life</p>
  <Button label='Shop now' iconURL={arrowRight}/>
  <div className="flex justify-start items-start 
  flex-wrap w-full mt-20 gap-16"> 
  {statistics.map((stat)=>{
    return (
      <div key={stat.label}>
        <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
        <p className="leading-7 font-montserrat text-blue-600">{stat.label}</p>

      </div>
    )
  })}
  </div>
  
</div>
  


  <div className="relative flex-1 
  flex justify-center items-center xl:min-h-screen 
  max-xl:py-40  bg-primary bg-cover bg-center
  
  bg-hero
  ">
    <img className="object-contain relative z-10" 
     src={bigShoeImg} alt='shoe collection' width={610} height={500}></img>
<div className="flex sm:gap-5 gap-4 absolute bottom-0 sm:left-[10%
  max-sm:px-6"  >
    {shoes.map((shoe, index)=> {

      return <div className=""  key={index}>
         <ShoeCard 
    
      index={index}
                imgURL={shoe}
                changeBigShoeImage={(shoe)=> {setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
      
      />
      </div>
     
    })}
    </div>
  </div>
</section>














  )
}

export default Hero











































