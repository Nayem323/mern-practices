import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Info
        name="Nayem"
        email="nayem323@gmail.com"
        mobile="5346456456"
        hobbies={[
          "Reading",
          "Travelling",
          "Listening to music",
          "Watching movies",
          "Playing games",
        ]}
      />
      <hr />
      <Info
        name="Shuvo"
        mobile="8756973245"
        hobbies={["Travelling", "Listening to music", "Playing games"]}
      />
    </>
  );
}

export default App;
