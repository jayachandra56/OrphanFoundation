import React from 'react'
import { withRouter } from 'react-router-dom'

function LoginCompo() {
    console.log('sdkjgjdh')
    return (
        <div>
            <div className="login-conatiner">
                <form>
                    <input type="text" placeholder="Enter number" /><br /><br/>
                    <input type="password" placeholder="Enter password" /><br /><br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default withRouter(LoginCompo)
