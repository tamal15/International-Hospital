import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <div>
        <section id="details us" class="details-us">
 <h1 className="mt-5 text-danger p-3">Contact US</h1>



<div className="row">
    <div className="details-col">
        <div>
        <i class="fas fa-home"></i>
            <span>
                <h5>XYZ Road, ABC Building</h5>
                <p>Dhanmondi, Dhaka</p>
            </span>

        </div>

        <div>
         <i className="fas fa-home"></i>
         <span>
             <h5>Hospital Name</h5>
             <h5>International Hospital</h5>
         </span>

     </div>

        <div>
            <i className="fas fa-envelope"></i>
            <span>
                <h5>info@marufultamal.com</h5>
                <h5>Email us your query</h5>
            </span>

        </div>

        <div>
            <i className="fa fa-phone"></i>
            <span>
                <h5>+1 01746445559</h5>
                <p>Tuesday to sunday, 10AM TO 6PM</p>
            </span>

        </div>


       
    
       
       

    </div>
    
   {/* <div class="col-lg-6 col-md-6 col-1 img">
    <img src={contact} alt="" />
   </div> */}
    <div className="details-col">
   <form action="">
    <input type="text" placeholder="enter your name" required/>
    <input type="text"  placeholder="email address" required/>
    <input type="text" placeholder="subject" required/>
    <input type="text" placeholder="message" required />
    <button type="submit" className="hero-btn red-btn">Send Message</button>
   </form>
</div>

   
</div>


{/* form  */}

{/* <div className="contact-col">
   <form action="">
    <input type="text" placeholder="enter your name" required/>
    <input type="text"  placeholder="email address" required/>
    <input type="text" placeholder="subject" required/>
    <input type="text" placeholder="message" required />
   </form>
</div> */}

</section>

<Footer></Footer>



   </div>
    );
};

export default Contact;