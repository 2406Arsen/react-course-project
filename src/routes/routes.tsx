import TodoList from '../Components/TodoList/TodoList';
import { MainPage } from '../pages/MainPage/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PostsPage } from '../pages/PostsPage/PostsPage';
import { PostPage } from '../pages/PostPage/PostPage';
import { NotFound } from '../pages/NotFound/NotFound';
import { CreateUserPage } from '../pages/CreateUserPage/CreateUserPage';
import { MemoizationPage } from '../pages/MemoizationPage/MemoizationPage';
import { CounterPage } from '../pages/CounterPage/CounterPage';


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
        path: '/posts',
        element: <PostsPage />
    },
    {
        path: '/posts/:id',
        element: <PostPage />
    },
    {
        path: '/counter',
        element: <CounterPage />
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
        path: '/posts',
        element: <PostsPage />
    },
    {
        path: '/posts/:id',
        element: <PostPage />
    },
    {
        path: '/counter',
        element: <CounterPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
]