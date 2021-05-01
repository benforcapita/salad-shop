import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store";
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    < QueryClientProvider client = { client } >
      <App />
    </QueryClientProvider>
    </Provider>
    , document.getElementById('root'));

