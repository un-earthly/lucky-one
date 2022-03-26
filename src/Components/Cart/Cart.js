import React from 'react'

export default function Cart({ name, img }) {
    return (
        <>
            <div style={{borderBottom:'black 1px solid', padding:'5px', marginBottom:'5px', position:'relative'}} className="is-flex is-align-items-center">
                
                <img src={img} style={{borderRadius:'20rem', height:'30px', width:'30px'}} alt="" />
                <h2 className="is-size-7">Name : {name.length < 20 ? name : name.slice(0, 14)}</h2>
            </div>

        </>
    )
}
