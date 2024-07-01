import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Idol } from "./types/Idol";
import { auth } from "./main";

const App = () => {
  const [idols, setIdols] = useState<Idol[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/idols`)
      .then((res) => res.json())
      .then((data: Idol[]) => {
        console.log(auth);
        setIdols(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      {idols.map((idol) => (
        <div key={idol.id}>
          <p>{idol.name}</p>
        </div>
      ))}
    </>
  );
};

export default App;
