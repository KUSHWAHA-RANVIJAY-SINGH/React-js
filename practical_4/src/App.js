import React, { useState } from 'react';
function App() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [acceptedTerms, setAcceptedTerms] = useState(false);
 const [selectedOption, setSelectedOption] = useState('');
 const handleSubmit = (event) => {
 event.preventDefault();
 // Handle form submission logic here
 console.log('Name:', name);
 console.log('Email:', email);
 console.log('Accepted Terms:', acceptedTerms);
 console.log('Selected Option:', selectedOption);
 };
 return (
 <form onSubmit={handleSubmit}>
 <label>
 Name:
 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 />
 </label>
 <br />
 <label>
 Password:
 <input
 type="password"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 </label>
<br />
 <label>
 <input
 type="checkbox"
 checked={acceptedTerms}
 onChange={(e) => setAcceptedTerms(e.target.checked)}
 />

 </label>
 <br />
 <label>
 Select an option:
 <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
 <option value="">Select an option</option>
 <option value="option1">Option 1</option>
 <option value="option2">Option 2</option>
 <option value="option3">Option 3</option>
 </select>
 </label>
 
 <br />
 <button type="submit">Submit</button>
 </form>
 );
}
export default App;