import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NotFound from '../Pages/NotFound'
import Search from '../Pages/Search'
import About from '../Pages/About'
import StartPage from '../Pages/StartPage'
import Contact from '../Pages/Contact'
import Test from '../Test/Test'
import Cars from '../Cars/FetchApiHookCars'
import Owners from '../Owners/FetchApiHookOwners'
import Workshops from '../Workshops/FetchApiHookWorkshops'
import AddCar from '../Cars/AddCar'
import RegistrationOwner from '../LoginForm/RegistrationOwner'

const RouterReact = () => (
<Router>
    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/test" element={<Test />} />

        <Route path="/test/cars/add" element={<AddCar />} />
        <Route path="/test/cars" element={<Cars />} />

        <Route path="/test/owners" element={<Owners />} />
        <Route path="/test/owners/add" element={<Owners />} />
        
        <Route path="/test/workshops" element={<Workshops />} />
        <Route path="/test/workshops/add" element={<Workshops />} />
        
        <Route path="/register/owner" element={<RegistrationOwner />} />

    </Routes>
</Router>
)

export default RouterReact
