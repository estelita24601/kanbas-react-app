import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database"

export default function Modules() {
    const cid = useParams();
    const modules = db.modules.filter((module: any) => module.course === cid.cid);
    console.log(`CURRENT COURSE = ${cid.cid}`)

    return (
        <div className="d-flex flex-column">
            <ModulesControls />

            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .map((module: any) => {
                        console.log("hello???")
                        console.log(`\t\tcurrent module = ${module.name}`)
                        return (
                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {module.name} <ModuleControlButtons />
                                </div>
                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                            </li>
                                        ))}
                                    </ul>)
                                }
                            </li>
                        );
                    }

                    )
                }
            </ul>

        </div>
    );
}
