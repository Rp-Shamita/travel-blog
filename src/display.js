import data from "./data";
import Card from "./card";

const Display = () => {
    const newcard = data.map(item => {
        return <Card key={item.id} 
                     item = {item}
                     />
    })
    return ( 
        {newcard}
     );
}
 
export default Display;