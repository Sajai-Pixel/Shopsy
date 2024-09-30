import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/slices/productSlice';

function Header({ insideHome }) {
  const dispatch = useDispatch()

  const myWishlist = useSelector(state => state.wishlistReducer)
  const myCart = useSelector(state => state.cartReducer)

  return (
    <nav className='flex w-full fixed top-0 left-0 items-center bg-blue-500 p-5 shadow-md'>
      <Link to={'/'} className='text-white font-bold text-4xl md:text-5xl flex items-center'>
        <i className="fa-brands fa-shopify mr-2"></i>
        Shopsy
      </Link>

      <ul className='flex-1 text-right text-white flex items-center justify-end'>
        {
          insideHome && <li className='list-none inline-block px-5'>
            <input
              type="text"
              placeholder='Search products here'
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
              className='w-[250px] md:w-[300px] p-2 rounded-3xl pl-5 bg-white text-gray-800 placeholder-gray-500'
            />
          </li>
        }
        <li className='list-none inline-block px-5'>
          <Link to={'/wishlist'} className='flex items-center'>
            <i className="fa-solid fa-heart text-red-600 pe-2"></i>
            <span className='text-lg font-medium'>Wishlist</span>
            <span className='bg-black text-white rounded-full px-2 ml-1'>{myWishlist.length}</span>
          </Link>
        </li>
        <li className='list-none inline-block px-5'>
          <Link to={'/cart'} className='flex items-center'>
            <i className="fa-solid fa-cart-shopping text-green-500 pe-2"></i>
            <span className='text-lg font-medium'>Cart</span>
            <span className='bg-black text-white rounded-full px-2 ml-1'>{myCart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
