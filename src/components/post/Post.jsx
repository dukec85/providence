import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Christ_Church_Cathedral%2C_Nashville.jpg/800px-Christ_Church_Cathedral%2C_Nashville.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Faith</span>
                    <span className="postCat">Worship</span>
                </div>
                <span className="postTitle">
                Lorem Ipsum blah blah blah dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah lorem impsum blah blah blah lorem impsum blah blah blah
            lorem impsum blah blah blah
            </p>
        </div>
    );
}
