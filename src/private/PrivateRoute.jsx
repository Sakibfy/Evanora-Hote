import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner ";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  
  const location = useLocation()

  if (loading) return <LoadingSpinner></LoadingSpinner>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;