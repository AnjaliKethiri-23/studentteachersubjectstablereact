
import StudentsData from "../data/students";
import Heading from "../common/Heading";
import Table from "../common/Table";
import Button from "../common/Button";

const Students = () => {
    const columns = Object.keys(StudentsData[0]);

    return (
        <>
            <Heading name={"Students"} />
            <Button value={"Add Student"} />
            <Table cols={columns} data={StudentsData} />
        </>
    );
};

export default Students;



// import students from "../data/students";
// import Heading from "../common/Heading";
// import Table from "../common/table";
// import Button from "../common/Button";

// const Students = () => {
//     const columns= Object.keys(students[0]);

    
//     return (
//         <>
//             <Heading name={"Students"}/>
//             {/* <table>
//                 <thead>
                    
//                     <th>ID</th>
//                     <th>NAME</th>
//                     <th>AGE</th>
//                     <th>CLASS</th>
//                     <th>MARKS</th>
                    
//                 </thead>
//                 <tbody>
//                     {
//                         students.length >0 ?(
//                             <>
//                                {
//                                 students.map((student,index)=>(
//                                     <>
//                                       <tr>
//                                         <td>{student.id}</td>
//                                         <td>{student.name}</td>
//                                         <td>{student.age}</td>
//                                         <td>{student.class}</td>
//                                         <td>{student.marks}</td>
//                                       </tr>
//                                     </>
//                                 ))
//                                }
//                             </>
//                         ):(
//                             <>
//                             <p>Data not avaliable</p>
//                             </>
//                         )

//                     }
//                 </tbody>
//             </table> */}
//             <Button value={"Add Student"}/>
//             <Table cols={columns} data={students}/>
//         </>
//     );
// };

// export default Students;