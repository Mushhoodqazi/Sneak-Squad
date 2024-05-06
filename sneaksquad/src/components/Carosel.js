function Carosel() {
    return ( 
        <div >
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{
                
            }}>
  <div class="carousel-inner" style={{height:"400px"}}>
    <div class="carousel-item active"style={{height:"400px"}}>
      <img src="sneaker.png" class="d-block w-100" alt="..." style={{height:"400px", width:"1200px"}}/>
    </div> 
    <div class="carousel-item">
      <img src="sneaker.png" class="d-block w-100" alt="..." style={{height:"400px", width:"1200px"}}/>
    </div>
    <div class="carousel-item">
      <img src="sneaker.png" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
     );
}

export default Carosel;