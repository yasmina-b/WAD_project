import "./sidebar.css";
import {
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/admin/list-of-products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
              </Link>
              <Link to="/admin/create-product" className="link">
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                Create products
                </li>
              </Link>
              <Link to="/admin/delete-product" className="link">
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                 Delete products
                 </li>
              </Link>
              <Link to="/admin/update" className="link">
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                 Update products
                 </li>
              </Link>
              <Link to="/admin" className="link">
                <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon" />
                 Orders
            </li>
            </Link>
          </ul>
        </div>
        </div>
        </div>
  );
}