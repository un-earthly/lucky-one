import React from 'react'

export default function Questions() {
    return (
        <div className="container p-2">

            <div className="q1">
                <h2 className="has-text-primary-dark has-text-centered">
                    How React Works?
                </h2>
                <p className="has-text-primary">
                    React is a js library maintained by Facebook.it works on the front for making frontend
                    single-page applications.it works in declarative code. by declarative, I
                    meant you can or have to declare a function which is called a component in
                    react. each time you declare a component you gotta import it in order
                    to use it.it has virtual dom to create and change the state of the application.
                    so it doesn't reload all the time use changes anything in the UI.
                    it is compiled using babel and it's unidirectional.
                </p>
            </div>
            <div className="q2">
                <h2 className="has-text-primary-dark has-text-centered">
                    Props Vs State
                </h2>
                <p className="has-text-primary">
                    Props are read-only, whereas states can be updated using a hook. the state is a snapshot of the UI. changes in UI are stored in the state and react compares previous and new states in the virtual dom to update the UI so it doesn't reload all-time when something changes in UI. on the other hand, props are like variables they can contain anything and can be sent as object properties from parent components to child components. states can be changed, props cant be changed. the component that has its very own state is called stateful and the one that doesn't have any state or receives state as props are called presentational component or stateless component.</p>
            </div>

        </div>
    )
}
