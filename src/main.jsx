import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import makeserver from '../server';

makeserver();


createRoot(document.getElementById('root')).render(
<App/>
)
