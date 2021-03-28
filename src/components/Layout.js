import Head from 'next/head'
import Header from './_Header'
import Footer from "./_Footer";

const Layout = ({
  title = 'DH',
  children,
}) => (
    <div className='container'>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </Head>
        
        <Header />
        
        {children}
        
        <Footer />
        
    </div>
)

export default Layout