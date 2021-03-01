import Item from "./Item";


const List = (props ) => {
  
  const items=props.activities;
  const deleteActivity=props.deleteActivity;
  const changeState= props.changeState;
  console.log('renderio items');
  console.log(items);
  return (
    <>
       {(items.length ===0)? <h4>no hay tareas</h4>: ""}
      {/* item : {id : 1, work : '', state : false} */}
     
      {
      items.map((item) => (  //desesctructuro con su propio key value con {...item}
        <Item key={item.id} {...item }  deleteActivity = {deleteActivity}  changeState = {changeState} />
      ))
      }
   
    </>
  );
};
/*{id : 1, work : '', state : false} */

export default List;
