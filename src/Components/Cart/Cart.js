import React from 'react'

export default function Cart({ name, img }) {
    return (
        <>
            <div className="is-flex is-justify-content-center is-align-items-center">
                <img src={img} width={30} alt="" />
                <h2>Name : {name.length < 20 ? name : name.slice(0, 14)}</h2>
            </div>

        </>
    )
}
