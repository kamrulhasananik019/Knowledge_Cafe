import React from 'react';
import './BookMark.css'
const BookMark = (props) => {
  const cart=props.cart;
  const book=props.book;

   let total=0;
   for(const product of cart){
    total=total+ product.read_time;
   }

    return (
        <div className='sticky-top'>
          <div className='bg-c border border-primary mt-5 p-3 rounded-3 '>
                 {/* book mark add show */}
       <h3 className='t-color'>
        Spent time on read : {total} min</h3>
          </div>
          <div className='bg-c mt-3 p-3 rounded-3 text-start'>
       {/* blog title show here */}
            <h3 className='py-2'>Bookmarked Blogs :{book.length} </h3>
          {book.map(b=> <div key={b.id}> 
                <h5 className='border bg-light p-4 rounded-3'>
          {b.blog_title} 
                </h5></div> )}
             </div>
        </div>
    );
};

export default BookMark;