import { Routes, Route } from "react-router-dom"
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Contact from './Contact';

import RegisterForm from "./sub_component/RegisterForm";
import EditorForm from "./sub_component/EditorForm";
import DeleteForm from "./sub_component/DeleteForm";

import ViewStockDetail from './sub_component/ViewStockDetail';

export default function App() {
  return (
    <div>
      <h1 className='app-title'>Inventory Manager</h1>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='registernewstock' element={<RegisterForm />} />
        <Route exact path='editstock' element={<EditorForm />} />
        <Route exact path='deletestock' element={<DeleteForm />} />
        <Route exact path='viewstockdetail/:stockID' element={<ViewStockDetail />} />
        <Route exact path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
