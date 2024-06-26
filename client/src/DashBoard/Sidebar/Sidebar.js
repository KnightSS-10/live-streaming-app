import React from "react";

// const followedChannels = [
//   {
//     id: 1,
//     username: 'heya',
//     isOnline: false,
//   },
//   {
//     id: 2,
//     username: 'heyaa',
//     isOnline: true,
//   },
//   {
//     id: 3,
//     username: 'heyaa',
//     isOnline: false,
//   }
// ]

export const Sidebar = ({ channels }) => {

  if(!channels) {
    return null;
  }
  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">Followed Channels</span>
      {channels?.map((channel) => {
        return (
          <div key = {channel.id} className="sidebar-list-item">
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{
                color : channel.isOnline? "green" : "red",
              }}
            >{channel.isOnline ? "Online" : "Offline"}</span>
          </div>
        )
      })}
    </div>
  )
};

