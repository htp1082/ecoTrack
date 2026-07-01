import React, { use } from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Loader from '../Loading/Loader';

const Registration = () => {
    const { registrationUser, updateProfileUser, googleSingInUser } = use(AuthContext)
    const [passwordEror, setPasswordEror] = useState(" ")
    const [sucessfull, setsucessfull] = useState('')
    const [erorSMS, seterorSMS] = useState('')
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    if (loading) {
        <div className="min-h-screen flex items-center justify-center">
            <Loader></Loader>
        </div>
    }



    const signUpHandler = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.phototUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        setPasswordEror('')
        setsucessfull('')
        seterorSMS('')

        if (password.length < 6) {
            setPasswordEror('Password must be 6 character');
            return
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordEror("Password must contain at least one uppercase letter.")
            return
        }
        if (!/[a-z]/.test(password)) {
            setPasswordEror("Password must contain at least one lowercase letter.")
            return
        }
        if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
            setPasswordEror("Password must contain at least one special character.")
            return
        }

        setLoading(true)
        registrationUser(email, password)
            .then(() => {
                return updateProfileUser(name, photo);
            })
            .then(() => {
                console.log('Profile update');
                setsucessfull('Registration Sucessfull');
                e.target.reset();
                navigate('/login')
                setLoading(false)
            })
            .catch((eror) => {
                console.log(eror)
                seterorSMS(eror.message);
            })

    }

    const googleHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        googleSingInUser()
            .then(result => {
                console.log(result)
                setLoading(false)
                navigate('/')
            })
            .catch((eror) => {
                console.log(eror)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content">

                    <div className="card bg-base-400  shadow-2xl">
                        <div className="card-body p-10">
                            <div className="text-center">
                                <h1 className="text-[var(--primary)] text-5xl font-bold py-3">Join EcoTrack</h1>
                            </div>
                            <form onSubmit={signUpHandler} className="fieldset w-[300px] ">
                                <label className="label">Name</label>
                                <input type="text" className="input" name='name' required placeholder="name" />
                                <label className="label">Photo Url</label>
                                <input type="text" className="input" name='phototUrl' required placeholder="photoUrl" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" required placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" required placeholder="Password" />
                                {passwordEror && <h2 className='text-red-500 font-bold'>{passwordEror}</h2>}
                                <button className="btn btn-neutral mt-4">Login</button>

                                <div className="divider">Or</div>
                                {/* Google */}
                                <button onClick={googleHandler} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                            </form>

                            {
                                sucessfull && <h2 className='text-green-500 font-bold'>{sucessfull}</h2>
                            }

                            {
                                erorSMS && <h2 className='text-red-500 font-bold'>{erorSMS}</h2>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;