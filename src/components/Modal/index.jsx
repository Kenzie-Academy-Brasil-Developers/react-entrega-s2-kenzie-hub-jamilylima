import Input from "../inputs/index"
import Button from "../Button";
import { useForm } from "react-hook-form"
import { Container, Content } from "./style";
import Api from "../../Services/Api";
import { toast } from 'react-toastify';
import { useState } from "react";



function Modal({ setTec, setModalVisible }) {

    const { register, handleSubmit } = useForm()

    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))


    const onSubmitTec = (data) => {


        Api.post("/users/techs", data, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response =>setTec(response.data), toast.success('Tecnologia adicionada com sucesso'))
            .catch(err => toast.error('Ops! Algo deu errado'))
    }


    return (
        <Container>
            <Content>

                <div className="cadastro">
                    <h1>Cadastrar Tecnologia</h1>
                    <button className="btnX" onClick={() => setModalVisible(false)}>X</button>

                </div>
                <form onSubmit={handleSubmit(onSubmitTec)}>


                    <Input register={register} label="Nome" placeholder="Javascript" type="text" name="title" />

                    
                    <section className="escolherTec"  >
                        <label>Status</label>
                        <select name='status'  {...register('status')}>
                            <option>Status</option>
                            <option name="Iniciante">Iniciante</option>
                            <option name="Intermediário">Intermediário</option>
                            <option name="Avançado">Avançado</option>
                        </select>
                    </section>

                    <Button type="onSubmit" whiteSchema>Cadastre-se</Button>
                </form>
            </Content>
        </Container>


    )
}

export default Modal