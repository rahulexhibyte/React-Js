import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <div className="user-list">
      {props.items.length === 0 ? (
        <div>No Users Found!</div>
      ) : (
        props.items.map((user) => {
          return (
            <UserItem key={user.id} name={user.name} age={user.age}></UserItem>
          );
        })
      )}
    </div>
  );
};

export default Users;
