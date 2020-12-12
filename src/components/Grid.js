import React, { useState } from 'react'
import MovieData from '../data/MovieData.json';

import Popup from 'reactjs-popup';


function Grid() {

  const [show, setShow] = useState(false);

const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

         return (
        <div>
         
                
  <div className="row">
            {MovieData.map( (Movie, index) => {
                    return (
                      <>
                  <Popup trigger={  <img className="thumbImg" src={Movie.Thumbnail} onClick={handleShow} />} >
                      
                     
                         <div className="modal-content">
            <div className="modal-body">
                 <button className="close">
          &times;
        </button>
             <h2 className="showname">{Movie.name}</h2>
             <img className="showimage img-responsive"  width="100%" src={Movie.gif}/>
                    <p className="showcontent">{Movie.content}</p>
          </div>
          </div></Popup>
                        
           {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>  <h2 className="showname">{Movie.name}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <img className="showimage img-responsive" src={Movie.gif}/>
          <p className="showcontent">{Movie.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
        </>
                  
                    
                   
                    );
                   
                } )
            }
             </div>
        </div>
    )
   
}

export default Grid;