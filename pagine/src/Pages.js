import React from 'react'

const Pages = ({butf}) => {

    const pagef= (number)=>{
        if ((number +1)===1) {
            return "first"
             }
       if ((number+1) ===10) {
        return "last"
        
       }
       else{return number+1}

    }
let total= 20

const unitv= 2
const singi= total/unitv

 const page = Array.from({length:singi}, (_,index)=>{
        return index
    }).map((item, index)=>{
        return <button key={index} className={((item+1===1)||(item+1===10))?"pagefl" :"pages"} onClick={()=>butf(item)}>{pagef(item)}</button>
    })

  return (
    <div className='pagec'>{page}</div>
  )
}

export default Pages