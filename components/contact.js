import Social from 'components/social'
import style from 'styles/contact.module.css'

export default function Contact() {
    return (
        <div className={style.stack}>
            <h3 className={style.heading}>Contact</h3>
            <Social iconSize="30px" />
            <address>cube@web.mail.address</address>
        </div>
    )
}