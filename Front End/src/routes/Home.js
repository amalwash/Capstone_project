import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import ListCars from './ListCars';
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
      <br /> <br />
      <h2 className="main">Find the perfect car for your next trip</h2>
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
          <Link to="/detilsCars">
            <h5 class="card-title">Utes</h5>
            </Link>
          </div>
        </div>
        <div class="col">
        <Link to="/ListVanCar">
          <img  src="https://www.carnextdoor.com.au/assets/longtail/van-2a7bcc146dd745bfa895168d354bba8416eb82a068e7dc2e79b07297c3482a39.jpg" class="card-img-top" />
         </Link>
          <div class="card-body">
          <Link to="/detilsCars">
            <h5 class="card-title">Vans</h5>
            </Link>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="main">
        <h3>With your free car sharing membership, you can choose cars around carthe country</h3>
        <h3>We have cars close to home, airports and train stations to help you get around</h3>
      </div>
      <br /> <br />  <br /> <br />

      <div class="row row-cols-1 row-cols-md-3 g-4 cnd-justify-center">
        <div class="col cnd-justify-center">
          <a href='/ListCars'>
            <img src="riadh.jpg" class="card-img-top" /></a>
          <div class="card-body">
            <h5 class="card-title">AL Riyadh</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="damam.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">AL Dammam</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="maka.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Mecca</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="mon.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Madina AL Monawara</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="jadd.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Jeddah  </h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="tap.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Tabuk</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="naj.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title"> Najran </h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="arar.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Arar</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="alj.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Al-Jauf  </h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="aser.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Aser</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="hai.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">Hail</h5>
          </div>
        </div>
        <div class="col">
        <a href='/ListCars'>
          <img src="jas.jpg" class="card-img-top" />
          </a>
          <div class="card-body">
            <h5 class="card-title">jazan</h5>
          </div>
        </div>
      </div>

      <br /> <br /> <br /> <br /> <br />

      <br /> <br /> <br /> <br /> <br />
    </div>



  );
}

