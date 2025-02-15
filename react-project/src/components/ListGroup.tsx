import { useState } from "react";

interface Props {
    items : string[];
    heading : string;
    onSelectItem : (item:string) => void;
}

function ListGroup(props : Props) {


  const [selectedIndex,setSelectedIndex] = useState(-1);


  return (
    <div>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && (
        <>
          <p>No item found</p>
        </>
      )}
      <ul className="list-group">
        {props.items.map((item,index) => (
          <li className={selectedIndex ===index ? "list-group-item active" : "list-group-item "} 
          onClick={()=> {
            setSelectedIndex(index);
            props.onSelectItem(item);
        }
        } 
          key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
