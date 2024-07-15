import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Navbar from '../../layouts/Navbar';
import ActivityLogs from '../../pages/ActivityLogs';

const RouteDefinitions = () => {
    return (
        <Routes>
            <Route path="*" Component={NotFound} />
            <Route path="/" Component={Login} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/reporting-system" element={<ProtectedRoute> <ActivityLogs /> </ProtectedRoute>} />
            <Route element={<ProtectedRoute>{Navbar}</ProtectedRoute>} />

        </Routes >
    )
}

export default RouteDefinitions;
