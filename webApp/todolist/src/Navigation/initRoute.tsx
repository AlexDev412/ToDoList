import { Route, Routes } from 'react-router-dom';
import LoginComponent from '../Authentication/Login/login';
import RegisterComponent from '../Authentication/Register/register';
import BoardComponent from '../Board/board';
import AppRoutes from './route';

function InitRoute() {
    return (
        <Routes>
            <Route path={AppRoutes.Register} element={<RegisterComponent />}/>
            <Route path={AppRoutes.Login} element={<LoginComponent />}/>
            <Route path={AppRoutes.Board} element={<BoardComponent />}/>
        </Routes>
    );
}

export default InitRoute;