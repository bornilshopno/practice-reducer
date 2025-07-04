import React, { useReducer } from 'react';

const Reducer = () => {
    const initialState = { name: "", email: "", address: "" }

    //* Reducer action
    //* {
    //* type:"FIELD_UPDATE";
    //* payload:{field:"name"; value:"PHero"}
    //* }
    const reducer = (state, action) => { 
        switch (action.type) {
            case "FIELD_UPDATE":
                {return {...state, [action.payload.field]:action.payload.value}}
                        
            default:
                state;
        }
     };

     const handleOnChange=(e)=>{
        dispatch({
            type:"FIELD_UPDATE",
            payload: {
                field: e.target.name,
                value:e.target.value
            }
        })
     }

    const handleSubmit = (e) => {
        e.prevent.default();
    }


    const [userInfo, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="p-10">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-row justify-between items-center">
                <div className="card-body max-w-sm">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name"
                            value={userInfo.name}
                            onChange={handleOnChange}
                        />
                        <label className="label">Email</label>
                        <input name="email" type="text" className="input" placeholder="Email"
                            value={userInfo.email}
                            onChange={handleOnChange}
                        />
                        <label className="label">Address</label>
                        <input name="password" type="text" className="input" placeholder="Password"
                            value={userInfo.password}
                            onChange={handleOnChange}
                        />
                        <button className="btn btn-neutral mt-4">Submit</button>
                    </form >
                        <button onClick={()=>{}}className="btn btn-neutral mt-4">Reset</button>
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

export default Reducer;