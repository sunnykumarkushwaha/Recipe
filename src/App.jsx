import { useState } from 'react'
 
 
import './App.css'
import Input from './Components/Input';
import Fooflist from './Components/Fooflist'
import Nav from './Components/Nav';
import Container from './Components/Container';
import Inner_container from './Components/Inner_container';
import Fooddetails from './Components/Fooddetails';
import Testo from './Components/Testo';
function App() {
  const [count, setCount] = useState(0)
  const [fooddata,setfooddata]=useState([])

  const  [foodid,setfoodid]=useState("656329")
var t=fooddata.map((e)=>{
console.log(e.title)
return `${e.id} `
  })

  return (  
    <>
    <div>
    <Nav></Nav>
   
     {/* <h2>FOOD RECIPE  </h2> */}
     <Input fooddata={fooddata} setfooddata={setfooddata}></Input>
    <Container>
    <Inner_container>
    <Fooflist setfoodid={setfoodid} fooddata={fooddata}/>
    </Inner_container>
    <Inner_container>
    <Fooddetails foodid={foodid}></Fooddetails>
    </Inner_container>
    
    </Container>

<h3>{t}</h3>
</div>
<Testo></Testo>
<Testo placeholder="second" name="jhvdh"></Testo>
    </>
  )
}

export default App
