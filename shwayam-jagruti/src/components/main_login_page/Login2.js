import React, { Component } from 'react'



import   '../main_login_page/Login2.css'

import Admin from '../main_login_page/admin.png'
import User from '../main_login_page/user.png'
import Department from '../main_login_page/department.png'

export default class Login2 extends Component {
  render() {
    return (
      




<div className='outerbox'>

   <div className='innerbox'>




       <div className="d-flex justify-content-around" >




           
             <div className='admin'>

                 <div> <center><h1>Admin Login</h1></center></div><br/> 
                 <div> <center><img src={Admin}  height='150px' width='30%'/></center></div><br/>
                 <div><center><button className='rounded'> Click Here</button></center></div><br/>


             </div>







            <div className='user'>


                 <div> <center><h1>User Login</h1></center></div><br/> 
                 <div> <center><img src={User}  height='150px' width='30%'/></center></div><br/>
                 <div><center><button className='rounded'> Click Here</button></center></div><br/>
            
            </div>







            <div className='department'>

                 <div> <center><h1>Department Login</h1></center></div><br/> 
                 <div> <center><img src={Department}  height='105px' width='30%'/></center></div><br/>
                 <div><center><button className='rounded'> Click Here</button></center></div><br/>
                 
            </div>






       </div>




   </div>

</div>

    )
  }
}
