import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import Upload from "./pages/Upload";

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/my-files" element={<MyFiles />}></Route>
      <Route path="/subscriptions" element={<Subscription />}></Route>
      <Route path="/Transactions" element={<Transactions />}></Route>
       
    </Routes>
    </BrowserRouter>
  )
}
export default App;