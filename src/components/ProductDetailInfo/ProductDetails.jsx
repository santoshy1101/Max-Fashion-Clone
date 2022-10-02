import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  AddToCartBackend,
  GetDataOfCartFromBackEnd,
  getIndividualData,
} from '../../Redux/Action'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.maxFashion.userId)
  const addtocart = (elemId) => {
    dispatch(AddToCartBackend({ userId, elemId }))
    dispatch(GetDataOfCartFromBackEnd(userId))
  }
  const { id } = useParams()
  useEffect(() => {
    dispatch(getIndividualData(id))
  }, [])
  const Individual = useSelector((state) => state.maxFashion.currentProduct)
  console.log(Individual)
  return (
    <div className="w=full">
      <div className="w-4/5 m-auto">
        <h1>Max men printed slim fit crew nexk t-shirt</h1>
        <div className="w-full flex">
          <div className="w-3/5 mr-8">
            <div className="flex">
              <div className="mr-2 mb-2">
                <img src={Individual.image1} alt="" />
              </div>
              <div>
                <img src={Individual.image2} alt="" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2 mb-2">
                <img src={Individual.image3} alt="" />
              </div>
              <div>
                <img src={Individual.image4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex">
              <div className="mt-1">$</div>
              <div className="text-3xl mr-3 font-medium">
                {Individual.Price}
              </div>
              <div className="mt-3 text-gray-500">Inclusive of all taxes</div>
            </div>
            <div className="flex justify-between mt-1">
              <div className="text-indigo-700 underline ">
                Free shippping on all orders
              </div>
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 mt-1 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>Earn 1 point</div>
                <div className="h-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-6 mt-1  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-5 flex">
              <div>Color:</div>
              <div className="font-medium ml-2">{Individual.color}</div>
            </div>
            <div className="h-16 w-16 border-yellow-400 border-2 mt-4">
              <img className="h-full w-full " src={Individual.image1} alt="" />
            </div>
            <div className="flex justify-between mt-5 ">
              <div>Size:</div>
              <div className="underline">Size Guide</div>
            </div>
            <div className="flex justify-between w-full mt-4 text-center h-10">
              <div className="border-blue-200 border-2 w-1/6 mr-3">SX</div>
              <div className="border-blue-200 border-2 w-1/6  mr-3">S</div>
              <div className="border-blue-200 border-2 w-1/6  mr-3">M</div>
              <div className="border-blue-200 border-2 w-1/6  mr-3">L</div>
              <div className="border-blue-200 border-2 w-1/6  mr-3">XL</div>
              <div className="border-blue-200 border-2 w-1/6  mr-3">XXL</div>
            </div>
            <div
              onClick={() => {
                addtocart(Individual._id)
              }}
              className="w-full h-12 mt-7 bg-blue-800 text-center"
            >
              <button className="w-full text-center py-3 text-white font-medium ">
                ADD TO BASKET
              </button>
            </div>
            <div className="flex mt-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="font-medium">Add to Favourite</div>
            </div>
            <div className="w-full bg-slate-200 h-0.5 mt-4 mb-4 rounded-sm"></div>
            <span className="p-2 text-xs bg-gray-100 text-red-600 font-medium ">
              PROMOTION OFFER
            </span>
            <div className="text-sm mt-5">
              FLAT Rs.200 Off on 1999 & above orders, code- MAX200 | Get Rs.100
              off on orders above 999 (first purchase only), code- NEW100 Browse
              promotion
            </div>
            <div className="w-full bg-slate-200 h-0.5 mt-6 mb-4 rounded-sm"></div>
            <div className="flex">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">Click & Collect</div>
                <div className="text-sm">
                  Order this product now and collect it from a store of your
                  choice. Learn more
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">Pay in installments</div>
                <div className="text-sm">
                  Pay in easy installments on orders of ₹ 3,000 or more.
                  Available for select banks. Learn more
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium">When will I receive my order?</div>
                <div className="flex mt-1">
                  <input
                    className="p-2 mt-1 w-80 mr-2 border-gray-300 border-2"
                    type="text border"
                    placeholder="Enter your Pincode"
                  />
                  <div className="mt-1">
                    <button className="bg-blue-700 p-3 h-13 ">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-0.5 mt-6 mb-4 rounded-sm"></div>
            <span className="font-medium">Overview</span>
            <div className="text-sm">
              Give a trendy change in your casual wardrobe with this T-shirt
              designed with half sleeves, and a crew neckline.
            </div>
            <div className="w-full bg-slate-100 h-0.5 mt-6 mb-4 rounded-sm"></div>
            <div className="flex">
              <div className="flex mr-6">
                <div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="svg-inline--fa fa-facebook-f w-2.5 mt-1 mr-2 text-white bg-sky-800"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </div>
                <div>Share</div>
              </div>
              <div className="flex">
                <div>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="svg-inline--fa fa-twitter  w-4 mt-1  mr-2 bg-sky-500 text-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </div>
                <div>Tweet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 bg-orange-50 mt-12 flex">
        <div className="ml-36">
          <h1 className="text-4xl mb-7 pt-12">Reviews</h1>
        </div>
        <div className="ml-48 mt-36 flex">
          <div className="mt-3 mr-4">
            <img
              src=" https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/write-review.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-medium w-60">
            What do you think about this product ?
          </div>
        </div>
        <div className="ml-8 mt-36">
          <button className="p-3 border-2 border-blue-300 w-72 font-medium text-blue-700 ">
            {' '}
            WRITE A REVIEW
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
