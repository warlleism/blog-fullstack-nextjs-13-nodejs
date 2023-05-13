'use client';

import { useEffect, useState } from "react";
import Formulario from "@/components/formulario";
import styles from "../../styles/Home.module.scss"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UseGetPosts from "@/hooks/useGetPosts";
import img from "../../../public/images/create.png"

export default function Home() {

  const [form, setForm] = useState<boolean>(false)
  const { data, isLoading, setIsLoading } = UseGetPosts()
  const [isAdmin, setIsAdmin] = useState(false)
  const [formulario, setFormulario] = useState([])

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin')
    setIsAdmin(isAdmin ? true : false)
  }, [])


  return (
    <>
      <Formulario isHidden={form} isShowing={setForm} data={formulario} refresh={setIsLoading} />
      <div className={styles.container}>
        {
          data?.map((e: any, index) => {
            if (e.id === 1 || e.id === 2 || e.id === 3) {
              return (
                <div key={e.id} className={styles.containerBlock}>
                  <div className={styles.imgContent}>
                    <h1>{e?.cabecalho}</h1>
                    <img src={e?.img} alt="" />
                    <div className={styles.backgroundBlack}></div>
                  </div>
                  <div >{e?.titulo}</div>
                  <div style={{ color: "#5F8100", fontWeight: "700" }}>{e?.data}</div>
                  <div>{e.artigo ? e?.artigo?.substring(0, 300) : false}</div>
                  {
                    isAdmin
                      ?
                      <div className={styles.icons}>
                        <span>
                          <AddCircleIcon onClick={() => {
                            setForm(!form)
                            setFormulario(e)
                          }} sx={{
                            zIndex: 9,
                            fontSize: '3rem',
                            transition: ".5s",
                            '&:hover': {
                              color: '#d8ff00',
                            },
                          }} />
                        </span>
                      </div>
                      :
                      false
                  }
                </div>

              )

            }
          })
        }
      </div >


      <div className={styles.containerGrid}>
        {
          data.map((e: any) => {
            if (e.id >= 4 && e.id <= 7) {
              return (
                <div key={e.id} className={styles.containerBlockGrid}>
                  <div className={styles.imgContentGrid}>
                    <h1>{e.cabecalho}</h1>
                    <img src={e?.img} alt="" />
                    <div className={styles.backgroundBlack} ></div>
                  </div>
                  <div>{e.titulo}</div>
                  <div style={{ color: "#5F8100", fontWeight: "700" }}>{e.data}</div>
                  <div>{e.artigo ? e?.artigo?.substring(0, 140) : false}</div>
                  {
                    isAdmin
                      ?
                      < div className={styles.icons}>
                        <span>
                          <AddCircleIcon onClick={() => {
                            setForm(!form)
                            setFormulario(e)
                          }} sx={{
                            zIndex: 9,
                            fontSize: '3rem',
                            transition: ".5s",
                            '&:hover': {
                              color: '#d8ff00',
                            },
                          }} />
                        </span>
                      </div>
                      :
                      false
                  }

                </div>
              )
            }
          })}
      </div >

      <div className={styles.container}>
        {
          data.map((e: any) => {
            if (e.id === 8) {
              return (
                <div key={e.id} className={styles.containerBlock}>
                  <div className={styles.imgContent}>
                    <h1>{e.cabecalho}</h1>
                    <img src={e?.img} alt="" />
                    <div className={styles.backgroundBlack} ></div>
                  </div>
                  <div>{e.titulo}</div>
                  <div style={{ color: "#5F8100", fontWeight: "700" }}>{e.data}</div>
                  <div>{e.artigo ? e?.artigo?.substring(0, 300) : false}</div>
                  {
                    isAdmin
                      ?
                      <div className={styles.icons}>
                        <span>
                          <AddCircleIcon onClick={() => {
                            setForm(!form)
                            setFormulario(e)
                          }} sx={{
                            zIndex: 9,
                            fontSize: '3rem',
                            transition: ".5s",
                            '&:hover': {
                              color: '#d8ff00',
                            },
                          }} />
                        </span>
                      </div>
                      :
                      false
                  }
                </div>
              )
            }
          })
        }
      </div>
      {
        isLoading
          ?
          <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          :
          false
      }
    </>
  )
}
