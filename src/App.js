import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import mobile from './images/mobile-developer-bootcamp.png'
import software from './images/software-engineer-bootcamp.png'
import layer from './images/layer-114.png'
import layerMobile from './images/layer-115.png'
import begin from './images/beginner-php-fundamentals.png'
function App() {
  return (
    <div className="App h-100">
      <Header/>
      <div class="container ">
        <div class="row  pb-5">
          {/* Left Side */}
          <div class="col mt-5">
            
            <div class="card CardStyle">
              <div class="card-header CourseBlock">
                <div class="container ">
                  <div class="d-flex flex-row mt-5">
                    <div class="col-sm-4">
                    <img src={begin} className='rounded-sm mt-2 d-none d-lg-block' height={80} />
                    <img src={begin} className='rounded-sm mt-2 d-lg-none' height={40} />
                    </div>
                    <div class="col-sm-8">
                      <div class="d-none d-lg-block">
                        <h3 >
                        Web Development Bootcamp Trail
                        </h3>
                
                        <button type="button" class="btn ButtonColorStandardSmall" >Continue Your Trail <i class="bi bi-chevron-right"></i></button>
                      </div>
                      <div class="d-lg-none">
                        <p class="ms-2" >
                        Web Development Bootcamp Trail
                        </p>
                
                        <button type="button" class="btn ButtonColorStandard" >Continue Your Trail <i class="bi bi-chevron-right"></i></button>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
              <div className=' my-5 lineDivider'></div>
              <div class="card-body border-light ">
                <div class="d-flex flex-row">
                        <h5>Your Progress</h5>
                        <p>(1/4 complete)</p>
                </div>
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="row">
                      <div class="col-sm-6">
                        <button type="button" class="btn ButtonColorStandard" >Industry Knowledge 1 <i class="bi bi-check2"></i></button>
                      </div>
                      <div class="col-sm-6">
                        <button type="button" class="btn btn-outline ButtonColor" >Industry Knowledge 2 </button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <button type="button" class="btn btn-outline ButtonColor" >HTML Basics</button>
                      </div>
                      <div class="col-sm-6">
                        <button type="button" class="btn btn-outline ButtonColor">Your First PHP Script </button>
                      </div>
                    </div>
               
                  </div>
                </div>
              </div>
            </div>
            <h5 class="card-title mt-5 ps-5">Trail another Bootcamp</h5>
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="col">
                      <div class="d-flex flex-row mt-5">

                            <img src={layerMobile} className='rounded-sm' height={75}/>
                     
                   
                            <img src={mobile} className='rounded-end'  height={75}/>

                      </div>
                    </div>
               
                    <div class="col">
                      <div class="d-flex flex-row mt-5">

                            <img src={layer} className='rounded-sm' height={75}/>
                     
                   
                            <img src={software} className='rounded-end'  height={75}/>

                      </div>
                    </div>
                    
                  </div>
                </div>
          </div>
          {/* Right Side */}
          <div class="col">
            <div class='mt-5 d-flex flex-row '>
              <h5 class="align-self-center">Your coding journey</h5>
              <i class="bi bi-question-circle align-self-center ms-3" style={{fontSize: 25, color:"#989898"}}></i>
            </div>
            <div class="d-flex flex-row">
              <h1>1</h1>
              <h8 class="ms-3 text-center align-self-center">Total programs written</h8>
            </div>
            <div class="d-flex flex-row">
              <h1>4</h1>
              <h8 class="ms-3 text-center align-self-center">Total code reviews</h8>
            </div>
            <div className=' my-5 lineDivider'></div>
            <div class='mt-5'>
              <h5>Get more information</h5>
              <h8>We're ready to help with any questions you may</h8>
              <h8>have about our Bootcamps and Mentor Support</h8>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <button type="button" class="btn btn-outline ButtonColorSide" >Book a call</button>
              </div>
              <div class="col-sm-6">
                <button type="button" class="btn btn-outline ButtonColorSide">Join an info session</button>
              </div>
            </div>
            <div className=' my-5 lineDivider'></div>
            <div>
              <h5>Upgrade to the Full Bootcamp</h5>
              <h8>Our next cohort starts 3 January 2018</h8>
            </div>
            
            <div class="row">
              <div class="col-sm-6">
                <button type="button" class="btn btn-outline ButtonColor" >Reserve your spot</button>
              </div>
              <div class="col-sm-6">
              
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
