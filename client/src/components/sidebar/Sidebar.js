import "./Sidebar.scss"
import { NavLink } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<div className="top">
				<span className="heading">Ecom_Admin</span>
			</div>

			<div className="center">
				<ul>
					<span className="labels">MAIN</span>
					<li className="item">
						<NavLink to='/'>
							<DashboardIcon className="icon" />
							<span className="spanList">Dashboard</span>
						</NavLink>
					</li>

					<p id="label2" className="labels">LISTS</p>
					<li className="item">
						<NavLink to='/users'>
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Users</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/products'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Products</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/sellers'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Sellers</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/earnings'>
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Earnings</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/orders'>
							<ShoppingBasketIcon className="icon" />
							<span className="spanList">Orders</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/staticProducts'>
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Static Products</span>
						</NavLink>
					</li>

					<p className="labels">MAIN</p>

					<li className="item">
						<NavLink to='/notification'>
							<NotificationsNoneIcon className="icon" />
							<span className="spanList">Notifications</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/news'>
							<FeedIcon className="icon" />
							<span className="spanList">News</span>
						</NavLink>
					</li>
					<li className="item">
						<NavLink to='/admins'>
							<SettingsIcon className="icon" />
							<span className="spanList">Admins</span>
						</NavLink>
					</li>

					<li className="item">
						<NavLink to='/login'>
							<LogoutIcon className="icon" />
							<span className="spanList">Logout</span>
						</NavLink>
					</li>
				</ul>
			</div>

			{/* <div className="bottom">
				<div className="containerOne">

				</div>
				<div className="containerTwo">

				</div>
			</div> */}
		</div>
	);
}

export default Sidebar;