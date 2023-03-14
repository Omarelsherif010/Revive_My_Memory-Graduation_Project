import React, { Component } from 'react'
// import logo from '../../images/logo.jpg'
// import Homepage3 from '../../images/Home page 1.png'
// import Homepage1 from '../../images/Home page 2.jpg'
// import Homepage4 from '../../images/Home page 3.jpeg'
// import lastpage from '../../images/Home page 4.jpg'
// import left2 from '../../images/patient.jpg'
// import Home3 from '../../images/Doctor.jpg'
// import Hom3 from '../../images/volunter.jpg'
// import newmod from '../../images/HealthCenter.jpg'
// import newprec from '../../images/'
import volunter2 from '../../images/volunter2.jpg'
import Doctor  from '../../images/Doctor.jpg'
import volunter from '../../images/volunter.jpg'
import HealthCenter from '../../images/HealthCenter.jpg'
import Homepage1 from'../../images/Home page 1.png'
import Homepage2 from'../../images/Home page 2.jpg'
import newmod from '../../images/newmod.jpeg'
import newprec from'../../images/new-pracelete.jpg'
import Hom3new from '../../images/Hom3-new.PNG'
export default class Home extends Component {
  render() {
    return (
     <>
     {/* start Home Page */}
<div className='Home'>
  {/* start Home-content */}
  <div className='content mt-5'>
  <div className='container'>
    <div className='row d-flex justify-content-between'>
      <div className='col-md-6 col-sm-6 left-content mt-5'>
<h1>
  Revive My Memory 
</h1>
<p className='mb-5 text-muted'>
Memory Recovery is the goal we work to protect patients<br></br>
 aged 50 to 70. From Alzheimer's injury<br></br>
 The brain is always active, even during sleep<br></br>
  However, certain activities can engage the brain in new ways<br></br>
   potentially leading to improvements in memory, cognitive function, or creativity.
</p>
<button className='btn btn-primary me-4 mt-5 mb-5'>Login</button>
<button className='btn btn-light mt-5 mb-5'>SignUp</button>
      </div>
      <div className='col-md-6 right-content'>
        <div className='gallary-parent row d-flex justify-content-between'>
            
        </div>
        <div className='gallary'>
          <p>
            <img src={Homepage1}></img>
            <span className='ms-5 mt-2'>
          <img src={Homepage2}></img>
          </span>
          </p>
          <p>
            <img src={newmod}></img>
            <span className='ms-5 mt-2'>
          <img src={newprec}></img>
          </span>
          </p>
        </div>
        </div>
    </div>
  </div>
</div>

  {/* end Home-content */}
</div>
  {/*start Home part2 */}
   <div className='Home-part2 mt-5 mb-5'>
    <div className='container'>
    <div className='row d-flex justify-content-between'>
    <div className='left-part2 col-md-6'>
<img src={Homepage1}className='me-5'></img>
    </div>
    <div className='right-part2 col-md-6 '>
      <h2 className='text-primary mb-2 mt-5'>Revive My Memory</h2>
      <p className='text-primary mb-2 mt-3 p-part2'>
      Mild cognitive impairment (MCI) is the stage between<br></br> the expected decline in memory and thinking that happens<br></br> with age and the more serious decline of dementia.<br></br> MCI may include problems with memory, language<br></br>People with MCI may be aware that their memory<br></br> or mental function has "slipped."
      </p>
      <button className='btn btn-primary me-3 mt-3'>Register</button>
      <button className='btn btn-secondary mt-3'>Learn More</button>
      </div>
  </div>
    </div>
</div>
    {/* end Home part2 */}

    {/*start Home part3 */}
<div className='Home-part3 mb-5 '>
  <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
<h2 className='text-center mb-5 fw-bold text-primary'>Our Team</h2>
      <div className='left-part3 col-md-6'>
        <img src={Homepage2}></img>
      </div>

      <div className='right-part3 col-md-6'>
        <p className='text-muted fs-4 mt-2'>
        We Are Trying to assist The Mci Patient To commit to daily routine<br></br> and reminding him of the important events. developing new skills<br></br> and volunteering to the community to end Their difficulty<br></br> coming up with words.Through The MRi and pet scans, We can classify<br></br> whetherThe damaged Part Of The memory is MCI(Not Treatable)<br></br> or other(Treatable),So We can Help The Doctor To diagones The Patient efficiently.
        </p>
      </div>

    </div>
  </div>
</div>
    {/*End Home part3 */}

    {/*start Home part4 */}
<div className='Home-part4 mb-5'>
  <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center'>
      <h2 className="text-center text-danger fw-bold Tec mb-5">Our Technologies</h2>
<img src={Hom3new} className='w-100'></img>
    </div>
  </div>
</div>
    {/*end Home part4 */}

    {/*start part 5*/}
<div className='Home-part5 mb-5 mt-5'>
  <div className='container'>
  <h2 className="text-center text-primary text-center fw-bold mb-5">Model & Breclete</h2>
  <div className='row d-flex justify-content-around align-items-center mt-5 mb-5'>
<div className='lef-card col-md-6 gy-5'>
<div className="card p-5" >
  <h2 className='text-center fw-bold'>Classification Model</h2>
  <p className='text-muted'>is a machine learning Algorithm Help us To Know More About The type of data</p>
  <img src={newmod} className="card-img-top w-100" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Model Details</h5>
    <p className="card-text">AI systems work by combining large sets of data with intelligent, iterative processing algorithms</p>
    <span>for more information go to</span><a href="#" className="btn btn-primary ms-3">MemoAi</a>
  </div>
</div>
</div>
<div className='right-card col-md-6 gy-5'>
<div className="card p-1" >
  <h2 className='text-center fw-bold'>How Memory Works</h2>
  <p>
  the bracelet uses biometric sensors that measure the wearer’s heart rate, heart rate variability
  </p>
  <img src={newprec} className="card-img-top w-100" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Breclete</h5>
    <p className="card-text">there are some senarios for How Breclete Works And deal with Patient.</p>
   <span> for more information go to</span> 
   <a href="#" className="btn btn-primary ms-3">Breclete Details</a>
  </div>
</div>
</div>
  </div>
  </div>
</div>
    {/*End part5*/}
    {/*start Home part 6 */}
<div className='last-part mb-5'>
  <div className='container'>
    <h2 className='text-center text-primary fw-bold mt-5 mb-5'>Whole system</h2>
    <div className='row d-flex justify-content-between'>
      <div className='last-left1 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Doctor Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={Doctor} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s Mark I,m a doctor of al zahaimer<br></br> I can Treat More than Patient
    </p>
   <p>
   <span>You can connect Dirctly to Doctor</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
      </div>
      <div className='last-right1 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Patient Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter2} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">Hello my name,s Adam I,m a patient of al zahaimer I need Aperson for ito interested to what I do</p>
   <p>
   <span>You can connect Dirctly to Patient</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Volunter Name <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={volunter} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
        <div className='last-left2 col-md-6 gy-5'>
      <div className="card p-3" >
      <a href="#"className="btn btn-primary m-auto p-2
            mt-3 mb-4">Health center <i className="fa-solid fa-plus ms-2"></i></a>
  <img src={HealthCenter} className="card-img-top" alt="..."></img>
  <div className="card-body">

    <p className="card-text">
    Hello my name,s William I,m a Volunter of al zahaimer<br></br> I can help patient for 8 Hours EveryDaY
    </p>
   <p>
   <span>You can connect Dirctly to Volunter</span> 
   <a href="#" className="btn btn-primary ms-3">Connect</a>
    </p>
   <span className='spa-ic me-5'>or using
                 <span className='ms-5'>

                <i className="fa-brands fa-facebook text-primary "></i>
                <i className="fa-brands fa-whatsapp text-success ms-2 me-2 "></i>
                <i className="fa-solid fa-phone-volume text-danger "></i>
            </span> 
        </span>
  </div>
</div>
        </div>
    </div>
  </div>
</div>
   
     </>
    )
  }
}
