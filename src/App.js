import { Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';

import RegisterForm from "./components/sub_component/forms/RegisterForm";
import EditorForm from "./components/sub_component/forms/EditorForm";
import DeleteForm from "./components/sub_component/forms/DeleteForm";

import ViewStockDetail from './components/sub_component/ViewStockDetail';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='contact' element={<Contact />} />
        <Route exact path='viewstockdetail/:stockID' element={<ViewStockDetail />} />
        <Route exact path='registernewstock' element={<RegisterForm />} />
        <Route exact path='editstock' element={<EditorForm />} />
        <Route exact path='deletestock' element={<DeleteForm />} />
      </Routes>
    </>
  );
}

export default App;
