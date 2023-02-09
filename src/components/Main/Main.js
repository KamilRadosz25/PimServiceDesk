import React, {Fragment} from 'react'
import Tasks from './Tasks'

const Main = () => {
  return (
    <Fragment>
    <header>
    <h1>Zgłoszenia</h1>
    <button>Nowe zgłoszenie</button>
    </header>
    <div>
    <nav>
        <ul>
            <li>Nieprzypisane</li>
            <li>Przypisane</li>
            <li>Wszystkie</li>
            <li>Archiwum</li>
        </ul>
    </nav>
    <form>
        <input type="text"></input>
    </form>
    <button>Filtruj</button>
    </div>
    <Tasks />
    
    </Fragment>
  )
}

export default Main