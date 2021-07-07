import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img 
                src="https://www.pbc1.net/sitebuildercontent/sitebuilderpictures/webassets/.pond/churchdedication2009327.jpg.w180h120.jpg" 
                alt="" />
                <p>
                We are a fellowship of Free & Faithful Baptists. You will find us to be purposefully inclusive of everyone in our worship and fellowship. Our Wednesday night studies are a time when all perspectives are respected and open honest dialog is welcomed.  We encourage each other to think and to explore the world God created.  We are committed to supporting missions around the world and in our own backyard.

                Providence Baptist Church - "Being the Presence of Christ in our community"
                </p>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                      <li className="sidebarListItem">FAITH</li>
                      <li className="sidebarListItem">COMMUNITY</li>
                      <li className="sidebarListItem">WORSHIP</li>
                      <li className="sidebarListItem">CULTURE</li>
                      <li className="sidebarListItem">EVENTS</li>
                    </ul>
                </div>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
