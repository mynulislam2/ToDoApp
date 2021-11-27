import React from "react";
import { InlineInputEdit } from 'react-inline-input-edit';

const TodoItem =({Data}) => {
const removeItem=Data[1]
const key=Data[0].id
const _handleFocus = (text) => {
    console.log('Focused with text: ' + text);
  };
  const _handleFocusOut = (text) => {
    console.log('Left editor with text: ' + text);
  };
  return (  
    <div class="inputList mx-auto input-group mb-3 mt-3" id={Data[0].id}>
          <InlineInputEdit
     labelClassName="EditableInput"
          text={Data[0].name}
          inputWidth="220px"
          inputHeight="37.5px"
          inputBorderWidth="0px"
          inputMinWidth={200}
          onFocus={_handleFocus}
          />
      <button
       className="btn btn-warning" type="button" 
id="button-addon2">
        {" "}
        <i  className="fa fa-edit"></i>
      </button>
      <button onClick={()=>removeItem(key)} className="btn btn-warning" type="button" id="button-addon2">
        {" "}
        <i  className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
