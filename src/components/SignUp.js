import React from 'react'

const SignUp = () => {
    return (

        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                    <p className="text-white-50 mb-5">Please register your account</p>

                                    <form method='POST'>
                                        <div className="form-outline form-white mb-4">
                                            {/* <label className="form-label" htmlFor="typeFirstName">Name</label> */}
                                            <input type="text" id="typeName" className="form-control form-control-lg" placeholder='Name' />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            {/* <label className="form-label" htmlFor="typeLastName">Email</label> */}
                                            <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder='Email' />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            {/* <label className="form-label" htmlFor="typeEmailX">Password</label> */}
                                            <input type="password" id="typePassword" className="form-control form-control-lg" placeholder='Password' />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            {/* <label className="form-label" htmlFor="typePasswordX">Password</label> */}
                                            <input type="password" id="typeReEnterPassword" className="form-control form-control-lg" placeholder='Re-enter Password' />
                                        </div>

                                        <br />
                                        <input type='checkbox' checked ></input>
                                        <p>By clicking Register, you agreed to our Terms of Use and Privacy Policy</p>


                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                                    </form>

                                </div>

                                <div>
                                    <p className="mb-0">Already Registered?
                                        {/* <Link to="/SignIn" className="text-white-50 fw-bold">Sign In</Link> */}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp