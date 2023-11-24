import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Blog() {
    return (
      <Container>
        <meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
        <Hero
            title="Blog"
            subtitle="Recent Posts"
        />
      </Container>
    )
}