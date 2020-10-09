
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { UserContext } from '../../App';




const CreatForm = () => {

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext)

   const handleSubmit = () => {
  };

    return (
        <div>
        <Container className='form'>
        <h2>Registration Form</h2><hr/>
        <Form>
          <h4>Name:   {loggedInUser.name}</h4>
          <h5>Email:  {loggedInUser.email}</h5>
           Date:<input type="date" name="dd" id=""/><br/><br/>
           Description:<input type="text" /><br/><br/>
          <Button variant="info" type="submit" onClick={handleSubmit}>
          Submit Your Project
          </Button>
        </Form>
        </Container>
        </div>
    );
};

export default CreatForm;