import Image from "next/image"
import profile from '../../../public/next.svg';
// import profile1 from '../../../public/file.svg';
// import profile2 from '../../../public/next.svg';
export default function Imagepage(){
    return (
        <div>
            <div>
            <h1>Image Upload at Next js</h1>

        {/* Image load with nextjs module */}
        <Image 

            src={profile}
            alt="Error to load"
        />
        </div>

        {/* Image load with html tag
            - it will minimize or expend with browser page 
            - need html css for it  
        */}
        <img
        src={profile.src}
        />

{/* load image from google  */}
        <Image
        
        src='https://www.istockphoto.com/photo/eye-of-model-with-colorful-art-make-up-close-up-gm814423752-131755775?searchscope=image%2Cfilm'
            alt="Error to load"
        width={200}
        height={200}
        />
        </div>
    )
}