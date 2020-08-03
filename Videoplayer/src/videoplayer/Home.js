import React from 'react';
import {Link} from 'react-router-dom';
import './Styling.css';
function Home(props) {
    //console.log(props);

    return (
        <>
         
        <div className="container">
            <div className="row">
             <div className="col col-sm-6 col-md-4 col-lg-4 bg-primary">
               
                 <Link to="/html">
                 <div className="col-11 ">
                 <h2 className="my-5 text-center  text-warning">HTML5 course</h2>
                 </div>
                 </Link>
               
             </div>
             <div className="col col-sm-6 col-md-4 col-lg-4  bg-success ">
               
                 <Link to="/bootstrap">
                 <div className="col-11">
                 <h2 className=" my-5 text-center text-warning">Bootstrap course</h2>
                 </div>
                 </Link>
               
             </div>
             <div className="col col-sm-6 col-md-4 col-lg-4  bg-info">
                 <Link to="/javascript">
                 <div className="col-11 ">
                 <h2 className="my-5  text-center text-warning">JavaScript course</h2>
                 </div>
                 </Link>
             </div>
             <div className="col col-sm-6 col-md-4 col-lg-4  bg-danger ">
               
                 <Link to="/reactjs">
                 <div className="col-11">
                 <h2 className=" my-5 text-center text-warning">Reactjs course</h2>
                 </div>
                 </Link>
               
             </div>
             <div className="col col-sm-6 col-md-4 col-lg-4 bg-dark ">
                
                 <Link to="/nodejs">
                 <div className="col-11  ">
                 <h2 className="my-5 text-center">Nodejs course</h2>
                 </div>
                  </Link>
                 
             </div>
             <div className="col col-sm-6 col-md-4 col-lg-4  bg-warning ">
                
                 <Link to="/expressjs">
                 <div className="col-11">
                <h2 className="my-5 text-center text-dark">Expressjs course</h2>
                </div>
                </Link>
                
            
       
             </div>
            </div>

            
        </div>
        </>
    );
}

export default Home;