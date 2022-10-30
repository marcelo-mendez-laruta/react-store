import React, { useState } from 'react';
import { Modal, Button, Tabs, Tab, Stack, Alert } from 'react-bootstrap';
import { useAuthContext } from "../../context/AuthContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
function Login(props) {
    const { user, _signInWithEmailAndPassword, _signInWithGoogle, registerWithEmailAndPassword } = useAuthContext();
    const [key, setKey] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const updateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const updateConfirmPassword = (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    }
    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();
        _signInWithEmailAndPassword(email, password);
    }
    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        _signInWithGoogle();
    }
    const handleRegisterWithEmailAndPassword = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            registerWithEmailAndPassword(email, password);
        } else {
            setError('Las contraseñas no coinciden');
        }
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
                    <Tab eventKey="login" title="Iniciar Sesión">
                        <Stack gap={3}>
                            <input type="text" placeholder='Email' className="form-control" value={email} onChange={e => updateEmail(e)} />
                            <input type="password" placeholder='Contraseña' className="form-control" value={password} onChange={e => updatePassword(e)} />
                            {user.error ? (<Alert variant='danger' >{user.error.Message}</Alert>) : null}
                            <Stack direction="horizontal" gap={2}>
                                <Button onClick={e => handleLoginWithEmailAndPassword(e)} variant="primary"> Ingresar</Button>
                                <Button onClick={e => handleLoginWithGoogle(e)} variant="dark"><FontAwesomeIcon icon={faGoogle} /></Button>
                                <Button onClick={props.onHide} variant="danger">Cerrar</Button>
                            </Stack>

                        </Stack>
                    </Tab>
                    <Tab eventKey="register" title="Registrarse">
                        <Stack gap={3}>
                            <input type="text" placeholder='Email' className="form-control" value={email} onChange={e => updateEmail(e)} />

                            <input type="password" placeholder='Contraseña' className="form-control" value={password} onChange={e => updatePassword(e)} />
                            <input type="Password" placeholder='Repita su contraseña' className="form-control" value={confirmPassword} onChange={e => updateConfirmPassword(e)} />
                            {error !== '' ? (<Alert variant='danger' >{error}</Alert>) : null}
                            {user.error ? (<Alert variant='danger' >{user.error.Message}</Alert>) : null}
                            <Stack direction="horizontal" gap={2}>
                                <Button onClick={e => handleRegisterWithEmailAndPassword(e)} variant="primary"> Ingresar</Button>
                                <Button onClick={props.onHide} variant="danger">Cerrar</Button>
                            </Stack>
                        </Stack>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>

    );
}

export default Login;