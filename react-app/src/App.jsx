
import { AuthProvider } from "./context/AuthContext";
import Routes from './Routes'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.withCredentials = true

const App = () => {
    return(
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    )
  };

  
  
  export default App;