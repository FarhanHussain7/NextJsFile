import custom from '../../custom.module.css'
import other from '../../other.module.css'

export default function ModuleFile(){
    return(
        <div>
            <h1>Css Module </h1>
            <h1 className={custom.main}>Css Module from custom.module.css file </h1>
            <h1 className={other.main}>Css Module from other.module.css file</h1>
        </div>
    )
}