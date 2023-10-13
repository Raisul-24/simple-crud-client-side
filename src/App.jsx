
import './App.css'

function App() {
  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert("Users added Successfully");
        form.reset();
      }
    })

}
return (
  <div>

    <h1 className='mb-4'>Simple CRUD</h1>
    <form onSubmit={handleAddUser}>
      <input type="text" name='name' placeholder='name...'
        className='px-10 py-2 border-2 mb-5' /> <br />
      <input type="email" name='email' placeholder='email...'
        className='px-10 py-2 border-2 mb-5' /> <br />
      <input type="submit" value="Add User"
        className='btn btn-secondary' /> <br />
    </form>

  </div>
)
}

export default App
