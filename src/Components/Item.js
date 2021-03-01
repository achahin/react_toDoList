import {Alert, Row, Col} from 'react-bootstrap';

/*{id : 1, work : '', state : false} */
const Item = ({ id, work, state , deleteActivity,changeState}) => {

  const deleteWork = (e) => {
    console.log(e.target.id);
    deleteActivity(e.target.id)
  };

  
  const changeCheckState = (id) => {
    changeState(id)
      
  };


  const pointer = {cursor: 'pointer'};   //los estilos en linea -objetos json 
  const color ={backgroundColor: '#f16E10'};
  const  icon = {fontsize: "56px"};
  console.log('el state es ' + state)
  let variant="success";
  if (state) {variant="primary"};
   return (
    <Alert key={id} variant={variant}>
    <Row className="justify-content-between"  style={state?color:{}}>
    <Col md={9}>
          <input type="checkbox" onChange= {()=>{changeCheckState({id})}}  /> {work}  
        </Col>
        <Col md={3}>
        <p style={pointer} >
          {/*i  id={id} onClick={deleteWork} class="fas fa-trash-alt  fa-2x"  ></i>    */}
        <i id={id} onClick={deleteWork} class="fas fa-trash-alt icon"  ></i> 
        </p>
      </Col>
    </Row>
  </Alert>);
};

export default Item;

