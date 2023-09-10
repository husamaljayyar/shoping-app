import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.userDetails.user.user);

    if (!user) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
};
export default ProtectedRoute