import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
      
           <section className="contact">
           <div className="container">
               <div className="section-header text-center text-white ">
                    <h1 className="p-5">Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group p-3">
                           <input type="text" className="form-control p-3" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group p-3">
                           <input type="text" className="form-control p-3" placeholder="Subject *"/>
                       </div>
                       <div className="form-group p-3">
                           <textarea name="" className="form-control p-3" id="" cols="10" rows="5" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center pb-4">
                           <button type="button" className="btn btn-primary btn-lg submitButton"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
      
    );
};

export default Contact;