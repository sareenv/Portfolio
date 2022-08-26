
import React from 'react'

const Contact = () => {
    return (
        <div style={{ padding: 10, background: 'red'}} > 
            <h2> Get in Touch </h2>
            <form> 
                <input placeholder="Enter your name"/><br />
                <input placeholder="Enter your email"/> <br />
                <textarea placeholder="Your message" /><br /><br />
                <button> Send Query </button>
            </form>
        </div>
    )
}

export default Contact