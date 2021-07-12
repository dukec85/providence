import "./topbar.css";

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">MESSAGE</li>
                    <li className="topListItem">MISSIONS</li>
                    <li className="topListItem">STUDY</li>
                    <li className="topListItem">LINKS</li>
                    <li className="topListItem">LOG OUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="" 
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
