import React from 'react';


function Contact() {
    return (
        <div>
        <div className="map-full"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1608357924858!5m2!1sen!2sin" style={{"border":"0"}} allowFullScreen aria-hidden="false" tabIndex={0} width="100%" height="100%" frameBorder={0} />
        </div>
        <div className="contact-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>Contact</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors" />
                      </div>                                 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                        <div className="help-block with-errors" />
                      </div> 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select className="custom-select d-block form-control" id="guest" required data-error="Please Select Person">
                          <option disabled selected>Please Select Person*</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div> 
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        <textarea className="form-control" id="message" placeholder="Your Message" rows={4} data-error="Write your message" required defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="submit-button text-center">
                        <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden" /> 
                        <div className="clearfix" /> 
                      </div>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact
