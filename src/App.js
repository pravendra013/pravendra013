 

import './app.css'
import mmLogo from './images/logoMM.png';
function App() {

 function showMenu() {
   const navLinks = document.getElementById("navLinks");
     navLinks.style.right = "0";
 }

 function hideMenu() {
   const navLinks = document.getElementById("navLinks");
     navLinks.style.right = "-200px";
 }

 return (
   <section className="sub-header">
         <nav>
         <img className='logo' src={mmLogo} alt="MetaMix"/>
           <h2 className='title'>To Do</h2>
           
           <div className="nav-links" id="navLinks">
               <i className='fa fa-times' ></i>
               <i className='fa fa-times' ></i>

               <ul>
                   
                     <>
                       <li><button className='headerBtn A' href="/taskform" >Task Form</button></li>
                       <li><button className='headerBtn A' href="/personaltask"  >Personal Task</button></li>
                       <li><button className='headerBtn A' href="/assignedtask"  >Task for Me</button></li>
                       <li><button className='headerBtn A' href="/assigntask" >Task for Other</button></li>
                       <li className='username'><h6>username</h6></li>
                     </>
                     
                   
                   <> <button  className='OutBtn'>LOGOUT</button></>
                   
               </ul>
           </div>
          <i className='fa fa-bars' ></i>
       </nav>

   </section>




         
 );
}

export default App;
