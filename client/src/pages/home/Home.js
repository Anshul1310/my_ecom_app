import LineChart from '../../components/chart/LineChart';
import PieChart from '../../components/chart/PieChart';
import DetailsBox from "../../components/detailsBox/DetailBox";
import Navbar from "../../components/navbar/Navbar";
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
	return (
		<div className="main">
			<Sidebar />
			<div style={{ width: '174px' }}></div>
			<div className="container">
				<Navbar />
				<div className="top_info">
					<DetailsBox className="detail_box" />
				</div>
				<div className="charts">
					<LineChart />
					<PieChart />
				</div>

				<div className="section">
					{/* <div className="recentProducts">
						<h2>Recent Products</h2>
						<p>Products added today. Click <Link to='/products'>here</Link> for more details </p>
						<table>
							<thead>
								<tr className="head">
									<td>
										<input type="checkbox" name="check" />
										<label htmlFor="check"></label>
									</td>
									<td>PHOTO</td>
									<td>NAME</td>
									<td>STOCK</td>
									<td>PRICE</td>
									<td>ACTIONS</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" name="check" />
										<label htmlFor="check"></label>
									</td>
									<td>
										<img src={cookie} alt="cookie" />
									</td>
									<td>Cookie</td>
									<td className="StockOut">Out Of Stock</td>
									<td>$1050</td>
									<td className="action">
										<input type="checkbox" name="action" id="action" />
										<label htmlFor="action" className="drop"><MoreHorizIcon /></label>
										<div className="dropDown">
											<ul className="dropUl">
												<li>
													<a href="/">Action</a>
												</li>
												<li>
													<a href="/">Another Action</a>
												</li>
												<li>
													<a href="/">Something else here</a>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="check" />
										<label htmlFor="check"></label>
									</td>
									<td>
										<img src={glass} alt="glass" />
									</td>
									<td>Glass</td>
									<td className="StockIn">In Stock</td>
									<td>$750</td>
									<td className="action">
										<input type="checkbox" name="action1" id="action1" />
										<label htmlFor="action1" className="drop"><MoreHorizIcon /></label>
										<div className="dropDown1">
											<ul className="dropUl1">
												<li>
													<a href="/">Action</a>
												</li>
												<li>
													<a href="/">Another Action</a>
												</li>
												<li>
													<a href="/">Something else here</a>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="check" />
										<label htmlFor="check"></label>
									</td>
									<td>
										<img src={headPhone} alt="headphone" />
									</td>
									<td>Headphone</td>
									<td className="StockIn">In Stock</td>
									<td>$950</td>
									<td className="action">
										<input type="checkbox" name="action2" id="action2" />
										<label htmlFor="action2" className="drop"><MoreHorizIcon /></label>
										<div className="dropDown2">
											<ul className="dropUl2">
												<li>
													<a href="/">Action</a>
												</li>
												<li>
													<a href="/">Another Action</a>
												</li>
												<li>
													<a href="/">Something else here</a>
												</li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="check" />
										<label className='label4' htmlFor="check"></label>
									</td>
									<td>
										<img src={perfume} alt="perfume" />
									</td>
									<td>Perfume</td>
									<td className="StockIn">In Stock</td>
									<td>$632</td>
									<td className="action">
										<input type="checkbox" name="action3" id="action3" />
										<label htmlFor="action3" className="drop"><MoreHorizIcon /></label>
										<div className="dropDown3">
											<ul className="dropUl3">
												<li>
													<a href="/">Action</a>
												</li>
												<li>
													<a href="/">Another Action</a>
												</li>
												<li>
													<a href="/">Something else here</a>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div> */}

					{/* <div className="notification">
						<div className="notificationMain">
							<h2>Notification</h2>
							<Link to='/notification'> <ArrowForwardIcon style={{ cursor: 'pointer', color: '#000' }} /></Link>
						</div>
						<div className="notifi">
							<PersonIcon className='user' />
							<div className="detail">
								<p className="info">You joined a group</p>
								<p className="time"><AccessTimeIcon /> Today</p>
							</div>
						</div>
						<div className="notifi">
							<InventoryIcon className='storage' />
							<div className="detail">
								<p className="info">Storage is running low!</p>
								<p className="time"><AccessTimeIcon /> Today</p>
							</div>
						</div>
						<div className="notifi">
							<InsertDriveFileIcon className='file' />
							<div className="detail">
								<p className="info">1 person sent a file</p>
								<p className="time"><AccessTimeIcon /> Yesterday</p>
							</div>
						</div>
						<div className="notifi">
							<FileDownloadIcon className="download" />
							<div className="detail">
								<p className="info">Reports ready to download</p>
								<p className="time"><AccessTimeIcon /> Yesterday</p>
							</div>
						</div>
						<div className="notifi">
							<LockIcon className="secure" />
							<div className="detail">
								<p className="info">2 steps verification</p>
								<p className="time"><AccessTimeIcon /> 20min ago</p>
							</div>
						</div>
						<div className="buttons" style={{ marginTop: '20px' }}>
							<div className="readAllBtn"><DoneIcon /> Make all read</div>
							<div className="deleteAllBtn"><DeleteIcon /> Delete all</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>);
}

export default Home;