// Static Html : 
// 
//  Used another component by add this output:"export" in next.config.mjs

import Login from "@/app/login/page";

export default function HTMLBuild(){
    return(
        <div>
            <h1>Export static HTML Page with build </h1>
            <Login/>
        </div>
    )
}