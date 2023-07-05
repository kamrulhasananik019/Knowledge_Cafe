import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import '../BookMark/BookMark.css'

const Body = (props) => {

  const { author_name, blog_title, blog_cover_image, author_image, read_time, Publish_Date } = props.blogSs;
const watchTime =props.handleWatchTime;
const BookMarkS=props. handleBookMarks;
  return (
    <div>
      {/* This is Card Section */}
      <div className="card mb-3 border-0 ">
                <img src={blog_cover_image} className="card-img-top rounded-3" alt=""></img>
                    <div className="card-body d-flex justify-content-between">
                        <div className='d-flex gap-3'>
                        <div>
                            <img src={author_image} className='author-img' alt=""  />
                        </div>
                        <div className='text-sm-start'>
                            <p className='author-name'>{author_name}</p>
                            <p> <small> {Publish_Date}</small></p>
                        </div>
                        </div>
                        <div>
                          {/* Book Mark button  */}
                        <p>{read_time} min read 
                        <button onClick={()=>{BookMarkS(props.blogSs)}}
                        className='btn btn-lg' ><FontAwesomeIcon icon={faBookmark}/>
                        </button> </p>
                        </div>
                    </div>
                    <div className='text-start ps-3'>
                        <p className='blog-title'>{blog_title}</p>
                        <p>#beginners #programming</p>
                        {/* WatchTime button */}
                        <button onClick={()=>watchTime(props.blogSs)} className='btn t-color'>Mark as read</button>
                    </div>
            </div>
    </div>
  );
};

export default Body;
