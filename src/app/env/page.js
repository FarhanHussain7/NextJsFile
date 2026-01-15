export default function EnviromentVar(){
    console.log(process.env.ENVIROMENT_VARIABLE);
    return (
        <div>
            <h1>It will Check Enviroment Variable </h1>
        {
            process.env.ENVIROMENT_VARIABLE ?
             <h1>ENVIOMENT_VARIABLE FOUND</h1>
            :<h2>ENV NOT FOUND</h2>
        }
        </div>
    )
}