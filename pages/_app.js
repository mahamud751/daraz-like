
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import { store } from '../redux/store';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { StrictMode } from "react";
function MyApp({ Component, pageProps }) {

  return <>

    <StrictMode>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </Provider>
    </StrictMode>
  </>
}

export default MyApp
