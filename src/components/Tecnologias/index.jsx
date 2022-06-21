import {  Content } from "./style"
import imagem from "./Vector.png"
import Api from "../../Services/Api"
import { toast } from 'react-toastify'
import { useState } from "react";




function Tecnologias({title,status, setTec,tec, setModaEditalVisible}) {
    
    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))
    const  tecId  = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  
    const removeTec = (id) => {
        const remove = tecId.techs.filter((tecn) => tecn.id !== id);
        Api.delete(`/users/techs/${id}`, {
            headers: { Authorization: `Bearer ${token}` }})
            .then(Response => setTec(remove), toast.success('Tecnologia removida com sucesso!')
            )
            .catch(err => toast.error('Ops! Algo deu errado'))
    };


    return (
     
        <Content> 
            <p > {title}</p>
            <div className="status">
                <p onClick={() => setModaEditalVisible(true)}>{status}</p>
                <img src={imagem} alt="" onClick={() => removeTec(tec.id)} />
            </div>
                       
        </Content>
    )
}

export default Tecnologias