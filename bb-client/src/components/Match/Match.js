import "./Match.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Match({ matches, setClickedUser }) {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  const getMatches = () => {
    axios
      .get("http://localhost:8080/users", {
        params: { userIds: JSON.stringify(matchedUserIds) },
      })
      .then((response) => {
        setMatchedProfiles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    getMatches();
  }, [matches]);
  
  return (
    <div className="matches__display">
    {filteredMatchedProfiles?.map((match, _index) => (
      <div
        key={_index}
        className="match__card"
        onClick={() => setClickedUser(match)}
      >
        <div className="image__container">
          <img src={match?.url} alt={match?.pet_name + " profile"} />
        </div>
        <h3>{match?.pet_name}</h3>
      </div>
    ))}
  </div>
  );
}

export default Match;
