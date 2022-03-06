import React from 'react'

// Component only used in account setting page

const AccountSettingForm = () => {
  return (
    <div className="form-container flex-col">
            <form action=''>
                <div className='form-control'>
                    <label htmlFor='firstName'>First Name</label>
                    <br/>
                    <input type="text" id="firstName"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='lastName'>Last Name</label>
                    <br/>
                    <input type="text" id="lastName"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='userName'>username</label>
                    <br/>
                    <input type="text" id="userName"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <br/>
                    <input type="text" id="email"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='phone'>Phone Number</label>
                    <br/>
                    <input type="text" id="phone"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='postalCode'>Postal Code</label>
                    <br/>
                    <input type="text" id="postalCode"/>
                </div>
                <div className='form-control'>
                    <button className='btn' type='submit'>Update</button>
                </div>
            </form>
            
            <br />
            <form action=''>
                <div className='form-control'>
                    <label htmlFor='password'>Reset Password</label>
                    <br/>
                    
                    <input type="password" id="password"/>
                    
                    <br/>
                    <input type="password" id="passwordComfirm"/>
                </div>
                
                <div className='form-control'>
                    <button className='btn' type='submit'>Reset</button>
                </div>
            </form>
            {/*
            <p>Reset Password</p>
            <div className="reset-password-input">
              <p className="txt-475">New Password</p>
            </div>
            <div className="reset-password-input">
              <p className="txt-475">Confirm New Password</p>
            </div>
            */}
          </div>
  )
}

export default AccountSettingForm