import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl'>This is blogs post</h2>
            <div className='text-center mt-5'>
                <h3 className='text-2xl font-bold'>How will you improve the performance of a React Application</h3>
               <p> Keeping component state local where necessary.</p>
               <p> Memoizing React components to prevent unnecessary re-renders.</p>
               <p> Code-splitting in React using dynamic import</p>
               <p>  Windowing or list virtualization in React.</p>
               <p> Lazy loading images in React.</p>
            </div>
            <div className='text-center mt-5'>
                <h3 className='text-2xl font-bold'> What are the different ways to manage a state in a React application?</h3>
                  <div>
                      <h4>There are four main types of state you need to properly manage in your React apps:</h4>
                      <p>1. Server state</p>
                      <p>2. Global state</p>
                      <p>3. URL state</p>
                      <p>4. Local state</p>
                  </div>
            </div>
            <div className='text-center mt-5'>
                <h3 className='text-2xl font-bold'>How does prototypical inheritance work?</h3>
                <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
            </div>
            <div className='text-center mt-5'>
                <h3 className='text-2xl font-bold'>What is a unit test? </h3>
                 <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. </p>
                 <h3 className='text-2xl font-bold'> Why should write unit tests</h3>
                  <p>decrease defects and expose them early in the decrease defects and expose them early in the development lifecycle;</p>
                  <p>increase code readability;</p>
                  <p>enable code reuse; and</p>
                  <p>improve deployment velocity.</p>
            </div>
        </div>
    );
};

export default Blogs;