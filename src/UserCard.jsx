export function UserCard({ name, phoneNumber, birthday, address }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Birthday:</div>
        <div>{birthday}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  )
}
