import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const {user} = useSelector(state => state.authState);

    return (
        user ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute;