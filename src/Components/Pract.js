import {React,useState,useEffect,useRef} from 'react'

const Moles = ({ children }) => <div>{children}</div>
const Mole = ({fun1254}) => <button onClick = {
    ()=> fun1254(100)
}>Mole</button>
const Score = (props) => <div><h1>{props.showScore}</h1></div>

const TIME_LIMIT = 30000

const Timer = () => {
  return <div></div>
}

function Pract() {
    const [playing, setPlaying] = useState(false)
    const [currscore,setScore]=useState(0)
    const fun = (update) => {setScore(currscore+update)}

    useEffect (()=>{
        console.log("render")
        return () => {
            console.log("remove event listner"+ currscore)
        }
    },[currscore])
    return (
        <div>
      {!playing && <h1>Whac a Mole</h1>}
      <button onClick={() => {setPlaying(!playing)
    setScore(0)}}>{playing ? 'Stop' : 'Start'}</button>
      {playing &&
        <div>
          <Score showScore={currscore}/>
          <Moles>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
          </Moles>
        </div>
      }
    </div>
    )
}

export default Pract
