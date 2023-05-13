import styles from "../styles/Footer.module.scss"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <div style={{ width: "70%" }}>
                    <div className={styles.titulo}>SOBRE NÓS</div>
                    <div className={styles.texto}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.</div>
                    <div className={styles.buttom}>CONHEÇA NOSSOS PROJETOS</div>
                </div>
            </div>
            <div className={styles.containerContent}>
                <div style={{ width: "70%" }}>
                    <div className={styles.containerContact}>
                        <div>Email</div>
                        <div>warlleimartinsdev@outlook.com</div>
                    </div>
                    <div className={styles.containerContact}>
                        <div>Contato</div>
                        <div>(27)995804151</div>
                    </div>
                    <div className={styles.containerContact}>
                        <div>Endereço</div>
                        <div>Av. São Pedro, n’671</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;