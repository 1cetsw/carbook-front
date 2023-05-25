import {BrowserRouter as  useLocation} from 'react-router-dom'

const Search = () => {
    console.log(useLocation());
    const query = new URLSearchParams(useLocation().search)
    const term = query.get('q')
    console.log(term)
    
const Items = [
    'Lorem Ipsum',
    'Ipsum Dipsum',
    'Foo Bar',
    'A little black cat',
    'A lazy fox',
    'A jumping dog'
  ];

  const doSearch = term => {
    if(!term)
        return Items
    
    return Items.filter(
        item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    
  }

  const returned = doSearch(term);
  
    return (
        <div>
            <h1>Search!</h1>
            <ul>
                {returned.map(t => (<li key={t}>{t}</li>))}
            </ul>
        </div>
      )

}



export default Search
