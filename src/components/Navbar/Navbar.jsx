import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { HandleUserLogout } from '../../Redux/Action'

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handlelogoout=() => {
      console.log("logout")
      dispatch(HandleUserLogout())
      navigate("/")
  }
  const userName=useSelector((state)=>state.maxFashion.userName)
  const userID=useSelector((state)=>state.maxFashion.userId)
  console.log(userID)
  console.log(userName)
  const cartData = useSelector((state) => state.maxFashion.cart1)
  const cartDatalength=cartData.length
  return (
    <div className="w-4/5 m-auto flex bg-slate-100">
      <Link to="/" className="w-1/12">
        <img
          src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
          alt=""
          className="w-full"
        />
      </Link>
      <div className="w-1/4 flex justify-around py-4">
        <Link to="/" className="font-medium hover:text-blue-800">Women</Link>
        <Link to="/mens" className="font-medium hover:text-blue-800">Men</Link>
        <Link to="/girls" className="font-medium hover:text-blue-800">Girls</Link>
        <Link to="/boys" className="font-medium hover:text-blue-800">Boys</Link>
      </div>
      <div className="w-2/5 py-2">
        <div className="flex h-10 py-2 bg-gray-200">
          <div className="py-1 px-3">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="w-3/4">
            <input
              className="w-full bg-gray-200 focus:outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        </div>
      </div>
      <div className="w-3/12 flex justify-around py-4">
        {userName!=""?<div className="flex"><div className="font-medium">Hi {userName}</div> <div onClick={()=>{handlelogoout()}} className="font-medium ml-9">Logout</div></div> :<Link to="/register" className="font-medium ml-4">Sign UP-Sign In</Link>}
        <div className="flex">
          <Link  to="/cart" className="font-medium mr-2">Basket</Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          {userID?<div className="font-medium">{cartDatalength}</div>:0}
        </div>
      </div>
    </div>
  )
}

export default Navbar

{
  /* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
<div className="container flex flex-wrap justify-between items-center mx-auto">
  <a className="flex items-center">
    <img
      src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
      className="mr-3 h-10 sm:h-9"
    />
  </a>
  <div
    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
    id="mobile-menu-3"
  >
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
          aria-current="page"
        >
          Womens
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Mens
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Girls
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Kids
        </a>
      </li>
    </ul>
  </div>
  <div className="flex md:order-2">
    <div className="hidden relative md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block p-2 pl-10 w-full  rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="What are you looking for?"
      />
    </div>
  </div>
</div>
</nav> */
}

{
  /* <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div> */
}
