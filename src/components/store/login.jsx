import React, { useState } from 'react';
import { Modal, Button, Tabs, Tab, Stack } from 'react-bootstrap';
import { useAuthContext } from "../../context/AuthContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
function Login(props) {
    const { _signInWithEmailAndPassword, _signInWithGoogle } = useAuthContext();
    const [key, setKey] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const updateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();
        _signInWithEmailAndPassword(email, password);
    }
    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        _signInWithGoogle();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Tabs
                    id="login-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="login" title="Iniciar Sesion">
                        <Stack gap={3}>
                            <input type="text" placeholder='Email' class="form-control" value={email} onChange={e => updateEmail(e)} />

                            <input type="password" placeholder='Contraseña' class="form-control" value={password} onChange={e => updatePassword(e)} />
                            <Stack direction="horizontal" gap={2}>
                                <Button onClick={e => handleLoginWithEmailAndPassword(e)}  variant="primary"> Ingresar</Button>
                                <Button onClick={e => handleLoginWithGoogle(e)}  variant="dark"><FontAwesomeIcon icon={faGoogle} /></Button>
                                <Button onClick={props.onHide}  variant="danger">Cerrar</Button>
                            </Stack>

                        </Stack>
                    </Tab>
                    <Tab eventKey="register" title="Registrarse">
                        dasdas
                    </Tab>
                </Tabs>
            </Modal.Body>
            {/*<Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
    </Modal.Footer>*/}
        </Modal>

    );
}

export default Login;