interface Coffee {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}
export default function CoffeeCard(props: { coffeeList: Coffee[] }) {
  const { coffeeList } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {coffeeList.map((coffee: Coffee) => {
        return (
          <div key={coffee.id} className="p-4 rounded-md m-2">
            <div className="relative">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="rounded-md"
                style={{
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  display: "inline-block",
                }}
              />
              {coffee.popular && (
                <span className="absolute top-2 left-2 bg-[#F6C768] rounded-full px-2 py-1">
                  {coffee.popular ? "Popular" : ""}
                </span>
              )}
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="text-[#FEF7EE]">{coffee.name}</h3>
              <span className="bg-[#BEE3CC] rounded-md px-2">
                {coffee.price}
              </span>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row">
                {coffee.rating > 0 && coffee.votes > 0 && (
                  <>
                    <svg
                      className="w-4 h-4 fill-yellow-400 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.6 12.18.8 7.91l6.09-.89L10 2l3.11 5.02 6.09.89-4.8 4.27 1.48 5.91z" />
                    </svg>
                    <span style={{ color: "#ffffff" }}>{coffee.rating}</span>
                    &nbsp;
                    <span style={{ color: "#ffffff" }}>({coffee.votes})</span>
                  </>
                )}
              </div>
              {!coffee.available && (
                <div className="ml-auto">
                  <span className="font-bold" style={{ color: "#ED735D" }}>
                    Sold Out
                  </span>
                </div>
              )}
            </div>
            {coffee.votes <= 0 && (
              <>
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>

                  <span className="text-left ml-1" style={{ color: "#ffffff" }}>
                    No Ratings
                  </span>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
