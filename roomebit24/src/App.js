import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/Onboarding'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'

const App = () => {
 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/onboarding" element={<OnBoarding/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App