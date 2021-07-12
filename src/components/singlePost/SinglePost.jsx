import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Christ_Church_Cathedral%2C_Nashville.jpg/800px-Christ_Church_Cathedral%2C_Nashville.jpg" 
                alt="" 
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Chris</b></span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p>
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.
                </p>
            </div>
        </div>
    );
}
