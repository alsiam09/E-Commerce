import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import prodectlogo from '../assets/proimg.png.jpg';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, ProRem } from './slice/prodectslice';
import { Link, useNavigate } from 'react-router-dom';
import { apiData } from './ContextApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navitem = () => {
  let prodect = useSelector((state) => state.prodect.CartItem);
  let dispatch = useDispatch();
  let UseData = useContext(apiData);

  let [showcate, setshowcate] = useState(false);
  let [showcart, setshowcart] = useState(false);
  let [showpro, setshowpro] = useState(false);

  let cateref = useRef();
  let proref = useRef();
  let cartref = useRef();

  let handleRemov = (index) => {
    dispatch(ProRem(index));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cateref.current.contains(e.target)) {
        setshowcate(!showcate);
      } else {
        setshowcate(false);
      }
      if (proref.current.contains(e.target)) {
        setshowpro(!showpro);
      } else {
        setshowpro(false);
      }
      if (cartref.current.contains(e.target)) {
        setshowcart(!showcart);
      } else {
        setshowcart(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showcate, showpro, showcart]);

  let [SVI, setSVI] = useState('');
  let [SItem, setSItem] = useState([]);
  let [highlightedIndex, setHighlightedIndex] = useState(-1);

  let HandleInput = (e) => {
    setSVI(e.target.value);
    if (e.target.value === "") {
      setSItem([]);
    } else {
      let SearchFilter = UseData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSItem(SearchFilter);
      setHighlightedIndex(-1); // Reset highlight index on new search
    }
  };

  let Navigate = useNavigate();

  let HandleId = (id) => {
    Navigate(`prodect/${id}`);
    setSItem([]);
    setSVI("");
    toast("Prodect changing...")
  };

  let HandleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < SItem.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      HandleId(SItem[highlightedIndex].id);
    }
  };

  return (
    <section className='bg-[#F5F5F3] mt-[80px]'>
       <ToastContainer />
      <div className="container justify-center md:p-0 p-[20px] md:h-[100px] md:justify-between md:flex mx-auto">
        <div ref={cateref} className="Category md:w-[25%] justify-center mb-[20px] md:mb-0 md:justify-start items-center gap-x-[10px] flex relative">
          <div className="icon"><FaBars /></div>
          <h2 className='font-sans'>Shop by Category</h2>
          {showcate && <ul className="cates absolute top-[30px] rounded-[10px] md:rounded-none left-[50%] translate-x-[-50%] md:translate-x-0 md:top-[65px] md:left-[0] w-[263px] overflow-y-hidden h-[300px] z-[999] bg-[#262626]">
            {/* Category Items */}
          </ul>}
        </div>
        <div className="Search relative flex md:w-[50%] items-center mx-auto">
          <input
            value={SVI}
            onKeyDown={HandleKeyDown}
            onChange={HandleInput}
            type="text"
            className='h-[50px] w-[100%] outline-none pl-[21px] font-sans'
            placeholder='Search Products'
          />
          <div className="icon absolute z-[1] right-[10px]"><IoSearchOutline /></div>
        </div>
        <div className="SItem fixed z-[999] w-[40%] left-[50%] top-[170px] translate-x-[-50%]">
          {SItem.length > 0 &&
            SItem.map((item, index) => (
              <div
                key={item.id}
                onClick={() => HandleId(item.id)}
                className={`box flex bg-[#fff] h-[100px] items-center justify-between px-[30px] ${highlightedIndex === index ? 'bg-gray-300' : ''}`}
              >
                <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                <span>{item.title.substring(0, 10) + "..."}</span>
              </div>
            ))
          }
        </div>
        <div className="md:block hidden user_and_cart md:w-[25%] md:flex gap-4 items-center justify-end">
          <div ref={proref} className="user relative text-[20px]"><FaUserCircle />
            {showpro && <ul className="cates absolute translate-x-[-50%] md:translate-x-0 md:top-[65px] md:right-[0px] w-[200px] h-[100px] z-[999] ">
              {/* Profile Items */}
            </ul>}
          </div>
          <div ref={cartref} className="cart relative text-[20px]">
            <div className="main relative"><FaShoppingCart />{prodect.length > 0 ? <span className='absolute top-[-10px] right-[-10px] text-[12px] flex justify-center items-center text-[#fff] bg-[green] w-[20px] h-[20px] rounded-[50%]'>{prodect.length}</span> : ""}</div>
            {showcart && <div className="w-[360px] z-[999] absolute top-[60px] right-0 p-[1px] bg-[#F0F0F0]">
              <div className="h-[500px] overflow-x-hidden">
                {prodect.map((item, index) => (
                  <div key={index} className="prodect items-center justify-between flex w-[100%] h-[120px] bg-[#F5F5F3] p-[20px]">
                    <img className='h-[80px] w-[80px]' src={item.thumbnail} alt="" />
                    <div className="detal items-center px-[20px]">
                      <h2 className='font-sans text-[14px] font-[700]'>{item.title}</h2>
                      <span className='font-sans text-[14px] font-[700]'>${item.price}</span>
                    </div>
                    <div onClick={() => handleRemov(index)} className="delet_item "><IoMdClose /></div>
                  </div>
                ))}
              </div>
              <div className="checkout h-[121px] pt-[14px] pl-[21px] pr-[22px] pb-[20px] bg-white w-[100%]">
                <h2 className='text-[16px] font-[400] font-sans text-[#767676]'>Subtotal: <span className='text-[#000] font-[700]'>$1292</span></h2>
                <div className="btn flex justify-between pt-[13px]">
                  <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] hover:bg-[#262626] hover:text-white'><Link to={'/cart'}>View Cart</Link></span>
                  <span className='border-[1px] border-[#262626] py-[16px] px-[40px] font-sans font-[700] text-[14px] hover:bg-[#262626] hover:text-white'>Checkout</span>
               






                  </div>
                </div>
              </div> }
            </div>
        </div>
    </div>
    </section>
  )
}

export default Navitem