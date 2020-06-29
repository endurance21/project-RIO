import React from 'react'
import {Link,withRouter} from 'react-router-dom'  //WithRouter is used to manage the prop history

const Menu = () =>(
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-item" to="/" />
            </li>
            <li className="nav-item">
                <Link className="nav-item" to="/signup" />
            </li>
            <li className="nav-item">
                <Link className="nav-item" to="/signin" />
            </li>
        </ul>

    </div>


)

export default withRouter(Menu)
