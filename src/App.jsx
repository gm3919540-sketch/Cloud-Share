import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import Upload from "./pages/Upload";
import { RedirectToSignIn, SignedIn ,SignedOut} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { UserCreditsProvider } from "./context/UserCreditContext";
import PublicFileView from "./components/PublicFileView";

const App=()=>{
  return (
    <UserCreditsProvider>
    <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/dashboard" element={
        <>
        <SignedIn><Dashboard /></SignedIn>
        <SignedOut><RedirectToSignIn /> </SignedOut>
        </>
      }></Route>
      <Route path="/upload" element={
         <>
        <SignedIn><Upload /></SignedIn>
        <SignedOut><RedirectToSignIn /> </SignedOut>
        </>
      }></Route>
      <Route path="/my-files" element={
         <>
        <SignedIn><MyFiles /></SignedIn>
        <SignedOut><RedirectToSignIn /> </SignedOut>
        </>
      }></Route>
      <Route path="/subscriptions" element={
         <>
        <SignedIn><Subscription /></SignedIn>
        <SignedOut><RedirectToSignIn /> </SignedOut>
        </>
      }></Route>
      <Route path="/Transactions" element={
         <>
        <SignedIn><Transactions /></SignedIn>
        <SignedOut><RedirectToSignIn /> </SignedOut>
        </>
      }></Route>
      <Route path="file/:fileId" element ={
        <>
        <PublicFileView/>
        </>
      } ></Route>
      <Route path="/*" element={<RedirectToSignIn />} />
       
    </Routes>
    </BrowserRouter>
     </UserCreditsProvider> 
  )
}
export default App;