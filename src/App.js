
import './App.css';


function App() {
  return (
     
    <div className="App">
       <h1>Bank Account</h1>
       <form>
        

             Name :
            <label> <input type='name'></input></label>
          <br></br>
          Age: 
          <label><input type=    'number'></input></label>
          <br></br>
          DOB:
          <label> <input type='number'></input></label>
          <br></br>
           PHONE number:
           <label> <input type='number'></input></label>        
            <br></br>
            Email:
          <label><input type='email'></input> </label>
          <br></br>
           account number:
          <input type='number'></input>
           <br></br>
          <input type='submit'></input>
               </form>
        </div>
     
  );
}

export default App;
