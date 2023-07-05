import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import BookMark from '../BookMark/BookMark';
import { faColonSign } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import BlogAns from '../BlogAns/BlogAns';


const Blogs = () => {
    const [blog,setBlog]=useState([])
    const [cart,setCart]=useState([]);
    const [books,setBook]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res=> res.json())
        .then(data=> setBlog(data))
    },[])

    // ________WatchTime___handler___________
    const watchTime=(blogSs)=>{
        const newTime=[...cart,blogSs];
        setCart(newTime);
    }

// ______________BookMark__handler__________________
    const BookMarkS=(blogSs)=>{
    const newBook=[...books,blogSs];

    if(books.includes(blogSs)){
        toast('already added')
    }else{
    setBook(newBook);
    }
        }


    return (
        <div >
        <div className="container text-center">
            <div className="row">

                {/*  // _______card  Section___________ */}
                <div className="col col-md-8 mt-5">
                {blog.map(blogSs=>
                <Body 
                handleWatchTime={watchTime}
                handleBookMarks={BookMarkS}
                key={blogSs.id} blogSs={blogSs}></Body> )}
                </div>

                {/* book Mark  Section */}
                <div className="col col-md-4">
             <BookMark cart={cart} key={books.id} book={books}></BookMark>
                </div>
            </div>      
        </div>
        {/* Blog ans Section */}
      <BlogAns></BlogAns>
    </div>
    );
};

export default Blogs;