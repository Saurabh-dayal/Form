import './App.css';
import {useState} from 'react'

function App() {

  const[formData, setFromData] = useState({
    firstName: "", lastName: "", email: "" , country: "Select", streetAddress: "", city: "",
     state: "", postalcode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const {name, value, checked, type } = event.target;
    setFromData((prev) => ({...prev, [name]: type === "checkbox" ? checked: value}))
  }
function submitHandle(event){
  event.preventDefault();

  console.log("Finally printingthe the value of From Data:");
  console.log(formData);
}

  return (
    <div className="flex flex-col items-center mt-5 mb-20 ">
      <form onSubmit={submitHandle} className="bg-blue-200 p-20 rounded shadow-md">
      <label htmlFor='firstName' className="text-gray-1700 font-bold mt-2">&nbsp;&nbsp;First Name</label> <br></br>
        <input type='text'
        name='firstName'
        id='firstName'
        value={formData.firstName}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
         />
        <br></br>
        <div className='col-span-full mb-6'>
        <label htmlFor='lastName' className="text-gray-1700 font-bold mb-2">&nbsp;&nbsp;Last Name</label> <br></br>
        <input type='text'
        name='lastName'
        id='lastName'
        value={formData.lastName}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </div>
        <br></br>
<label htmlFor='email' className="text-gray-1700 font-bold">&nbsp;&nbsp;Email Address</label> <br></br>
        <input type='text'
        name='email'
        id='email'
        value={formData.email}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br></br>
        <label htmlFor='country' className="text-gray-1700 font-bold">Country &nbsp;&nbsp;&nbsp;</label><br></br><br></br>
        <select 
        id="country"
        name='country'
        value={formData.country}
        className='border-2 className="text-gray-1700 font-bold py-2 px-20 rounded"'> 
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>China</option>
          <option>Russia</option>
         </select>
         <br></br>
    <br></br>
         <label htmlFor='streetAddress' className="text-gray-1700 font-bold">&nbsp;&nbsp;Street Address</label> <br></br>
        <input type='text'
        name='streetAddress'
        id='streetAddress'
        value={formData.streetAddress}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
<br></br>
<label htmlFor='city' className="text-gray-1700 font-bold">&nbsp;&nbsp;City</label> <br></br>
        <input type='text'
        name='city'
        id='city'
        value={formData.cirty}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
<br></br>
<label htmlFor='state' className="text-gray-1700 font-bold">&nbsp;&nbsp;State / Province</label> <br></br>
        <input type='text'
        name='state'
        id='state'
        value={formData.state}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
<br></br>
<label htmlFor='postalcode' className="text-gray-1700 font-bold">&nbsp;&nbsp;ZIP/Postal Code</label> <br></br>
        <input type='text'
        name='postalcode'
        id='postalcode'
        value={formData.postalcode}
        onChange={changeHandler}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br></br>
        <br></br>
      <fieldset>
      <label className="text-gray-1700 font-bold">By Email</label>
      <br></br>
      <br></br>
        <div className='flex'>
        <input 
        id='comments'
        name='comments'
        type='checkbox'
        checked={formData.comments}
        onChange={changeHandler}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <div>
          <label htmlFor='comments' className="text-gray-1700 font-bold">&nbsp;&nbsp;Comments</label>
          <p className="mt-1 text-sm leading-6 text-gray-600">Get notified when someones posts a comment on a posting.</p>
        </div>
        </div>

        <div className='flex'>
        <input 
        id='candidates'
        name='candidates'
        type='checkbox'
        checked={formData.candidates}
        onChange={changeHandler}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <div>
          <label htmlFor='candidates' className="text-gray-1700 font-bold">&nbsp;&nbsp;Candidates</label>
          <p className="mt-1 text-sm leading-6 text-gray-600">Get notified when candidate applies for a job.</p>
        </div>
        </div>

        <div className='flex'>
        <input 
        id='offers'
        name='offers'
        type='checkbox'
        checked={formData.offers}
        onChange={changeHandler}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <div>
          <label htmlFor='offers' className="text-gray-1700 font-bold">&nbsp;&nbsp;Offers</label>
          <p className="mt-1 text-sm leading-6 text-gray-600">Get notified when candidate accepts or rejects and offer.</p>
        </div>
        </div>
      </fieldset>
      <br></br>
      <br></br>

       <fieldset>
        <legend className="font-medium text-gray-900">Push Notifications</legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
        <input
        type='radio'
        id='pushEverything'
        name='pushNotifications'
        value="Everything"
        onChange={changeHandler}
        />

        <label htmlFor='pushEverything ' className="text-gray-1700 font-bold">&nbsp;&nbsp;Everything</label>
        <br></br>

        <input
        type='radio'
        id='pushEmail'
        name='pushNotifications'
        value="Same as email"
        onChange={changeHandler}
        />

        <label htmlFor='pushEmail' className="text-gray-1700 font-bold">&nbsp;&nbsp;Same as email</label>
        <br></br>

        <input
        type='radio'
        id='pushNothing'
        name='pushNotifications'
        value="No Push Notofocations"
        onChange={changeHandler}
        />

        <label htmlFor='pushNothing ' className="text-gray-1700 font-bold">&nbsp;&nbsp;No Push Notifications</label>

      </fieldset>
      <br></br>
      <br></br>
      <div className="flex items-center justify-center h-full w-full">
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded"
      >Submit</button>
      </div>
      </form>
    </div>
  );
}

export default App;
