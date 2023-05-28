import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NotFound from '../Pages/NotFound'
import Search from '../Pages/Search'
import About from '../Pages/About'
import StartPage from '../Pages/StartPage'
import Contact from '../Pages/Contact'
import Test from '../Test/Test'
import Cars from '../FetchApi/Cars/FetchApiHookCars'
import Owners from '../FetchApi/Owners/FetchApiHookOwners'
import Workshops from '../FetchApi/Workshops/FetchApiHookWorkshops'
import RegistrationCar from '../RegisterForm/RegistrationCar'
import RegistrationOwner from '../RegisterForm/RegistrationOwner'
import RegistrationWorkshop from '../RegisterForm/RegistrationWorkshop'


const RouterReact = () => (
<Router>
    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/test" element={<Test />} />

        <Route path="/api/add-car" element={<RegistrationCar />} />
        <Route path="/cars" element={<Cars />} />

        <Route path="/owners" element={<Owners />} />
        <Route path="/api/add-owner" element={<RegistrationOwner />} />
        
        
        <Route path="/api/add-workshop" element={<RegistrationWorkshop />} />
        <Route path="/workshops" element={<Workshops />} />
        
        

    </Routes>
</Router>
)

export default RouterReact
