import React from "react";
import "./Contact.css";
export default function Contact() {
 return(
    <div>
    <div className='content-page'>
    <div className="contact-card">
                    <div className="contact__content">
                        <div className="contact__address">
                            <h5> Info Contact </h5>
                            <ul>
                                <li>
                                    <h6><i className="fa fa-phone"></i> Teléphone</h6>
                                    <p><span>95679811</span></p>
                                </li>
                                <li>
                                    <h6><i className="fa fa-headphones"></i> Support</h6>
                                    <p>fersimouadh5@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                       <form action='' method="post" className='d-flex flex-column gap-15'>
                            <div>
                                <input type='nom' name='nom' className='form-control' placeholder='Nom' required />
                            </div>
                            <div>
                                <input type='email' name='email' placeholder='E-mail' className='form-control' required />
                            </div>
                            <textarea className="form-control" placeholder="Message" required></textarea>

                            <div >
                   
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                   <button type="submit" className='button3 border-0'>Enovoyer message</button>
                        
                                </div>
                            </div>
                
                        </form>
                    </div>
                </div>
      </div>
   </div>
   
   )
  }
