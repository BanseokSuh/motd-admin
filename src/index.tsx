import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
