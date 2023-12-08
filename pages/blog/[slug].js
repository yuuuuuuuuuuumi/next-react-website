import { getPostBySlug } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Post from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/teo-column'
import ConverBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                psgeImgH={eyecatch.height}
            />

            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />

                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </container>
    )
}

export async function getStaticPath() {
    return {
        paths: ['/blog/schedule', '/blog/music', '/blog/micro'],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholderr(eyecatch.url)
    eyecatch.blurDataURL = base64

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
        },
    }
}

