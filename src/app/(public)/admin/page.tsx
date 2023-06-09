'use client';

import { useState } from 'react';
import styles from '../../../styles/Login.module.scss'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form';

interface Iuser {
    usuario: string,
    senha: string
}

export const metadata = {
    title: 'Login',
    description: 'Generated by create next app',
}

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const router = useRouter();

    const userDefault: Iuser = {
        usuario: "",
        senha: ""
    }
    const [user, setUser] = useState(userDefault)

    const redirectUser = () => {
        if (user.usuario == 'warlleism' && user.senha == '@Ws4edfvhrtzxcgre') {
            localStorage.setItem('isAdmin', 'admin')
            router.push('/')
        } else {
            return
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.backgroundTop}></div>
            <form
                onSubmit={handleSubmit(redirectUser)} >
                <img src="/images/mato.png" alt="" className={styles.img} />
                <div className={styles.containerContentForm}>
                    <div className={styles.texto} style={{ color: "#52BD03" }}>Entre para</div>
                    <div className={styles.texto} style={{ color: "#A8D586" }}>Fazer a Diferença</div>
                    <div style={{ color: "#A9A9A9", letterSpacing: 1 }}>Amazônia, nosso tesouro verde, pulsação <strong style={{ color: "#325C39" }}>vital!</strong ></div>
                    <div className={styles.containerInput}>
                        <input {...register('usuario', { required: true })} placeholder='Usuário' type="text"
                            onChange={(e) => setUser({ ...user, usuario: e.target.value })} />
                        {
                            user.usuario ? false : errors.usuario && errors.usuario.type === "required" && <div style={{ textDecoration: 'none', color: "#A8D586", }}>Usuário precisa ser preenchido.</div>
                        }
                    </div>
                    <div className={styles.containerInput}>
                        <input {...register('senha', { required: true })} placeholder='Senha' type="password" onChange={(e) => setUser({ ...user, senha: e.target.value })} />
                        {
                            user.senha ? false : errors.senha && errors.senha.type === "required" && <div style={{ textDecoration: 'none', color: "#A8D586", }}>Senha precisa ser preenchida.</div>
                        }
                        <div className={styles.esqueceu} style={{ textAlign: 'end' }}>
                            <a href="/" style={{ textDecoration: 'none', color: "#A8D586", }}>esqueceu sua senha?</a>
                        </div>
                    </div>
                    <button type="submit" className={styles.buttom} >Entrar</button>
                </div>
            </form>
        </div>

    )
}