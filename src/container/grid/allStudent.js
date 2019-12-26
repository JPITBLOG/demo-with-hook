import React,{useState} from "react";

function AllStudents() {
    const students = [
                        {name: `jigar`,
                            emailId: `jigspatel1177@gmail.com`,
                            password: `jigy1177`},
                        {name: `jigar1`,
                            emailId: `jigspatel1177@gmail.com1`,
                            password: `jigy11771`},
                        {name: `jigar2`,
                            emailId: `jigspatel1177@gmail.com2`,
                            password: `jigy11772`},
                        {name: `jigar3`,
                            emailId: `jigspatel1177@gmail.com3`,
                            password: `jigy11773`}
                            ];
    const [student, addStudent] = useState(students);
    const mappedAllstudent = () => {
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email-Id</th>
                    <th>Password</th>
                </tr>
                {student.map(parStudent => {
                    const {name, emailId, password} = parStudent;
                    return (<tr>
                        <td>{name}</td>
                        <td>{emailId}</td>
                        <td>{password}</td>
                    </tr>);
                })
                }
            </table>
        );
    }
    return (
        <div>
            <html>
            <body>
                {mappedAllstudent()}
            </body>
            </html>
        </div>
    );
}

export default AllStudents;