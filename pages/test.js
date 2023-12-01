export default function Test(props) {
    console.log('test.js: ', props) // 受け取った props

    return <h1>Test</h1>
}

// export async function getServerSiteProps() {
export async function getServerSiteProps() {
    return {
        props: {
            message: 'データの流れ',
        },
    }
}