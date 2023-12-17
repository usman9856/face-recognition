import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


export default function StudentPage() {

    const data = [
        {
            id: 1,
            studentRoll: '03-1342AA-001',
            studentName: 'John Doe',
            birthDate: '1990-01-01',
            semester: 'Spring 2023',
            idInfo: 'ABC123XYZ',
            // Add more properties as needed
        },
        {
            id: 2,
            studentRoll: '03-1342BB-002',
            studentName: 'Jane Doe',
            birthDate: '1992-05-15',
            semester: 'Fall 2023',
            idInfo: 'DEF456UVW',
            // Add more properties as needed
        },
        {
            id: 3,
            studentRoll: '03-1342CC-003',
            studentName: 'Bob Smith',
            birthDate: '1988-11-30',
            semester: 'Summer 2023',
            idInfo: 'GHI789LMN',
            // Add more properties as needed
        },
        {
            id: 4,
            studentRoll: '03-1342DD-004',
            studentName: 'Alice Johnson',
            birthDate: '1995-08-22',
            semester: 'Winter 2023',
            idInfo: 'JKL012OPQ',
            // Add more properties as needed
        },
        {
            id: 5,
            studentRoll: '03-1342EE-005',
            studentName: 'David Williams',
            birthDate: '1993-04-12',
            semester: 'Spring 2023',
            idInfo: 'MNO345RST',
            // Add more properties as needed
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
            width: '150px',
        },
        {
            name: 'Student Name',
            selector: 'studentName',
            sortable: true,
            width: '220px',
        },
        {
            name: 'Birth Date',
            selector: 'birthDate',
            sortable: true,
            width: '120px',
        },
        {
            name: 'Semester',
            selector: 'semester',
            sortable: true,
            width: '150px',
        },
        {
            name: 'ID Info',
            selector: 'idInfo',
            sortable: true,
            width: '150px',
        },
        // Add more columns as needed
    ];
    
    

    



    return (
        <div className="bg-blue-200 h-screen">
            <div className="border border-gray-500 bg-yellow-400 h-20 flex items-center justify-between text-4xl px-4 font-serif">
                <h1 className="">Admin Dashboard</h1>
                <Link to="/"><button className="text-lg border-2 border-blue-400 rounded-xl px-4 bg-blue-400">Logout</button></Link>
            </div>            
            <div className="border-b-2 border-gray-400 my-10 mx-4 flex flex-row items-center justify-end h-[80px]">
                <button className="border-2 border-blue-300 bg-blue-400 rounded-xl px-4 py-2 mx-4 ">Add Students</button>
                <button className="border-2 border-blue-300 bg-blue-400 rounded-xl px-4 py-2 mx-4 ">Edit Records</button>
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