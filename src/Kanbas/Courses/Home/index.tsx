import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td><Modules/></td>

                    <td width="20px"></td>

                    <td valign={"top"} style = {{backgroundColor: "#fff7f7", padding:"10px"}}><CourseStatus/></td>
                </tr>
                </tbody>

            </table>
        </div>
    );
}