import Navbar from "./navbar";
import './index.css';
import Card from "./card";
import data from "./data";

function App() {
  const newcard = data.map(item => {
    return <Card key={item.id} 
                 item = {item}
                 />
  })
  return (
    <div className="App">
       <Navbar />
       {newcard}
    </div>
  );
}

export default App;
