import TodoList from '../Components/TodoList/TodoList';
import { MainPage } from '../pages/MainPage/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFound } from '../pages/NotFound/NotFound';


export const publicRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
]
export const privateRoutes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/todo',
        element: <TodoList />
    },
    {
        path: '*',
        element: <NotFound />
    },
]