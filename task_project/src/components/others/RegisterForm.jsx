import { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import FormControlInput from './FormControlInput';
import { PersonCircle, ChatDots,ShieldCheck  } from 'react-bootstrap-icons';
import { changeMethod } from '../../helpers'
import clientContext from '../../contexts/clients/clientContext'

export default ({props}) => {

    const [ account, setAccount ] = useState({name: '', email: '', password: '', confirmPassword: ''})
    const [isValidPassword, setIsValidPassword] = useState(true)

    const { clients,  addClient } = useContext(clientContext)

    function currentOnChange (e) {
      changeMethod(account, setAccount, e)
    }

    const addNewAccount = (e) => {
      e.preventDefault();
      if (account.password === account.confirmPassword) {
        addClient({...account})
        setAccount({name: '', email: '', password: '', confirmPassword: ''})
        setIsValidPassword(true)
        props.history.push('/')
      } else {
        setIsValidPassword(false)
      }
    }

    return (
      <Form className={"mt-4"} onSubmit={addNewAccount}>
        <FormControlInput
          mode="horizontal"
          title="Nombre"
          icon={<PersonCircle/>}
          value={account.name}
          onChangeMethod={currentOnChange}
          name="name"
          required={true}/>

        <FormControlInput
          mode="horizontal"
          type="email"
          title="Email"
          icon={<ChatDots/>}
          value={account.email}
          onChangeMethod={currentOnChange}
          name="email"
          required={true}
          />
        <FormControlInput
          mode="horizontal"
          type="password"
          title="Contraseña"
          icon={<ShieldCheck/>}
          value={account.password}
          onChangeMethod={currentOnChange}
          name="password"
          required={true}/>
        <FormControlInput
          mode="horizontal"
          type="password"
          title="Confirmar Contraseña"
          icon={<ShieldCheck/>}
          value={account.confirmPassword}
          onChangeMethod={currentOnChange}
          name="confirmPassword"
          required={true}/>

          {
            isValidPassword ? null : (<Alert variant="danger">La contraseñas no coinciden</Alert>)
          }
        <Button type="submit" variant="dark" block>Registrarme</Button>
      </Form>
    );
}