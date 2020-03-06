import React from 'react';
import {Link} from "react-router-dom";

class Index extends React.Component{
    // constructor

    render() {
        return(
            <div>
                <div>
                    A页面
                    <Link to="/TodoList" style={{color:'black'}}>
                        <div>点击跳转到B页面</div>
                    </Link>
                    <textarea name="" id="" cols="30" rows="10">
                        some value
                    </textarea>
                </div>
            </div>
        )
    }
}
export default Index;