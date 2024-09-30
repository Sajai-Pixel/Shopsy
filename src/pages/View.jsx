import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function View() {

  const myCart = useSelector(state => state.cartReducer)
  const myWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])
  // console.log(product);

  const handlewhishlist = (product) => {
    if (myWishlist?.includes(product)) {
      alert("Item already added to your wishlist")
    }
    else {
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = (product) => {
    const existingProduct = myCart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("Product Quantity is Incrementingz")
    }
    else {
      dispatch(addToCart(product))
    }
  }


  return (
    <>
      <Header />
      <div className='min-h-[90vh] flex justify-center items-center mx-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-end">
          <div className='w-[400px] border-solid border-2 border-gray-700'>
            <img
              src={product?.thumbnail}
              className="w-full h-[400px] rounded-lg shadow-lg object-contain p-2 "
              alt="Essence Mascara Lash Princess"
            />
          </div>
          <div className="flex flex-col">
            <h3 className='text-sm text-gray-500'>PID: {product?.id}</h3>
            <h1 className='text-3xl font-bold mt-2'>{product?.title}</h1>
            <h4 className='font-bold text-red-500 text-xl mt-2'>$ {product?.price}</h4>
            <p className='mt-3'><span className='font-bold'>Description:</span> {product?.description}</p>
            <div className='flex justify-between mt-5'>
              <button onClick={() => handlewhishlist(product)} className='bg-red-500 text-white py-2 px-4 rounded-lg uppercase hover:bg-red-600 transition duration-300'>Add to Wishlist<i class="fa-regular fa-heart ml-2"></i></button>
              <button onClick={()=>handleCart(product)} className='bg-green-500 text-white py-2 px-4 rounded-lg uppercase hover:bg-green-600 transition duration-300'>Add to Cart<i class="fa-solid fa-cart-shopping ml-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
