import ReactDOM from 'react-dom/client';
import App from './App';
import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/relax.css";  
import "../node_modules/noty/lib/themes/bootstrap-v4.css";

function noty(flashMessage){
    setTimeout(() => {
        new Noty({  
            text: flashMessage,
            theme: "bootstrap-v4",
            type: "success",
            timeout: 500
          }).show();
    },300);
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App notyHandler={noty}/>);
