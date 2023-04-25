import Card from "./Cards";
import Data from "./Data"
import Footer from "./Footer";

function createCard(props){
  return <Card 
  key={props.id}
  title={props.title}
  image={props.image}
/>
}


function App() {
  return (
    <div>
    <h2>Nisha Creativity 🪡</h2>
    <p className="headline">💕 Craft your beautiful memories forever 💕</p>
      <div className="row">
    {Data.map(createCard)}
    </div>
    <Footer />
    </div>
    
  );
}

export default App;
