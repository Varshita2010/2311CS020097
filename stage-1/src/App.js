import { useState } from "react";
import notificationsData from "./data";
import NotificationCard from "./notificationCard";
import { calculatePriority } from "./priority";

function App() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [topN, setTopN] = useState(10);

  const priorityNotifications = [...notifications]
    .sort((a, b) => calculatePriority(b) - calculatePriority(a))
    .slice(0, topN);

  const addNotification = () => {
    const types = ["Placement", "Result", "Event"];

    const randomType = types[Math.floor(Math.random() * types.length)];

    const newNotification = {
      id: notifications.length + 1,
      type: randomType,
      message: `${randomType} Notification ${notifications.length + 1}`,
      timestamp: Date.now(),
    };

    setNotifications([newNotification, ...notifications]);
  };

  return (
    <div className="App">

      <h1>Priority Inbox</h1>

      {/* Controls */}
      <div className="controls">

        <button onClick={addNotification}>
          Add Notification
        </button>

        <div className="input-box">
          <label>No. of Notifications</label>
          <input
            type="number"
            min="1"
            max={notifications.length}
            placeholder="Enter number"
            value={topN}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setTopN("");
              } else if (Number(value) >= 1) {
                setTopN(Number(value));
              }
            }}
          />
        </div>

      </div>

      <h2>Top {topN} Priority Notifications</h2>

      {priorityNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}

    </div>
  );
}

export default App;