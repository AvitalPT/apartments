import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {Login} from './features/user/Login'
import { SignUpAlert} from './features/user/SignUpAlert'
import { HomePage } from './Components/HomePage';
import Profile  from './features/user/Profile';
import AddApartment from './features/apartment/AddNewApartment';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { ShowApartmentDetails } from './features/apartment/ShowApartmentDetails';
import AddNewApartment from './features/apartment/AddNewApartment';
import Feedback from './Components/feedback'
import { Thanks } from './Components/Thanks';

export function Routing (props:any) {
    const CurrentUser = useSelector((state: RootState) => state.user.currentUser);
    return(
        <>
        <Routes>
            <Route path="/showapartment" element={<ShowApartmentDetails showSlide={props.showSlide} setShowSlide={props.setShowSlide}/>}></Route>
            <Route path="/profile" element={<Profile showSlide={props.showSlide} setShowSlide={props.setShowSlide}></Profile>}></Route>
            <Route path="/homepage" element={<HomePage showSlide={props.showSlide} setShowSlide={props.setShowSlide} currentUser={CurrentUser}/>}></Route>
            <Route path="/AddNewApartment" element={<AddNewApartment showSlide={props.showSlide} setShowSlide={props.setShowSlide}/>}></Route>
            <Route path="/feedbeck" element={<Feedback showSlide={props.showSlide} setShowSlide={props.setShowSlide}></Feedback>}></Route>
            <Route path="/thanks" element={<Thanks showSlide={props.showSlide} setShowSlide={props.setShowSlide}></Thanks>}></Route>


        </Routes>
        </>
    )

}