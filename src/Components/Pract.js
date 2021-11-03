import gsap from 'gsap-trial/all'
import {React,useState,useEffect,useRef} from 'react'

// const Moles = ({ children }) => <div>{children}</div>
// const Mole = ({fun1254}) => <button onClick = {
//     ()=> fun1254(100)
// }>Mole</button>

const Mole = ({fun1254}) => {
  const buttonRef = useRef(null)
  useEffect(() => {
    gsap.set(buttonRef.current, {
      yPercent: 100,
      display: 'column'
    })
    gsap.to(buttonRef.current, {
      yPercent: 0,
      yoyo: true,
      repeat: -1,
    })
  }, [])
  return (
    <div className="mole-hole">
      <button className="mole" ref={buttonRef} onClick={() => fun1254(100)}>Mole</button>
    </div>
  )
}

const Score = (props) => <div><h1>YOUR SCORE IS :{props.showScore}</h1></div>

const TIME_LIMIT = 30

const Timer = ({time,interval=100,onEnd}) => {
  const[internalTime,setInternalTime]=useState(time)
  const timerRef=useRef(time)
  useEffect (()=>{
    if(internalTime===0){
      onEnd()
    }
  },[internalTime,onEnd])
  useEffect(() => {
    timerRef.current= setInterval(()=>{setInternalTime((timerRef.current+=interval))})
    console.log(timerRef)
    return () => {
      clearInterval(timerRef)
    }
  }, [interval])
  return <div><h1>Time Passed {internalTime/100} ms</h1></div>
}

const CustomHook = (key,initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  return [state,setState]
}
function Pract() {
    const [playing, setPlaying] = useState(false)
    const [currscore,setScore]=useState(0)
    const fun = (update) => {setScore(currscore+update)}
    const [highscore,setHighscore]=CustomHook('wack',111)
    useEffect (()=>{
        console.log("render")
        return () => {
            console.log("remove event listner"+ currscore)
        }
    },[currscore])
    const onEnd =() => {
      setPlaying(false)
    }
    return (
        <div>
      {!playing && <h1>Whac a Mole</h1>}
      <button onClick={() => {setPlaying(!playing)
    setScore(0)}}>{playing ? 'Stop' : 'Start'}</button>
      {playing &&
        <div>
          <Score showScore={currscore}/>
          <div className="container">
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
            <Mole fun1254 = {fun}/>
          </div>
          <Timer time={TIME_LIMIT}
          onEnd={onEnd}/>
           <button onClick={()=>{
             setPlaying(!playing)
             if(currscore>highscore){
               setHighscore(currscore);
             }
          }}
           >END GAME</button>
        </div>
      }
      {!playing && <h1>HIGHSCORE IS :{highscore}</h1>}
    </div>
    )
}

export default Pract
