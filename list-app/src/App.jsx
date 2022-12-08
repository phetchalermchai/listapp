import { useState } from 'react'
import { useEffect,useMemo  } from 'react'
import Form from './components/Form'
import Table from './components/table'
import Formupdate from './components/Formupdate'
import Context from './components/Context'

function App() {
  const [data,setData] = useState("")
  const [dataId,setDataID] = useState({
    id:"",
    fname:"",
    lname:"",
    phone:"",
    email:"",
    isedit:false
  })
  const value = useMemo(
    () => ({ dataId, setDataID }), 
    [dataId]
  );
  useEffect(()=>{
    const getData = async () =>{
      await fetch('http://localhost:3333/list')
      .then(response =>response.json())
      .then(data => {
        if(data.status === "ok"){
          setData(data.results)
        }
      }).catch((error)=>{
        console.log(error)
      });
    }
    getData();
  },[data])

  return (
    <Context.Provider value={value} >
      <div className="container ">
        {!dataId.isedit && <Form/>}
          {dataId.isedit && <Formupdate/>}
            <Table list={data}/>
      </div>
    </Context.Provider>
  )
}

export default App
