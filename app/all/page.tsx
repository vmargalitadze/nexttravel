"use client"
import React, { useState } from 'react';

import './all.css';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Pagination from '@/components/ui/Pagination';
import { BiChevronRight } from 'react-icons/bi';

const ToursPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the actual total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Current Page: ${page}`); // Handle pagination logic here (e.g., API call to fetch page data)
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="page-banner-content">
            <h2 className="allh2">ტურები</h2>
            <p className="pos"></p>
            <p className="allp">
              <Link className="allLink" href="/">მთავარი</Link> <BiChevronRight />   ტურები
            </p>
          </div>
        </div>
      </div>

      <div className="layout-pb-xl layout-pt-xl">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
          <div className="tours-sidebar">
          <div className="sidebar-content">
                                <h2  className='search2'>არ გადადო</h2>
                                <p className='searchp'>დაგეგმე შემდეგი მოგზაურობა</p>
                            </div>
                            <div className="tours-form">
                                <form>
									<input type="text" className="form-control" placeholder="მოძებნე" />
									<button type="submit">
                                        <FaSearch />
                                    </button>
								</form>
                            </div>
                            <div className="tours-price">
                                <h3>Filter By Price</h3>
                                <p>Price: $450-$3600</p>

                                <ul className="price-list">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Popular
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Latest
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios3">
                                            Europe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios3">
                                            Asia
                                        </label>
                                    </div>
                                  

                                    
                                </ul>
                            </div>
          </div>
        </div>

        
            <div className="col-lg-8">
              <div className="row">
             
                {[...Array(6)].map((_, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="tours-item">
                      <div className="tours-image">
                        <Link href="single-tours.html">
                          <img
                            className="allImage"
                            src="/images/460482863_8182527035118261_8661955846024105159_n.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="tours-content">
                        <h3>
                          <Link href="single-tours.html">Madrid</Link>
                        </h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing
                          and typesetting industry.
                        </p>
                        <ul className="tours-review">
                          <li>$1100</li>
                          <li>
                            <i className="fas fa-star"></i> 0.7
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursPage;
