import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


export default function StudentPage() {

    const data = [
        {
            id: 1,
            studentRoll: "03-134202-24",
            studentName: "Muhammad Ali",
            leave: true,
        },
        {
            id: 2,
            studentRoll: "03-134202-25",
            studentName: "Qasim Shah",
            leave: false,
        },
        {
            id: 3,
            studentRoll: "03-134202-26",
            studentName: "Syed Hamza",
            leave: true,
        },
        {
            id: 4,
            studentRoll: "03-134202-27",
            studentName: "Qirab Hassan",
            leave: true,
        },
        {
            id: 5,
            studentRoll: "03-134202-28",
            studentName: "Farha Qasim",
            leave: false,
        },
        // Add more data as needed
    ];


    const columns = [
        {
            name: 'Sr.',
            selector: 'id',
            sortable: true,
            width: '75px',
        },
        {
            name: 'Student Roll',
            selector: 'studentRoll',
            sortable: true,
            width: '275px',
        },
        {
            name: 'Student Name',
            selector: 'studentName',
            sortable: true,
            width: '220px',
        },
        {
            name: 'Leave',
            selector: 'leave',
            sortable: true,
            cell: (row) => (
                <input
                    type="radio"
                    name={`leaveRadio_${row.id}`}
                    checked={row.leave}
                    onChange={() => handleLeaveChange(row.studentRoll)}
                    onClick={(e) => e.stopPropagation()} // Prevents table row selection when clicking the radio button
                />
            ),
        },
    ];
    
    // Assuming you have a function to handle radio button changes
    const handleLeaveChange = (studentId) => {
        // Implement the logic to toggle the 'leave' status for the student with the given ID
        console.log(`Leave status changed for student with ID ${studentId}`);
        // Update the 'leave' status in your data/state accordingly
    };
    



    return (
        <div className="bg-blue-200 h-screen">
            <div className="border border-gray-500 bg-yellow-400 h-20 flex items-center justify-between text-4xl px-4 font-serif">
                <h1 className="">Faculty Dashboard</h1>
                <Link to="/"><button className="text-lg border-2 border-blue-400 rounded-xl px-4 bg-blue-400">Logout</button></Link>
            </div>            
            <div className="border-2 border-gray-400 my-10 mx-4">
                <DataTable
                    title="Students"
                    columns={columns}
                    data={data}
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    )
}