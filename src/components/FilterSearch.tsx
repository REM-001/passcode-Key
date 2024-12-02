import { useState } from "react";
import { data, values } from '../Data/Data'; 

 
 export default function FilterSearch() {
    const [search, setSearch] = useState('')

    const filteredData = data.filter((item) => {
      return search.toLowerCase() === ''
      ? item
      : item.name.toLowerCase().includes(search.toLowerCase()); 
    });
   return (
     <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div className="flex text-slate-50 gap-10">
        {filteredData.length > 0 ? (
          filteredData.map((item: values) => (
            <ul key={item.id}>
              <li>
                {item.name} - ${item.price}
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              </li>
            </ul>
          ))
        ) : (
         <p>Nothing matches your search.</p>
        )}
      </div>
     </div>
   )
 }
 