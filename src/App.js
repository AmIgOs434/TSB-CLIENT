


import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar11111";
import Footer from "./components/footer.js";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import ScrollToTop from './components/ScrollTop';
const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
  
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            user.setIsAdmin(true)
        }).finally(() => setLoading(false))
    }, [])
    if (loading) {
      return <Spinner animation={"grow"}/>
  }
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <NavBar />
            <AppRouter />
            <Footer />
        
        </BrowserRouter>
        
    );
    
});

export default App;