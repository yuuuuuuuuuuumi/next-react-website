import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { eyecatchLocal } from 'lib/constants'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug }) => (
                <artucle className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <figure>
                                <Image
                                    src={eyecatchLocal.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    size="(min-width: 1152px) 576px, 50vw"
                                    placeholder="blur"
                                    blurDateURL={eyecatch.blurDateURL}
                                />
                            </figure>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </artucle>
            ))}
        </div>
    )
}