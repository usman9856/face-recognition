import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


export default function StudentPage() {

    const data = [
        { 
            id: 1, 
            code: "C001", 
            registeredCourseTitle: "Introduction to Programming", 
            creditHours: 3,
            majors: "Computer Science",
            offeredCourseTitle: "Programming Fundamentals",
            class: "CS101",
            teacherName: "John Doe",
            feeStatus: "Paid",
            presentHours: 25,
            absentHours: 5,
            totalHours: 30
        },
        { 
            id: 2, 
            code: "C002", 
            registeredCourseTitle: "Data Structures", 
            creditHours: 4,
            majors: "Computer Science",
            offeredCourseTitle: "Advanced Data Structures",
            class: "CS201",
            teacherName: "Jane Smith",
            feeStatus: "Not Paid",
            presentHours: 20,
            absentHours: 10,
            totalHours: 30
        },
        { 
            id: 3, 
            code: "M001", 
            registeredCourseTitle: "Calculus I", 
            creditHours: 3,
            majors: "Mathematics",
            offeredCourseTitle: "Differential Calculus",
            class: "MA101",
            teacherName: "Robert Johnson",
            feeStatus: "Paid",
            presentHours: 28,
            absentHours: 2,
            totalHours: 30
        },
        { 
            id: 4, 
            code: "E001", 
            registeredCourseTitle: "Introduction to Electronics", 
            creditHours: 3,
            majors: "Electrical Engineering",
            offeredCourseTitle: "Circuit Analysis",
            class: "EE101",
            teacherName: "Emily White",
            feeStatus: "Paid",
            presentHours: 22,
            absentHours: 8,
            totalHours: 30
        },
        { 
            id: 5, 
            code: "B001", 
            registeredCourseTitle: "Principles of Biology", 
            creditHours: 3,
            majors: "Biology",
            offeredCourseTitle: "Genetics",
            class: "BIO101",
            teacherName: "David Brown",
            feeStatus: "Not Paid",
            presentHours: 18,
            absentHours: 12,
            totalHours: 30
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
            name: 'Code',
            selector: 'code',
            sortable: true,
            width: '75px',

        },
        {
            name: 'Registered Course Title',
            selector: 'registeredCourseTitle',
            sortable: true,
            width: '220px',

        },
        {
            name: 'Cr. Hours',
            selector: 'creditHours',
            sortable: true,
           

        },
        // {
        //     name: 'Majors',
        //     selector: 'majors',
        //     sortable: true,
        //     width: '175px',

        // },
        {
            name: 'Offered Course Title',
            selector: 'offeredCourseTitle',
            sortable: true,
            width: '200px',


        },
        {
            name: 'Class',
            selector: 'class',
            sortable: true,
           
        },
        {
            name: 'Teacher Name',
            selector: 'teacherName',
            sortable: true,
            width: '130px',

        },
        {
            name: 'Fee Status',
            selector: 'feeStatus',
            sortable: true,

        },
        {
            name: 'Present Hrs',
            selector: 'presentHours',
            sortable: true,
            width: '120px',


        },
        {
            name: 'Absent Hrs',
            selector: 'absentHours',
            sortable: true,
            width: '120px',

        },
        {
            name: 'Total Hours',
            selector: 'totalHours',
            sortable: true,

        },
       
    ];


    return (
        <div className="bg-blue-200 h-screen">
            <div className="border border-gray-500 bg-yellow-400 h-20 flex items-center justify-between text-4xl px-4 font-serif">
            <h1 className="">Student Dashboard</h1>
            <Link to="/"><button className="text-lg border-2 border-blue-400 rounded-xl px-4 bg-blue-400">Logout</button></Link>
            </div>
            <div className="border-2 border-gray-400 my-10 mx-4">
                <h2>Mark Attendance</h2>
              <span><a href="https://abcUniversity/Into-Programming/attendance">Click Link</a></span><span><p></p></span>
            </div>
            <div className="border-2 border-gray-400 my-10 mx-4">
                
                <DataTable
                    title="Attendance"
                    columns={columns}
                    data={data}
                    // pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    )
}