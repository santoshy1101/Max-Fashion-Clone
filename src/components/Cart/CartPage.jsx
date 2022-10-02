import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartRemove, GetDataOfCartFromBackEnd } from '../../Redux/Action'

const CartPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GetDataOfCartFromBackEnd(userId))
   },[dispatch])
  const userId=useSelector((state)=>state.maxFashion.userId)
  const cartData=useSelector((state)=>state.maxFashion.cart1)


  let total = cartData.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.Price;
  }, 0);
  console.log("total",total)


   const handleRemove=(id)=>{
       dispatch(CartRemove(userId,id))
   }

  return (
    <div className="w-4/5 m-auto">
      <h1 className="font-medium">{cartData.length} :Product</h1>
      <div className="w-full flex">
        <div className="w-3/5 mr-1">
          {/* iterable div */}
          {cartData.map((e)=>{
            {console.log(e)}
            return (
            <div className="w-full border-gray-100 border-2">
            <div className="flex">
              <div className="w-20">
                <img
                  src={e.image1}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="font-medium mb-1">
                       {e.ProductName}
                </h1>
                <h1 className="font-medium mb-1">₹{e.Price}</h1>
                <p className="text-sm"> colour:{e.color}</p>
                <p className="text-sm">Size:{e.size}</p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="mt-2 flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 mr-2"
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
                <div> Delivery in Enter Pincode above</div>
              </div>
              <div className="mt-3">Qty:1</div>
            </div>
            <div className="w-full justify-between flex mt-4 border-gray-100 border-2 h-10 ">
              <div className="w-1/2 text-center mt-1">
                <button onClick={()=>{handleRemove(e._id)}} className="text-blue-700">Remove</button>
              </div>
              <div className="w-1/2 text-center mt-1">
                <button className="text-blue-700"> Move to favourites</button>
              </div>
            </div>
          </div>
            )
          })}
        </div>
        <div className="w-2/5">
          <div className="w-full ">
            <div className="border-gray-100 border-2 p-4">
              <div className="flex ">
                <div className="font-medium mt-3 mr-12">Deliver to</div>
                <input
                  className="border-gray-100 border-2 p-3 w-48 mr-6 "
                  placeholder="Enter pincode"
                  type="text"
                />
                <button className="border-gray-100 border-2 w-16 mr-6 text-blue-400">
                  Check
                </button>
              </div>
              <div className="bg-orange-50 w-full h-12 flex mt-3">
                <div className="text-sm p-1">
                  <p className="mt-3">
                    Enter pin code in box above for delivery estimates and
                    charges
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-5 mt-4 ml-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="border-gray-100 border-2 p-4 flex mt-4">
                <div className="w-24 mr-8">
                    <img src="https://www.maxfashion.in/static/icons/gift-box.png" alt="" />
                </div>
                <div className="mt-3">
                    <div className="flex justify-between">
                        <div className="font-medium">Offers for you !</div>
                        <div className="text-blue-400"> Select</div>
                    </div>
                    <div className="text-sm">
                        Choose and apply voucher in 2 simple steps
                    </div>
                </div>
            </div>
            <div className="border-gray-100 border-2 p-4 mt-5">
                <div className="flex justify-between">
                    <div className="text-sm">Total MRP</div>
                    <div className="font-medium">₹{total}</div>
                </div>
                <div className="flex justify-between">
                <div className="text-sm">Shipping charge</div>
                    <div className="font-medium">Free</div>
                </div>
            
            <div className="w-11/12 m-auto bg-slate-200 h-0.5 mt-5 rounded-sm"></div>
            <div className="flex justify-between p-4">
                <div className="text-2xl font-medium" >Total</div>
                <div className="text-2xl font-medium">₹{total}</div>
            </div>
            <Link to="/checkout" className="bg-blue-700 p-4">
                <button  className="ml-24 w-60 text-white font-medium text-xl">Checkout</button>
            </Link>
            <div className="bg-orange-50 w-full h-12 mt-3">
                <div className="text-sm p-1">
                  <p className="mt-3">
                  Shipping charges might vary based on pincode delivery location
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
