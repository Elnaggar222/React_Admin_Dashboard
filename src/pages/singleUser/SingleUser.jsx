import "./SingleUser.css";
import {
  CalendarToday,
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const SingleUser = () => {
  return (
    <div className="singleUser">
      <div className="userTitleContainer">
        <h1 className="userEditTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userShowAndUpdateContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
              alt="userImg"
              className="userShowTopImg"
            />
            <div className="userShowTopInfo">
              <span className="userShowTopInfoName">Mohamed Ali</span>
              <span className="userShowTopInfoTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBottomMainTitle">Account Details</span>
            <div className="userShowBottomInfo">
              <PermIdentity className="userShowBottomIcon" />
              <span className="userShowBottomTitle">Mohamed Ali</span>
            </div>
            <div className="userShowBottomInfo">
              <CalendarToday className="userShowBottomIcon" />
              <span className="userShowBottomTitle">21/6/2023</span>
            </div>
            <span className="userShowBottomMainTitle">Contact Details</span>
            <div className="userShowBottomInfo">
              <PhoneAndroid className="userShowBottomIcon" />
              <span className="userShowBottomTitle">01010927998</span>
            </div>
            <div className="userShowBottomInfo">
              <MailOutline className="userShowBottomIcon" />
              <span className="userShowBottomTitle">
                mohamedelnaggar486@gmail.com
              </span>
            </div>
            <div className="userShowBottomInfo">
              <LocationOnOutlined className="userShowBottomIcon" />
              <span className="userShowBottomTitle">
                Egypt | Tanta | Kafr Az-Zayyat
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Mohamed Ali"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="mohamedelnaggar486@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="01010927998"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Egypt | Tanta | Kafr Az-Zayyat"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="userImg"
                />
                <label htmlFor="ImgUpload">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="ImgUpload" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
