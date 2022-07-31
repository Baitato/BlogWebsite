import "./topbar.css"

export default function TopBar() {
  return (
    <div className ="top">
        <div className="topLeft">
            <ul className = "topLeftList">
                <li className = "topLeftListItem">HOME</li>
                <li className = "topLeftListItem">BLOGS</li>
            </ul>
        </div>
        <div className="topCenter">
            <ul className="topCenterList">
                <li className = "topCenterListItem">CREATE POST</li>
            </ul>
        </div>
        <div className="topRight">
            <img className = "topRightImg" src="https://i.kym-cdn.com/entries/icons/facebook/000/036/362/knifechickcover.jpg" alt="" />
            <i className = "topRightSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
