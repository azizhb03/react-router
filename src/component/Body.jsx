import { Routes, Route, Navigate, Link } from "react-router-dom";
import { PublicWrapper, PrivateWrapper } from "./Wrapper";
import NotFound from "./NotFound";
import Private from "./Private";
import Public from "./Public";




function RouteApp() {
    
    return (
        <> <Routes>
        <Route
          path="/public"
          element={
            <PublicWrapper>
              <Public />
            </PublicWrapper>
          }
        />
        <Route
          path="/private"
          element={
            <PrivateWrapper>
              <Private />
            </PrivateWrapper>
          }
        />
        <Route path="/" element={<></>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={
            <Navigate to="/" />
        } />


        
      </Routes>
    
      </>
    );
  }
  
  export default RouteApp;