import img from "../Login/Logo.png";
import { Container, Content } from "./style";
import Button from "../../components/Button";
import Input from "../../components/inputs"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import Api from "../../Services/Api";
import { toast } from 'react-toastify';


function Login({Authorization, setAuthorization}) {

  const history = useHistory();
  

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().required('Campo obrigatório!')
  })

  

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleClick() {
    history.push("/Register");
  }


  const onSubmitFunction = (data) => {
    Api.post("/sessions", data)
      .then(Response => {
        const { token, user } = Response.data
        
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token))
        localStorage.setItem("@KenzieHub:user", JSON.stringify( user))

        setAuthorization(true)

        return history.push('/Dashboard')
      })
      .catch(err => toast.error('Email ou senha inválidos'))
}

  if (Authorization) {
    return <Redirect to="/Dashboard" />
  }



  return (
    <Container>
      <Content>
        <img src={img} alt="" />
        <form onSubmit={handleSubmit(onSubmitFunction)}>

          <h1>Login</h1>

          <Input register={register} label="Email" placeholder="Insira seu email" type="text" name="email" error={errors.email?.message} />
          <Input register={register} label="Senha" placeholder="Insira sua senha" type="password" name="password" error={errors.password?.message} />
          <Button type="submit" whiteSchema>Entrar</Button>
          <p>Ainda não possui uma conta?</p>
          <Button type="button" onClick={handleClick}>Cadastre-se</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
