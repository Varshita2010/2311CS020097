function NotificationCard({ notification }) {
  return (
    <div className="card">
      <h3>{notification.type}</h3>

      <p>{notification.message}</p>

      <p>ID : {notification.id}</p>

      <small>
        {new Date(notification.timestamp).toLocaleString()}
      </small>
    </div>
  );
}

export default NotificationCard;