import React from "react";
import {Link} from "react-router-dom";
import App from "../../App";
class TodoList extends React.Component{
    render() {
        return(
            <div>
                B页面
                <div>
                    <Link to='/' style={{color:'black'}}>
                        <div>
                            点击跳转A页面
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}
export default TodoList;