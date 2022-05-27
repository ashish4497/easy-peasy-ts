import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminCountryList from '../components/AdminCountryList';
import CountryDataList from '../components/CountryDataList';
import CountryInfo from '../components/CountryInfo';


export default function NavigationRoot() {
  return (
    <>
    <Routes>
      <Route path='/' element={<CountryDataList/>}/>
      <Route path='/countryinfo' element={<CountryInfo/>}/>
      <Route path='/adminCountryList' element={<AdminCountryList/>}/>
    </Routes>
    </>
  )
}
