import { useEffect, useState } from "react";

function FindHeroes(props) {
  const [hero, setHero] = useState([]);
  const [cape, setCape] = useState("");
  console.log(hero);

  function showHeroes() {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=d299c1985600743396625acf85f4958c",
      { mode: "cors" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHero(data.data.results);
      })
      .catch((err) => {
        console.log(
          "Oh No! That dang cape made you trip and the bad guy got away!"
        );
        console.error(err);
      });
  }
  useEffect(() => {
    showHeroes();
  }, []);

  function takeMaskOff(secretIdentity) {
    console.log(secretIdentity.id);
    setCape(secretIdentity.id);
  }
  if (cape.length > 0) {
    hero.filter(xVision);
  }
  function xVision(value, index, array) {
    return value.name.toUpperCase() === cape.toUpperCase();
  }

  return (
    <div className="SuperHeroFinder">
      <h1>Reveal your favorite heroes!</h1>
      <ul>
        <li>
          <input
            onChange={takeMaskOff}
            type="Search"
            name="Super Heroes"
            id="Hero Search"
            value={cape}
          />
        </li>
        {hero.length > 0 ? (
          hero.map((name) => {
            return (
              <li key={hero.id}>
                <p>{hero.name}</p>
                <p>{hero.stories.thumbnail.path}</p>
                <img src="hero.stories.thumbnail.path + .jpg" />
              </li>
            );
          })
        ) : (
          <h3>Taking some time...</h3>
        )}
      </ul>
    </div>
  );
}

export default FindHeroes;
