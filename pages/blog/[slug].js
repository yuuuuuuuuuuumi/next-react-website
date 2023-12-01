export async function getStaticPaths() {
    return {
        path: [{ params: { slug: 'schedule' } }, { params: { slug: 'music' } }],
        fallback: false,
    }
}


export async function getServerSiteProps(context) {
    // export async function getServerSiteProps(context) {
    console.log('posts:', context.params)
    return {
        props: { message: "Dynamic Routes"}
    }
}