 import React, { Component } from 'react'
 import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 //import Button from 'react-bootstrap/Button';
import './App.css';

 export default class App extends Component {
  constructor(props) {
   super(props);

    this.state = {
      email: '',
    }
  }

onEmailChanged(e) {
  this.setState({
    email:e.target.value
  });
}

register(e) {
  e.preventDefault();
  console.log(this.state);
  <input placeholder='your all signed up' />
  
}

   render() {
     return (
      <footer>
      <Container fluid className = 'hoopersorange pt-4 fixed-bottom'>
      <Row xs={4}>
        <Col xs={4} className='sec1 text-center'>
          get in touch<br></br>
          <p className='font-weight-light'>info@hoopers.club</p>

          
            address<br></br>
            <p className='font-weight-light'>Rua da Prata,80,1,1100-420<br></br>
            Lisboa,Portugal
          </p>
        </Col>
        <Col xs={1} className = 'sec2'>
          follow us<br></br>
          <nav>
          <a href='#instagram'>instagram</a><br></br>
          <a href='#youtube'>youtube</a><br></br>
          <a href='#twitter'>twitter</a><br></br>
          <a href='#facebook'>facebook</a><br></br>
          <a href='#spotify'>spotify</a>
          </nav>
            
          
        </Col>
        <Col className='sec3' >
          
            <nav>
              <a href='#careers at hoopers'>careers at hoopers</a><br></br>
              <a href='#terms and conditions'>terms and conditions</a><br></br>
              <a href='#privacy policy'>privacy policy</a><br></br>
              <a href='#cookies policy'>cookies policy</a><br></br>
              <a href='#about us'>about us</a>
            </nav>
            
        </Col>
        <Col className='sec4'>
            
              <p>join our mailing list</p> 

<form onSubmit={(e) => this.register(e)}>
   <div className="subscribe mb-3 hoopersorange"> 
    
    <input
    value = {this.state.email}
    onChange={(e) => this.onEmailChanged(e)} 
    type="email" 
    className="form-control" 
    placeholder='email'
    display='hidden'
    />
    </div>
  <button type="submit" className="btn btn-warning justify-content-center">SUBSCRIBE</button>
</form>
          </Col>
           
        <Col xs={11} className='text-center'>
            <b>&copy;2021 Hoopers - All Rights Reserved</b>
        </Col>
      </Row>

      </Container>
      </footer>
    


      
      
     )
   }
 }
 
