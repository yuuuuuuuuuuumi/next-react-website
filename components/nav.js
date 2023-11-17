import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
    return (
        <nav>
            <ul className={StyleSheet.list}>
                <li>
                    <Link href="/" onclick={closeNav}>
                      Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}