import { useState } from "react";
import Data from "./New";
const List = () => {
  const [people, setPeople] = useState(Data);
  return (
    <div>
         <section className='container'>
       <h3>{people.length} items</h3>
       <div>
      {people.map((New)=> (
       <div>
           <div>
               <li>Name:{New.name}</li> <li>Category:{New.category}</li>
         </div>
           <div>
        <img src={New.image} alt={New.name}></img>
        </div></div>
      ))}
      </div>
       <button >clear all</button>
     </section>
    </div>
    
  );
};

export default List;