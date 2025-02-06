import React, { useState } from 'react';

function State2() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [fullname, setFullname] = useState('');
    const [Submitted, setSubmitted] = useState(false);

    const handleFirstname = (e) => {
        const newFirstname = e.target.value;
        setFirstname(newFirstname);
        
        setFullname(newFirstname + ' ' + lastname);

        setSubmitted(false);

    }

    const handleLastname = (e) => {
        const newLastname = e.target.value;
        setLastname(newLastname);
        setFullname(firstname + ' ' + newLastname);
        setSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${fullname}`);
        // Clear the fields and full name
        setSubmitted(true);
        setFirstname('');
        setLastname('');
    }

    return (
        <div>
            <h2>Let's Check you in</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: {' '}
                    <input type="text" value={firstname} onChange={handleFirstname} />
                </label>
                <br />
                <label htmlFor="">
                    Last Name: {' '}
                    <input type="text" value={lastname} onChange={handleLastname} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {Submitted &&<p>Your ticket will be issued to: {fullname}</p>}

        </div>
    );
}

export default State2;
