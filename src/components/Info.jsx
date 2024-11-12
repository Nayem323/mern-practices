const Info = (data) => {
  const { name, email, mobile, hobbies } = data;
  return (
    <div className="info">
      <h2>Info about {name}</h2>
      {email && <p>Email: {email}</p>}
      {mobile && <p>Mobile: {mobile}</p>}
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
