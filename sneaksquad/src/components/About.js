function About() {
    <style>
        .card-title{
            
        }
    </style>
    return ( 
        <div>
             <div className="card" >
      <img
        src="sneaker.png"
        className="card-img-top"
        alt="Card Image"
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-img-overlay">
        <h3 className="card-title">About Us</h3>
        <h5 className="card-text">We are a Authentic Sneaker selling Website that deals with all the top brands to make sure all the costumers are getting the best out of us</h5>
      </div>
    </div>
        </div>
     );
}

export default About;