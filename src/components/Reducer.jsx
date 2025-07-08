import React, { useReducer } from 'react';

const Reducer = () => {
    const initialState = { name: "", email: "", address: "" }


    const reducer = (state, action) => {
        switch (action.type) {
            case "FIELD_UPDATE":
                { return { ...state, [action.payload.field]: action.payload.value } }

            case "CLEAR":
                { return { ...state, [action.payload.field]: "" } }

            case "RESET":
                { return initialState }

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const handleOnChange = (e) => {
        // e.preventDefault(); onChange doesnt need it 
        dispatch({
            type: "FIELD_UPDATE",
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        })
    }

    const handleClear = ( name) => {
        dispatch({
            type: "CLEAR",
            payload: {
                field: name
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventdefault();
    }


    return (
        <div className="p-10">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-row justify-between items-center">
                <div className="card-body max-w-sm">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name"
                            value={state.name}
                            onChange={handleOnChange}
                        />
                        <button type="button" onClick={() => handleClear("name")}>Clear</button>
                        <label className="label">Email</label>
                        <input name="email" type="text" className="input" placeholder="Email"
                            value={state.email}
                            onChange={handleOnChange}
                        />
                        <button type="button" onClick={() => handleClear("email")}>Clear</button>

                        <label className="label">Address</label>
                        <input name="address" type="text" className="input" placeholder="Address"
                            value={state.address}
                            onChange={handleOnChange}
                        />
                        <button type="button" onClick={() => handleClear("address")}>Clear</button>

                        <button type="button" onClick={() => { dispatch({ type: "RESET" }) }} className="btn btn-neutral mt-4">Reset</button>
                        <button className="btn btn-neutral mt-4">Submit</button>
                    </form >
                </div>

                <div>
                    <p>Name: {state.name}</p>
                    <p>Email: {state.email}</p>
                    <p>Address: {state.address}</p>
                </div>
            </div>
        </div>
    );
};

export default Reducer;