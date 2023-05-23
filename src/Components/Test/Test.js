import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../../Css/TestStyle.css'
const Test = () => (
<div >
    <h1><a href="/">CARBOOK APP</a></h1>

<a href="test/cars/add" class="button button2">ADD CAR</a>
<a href="test/cars/" class="button button2">SHOW CARS</a>
<br/>
<a href="test/owners/add" class="button button2">ADD OWNER</a>
<a href="test/owners" class="button button2">SHOW OWNERS</a>
<br/>
<a href="test/workshops/add" class="button button2">ADD WORKSHOP</a>
<a href="test/workshops" class="button button2">SHOW WORKSHOP</a>
<br/>

</div>
)

export default Test
