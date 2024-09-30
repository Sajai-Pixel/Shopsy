import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch = useDispatch()
  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  // console.log(allProducts);

  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleCards = allProducts?.slice(currentPageFirstProductIndex, currentPageLastProductIndex)

  const nextPage = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])
  return (
    <>
      <Header insideHome={true} />
      <div className='mt-[150px] w-[90%] mx-auto px-4 flex-grow'>
        {
          loading ?
            <div className='h-[60vh] flex flex-col justify-center items-center font-bold'>
              <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="loading" className='me-4' />
            </div>
            :
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                  allProducts.length > 0 ?
                    visibleCards?.map(product => (
                      <div key={product?.id} className="rounded-lg border-double border-4 border-blue-300 shadow-md p-4 h-[430px] flex flex-col">
                        <img
                          src={product?.thumbnail}
                          className="w-full h-[80%] object-cover rounded-t-lg"
                        />
                        <div className="flex-grow text-center mt-2">
                          <h3 className="text-lg font-semibold mb-2">{product?.title}</h3>
                          <Link to={`/${product?.id}/view`} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
                            View More
                          </Link>
                        </div>
                      </div>
                    ))

                    :
                    <div className='font-bolder text-center my-5 text-red-600'>
                      Product Not Found
                    </div>
                }

              </div>
              {/* pagination */}
              <div className="flex justify-center items-center my-5 text-2xl">
                <span onClick={previousPage}><i className='fa-solid fa-backward me-5 cursor-pointer'></i></span>
                <span> {currentPage} of {totalPages}</span>
                <span onClick={nextPage}><i className='fa-solid fa-forward ms-5 cursor-pointer'></i></span>
              </div>
            </>
        }

      </div>
    </>
  )
}

export default Home
