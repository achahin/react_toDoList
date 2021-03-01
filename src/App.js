import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
import {useState}  from 'react';


const activitiesInicial = []

function App() {
  console.log('renderizando app');
  const [activities,setActivities] = useState(activitiesInicial)  

  const addActivity = (activity)=> {
  console.log("adicionar activitidad")
  setActivities([...activities, activity ])    
}



  const deleteActivity = (idActivity)=> {
    console.log("eliminar activitidad")
   const  newActivities = activities.filter((item)=>{return (item.id !== idActivity)});  
  
   setActivities(newActivities);
  }



  const changeState = (idActivity)=> { 
  
   const   aIndex= activities.map((activity) => {return activity.id})
                               .indexOf(idActivity.id);
   console.log(activities[aIndex].state )
   activities[aIndex].state = !activities[aIndex].state;  
   console.log(activities[aIndex].state); 
  setActivities([...activities]);
   }


  return (
    <Container className="container">
      <Header title={"ToDo APP"} />
      <Row className="justify-content-center">
        <Col md={6}>
          <Create addActivity={addActivity} />
        </Col>
        </Row>
        <Row className="justify-content-center">     
        <Col md={6} >
          <List activities = {activities}  deleteActivity = {deleteActivity} changeState = {changeState}  />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
