import 'bootstrap/dist/css/bootstrap.css'

import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/Store/index'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
     <Header></Header>
        <Component {...pageProps} />
      <Footer></Footer>
    </Provider>
   
  )
}
