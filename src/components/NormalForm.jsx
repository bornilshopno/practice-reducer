import { useState } from "react";


const NormalForm = () => {
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" })

    const updateUserInfo=(input,value)=>{
        setUserInfo(prev=>({...prev,[input]:value,  }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
    }

    return (
        <div className="p-10">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-row justify-between items-center">
                <div className="card-body max-w-sm">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name"
                         value={userInfo.name}
                         onChange={(e)=>updateUserInfo(e.target.name,e.target.value)}
                         />
                        <label className="label">Email</label>
                        <input name="email" type="text" className="input" placeholder="Email"
                        value={userInfo.email}
                         onChange={(e)=>updateUserInfo(e.target.name,e.target.value)}
                        />
                        <label className="label">Address</label>
                        <input name="password" type="text" className="input" placeholder="Password"
                        value={userInfo.password}
                        onChange={(e)=>updateUserInfo(e.target.name,e.target.value)}
                        />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form >
                </div>

                <div>
                    <p>Name: {userInfo.name}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Address: {userInfo.password}</p>
                </div>
            </div>
        </div>
    );
};

export default NormalForm;