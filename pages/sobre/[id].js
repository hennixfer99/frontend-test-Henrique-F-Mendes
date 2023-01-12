
import Link from "next/link"
import { useRouter } from "next/router"

export default function SubPage(){
    
    const router = userRouter()

    const id = router.query.id
    
    return (
     <>
     <Link href="/"><a>Return to homepage</a></Link>
     <h1> Exibindo id = {id} </h1>
     </>   
    )
}