import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./css/index.css"
import StudentsStore from "./stores/GlobalStore/GlobalStore.jsx"
import { Provider } from 'react-redux'
import GlobalContext from "./contexts/globalContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={StudentsStore}>
      <GlobalContext>
        <App/>
      </GlobalContext>
    </Provider>
  </>
)
