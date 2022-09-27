import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import AppLayout from "./AppLayout";
import AuthProvider from "./Auth/AuthProvider";
import CreateKeyResult from "./CreateKeyResult";
import CreateObjective from "./CreateObjective";
import CreateTeam from "./CreateTeam";
import Dashboard from "./Dashboard";
import Edit from "./Edit";

import LogIn from "./LogIn";
import OKRList from "./OKRList";
import TeamList from "./TeamList";

import UserList from "./UserList";
import ViewKR from "./ViewKR";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="" element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="edit" element={<Edit />} /> */}
          <Route path="create" element={<Add />} />
          <Route path="teamlist" element={<TeamList />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="/okrlist" element={<OKRList />} />
         
           {/* <Route path="/editobjective" element={<EditObjective />} /> */}
          <Route path="/createobjective" element={<CreateObjective />} />
          <Route path="/createkeyresult" element={<CreateKeyResult />} />
          <Route path="/viewkeyresult"  element={<ViewKR/>} />
          <Route path="/createteam"  element={<CreateTeam/>} />
         
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
