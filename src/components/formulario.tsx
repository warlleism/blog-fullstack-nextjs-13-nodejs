import styles from "../styles/Formulario.module.scss"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import ConvertBase64 from "../hooks/useBase64";
import UseCreatePost from "@/hooks/useCreatePosts";
import { ChangeEvent, useEffect, useState } from "react";
import { PostData } from "@/interface/IPostData";
import { Dispatch, SetStateAction } from 'react';

interface FormularioProps {
    isHidden: boolean;
    isShowing: Dispatch<SetStateAction<boolean>>;
    data: PostData;
}

const Formulario = ({ isHidden, isShowing, data }: FormularioProps) => {

    const { postApi, isLoading } = UseCreatePost()

    useEffect(() => {
        const form = document.getElementById('form');
        setTimeout(() => {
            if (form) {
                form.style.opacity = isHidden ? "1" : "0";
            }
        }, 100);

        setFormulario(data)
    }, [isHidden]);

    const initialFormulario = {
        id: 0,
        cabecalho: "",
        titulo: "",
        data: "",
        img: "",
        artigo: ""
    }

    const [formulario, setFormulario] = useState<PostData>(initialFormulario);

    const uploadImage = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const { name } = e.target;
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }

        const base64 = await ConvertBase64(file) as string;

        setFormulario((prevFormData: PostData) => ({
            ...prevFormData,
            [name]: base64,
        }));
    }

    async function handlerInput(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;

        if (name === 'data') {
            const dateRegex = /^(jan|feb|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\s\d{2},\s\d{4}$/;
            const isValidDate = dateRegex.test(value.toLowerCase());
            const input = document.getElementById('data');
            const formato = document.getElementById('formato');

            if (input) {
                input.style.border = isValidDate ? "solid 3px #587900" : "solid 3px red";
            }

            if (isValidDate) {
                setFormulario((prevFormData) => ({
                    ...prevFormData,
                    [name]: value
                }));
            } else {

                if (formato) {
                    formato.style.display = 'block'
                }

                return;
            }
        } else {
            setFormulario((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    }

    return (
        <>
            {
                isHidden
                    ?
                    <div className={styles.container}>
                        <div
                            onClick={() => isShowing(!isHidden)}
                            style={{
                                position: "absolute",
                                background: "#000000e6",
                                width: "100%",
                                height: "100%"
                            }}
                        ></div>
                        <div className={styles.formulario} id="form">
                            <div className={styles.containerImg}></div>
                            <div className={styles.containerForm}>
                                <CloseIcon onClick={() => isShowing(!isHidden)} sx={{
                                    position: "absolute",
                                    top: 30,
                                    right: 30,
                                    padding: 1.7,
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    color: "#587900",
                                    transition: ".5s",
                                    fontSize: '1.7rem',
                                    background: "#fff",
                                    border: "solid 2px #587900",
                                    '&:hover': {
                                        background: "#59790000",
                                        color: "#80af00"
                                    }
                                }} />
                                <h1 style={{ color: "#a6e103" }}>AMAZÔNIA</h1>
                                <div className={styles.containerInputs}>
                                    <div className={styles.containerInput}>
                                        <label htmlFor="form">Cabeçalho</label>
                                        <input onChange={(event) => handlerInput(event)} name="cabecalho" value={formulario?.cabecalho} type="text" placeholder="A FLORESTA TROPICAL" />
                                    </div>

                                    <div className={styles.containerInput}>
                                        <label htmlFor="form">Título</label>
                                        <input onChange={(event) => handlerInput(event)} name="titulo" value={formulario?.titulo} type="text" placeholder="Características Da Floresta Amazônica" />
                                    </div>
                                </div>
                                <div className={styles.containerInputs}>
                                    <div className={styles.containerInput}>
                                        <label htmlFor="form">Data</label>
                                        <input onBlur={(event) => handlerInput(event)} defaultValue={formulario?.data} onClick={() => {
                                            const formato = document.getElementById('formato');
                                            if (formato) {
                                                formato.style.display = 'none'
                                            }
                                        }} name="data" type="text" placeholder="Jan 01, 2023" id="data" />
                                        <p id="formato" style={{ color: "#fff" }}>Formato precisa ser respeitado <strong style={{ color: "#587900" }}>Ex: Jan 01, 2023</strong></p>
                                    </div>
                                    <div className={styles.containerInput} style={{ cursor: "pointer" }}>
                                        <label htmlFor="form"></label>
                                        <input onChange={(event) => uploadImage(event)} name="img" style={{ opacity: 0 }} type="file" id="" />
                                        <div className={styles.containerFileInput}>
                                            <CameraAltIcon sx={{
                                                fontSize: '1.7rem',
                                                transition: ".5s",
                                                border: "solid 2px #587900",
                                                color: formulario?.img ? "#fff" : "#111217",
                                                background: formulario?.img ? "#111217" : "#fff",
                                                padding: 1.7,
                                                borderRadius: 10
                                            }} />
                                            <div>Selecione um arquivo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.containerInput}>
                                    <label htmlFor="form">Artigo</label>
                                    <textarea onChange={(event: any) => handlerInput(event)} name="artigo" value={formulario?.artigo} rows={8}></textarea>
                                </div>
                                <div className={styles.buttom} onClick={() => postApi("http://localhost:3003/create", formulario)}>
                                    {
                                        isLoading ? <div className={styles.ldsDualRing}></div> : <div>Publicar</div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    false
            }
        </>


    )
}

export default Formulario;