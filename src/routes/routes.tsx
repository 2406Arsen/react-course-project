import TodoList from '../Components/TodoList/TodoList';
import { MainPage } from '../pages/MainPage/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NotFound } from '../pages/NotFound/NotFound';
import { CreateUserPage } from '../pages/CreateUserPage/CreateUserPage';
import { MemoizationPage } from '../pages/MemoizationPage/MemoizationPage';


export const publicRoutes = [
    {
        path: '/memoization',
        element: <MemoizationPage />
    },
    {
        path: '/createUser',
        element: <CreateUserPage />
    },
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
        path: '/memoization',
        element: <MemoizationPage />
    },
    {
        path: '/createUser',
        element: <CreateUserPage />
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