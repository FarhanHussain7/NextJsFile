"use client";
export default function DeletePage(props){
    const Userid = props;
    console.log(Userid);
    const deleteUser = async ()=>{
        let result = await fetch('http://localhost:3000/O9_Static_API/staticRouteApi/'+Userid,{
            method:"delete"
        });
        result = await result.json();
        if(result.success){
            alert("User deleted successfully");
        }        else{
            alert("Some error with data please check and try again")
        }
    }
    return<button onClick={deleteUser}>Delete</button>
}