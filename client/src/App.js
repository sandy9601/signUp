import React, {useState} from 'react'

function App() {
  const [data,setaData]=useState(
    {
      usename:'',
      email:'',
      password:'',
      phoneNumber:'',
      confirmPassword:'',})
   const {username,email,password,confirmPassword}=data;
  return (
    <div>
      <center>
        <form>
          <input type="text"  name="username" value={username}/> <br />
          <input type="email" name="email" value={email}/> <br />
          <input type="password" name="password" value={password}/><br />
          <input type="password" name="confirmPassword"  value={confirmPassword}/><br />
          <input type="submit" name="submit"/> <br />
        </form>
      </center>
    </div>   
    
  );
}

export default App;
