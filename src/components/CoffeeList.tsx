import { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";
const CoffeeList = () => {
  const [coffeeList, setCoffeeList] = useState<any[]>([]);
  const [filteredCoffeeList, setFilteredCoffeeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetch("public/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setCoffeeList(data.coffeeList);
          setFilteredCoffeeList(data.coffeeList);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      mounted = false;
    };
  }, []);
  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  function handleAvailableProducts() {
    const availableProducts = coffeeList.filter((p) => p.available);
    setFilteredCoffeeList(availableProducts);
  }

  function handleAllProducts() {
    setFilteredCoffeeList(coffeeList);
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
      <div>
        <button
          onClick={handleAllProducts}
          type="button"
          className="text-[#FEF7EE] bg-[#4D5562] hover:bg-[#6F757C] hover:text-[#BEE3CC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          All Products
        </button>
        <button
          onClick={handleAvailableProducts}
          type="button"
          className="text-[#FEF7EE] bg-[#4D5562] hover:bg-[#6F757C] hover:text-[#BEE3CC] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Available Now
        </button>
      </div>
      <CoffeeCard coffeeList={filteredCoffeeList} />;
    </>
  );
};

export default CoffeeList;
