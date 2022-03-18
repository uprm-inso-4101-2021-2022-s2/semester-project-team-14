import { useNavigate} from "react-router-dom";
import React, { useState} from 'react';
import {
    Button,
    Divider,
    Form,
    Grid,
    Header,
    Modal,
    Segment
} from 'semantic-ui-react';


function Homepage() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data,setdata] =  useState("");
    const handleChange = () => {
        setOpen(true);
    }
    const handleLogin = () => {
    }
    const navigate = useNavigate();
    function check() {

        if (data=== ""){
            return true
        }
        localStorage.removeItem("login-data")
        localStorage.setItem("login-data", JSON.stringify(data))
        console.log(localStorage.getItem("login-data"))
        return false
    }
    return (
        <>
            <Segment color={'red'}>
                <Header dividing textAlign="center" size="huge">Welcome to the University</Header>
                <Modal
                    centered={false}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                >
                    <Modal.Header>Invalid!</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            Your email or password is invalid please, try again.
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setOpen(false)}>OK</Button>
                    </Modal.Actions>
                </Modal>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='email'
                                    iconPosition='left'
                                    label='Email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Button content='Login' primary onClick={check()? handleChange:handleLogin}/>
                            </Form>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' >
                            <Button content='Sign up' icon='signup' size='big' onClick={() => {navigate("./")}}/>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </Segment>
        </>
    )
}
export default Homepage;
