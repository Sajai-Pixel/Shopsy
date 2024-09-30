import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const myWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  const myCart = useSelector(state => state.cartReducer)

  const handleCart = (product) => {
    const existingProduct = myCart?.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product Quantity is Incrementingz")
    }
    else {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }

  return (
    <>
      <Header />
      <div className='mt-[100px] w-[90%] mx-auto px-4 flex-grow'>
        {
          myWishlist.length > 0 ?
            <>
              <h1 className='text-3xl text-center font-bold mb-5 text-red-500'>Your Wishlist</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                  myWishlist?.map(product => (
                    <div key={product.id} className="rounded p-2 h-[400px] border-double border-4 border-blue-300 shadow-md">
                      <img
                        src={product?.thumbnail}
                        className="w-full h-[80%] object-cover"
                        alt={product?.title}
                      />
                      <div className="text-center mt-2">
                        <h3 className="text-lg font-semibold mb-2">{product?.title}</h3>
                        <div className="flex justify-evenly mt-3">
                          <button onClick={() => dispatch(removeWishlistItem(product?.id))}>
                            <i className="fa-solid fa-heart-circle-minus text-red-600 text-xl"></i>
                          </button>

                          <button onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-plus text-green-600 text-xl"></i></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </> :
            <div className='h-[70vh] flex flex-col justify-center items-center'>
              <img width={'400px'} height={'400px'} src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg" alt="Empty Wishlist" />
              <h1 className='text-3xl'>Your Wishlist is empty ...</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist
