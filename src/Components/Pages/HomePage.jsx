import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const users = [
        { user: "Admin", route: "/Admin" },
        { user: "Student", route: "/Student" },
        { user: "Faculty", route: "/Faculty" }
    ];

    return (
        <div className="flex items-center justify-center mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <div
                        key={user.user}
                        className="border border-gray-300 p-4 rounded-md bg-white hover:bg-blue-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 w-40f"
                    >
                        <center>
                            <button onClick={() => navigate('/Login', { state: { user: user.user } })}>
                                <h2 className="text-xl font-bold mb-2">{user.user}</h2>
                            </button>
                        </center>
                    </div>
                ))}
            </div>
        </div>
    );









    // const navigate = useNavigate();
    // return (
    //     <div className="flex items-center justify-center mt-20">
    //         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //             <div className=" border border-gray-300 p-4 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 w-40f ">
    //                 <center>
    //                     <button onClick={() => {
    //                         navigate('/Login', { state: { user: "Admin" } });
    //                     }}>
    //                         <h2 className="text-xl font-bold mb-2">
    //                             Admin
    //                         </h2>
    //                     </button>
    //                 </center>
    //                 {/* <center><Link to={{ pathname: '/Login', state: adminData }}><h2 className="text-xl font-bold mb-2">Admin</h2></Link></center> */}
    //                 {/* Add more content specific to Admin if needed */}
    //             </div>
    //             <div className=" border border-gray-300 p-4 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 w-40">
    //                 <center>
    //                     <button onClick={() => {
    //                         navigate('/Login', { state: { user: "Student" } });
    //                     }}>
    //                         <h2 className="text-xl font-bold mb-2">
    //                             Student
    //                         </h2>
    //                     </button>
    //                 </center>
    //                 {/* <center><Link to={{ pathname: '/Login', state: adminData }}><h2 className="text-xl font-bold mb-2">Student</h2></Link></center> */}
    //                 {/* Add more content specific to Student if needed */}
    //             </div>
    //             <div className=" border border-gray-300 p-4 rounded-md bg-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 w-40f ">
    //                 <center>
    //                     <button onClick={() => {
    //                         navigate('/Login', { state: { user: "Faculty" } });
    //                     }}>
    //                         <h2 className="text-xl font-bold mb-2">
    //                             Faculty
    //                         </h2>
    //                     </button>
    //                 </center>
    //                 {/* <center><Link to={{ pathname: '/Login', state: adminData }}><h2 className="text-xl font-bold mb-2">Faculty</h2></Link></center> */}
    //                 {/* Add more content specific to Faculty if needed */}
    //             </div>
    //         </div>
    //     </div>
    // );
}
