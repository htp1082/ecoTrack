import React, { use } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { NavLink, useNavigate } from 'react-router';

const Login = () => {

    const { googleSingInUser,signInUser } = use(AuthContext)
    const navigate = useNavigate();

    // google handler
    const googleHandler =(e)=>{
        e.preventDefault()
        console.log('button was cllk');
        googleSingInUser()
        .then(result =>{
            console.log(result)
            navigate('/')
        }).catch((eror)=>{
            console.log(eror)
        })
    }

    // submit handler
    const submitHandler =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then(result =>{
            console.log(result)
            navigate('/')
            
        }).catch((eror)=>{
            console.log(eror)
        })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-[var(--primary)] text-5xl font-bold py-3">Login to ecoTrack</h1>
                        <p className="py-2 text-[var(--secondary)]">
                            Welcome back! Sign in to continue your eco-friendly journey, track your progress, join sustainability challenges, and inspire others to make a positive impact.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={submitHandler} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><NavLink to={'/forgetPassword'} className="link link-hover">Forgot password?</NavLink></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                              <div className="divider">Or</div>
                            {/* Google */}
                            <button onClick={googleHandler} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                             <h2>Don't have an account? <a className='text-blue-500 font-bold' href="#">SignUp</a></h2>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;