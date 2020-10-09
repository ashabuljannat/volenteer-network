import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import  img1 from '../../images/childSupport.png'
import  img2 from '../../images/animalShelter.png'
import  img3 from '../../images/babySit.png'
import  img4 from '../../images/birdHouse.png'
import  img5 from '../../images/cleanWater.png'
import  img6 from '../../images/clothSwap.png'
import  img7 from '../../images/driveSafety.png'
import  img9 from '../../images/foodCharity.png'
import  img10 from '../../images/goodEducation.png'
import  img11 from '../../images/clearnPark.png'
import  img12 from '../../images/ITHelp.png'
import  img13 from '../../images/libraryBooks.png'
import  img14 from '../../images/musicLessons.png'
import  img15 from '../../images/newBooks.png'
import  img16 from '../../images/refuseShelter.png'
import  img17 from '../../images/riverClean.png'
import  img18 from '../../images/schoolSuffiles.png'
import  img19 from '../../images/studyGroup.png'
import  img20 from '../../images/stuffedAnimals.png'
import  img21 from '../../images/voteRegister.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h4 style={{marginLeft: '35%',marginTop:'20px' }}>I GROW BY HELPING PEOPLE IN NEED</h4>
            <Form inline style={{marginLeft: '40%',marginBottom:'20px' }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>

            <div className="row">
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img1} className="card-img-top" alt="..."/>
                    <div className="  card-img-overlay">
                    <Link to="/registration"><p className='card-footer bg-danger'>Child Support</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img2} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                 
                    <Link to="/registration"><p className='card-footer bg-info'>Animal Shelter</p></Link>
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img3} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                   
                    <Link to="/registration"><p className='card-footer bg-warning'>BabySit</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img4} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                  
                    <Link to="/registration"><p className='card-footer bg-info'>Bird House</p></Link>
                    </div>
                    </div>
                </div>
          </div>
          <div className="row">
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img5} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    <Link to="/registration"><p className='card-footer bg-danger'>Clean Water</p></Link>
                   
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img6} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                   
                    <Link to="/registration"><p className='card-footer bg-warning'>Cloth Swap</p></Link>
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img7} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                 
                    <Link to="/registration"><p className='card-footer bg-info'>Drive Safety</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img20} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    
                    <Link to="/registration"><p className='card-footer bg-danger'>Food Charity</p></Link>
                    </div>
                    </div>
                </div>
          </div>
          <div className="row">
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img9} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    <Link to="/registration"><p className='card-footer bg-warning'>Good Education</p></Link>
          
                  
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img10} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    
                    <Link to="/registration"><p className='card-footer bg-info'>Clean Park</p></Link>
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img11} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                   
                    <Link to="/registration"><p className='card-footer bg-danger'>IT Help</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img12} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
           
                    <Link to="/registration"><p className='card-footer bg-warning'>Library</p></Link>
                    </div>
                    </div>
                </div>
          </div>
          <div className="row">
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img13} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    <Link to="/registration"><p className='card-footer bg-info'>Music</p></Link>
           
                 
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img14} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
               
                    <Link to="/registration"><p className='card-footer bg-danger'>New Books</p></Link>
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img15} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                
                    <Link to="/registration"><p className='card-footer bg-warning'>Refuse Shelter</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img16} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
               
                    <Link to="/registration"><p className='card-footer bg-info'>Clean River</p></Link>
                    </div>
                    </div>
                </div>
          </div>
          <div className="row">
                <div className="col mb-3">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img17} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    <Link to="/registration"><p className='card-footer bg-danger'>School Suffiles</p></Link>
                                      
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img18} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                   
                    <Link to="/registration"><p className='card-footer bg-warning'>Study Group</p></Link>
                    </div>      
                    </div>
                 </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                   <img src={img19} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                    
                    <Link to="/registration"><p className='card-footer bg-info'>Stuffed Animal</p></Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "12rem"}}>
                    <img src={img21} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay ">
                  
                    <Link to="/registration"><p className='card-footer bg-danger'>Vote Register</p></Link>
                    </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Home;