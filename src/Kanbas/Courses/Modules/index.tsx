import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LessonControlButtons from "./LessonControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

//icons and react components
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";


export default function Modules() {
  const { cid } = useParams<{ cid: string }>(); //get from url path

  const [moduleName, setModuleName] = useState(""); //local state variable for name of current module

  const { modules } = useSelector((state: any) => state.modulesReducer); //redux, list of modules
  const dispatch = useDispatch();

  //get list of modules from the server
  const fetchModules = async () => {
    //first ensure cid is a string and isn't undefined
    if (typeof cid === "string") {
      const serverModules = await coursesClient.findModulesForCourse(cid);
      dispatch(setModules(serverModules));
      console.log(`${JSON.stringify(serverModules, null, 1)}`);
    } else {
      throw new TypeError(`'cid' should be a string but is actually ${typeof cid}`)
    }
  };

  //automatically fetch modules from the server when we load this component
  useEffect(() => {
    fetchModules();
  }, []);

  useEffect(
    () => {console.log(`MODULES REDUX - ${JSON.stringify(modules, null, 1)}`)}, [modules]
  );

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const serverModule = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(serverModule));
    console.log(`REDUX AFTER CREATING NEW - ${JSON.stringify(modules, null, 1)}`);
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    console.log(`REDUX AFTER DELETING A MODULE - ${JSON.stringify(modules, null, 1)}`);
  };

  const saveModule = async (module: any) => {
    console.log(`modules - saveModule\n${JSON.stringify(module, null, 2)}`);
    console.log(`${module._id} - ${typeof module._id}`); //fixme: we lost the _id

    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
    console.log(`REDUX AFTER SAVING MODULE CHANGES - ${JSON.stringify(modules, null, 1)}`);
  };

  return (
    <div className="d-flex flex-column">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={createModuleForCourse}
      />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => {
          return (
            <li key={`$li-${module.name}-${module._id}`} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              {/* module title */}
              <div className="wd-title p-3 ps-2 bg-secondary clearfix">

                <BsGripVertical className="me-2 fs-3 float-start" />

                <div className=" fw-bold">
                  {!module.editing && module.name}
                  {module.editing && (
                    <input className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") { saveModule({ ...module, editing: false }); }
                      }}
                      defaultValue={module.name} />
                  )}
                </div>

                <div className="float-end">
                  <ModuleControlButtons moduleId={module._id}
                    deleteModule={(moduleId) => removeModule(moduleId)}
                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                </div>

              </div>

              {/* make the list of lessons underneath the module title */}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>)
              }
            </li>
          );
        })}
      </ul>

    </div>
  );
}
