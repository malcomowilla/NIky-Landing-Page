import { star } from "../assets/icons"



const ReviewCard = ({imgURL, customerName,rating,

    feedback}) => {
  return (



    <div className="flex justify-center items-center flex-col">
        
        <img src={imgURL} alt='customer' className="rounded-full
        object-cover w-[120px] h-[120px]"/>
        
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3  fkex justify-center items-center gap-2.5">
            <img   src={star}  width={24} className="object-contain
            m-0"/>
        </div>
        <p className="text-xl font-montserrat text-blue-400" >({rating})</p>
        <h3 className="mt-1 font-palanquin text-3xl text-center">{customerName}</h3>
        </div>
  )
}

export default ReviewCard






















