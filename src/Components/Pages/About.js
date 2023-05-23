import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './Contact'


const About = () => (
    <div>
    <h1>About</h1>
    <Link to={`/`}>HomePage</Link> | 
    <Link to={`about/contact`}>Contact</Link> | 
   
    
    <Routes>
        <Route path={`about/contact`} element={<Contact />} />
        
    </Routes>

    </div>

   
)

export default About
