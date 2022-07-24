import React from 'react'
import '../style/logIn.css'
// import LogInModal from './LogInModal'
import {useState}from 'react'

const LogIn = () => {

    const [show, setShow] = useState(false);
console.log("#",show)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 


  return (
    <div className='logInAndPanier'>
        <button className='btn btnPanier'>mon panier   .  
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></button>
        <button className='btn btnLogIn' onClick={handleShow}>
            log in  .

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
{show &&(
<div className='modal'>
   
          
        <h3 className='title'> log in</h3>
        <input className='formation' type="text" placeholder="name"/><br/>
        <input className='formation' type="text" placeholder="second name"/><br/>
        <input className='formation' type="text" placeholder="mail"/><br/>
        <input 
        className='formation' type="password" placeholder="password"/><br/>
        
      <p className='buttonModal'>
        <button className='btnModal'onClick={handleClose}>close</button>
        <button className='btnModal'onClick={handleClose}>confirm</button>
    </p>
</div>
    
)}


    </div>

  )
}

export default LogIn

// function LogIn() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             I will not close if you click outside me. Don't even try to press
//             escape key.
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
  
// export default (<LogIn />);