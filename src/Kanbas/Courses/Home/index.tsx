import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <div>
            {/* FIXME: looks bad when really skinny */}
            <div className="d-flex" id="wd-home">

                <div className="flex-fill">
                    <Modules />
                </div>

                <div className="d-none d-lg-block">
                    <CourseStatus />
                </div>

            </div>
        </div>
    );
}