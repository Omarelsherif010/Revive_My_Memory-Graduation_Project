import React, { Component } from 'react'
import Doctor  from '../../images/Doctor.jpg'
import Mem1 from '../../images/Ahmed Tarek.PNG'
import Mem2 from '../../images/omar.PNG'
import Mem3 from '../../images/t12.PNG'
import Mem4 from '../../images/amr6.PNG'
import Mem5 from '../../images/Esmael.PNG'
import Mem6 from '../../images/Anas2.PNG'
export default class Team extends Component {
  render() {
    return (
  <>
<div className='Team'>
  <h1 className='text-center fw-bold'>Our Team</h1>
  <div className='container'>
    <div className='row d-flex justify-content-between align-items-center'>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem2} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card col-md-4 gy-5" style={{width: '25rem'}}>
  <img src={Mem6} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

  </>
    )
  }
}
