// import React from 'react';

// const Table = ({ cols, data }) => {
//   return (
//     <div>
//       <table border="1">
//         <thead>
//           <tr>
//             {
//               cols.length > 0 && cols.map((col, index) => (
//                 <th key={index}>
//                   {col[0].toUpperCase() + col.slice(1)}
//                 </th>
//               ))
//             }
//           </tr>
//         </thead>

//         <tbody>
//           {
//             data.length > 0 ? (
//               data.map((d, i) => (
//                 <tr key={i}>
//                   {
//                     cols.map((col, index) => (
//                       <td key={index}>{d[col]}</td>
//                     ))
//                   }
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={cols.length}>Data not available</td>
//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;




import React from "react";

const Table = ({ cols, data }) => {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        {cols.map((col, index) => (
                            <th key={index}>
                                {col[0].toUpperCase() + col.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ? (
                        data.map((d) => (
                            <tr key={d.id}>
                                {cols.map((col) => (
                                    <td key={col}>{d[col]}</td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={cols.length}>
                                Data not available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
