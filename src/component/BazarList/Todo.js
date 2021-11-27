import React, { useState,useEffect } from "react";
import page from "./image/page.svg";
import "./todo.css";
import TodoItem from "./TodoItem";
import { useAlert } from "react-alert";

const Todo = () => {
  const alert = useAlert();
  let [item, setItem] = useState("");
  let [Data, setData] = useState([]);
  const getData = (getItem) => {
    if (!item) {
      alert.error("Oops You Forget To Input Item");
    } else {
      const keys ={
        id:new Date().getTime().toString(),
        name:getItem
      } 
      const items = [...Data, keys];
      setData(items);
    }
  };


// this is for local storage

  useEffect(() => {
    const data=localStorage.getItem('DataStore')
    if(data){
setData(JSON.parse(data))
    }
  }, []);
useEffect(() => {
    localStorage.setItem("DataStore", JSON.stringify(Data));

});
// local storage setup is finished

//this is fo remove item
function removeItem( key ) {
  console.log("item remove clicked",key);
const updateItem=Data.filter(
  (Data)=>Data.id!==key
)
setData(updateItem)

}
//remove item is finished

//this is for edit item 

//edit item is finshed
//this is for clearall system 
function clearAll() {
setData([])
}

  return (
    <>
      <div className="container ">
        <div className="page_image mx-auto image">
          <img src={page} alt="pageLogo" srcset="" />
          <figcaption className="text-center title">
            Add your Bazar list{" "}
          </figcaption>{" "}
        </div>
        {/* here is the input system */}
        <div className="inputList input-group input-group-m mx-auto">
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="form-control mt-2"
            placeholder="Recipient's username"
          />
          <button
            onClick={() => getData(item)}
            className="btn btn-outline-secondary mt-2"
            type="button"
            id="button-addon2"
          >
            Button{" "}
          </button>{" "}
        </div>{" "}

        {/* here is the iterable todoitem */}
        {Data.map((Data) => (
          <TodoItem Data={[Data,removeItem]} > </TodoItem>
        ))}{" "}

      </div>        
      <div className=" mx-auto clearAll"> 
      <button onClick={()=>clearAll()} className=" btn btn-danger mt-2"> clear all </button> 
      </div>
    </>
  );
};

export default Todo;
