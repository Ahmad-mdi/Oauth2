import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import NotFound from "./components/Routes/basic-route/NotFound";
import Navbar from "./components/layout/navbar/Navbar";
import {routeObject} from "./components/Routes/objects/routeObject";
import {rootPathName} from "./components/assets/data/1";
import BaseUrl from "./components/Routes/root-route/BaseUrl";
import Login from "./components/Routes/basic-route/Login";
import LoginTest from'../src/components/Routes/basic-route/LoginTest'

function App() {
    const [direction, setDirection] = useState(true)
    const [openPages, setOpenPages] = useState([routeObject[0]]); // صفحه پیش‌فرض
    const pages = routeObject
    const [currentPage, setCurrentPage] = useState(pages[0].path);
    const [sideNav, setSideNav] = useState(true)

    return (
        <div className={'bg-[#ebedee] '} dir={direction ? 'rtl' : 'ltr'}>
            <Router>
                <Navbar
                    sideNav={sideNav}
                    setSideNav={setSideNav}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    openPages={openPages}
                    setOpenPages={setOpenPages}
                    setDirection={setDirection}
                    direction={direction}/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route
                        path={rootPathName}
                        element=
                            {
                                <div className={`${sideNav ? 'w-calc' : 'w-full'} `}>
                                    <BaseUrl
                                        pages={pages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}/>
                                </div>
                            }
                    />
                    <Route path="/test" element={<LoginTest />}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
