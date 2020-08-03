
import React from 'react'

const Contact = () => {
    return (
        <div style={{ padding: 10}} > 
            <h2> Contact Page </h2>
            <form> 
                <label> Email </label><br />
                <input placeholder="Enter your email"/> <br />
                <label> Name </label><br />
                <input placeholder="Enter your name"/><br />
                <label> Inquires </label><br />
                <input placeholder="Enter your query"/><br /><br />
                <button> Send Query </button>
            </form>
        </div>
    )
}

export default Contact