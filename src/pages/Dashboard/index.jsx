
import { Container, Content } from "./style";
import img from "../Login/Logo.png"
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";
import { ContainerTec } from "../../components/Tecnologias/style"
import Tecnologias from "../../components/Tecnologias";
// import ModalEdita from "../../components/ModalEdita";
import { useEffect } from "react";
import Api from "../../Services/Api"



function Dashboard({tec, Authorization, setTec, setAuthorization }) {
    const history = useHistory()

    const [modalVisible, setModalVisible] = useState(false)
    const [modalEditaVisible, setModaEditalVisible] = useState(false)
    const [user, setUser] = useState()
    const autoriza = JSON.parse(localStorage.getItem("@KenzieHub:user")) || [];
    const id = JSON.parse(localStorage.getItem("@KenzieHub:user")) || [];


    function handleClick() {
        localStorage.clear()
        setAuthorization(false)
        history.push("/")
    }


    if (!Authorization) {
        return <Redirect to="/" />
    };

    const Usuario = () => {
        useEffect(() => {
            Api.get(`/users/${id.id}`)
                .then(Response => setUser(Response.data.techs))
        }, [user])
    }
    Usuario()



    return (
        <Container>
            <Content>

                <section>
                    <img src={img} alt="" />
                    <button className="btn" onClick={handleClick} >Sair</button>
                </section>


                <div className="Logado">

                    <h1>Olá,{autoriza.name}</h1>
                    <h3>{autoriza.course_module}</h3>
                </div>

                <div className="renderizaTec">
                    <div className="Tec">
                        <h2>Tecnologias</h2>
                        <button className="botao" onClick={() => setModalVisible(true)}>+</button>
                    </div>

                    {modalVisible ? <Modal setTec={setTec} setModalVisible={setModalVisible} /> : null}
                </div>


                <ContainerTec>
                    {user?.map((tec, id) => (
                        <Tecnologias tec={tec} key={id} setTec={setTec} setModaEditalVisible={setModaEditalVisible} title={tec.title} status={tec.status}/>
                    ))}
                </ContainerTec>

            </Content>
        </Container>
    )
}

export default Dashboard


