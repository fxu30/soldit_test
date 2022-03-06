import React from 'react'

const ContactUs = () => {
    return (
        // <div>
        //     <h1>LPL</h1>
        //     <h2>Developer</h2>
        //     <div>
        //         <p>Feiye Chen</p>
        //         <p>Zhe Tian</p>
        //         <p>Ziming Tan</p>
        //         <p>Frank Xu</p>
        //     </div>

        //     <form >
        //         <fieldset>
        //             <legend>Contact US</legend>
        //             <input type='text' placeholder='Name'></input>
        //             <br />
        //             <input type='text' placeholder='Email'></input>
        //             <br />
        //             <textarea placeholder='Your message' rows={8} ></textarea>

        //             <br />
        //             <input type='submit' value='submit'></input>
        //         </fieldset>
        //     </form>

        // </div>


        <div className="flex-col-hcenter">

            <p className="txt-717">LPL</p>
            <p className="txt-2551 flex-hcenter">

                <p>Feiye Chen</p>
                <p>Zhe Tian</p>
                <p>Ziming Tan</p>
                <p>Frank Xu</p>

            </p>
            <div className="group-4 flex-col">
                <p className="txt-470">Contact us</p>

                <input type='text' placeholder='Name'></input>
                <br />
                <input type='text' placeholder='Email'></input>
                <br />
                <textarea placeholder='Your message' rows={8} ></textarea>

                <br />
                <input type='submit' className='btn btn-primary' value='submit'></input>

            </div>
           
        </div>

    )
}

export default ContactUs