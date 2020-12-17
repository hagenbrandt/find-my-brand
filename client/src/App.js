import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'

import CardList from './components/CardList'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ToolBar from './components/ToolBar'
import ContentHeader from './components/ContentHeader'
import Footer from './components/Footer'
import BlueprintPage from './components/BlueprintPage'

const App = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [companyData, setCompanyData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [layout, setLayout] = useState('object')

  useEffect(() => {
    axios.get('/api')
      .then((response) => {
        setIsLoaded(true);
        const data = response.data
        setCompanyData(data)
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error(error);
      })
  },[])

  useEffect(() => {
    const results = companyData.filter(company => company.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  
  let renderList = searchResults.length === 0 ? companyData : searchResults

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <Router>
      <Header />
      <article className="content-wrapper">
        <ContentHeader />
        <ToolBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange} layout={layout} setLayout={setLayout} list={renderList} />
        <Sidebar list={renderList} layout={layout} />
        <Switch>
          <Route exact path="/" component={() => <BlueprintPage title='Dashboard' />} />
          <Route exact path="/contentmanagement" component={() => <BlueprintPage title='Content Management' />} />
          <Route exact path="/cardlist" component={() => <CardList list={renderList} layout={layout} />} />
          <Route exact path="/users" component={() => <BlueprintPage title='Users' />} />
        </Switch>
      </article>
      <Footer />
      </Router>
    );
  }
}

export default App;
