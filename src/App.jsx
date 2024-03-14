import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
const App = () => {

  const [products,setProducts] =useState([])
  const [cardItem,setcardItem] =useState([])

  useEffect(() =>{
    fetch('face.json')
    .then(res =>res.json())
    .then(data =>setProducts(data))
  },[])

  // console.log(products)

  const handleAddButton = (product)=>{
    //  console.log('mehedi hasan rifat')
    // console.log(product)
   setcardItem([...cardItem,product])
  }

// console.log(cardItem)


// console.log(Product)
  return (
    <>
     <section className=' mb-10 lg:flex lg:flex-row flex flex-col w-[90%] mt-16 m-auto gap-4'>
      {/* left div */}
     <div className='lg:w-[80%] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
    
      {
        products?.map((product) =>{
          
          const {name,rating,id,img,title,discounted_price,original_price,description} =product
         return(
            
          <div key={id} className="card w-auto bg-base-100 shadow-xl lg:p-5 sm:p-3 space-y-3 rounded-lg">
          <figure><img className='rounded-lg'src={img} alt="Shoes" /></figure>
     <div className="card-body">
         <h2 className="card-title">{title}</h2>
         <h6 className='font-bold'>{name}</h6>
     <div className='flex justify-between'>
          <h3 className='text-[20px]'> <del>${original_price} </del></h3>
          <h3>$ {discounted_price}</h3>
     </div>
       <h3>{rating}</h3>
       <p>{description}</p>
       <div className="card-actions justify-end">
         <button onClick={() => handleAddButton(product)} className="btn btn-primay bg-red-500 rounded-lg p-3 m-3 font-semibold text-white">Buy Now</button>
       </div>
     </div> 
           </div>
         )
          
        })
      }
    

     </div>
     {/* right div */}
     <div className='lg:w-[20%] w-full'>
      <h1 className='text-2xl font-bold pt-4 text-center'>Total card item</h1>
      <div className='bg-base-100 shadow-xl rounded-lg mt-4 pt-4'>
           <div className='flex justify-around p-2'>
             <h3 className=''>Name</h3>
             <h3>Price</h3>
           </div>
           <hr />
            
            {
               cardItem.map(item =>{
                //  const {discounted_price,title,id} =item
                 return(
                  <div key={item.name} className='flex justify-between p-2'>
                    <h3>{item.title}</h3>
                    <h3>{item.discounted_price}</h3>
                  </div>
                 )
               })
            }
            <div>
              
            </div>

      </div>
        
     </div>

     </section>
    </>
  );
};

export default App;