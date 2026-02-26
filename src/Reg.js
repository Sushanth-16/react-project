import axios from "axios";
import {useState} from "react"
function Reg()
{
    const[data,setdata]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    const changeName=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit = async()=>
    {
        try{
            // const res=await axios.post("http://localhost:8080/reg")
                const res = await axios.post(
                "https://cabsystemsms-1.onrender.com/register",
                data
            )
            alert(res.data)
        }
        catch(xyz){
            // alert(xyz.response.data)
            alert(xyz.response?.data || "Error")
        }
    }
    return(
        <>
            <h1>iam App</h1>
            <input type="text" onChange={changeName} name="username" placeholder="enter username"/>
            <input type="email" onChange={changeName} name="email" placeholder="enter email"/>
            <input type="password" onChange={changeName} name="password" placeholder="enter password"/>
            <button onClick={submit}>register</button>
        </>
    )
}
export default Reg