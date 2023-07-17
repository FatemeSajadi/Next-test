import { Layout } from "./components/Layout";
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) =>(
  <Layout>
    <Component {...pageProps} />
  </Layout>
) 

export default appWithTranslation(MyApp);

