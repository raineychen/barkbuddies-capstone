import "./Dashboard.scss";
import { useEffect, useState } from "react";
import Message from '../../components/Message/Message'
import { useCookies } from "react-cookie";
import axios from "axios";
// import TinderCard from "react-tinder-card";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [ageMatchedUsers, setAgeMatchedUsers] = useState(null); 
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = () => {
    axios
      .get("http://localhost:8080/users", {
        params: { userId },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getAgeMatchedUsers = () => {
    axios
      .get("http://localhost:8080/age-matched-users", {
        params: { age: user?.puppy_age_interest }, // Change to puppy_age_interest
      })
      .then((response) => {
        setAgeMatchedUsers(response.data); // Updated state variable name
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getAgeMatchedUsers();
    }
  }, [user]);

  const updateMatches = (matchedUserId) => {
    axios
      .put("http://localhost:8080/addmatch", {
        userId,
        matchedUserId,
      })
      .then(() => {
        getUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);

  const filteredAgeMatchedUsers = ageMatchedUsers?.filter(
    (ageMatchedUser) => !matchedUserIds.includes(ageMatchedUser.user_id)
  );

  console.log("filteredAgeMatchedUsers ", filteredAgeMatchedUsers);

  return (
    <>
      {/* {user && (
        <div className="dashboard">
          <Message user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {filteredAgeMatchedUsers?.map((ageMatchedUser) => (
                // <TinderCard
                //   className="swipe"
                //   key={ageMatchedUser.user_id}
                //   onSwipe={(dir) => swiped(dir, ageMatchedUser.user_id)}
                //   onCardLeftScreen={() => outOfFrame(ageMatchedUser.first_name)}
                // >
                //   <div
                //     style={{
                //       backgroundImage: "url(" + ageMatchedUser.url + ")",
                //     }}
                //     className="card"
                //   >
                //     <h3>{ageMatchedUser.first_name}</h3>
                //   </div>
                // </TinderCard>
              // ))}
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Dashboard;
