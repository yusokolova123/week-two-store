import Goods from './Goods.js';
import './App.css';
import imageOne from './bag.jpg';
import imageTwo from './boots.jpg';
import imageThree from './cap.jpg';


function App() {
  return (
    <div>
      <Goods image={imageOne} item="Bag" price="340$" description="Natural leather" />
      <Goods image={imageTwo} item="Boots" price="455$" description="Natural leather" />
      <Goods image={imageThree} item="Cap" price="14$" description="Cotton" />
      <Goods image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" item="Jacket" price="230$" description="Poliester" />    
    </div>
  );
}

export default App;
