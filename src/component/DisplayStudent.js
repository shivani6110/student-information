import React from 'react'
import {Link} from "react-router-dom";

export default function DisplayStudent(props) {
    document.title="Student Details";
    if (props.students.length < 1) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">No Student Found</h1>
                        <Link to="/add" className="btn btn-success">Add Student</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Student Details</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map((element, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{element.fname} {element.lname}</td>
                                <td>{element.age}</td>
                                <td>{element.phone}</td>
                                <td>{element.email}</td>
                                <td>{element.address}</td>
                                <td className='text-decoration-none text-center'><Link to={'/edit/'+i}>✎</Link></td>
                                <td className='text-center cursor' onClick={()=>{props.deleteStudent(i)}}>🗑</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
    
}
