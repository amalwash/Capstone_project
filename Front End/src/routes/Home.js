
import '../index.css';
import {Link} from 'react-router-dom'


export default function Home() {

  return (
    <div className='main3'>

      <p><img className='imgg3' src="ffff.jpg" alt='lions' width="100" height="100" align="left" />
        <p className='ditails'> The app is to rent a car
          but not from a rental company
          but from <br />a person  like you and me who owns a car and registered through<br />
          this
          app to rent his own car for other people to use.</p>
      </p>

      <p><img className='imgg4' src="zx.jpg" alt='lions' width="100" height="100" align="right" />
        <p className='ditails2'> So this is just one on one with the person how is renting his  <br />Just through this application you can easily and without  <br />
          trouble rent a car anf you don't know maybe the car is next door</p>
      </p>
      <br /> <br /> <br />
      <h2 className='main'>How much does it cost?</h2>
      <h5 className='main'>Prices include fuel, damage cover and roadside assistance.</h5>

      <br /> <br />
      <hr />
      <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    {/* <h2 class="section-heading">With your free car sharing membership, you can choose cars around carthe country</h2> */}
                    <h3 class="section-subheading text-muted">With your free car sharing membership, you can choose cars around carthe country</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <a href='/ListCars'>
                        <img src="riadh.jpg" class="img-responsive"/> </a>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">AL Riyadh</p>
                        
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <a href='/ListCars'>
                        <img src="damam.jpg" class="img-responsive" alt=""/></a>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">AL Dammam</p>
                      
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="maka.jpg" class="img-responsive"/>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">Mecca</p>
                       
                    </div>
                </div>
                </div>
                </div>
                </section>
                
      <br /> <br />
      {/* <h2 className="main">Find the perfect car for your next trip</h2>
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4 cnd-hero--borrowers cnd-flex cnd-justify-center ">
        <div class="col">
          <Link to="/ListSmallCar">
          <img  src="https://www.carnextdoor.com.au/assets/longtail/car-deb29fbceed5391f4c31af6a03468dbe38f4691f505ff775b004e4a45ce4c573.jpg" class="card-img-top" />
          </Link>
          <div class="card-body">
            <h5 class="card-title">Small Car</h5>
            
          </div>
          
        </div>
        <div class="col">
        <Link to="/ListUteCar">

          <img  src="https://www.carnextdoor.com.au/assets/longtail/ute-cc88303ffc8a0057e675ece04be7dfd78b26db0d557f196839edaa57eecd3a29.jpg" class="card-img-top" />
          </Link>
          <div class="card-body">
          
            <h5 class="card-title">Utes</h5>
          
          </div>
        </div>
        <div class="col">
        <Link to="/ListVanCar">
          <img  src="https://www.carnextdoor.com.au/assets/longtail/van-2a7bcc146dd745bfa895168d354bba8416eb82a068e7dc2e79b07297c3482a39.jpg" class="card-img-top" />
         </Link>
          <div class="card-body">
          
            <h5 class="card-title">Vans</h5>
           
          </div>
        </div>
      </div> */}
      <br /> <br /> <br /> <br />

      <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    {/* <h2 class="section-heading">With your free car sharing membership, you can choose cars around carthe country</h2> */}
                    <h3 class="section-subheading text-muted">With your free car sharing membership, you can choose cars around carthe country</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <a href='/ListCars'>
                        <img src="riadh.jpg" class="img-responsive"/> </a>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">AL Riyadh</p>
                        
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <a href='/ListCars'>
                        <img src="damam.jpg" class="img-responsive" alt=""/></a>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">AL Dammam</p>
                      
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="maka.jpg" class="img-responsive"/>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">Mecca</p>
                       
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="mon.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        
                        <p class="text-muted">Madina AL Monawara</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="jadd.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Jeddah</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="tap.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Tabuk</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="hai.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Hail</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="aser.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Aser</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="alj.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Al-Jauf </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="arar.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Arar</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="naj.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                        <p class="text-muted">Najran</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="jas.jpg" class="img-responsive" alt=""/>
                    </a>
                    <div class="portfolio-caption">
                    <p class="text-muted">jazan</p>

                    
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/*  */}
      <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="glyphicon glyphicon-tree-conifer"></i>
                    </span>
                    <h4 class="service-heading">Here is a pokok</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="glyphicon glyphicon-heart"></i>
                    </span>
                    <h4 class="service-heading">Here's a heart</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="glyphicon glyphicon-tint"></i>
                    </span>
                    <h4 class="service-heading">Waterfall maybe?</h4>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    </section>
    </div>



  );
}

