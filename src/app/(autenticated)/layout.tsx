import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import styles from "../../styles/Home.module.scss"
import { GlobalContextProvider } from '@/contexts/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amazônia',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0, background: "#f2f2f2" }}>
        <div className={styles.header}>
          <div className={styles.headerMainContainer}>
            <div className={styles.headerContent}>
              <div style={{ fontWeight: 800 }}>AMAZÔNIA</div>
              <div className={styles.navBarList} >
                <a href="">Início</a>
                <a href="">Animais</a>
                <a href="">Clima</a>
                <a href="">Hidrografia</a>
                <a href="">Mapa</a>
                <a href="">Contato</a>
              </div>
            </div>
            <div className={styles.tituloAmazonia}>
              <div><strong style={{ color: "#a6e103" }}>Desvendando</strong> a amazônia, natureza, <strong style={{ color: "#a6e103" }}>animais</strong> e clima</div>
              <div>Encantos da Amazônia: Descubra a Beleza da <strong style={{ color: "#a6e103" }}>Floresta</strong></div>
              <div>Ver mais</div>
            </div>
          </div>
        </div>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
        <Footer />
      </body>
    </html>
  )
}
