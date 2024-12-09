//SECTION 3.3.4 - Module Reducer

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    //4.5.1 - set the list of modules
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, { payload: module }) => {
      //add the new module to the list of modules
      state.modules = [...state.modules, module] as any;
    },
    deleteModule: (state, { payload: moduleId }) => {
      //use our payload to filter out modules in the list that have the given id
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map(
        (m: any) => {
          if (m._id === module._id) {
            return module;
          } else {
            return m;
          }
        }
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) => { //if this is the module with the correct id
        //map to a new object {} that has all the old fields but has editing set to true
        // eslint-disable-next-line no-lone-blocks
        {
          if (m._id === moduleId) {
            return ({ ...m, editing: true });
          } else {
            return (m);
          }

        }
      }
      ) as any;
    },
  },
});
export const { setModules, addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;