import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import LobbyPage from "./pages/LobbyPage";
import PublicRoute from "./components/PublicRoute";


export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/signup"
                        element={
                        <PublicRoute>
                            <SignUpPage/>
                        </PublicRoute>
                    }/>
                    <Route
                        path="/login"
                        element={
                        <PublicRoute>
                            <LoginPage/>
                        </PublicRoute>
                        }
                        />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <ProfilePage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/lobby"
                        element={
                            <PrivateRoute>
                                <LobbyPage/>
                            </PrivateRoute>
                        }
                    />
                </Routes>
        </Router>
    );
}