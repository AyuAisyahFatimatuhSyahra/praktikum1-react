import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Bmi from './Bmi';
import Bank from './Bank';
import Ppn from './Ppn';
import Bilangan from './Bilangan';
import Home from './Home';

const Utama = () => (
    
    <Routes>
        <Route path="/" component={Home} exact/>
        <Route path="/bmi" component={Bmi} />
        <Route path="/bank" component={Bank} />
        <Route path="/ppn" component={Ppn} />
        <Route path="/bilangan" component={Bilangan} />
    </Routes>
)

export default Utama;