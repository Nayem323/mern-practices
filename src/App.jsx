// Conditional rendering starts here
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {/* {isPacked ? (
        <>
          <del>{name}</del>
          <span> ✅</span>
        </>
      ) : (
        name
      )} */}
      {name} {isPacked && "✅"}
    </li>
  );
}
// Conditional rendering ensds here

export default function PackingList() {
  // Rendering List starts here
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const chemists = people.filter((people) => people.profession === "chemist");
  // Rendering List ends here
  return (
    <>
      <section>
        <h2>Conditional rendering</h2>
        <h3>Sally Ride's Packing List</h3>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
      <br />
      <br />
      <section>
        <h2>Rendering List</h2>
        <ul>
          {people.map((people) => (
            <li key={people.id}>{people.name}</li>
          ))}
        </ul>
        <h3>Chemists</h3>
        <ul>
          {chemists.map((chemist) => (
            <li key={chemist.id}>{chemist.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
