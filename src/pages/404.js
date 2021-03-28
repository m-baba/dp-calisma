import Layout from '../components/Layout'

const Error = () => (
    <>
        <div>Hata Oluştu</div>
    </>
)

Error.getLayout = page => <Layout title='Hata Oluştu'>{page}</Layout>

export default Error