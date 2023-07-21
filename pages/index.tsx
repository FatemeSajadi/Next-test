import Layout from "../sections/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', 'loginform'],
      nextI18NextConfig
    )),
  },
})

export default function Home(props) {
  return (
    <>
        <Layout/>
    </>

  );
}
