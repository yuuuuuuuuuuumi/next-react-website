import Container from 'components/container'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />

            <Container>{children}</Container>

            <Footer />
        </>
    )
}