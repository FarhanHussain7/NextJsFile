
import { Roboto } from "next/font/google"
const roboto = Roboto({
    weight: ['100','400','700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})  
export default function FontsPage(){
    return(
        <div>   
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&family=Open+Sans:wght@300;600&family=Lobster&display=swap" rel="stylesheet"/>

            <h1 className="font-sans text-4xl">This is a Sans Font</h1>
            <h1 className="font-serif text-4xl">This is a Serif Font</h1>
            <h1 className="font-mono text-4xl">This is a Monospace Font</h1>

            {/* Inside function  */}
            <h1 className="text-4xl font-['Roboto']">This is Roboto Font from google font</h1>
        </div>
    )
}