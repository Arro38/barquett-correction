import React, { useEffect } from "react";
import MealCard from "../components/MealCard";
import axios from "axios";
import Loading from "../components/Loading";

function HomePage() {
  const [meals, setMeals] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);
  const [lastPage, setLastPage] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [myMeal, setMyMeal] = React.useState(false);

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get(
        "https://barquett-api.formaterz.fr/api/meals?page=" + currentPage
      );
      setLastPage(response.data["hydra:view"]["hydra:last"].split("page=")[1]);
      setMeals(response.data["hydra:member"]);
      setLoading(false);
    };
    fetchMeals();
  }, [refresh, currentPage]);
  const pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => {
          setCurrentPage(i);
          setLoading(true);
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div className=" flex flex-wrap m-4 items-center justify-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <button className="w-full" onClick={() => setMyMeal(!myMeal)}>
            Mes plats
          </button>
          {meals
            .sort((a, b) => {
              if (username) {
                if (a.createdBy === username) {
                  return -1;
                }
              }
              return 1;
            })
            .filter((m) => (myMeal ? m.createdBy === username : true))
            .map((m, index) => (
              <MealCard
                key={index}
                meal={m}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            ))}
          <div
            className="flex 
           w-full
          justify-center items-center gap-4"
          >
            {pages}
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
