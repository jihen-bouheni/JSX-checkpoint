
import './App.css';
import Nature from "./nature/Nature";

function App() {
  return (
<div style= {{border:"solid 1px black", maxWidth:"100vw"}}>

<h2 className="Myname">Jihen Bouheni</h2>
<br/>

<img className="photos" src={Nature} alt=" Image 2" width="550"/> 
<br />

<img className="photos" src="Nature2.jpg" alt=" Image 1" width="550"/>


<iframe width="700" height="500" src="https://www.youtube.com/embed/3Ba_WoSZXvw" title="YouTube video player"/>

</div>   
    
  
  );
}

export default App;
