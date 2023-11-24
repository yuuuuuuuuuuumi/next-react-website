import Meta from 'next/head'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
    return (
      <Container>
        <Meta pageTitle="アバウト" pageDesc="About development activities" />

        <Hero title="About" subtitle="About development activities" />

        <figure>
          <Image
            src={eyecatch}
            alt=''
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                Cube
                が得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、
                さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
              </p>
              <h2>モノづくりで目指していること</h2>
              <p>
                モノづくりではデータ解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、
                ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、
                特にそこを磨く作業に力を入れています。
              </p>
              <p>
                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。
                毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にある
                モヤモヤを言葉にして「問い」への答えを出していきます。
              </p>
              <h3>新しいことへのチャレンジ</h3>
              <p>
                今までと違うものを作ることで愛着がわいてきます。そこで興味を持ったことは小さなことでもいいから
                取り入れて、いいものを作れるようにしています。小さなヒントから新しいものを生み出すようなものづくりは、
                これからも続けていきたいです。
              </p>
            </PostBody>
          </TwoColumnMain>

          <TwoColumnSidebar> 
              <contact />
          </TwoColumnSidebar> 
        </TwoColumn>
    </Container>
    )
}