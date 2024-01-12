import Container from './container'
import Logo from './logo'
import Social from 'components/social'
import styles from 'styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
          <Container>
            <div className={styles.flexContainer}>
              <Logo />
              <Social /> 
            </div>
          </Container>
        </footer>
    )
}