import React from 'react'

const Slidder=(props)=>{
    let items=props.items
    return items.map((item)=>{
        return <SlidderItems
            item={item}
        />
    })
}

export default Slidder