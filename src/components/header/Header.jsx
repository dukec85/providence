import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Providence</span>
                <span className="headerTitleSm">Baptist Church</span>
            </div>
            <img 
            className="headerImg" 
            src="https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
            alt="" 
            />
        </div>
    );
}
