import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Indoor Plants",
    image: "/images/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 349,
    category: "Indoor Plants",
    image: "/images/peace-lily.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 249,
    category: "Indoor Plants",
    image: "/images/aloe-vera.jpg",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 199,
    category: "Indoor Plants",
    image: "/images/spider-plant.jpg",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 399,
    category: "Indoor Plants",
    image: "/images/zz-plant.jpg",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 449,
    category: "Indoor Plants",
    image: "/images/areca-palm.jpg",
  },

  {
    id: 7,
    name: "Rose Plant",
    price: 299,
    category: "Flowering Plants",
    image: "/images/rose.jpg",
  },
  {
    id: 8,
    name: "Jasmine Plant",
    price: 279,
    category: "Flowering Plants",
    image: "/images/jasmine.jpg",
  },
  {
    id: 9,
    name: "Hibiscus Plant",
    price: 249,
    category: "Flowering Plants",
    image: "/images/hibiscus.jpg",
  },
  {
    id: 10,
    name: "Marigold Plant",
    price: 179,
    category: "Flowering Plants",
    image: "/images/marigold.jpg",
  },
  {
    id: 11,
    name: "Orchid Plant",
    price: 499,
    category: "Flowering Plants",
    image: "/images/orchid.jpg",
  },
  {
    id: 12,
    name: "Bougainvillea Plant",
    price: 399,
    category: "Flowering Plants",
    image: "/images/bougainvillea.jpg",
  },

  {
    id: 13,
    name: "Basil Plant",
    price: 149,
    category: "Herbs",
    image: "/images/basil.jpg",
  },
  {
    id: 14,
    name: "Mint Plant",
    price: 129,
    category: "Herbs",
    image: "/images/mint.jpg",
  },
  {
    id: 15,
    name: "Coriander Plant",
    price: 99,
    category: "Herbs",
    image: "/images/coriander.jpg",
  },
  {
    id: 16,
    name: "Rosemary Plant",
    price: 179,
    category: "Herbs",
    image: "/images/rosemary.jpg",
  },
  {
    id: 17,
    name: "Thyme Plant",
    price: 159,
    category: "Herbs",
    image: "/images/thyme.jpg",
  },
  {
    id: 18,
    name: "Oregano Plant",
    price: 169,
    category: "Herbs",
    image: "/images/oregano.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Herbs",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">
      <h1>Our Plants</h1>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section
            className="plant-category"
            key={category}
          >
            <h2>{category}</h2>

            <div className="plant-grid">
              {categoryPlants.map((plant) => (
                <div
                  className="plant-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ₹{plant.price}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(addItem(plant))
                    }
                    disabled={isInCart(plant.id)}
                    className="add-to-cart-button"
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;