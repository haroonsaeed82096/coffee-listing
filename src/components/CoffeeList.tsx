import { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";
const CoffeeList = () => {
  const [coffeeList, setCoffeeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffeeList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(coffeeList[0], "coffeeList");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mb-4 text-center w-1/2 mx-auto text-[#111315]">
        <h2 className="text-[#FEF7EE] text-2xl font-bold">Our Collection</h2>
        <p className="text-[#4D5562] text-lg">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <CoffeeCard coffeeList={coffeeList} />;
    </>
  );
};

export default CoffeeList;
