import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";

const Create = (props) => {
  const {addActivity} = props;
  const initialState = {
    id: "",
    work: "",
    state: false,
  };
  const handleWork = (e) => {
    const { name, value } = e.target;
    setWork({
      ...work,
      [name]: value,
    });
  };


  const [work, setWork] = useState(initialState);
  
  const handleSumbit = (e) => {
   
    console.log('se apreto el boton del submit y debo hacer un prevent default');
    e.preventDefault();  
    if  ( (work.work.trim()) ==="")     //verifico que work tenga algo
      { return ""};
   const task = {
                ...work,
                id: shortid()
   }   
     
  console.log(task)
  addActivity(task)  //adicionlo la actividad
  setWork(initialState)  //limpio el estado, y por ende el formulario ya que en le value del  input tengo work.work

  
  }
  
  return (
     <Form  onSubmit= {handleSumbit}>
       <Form.Group>
       <Form.Control  type ="text"
                      name="work" 
                      value={work.work}
                      placeHolder ="Ingrese una tarea"
                      onChange={handleWork} />
      
      
      </Form.Group>
      <Button variant="primary"  block type="submit">
        Agregar tarea
      </Button>
      </Form>
    
  );
};

export default Create;
