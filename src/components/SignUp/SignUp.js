import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-banner'>
            <div className='container '>
                <div className="row ">
                    <div className="col-md-12">
                        <div className="card m-auto my-5" style={{maxWidth: '25rem'}}>
                            <div className="card-body">
                            <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Create An Account</span>
                                <form action="">
                                    <input type="text" className='form-control my-3' placeholder="Enter Email" />

                                    <input className='form-control my-3' type="text" placeholder="Enter Password" />

                                    <input className='form-control my-3' type="text" placeholder="Enter Confirm Password" />

                                    <input type="submit" value="submit" class="submit-btn my-4" />
                                </form>
                                <Link to='/login' style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Already Have An Account?</Link>
                                <hr />
                                <h5 className="text-center my-3">OR</h5>
                                <button className="google-btn"><i class="fab fa-google text-primary"></i> Sign In With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;