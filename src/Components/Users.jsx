// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
   const users = useLoaderData();
   const handleDelete = id =>{
      console.log('delete',id);
      fetch(`http://localhost:3000/users/${id}`,{
         method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
         if(data.deletedCount >0){
            alert("Deleted successfully");
         }
      })
   }
   return (
      <div>
         No of Users : {users.length}
         {
            users.map(user => <p 
               key={user._id}>
                  User Name: {user.name} Email : {user.email}
                  <Link to={`/update/${user._id}`}>
                  <button>Update</button></Link>
                  <button className="btn btn-success ml-4"
                  onClick={() => handleDelete(user._id)}>
                     Delate</button></p>)
         }
      </div>
   );
};

export default Users;