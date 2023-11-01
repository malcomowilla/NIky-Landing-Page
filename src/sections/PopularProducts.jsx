
import PopularProductsCard from '../components/PopularProductsCard'
import { products } from "../Constants"

const PopularProducts = () => {
  return (
    <section id='products' className="max-container max-sm:mt-12">
<div className="flex flex-col justify-start gap-5">
<h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">popular</span>products</h2>
<p className="lg:max-w-lg mt-2 font-montserrat text-blue-400">Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>

<div className="mt-16 grid grid-auto-fit gap-16 sm:gap-4"> 

{products.map((product)=> {
  return <PopularProductsCard
  key={product.name} {...product}/>
})}

</div>


</div>
    </section>

    )
}

export default PopularProducts




















































