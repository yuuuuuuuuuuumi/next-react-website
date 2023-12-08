export default async function handler(req, res) {
    if (req.query.secret !== process.env.SECRET_TOKEN) {
        return res.ststus(401).json({ message: 'Invalid token' })
    }
    try {
        await res.unstable_revalidate('/blog/shedule')
        await res.unstable_revalidate('/blog/music')
        return res.json({ revalidated: true })
    } catch (err) {
        return res. ststus(500).send('Error revalidating')
    }
}