import img from "../Login/Logo.png";
import Input from "../../components/inputs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content } from "./styles";
import Api from "../../Services/Api";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';



function Register({ Authorization }) {

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        password: yup.string().required('Campo obrigatório!'),
        senhaConfirma: yup
            .string()
            .required("Confirmar senha obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
        bio: yup.string().required('Campo obrigatório!'),
        contact: yup.string().required('Campo obrigatório!'),
        course_module: yup.string().required('Campo obrigatório!')
    })

    const onSubmitFunction = ({ name, password, email, bio, contact, course_module }) => {
        const user = { name, password, email, bio, contact, course_module }

        Api.post("/users", user)
            .then((_) => {
                toast.success('Sucesso ao criar a conta')
                history.push("/")
            })
            .catch(err => toast.error('Opa! Algo deu errado!'))
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleClick() {
        history.push("/");
    }


    if (Authorization) {
        return <Redirect to="/Dashboard" />
    };

    return (
        <Container>
            <Content>

                <section>
                    <img src={img} alt="" />
                    <button className="btn" type="button" onClick={handleClick}>Voltar</button>

                </section>
                <form onSubmit={handleSubmit(onSubmitFunction)}>

                    <h1>Crie sua conta</h1>
                    <h3>Rapido e grátis, vamos nessa</h3>

                    <Input register={register} label="Nome" placeholder="Digite seu nome" type="text" name="name" error={errors.nome?.message} />

                    <Input register={register} label="Email" placeholder="DIgite aqui o seu email" type="text" name="email" error={errors.email?.message} />

                    <Input register={register} label="Senha" placeholder="Digite aqui sua senha" type="password" name="password" error={errors.password?.message} />

                    <Input register={register} label="Confirmar senha" placeholder="Digite novamente a sua senha" type="password" name="senhaConfirma" error={errors.senhaConfirma?.message} />

                    <Input register={register} label="Bio" placeholder="Fale sobre você" type="text" name="bio" error={errors.bio?.message} />

                    <Input register={register} label="Contato" placeholder="Opção de contato" type="text" name="contact" error={errors.contact?.message} />


                    <section className="escolherTec">
                        <label>Selecionar módulo</label>
                        <select name='course_module' {...register('course_module')}>
                            <option>Selecionar módulo</option>
                            <option>Primeiro módulo (Introdução ao Frontend)</option>
                            <option>Segundo módulo (Frontend Avançado)</option>
                            <option>Terceiro módulo (Introdução ao Backend)</option>
                            <option>Quarto módulo (Backend Avançado)</option>
                        </select>
                    </section>


                    <button type="submit" >Cadastrar</button>
                </form>
            </Content>
        </Container>


    );
}


export default Register;
