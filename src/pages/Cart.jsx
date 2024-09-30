import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate()
  const myCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(() => {
    if (myCart.length > 0) {
      setCartTotal(myCart?.map(item => item.totalPrice)?.reduce((a, b) => a + b))
    }
  }, [myCart])

  const handleDecrementProduct = (product) =>{
    if(product.quantity>1){
      dispatch(decQuantity(product?.id))
    }
    else{
      dispatch(removeCartItem(product?.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Order Successfull")
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className='mt-[100px] container mx-auto px-4 flex-grow'>
        {
          myCart.length > 0 ?
            <>
              <h1 className='font-bold text-3xl mb-5 text-red-600'>Cart Summary</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2 border rounded-lg p-5 shadow">
                  <table className='table-auto w-full'>
                    <thead>
                      <tr>
                        <td className='font-semibold'>#</td>
                        <td className='font-semibold'>Product</td>
                        <td className='font-semibold'>Image</td>
                        <td className='font-semibold'>Quantity</td>
                        <td className='font-semibold'>Price</td>
                        <td className='font-semibold'>Remove</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        myCart?.map((product, index) => (
                          <tr key={product?.id}>
                            <td>{index + 1}</td>
                            <td>{product?.title}</td>
                            <td>
                              <img
                                width={'60px'}
                                height={'60px'}
                                src={product?.thumbnail}
                                alt={product?.title}
                                className="rounded border-solid border-2 border-slate-400"
                              />
                            </td>
                            <td>
                              <div className="flex items-center space-x-2">
                                <button onClick={() => handleDecrementProduct(product)} className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-300 focus:outline-none">
                                  -
                                </button>
                                <span className="text-lg font-medium">{product?.quantity}</span>
                                <button onClick={() => dispatch(incQuantity(product?.id))} className="bg-gray-200 text-gray-700 rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-300 focus:outline-none">
                                  +
                                </button>
                              </div>
                            </td>
                            <td>$ {product?.totalPrice}</td>
                            <td>
                              <button onClick={() => dispatch(removeCartItem(product?.id))} className="text-red-600 hover:text-red-800">
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className='float-right mt-4'>
                    <button onClick={() => dispatch(emptyCart())} className='bg-red-600 hover:bg-red-700 text-white rounded p-3 me-3'>EMPTY CART</button>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white rounded p-3'>SHOP MORE</button>
                  </div>
                </div>
                <div>
                  <div className="border rounded-lg shadow p-5">
                    <h1 className='text-2xl font-bold'>Total Amount: <span className='text-red-500'>$ {cartTotal}</span></h1>
                    <hr />
                    <button onClick={handleCheckout} className='w-full bg-green-500 hover:bg-green-600 rounded p-3 mt-5 text-white font-bold'>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </> :
            <div className='h-[70vh] flex flex-col justify-center items-center'>
              <img width={'400px'} height={'400px'} src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg" alt="Empty Wishlist" />
              <h1 className='text-3xl'>Your Cart is empty ...</h1>
            </div>
        }
      </div>
    </>
  );
}

export default Cart;
