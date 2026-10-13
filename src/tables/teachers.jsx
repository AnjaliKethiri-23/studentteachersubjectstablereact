// import Heading from "../common/Heading";
// import teachers from "../data/teachers";
// // import Table from "../common/Table";
// import Table from "../common/table";
// const Teachers = () => {
//     const columns=Object.keys(teachers[0]);
//     return (
//         <>
//             <Heading name={"Teachers"}/>

//             {/* <table>
//                 <thead>
//                     <th>ID</th>
//                     <th>NAME</th>
//                     <th>SUBJECT</th>
//                     <th>EXPERIENCE</th>
//                     <th>SALARY</th>
//                 </thead>

//                 <tbody>
//                     {
//                         teachers.length >0 ?(
//                             <>
//                             {
//                                 teachers.map((teacher,index)=>(
//                                   <>
//                                   <tr>
//                                     <td>{teacher.id}</td>
//                                     <td>{teacher.name}</td>
//                                     <td>{teacher.subject}</td>
//                                     <td>{teacher.experience}</td>
//                                     <td>{teacher.salary}</td>
//                                   </tr>
//                                   </>
//                                 ))  
//                             }
//                             </>
//                         ):(
//                             <>
//                             <p>Data not avaliable</p>
//                             </>
//                         )    

//                     }
//                 </tbody>
//             </table> */}
//              <Button value={"Add Teacher"}/>
//             <Table cols={columns} data={teachers}/>
//         </>
//     );
// };

// export default Teachers;



import Heading from "../common/Heading";
import teachers from "../data/teachers";
import Table from "../common/Table";
import Button from "../common/Button";

const Teachers = () => {
    const columns = Object.keys(teachers[0]);

    return (
        <>
            <Heading name={"Teachers"} />
            <Button value={"Add Teacher"} />
            <Table cols={columns} data={teachers} />
        </>
    );
};

export default Teachers;
