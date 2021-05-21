const UserItem = (props) => {
  return (
    <div className="user-item">
      <label>{props.name}</label>
      <label>{props.age}</label>
    </div>
  );
};

export default UserItem;
