import React, { useState, useEffect } from "react";
import { Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Toys4to8 = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "",
    mobileNumber: "",
    toy: null,
  });
  const navigate = useNavigate();

  const toys = [
    { name: "Lego Building Set", price: "1500", image: "a2.jpg" },
    { name: "Action Figure", price: "1200", image: "https://ik.imagekit.io/x59vn03uu/ToyStore/a3.webp?updatedAt=1732008875359" },
    { name: "Toy Car", price: "800", image: "https://ik.imagekit.io/x59vn03uu/ToyStore/a4.webp?updatedAt=1732008876997" },
    { name: "Funskool Games, Snakes & Ladders", price: "900", image: "https://ik.imagekit.io/x59vn03uu/ToyStore/a5.jpg?updatedAt=1732008882528" },
    {
      name: "Funskool Handycrafts",
      price: "700",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/a6.jpg?updatedAt=1732008882027",
    },
    {
      name: "Fisher Price Magnetic Puzzle",
      price: "900",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z21.jpg?updatedAt=1732008899908",
    },
    {
      name: "Little Genius Wood Alphabet Turtle Puzzle",
      price: "100",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z22.jpg?updatedAt=1732008900309",
    },
    {
      name: "Little Genius My Face Puzzle",
      price: "600",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z23.jpg?updatedAt=1732008900476",
    },
    {
      name: "Little Genius Number Butterfly Puzzle Strip",
      price: "900",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z24.jpg?updatedAt=1732008900839",
    },
    {
      name: "University Sort It Out",
      price: "100",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z25.jpg?updatedAt=1732008901394",
    },
    {
      name: "Ravensburger 121250 72 pieces",
      price: "1000",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z26.jpg?updatedAt=1732008901650",
    },
    {
      name: "Sunta ABC Puzzle Fun in Circle",
      price: "2000",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/a11.jfif?updatedAt=1732008887838",
    },
    {
      name: "Skillofun Wooden Theme Puzzle",
      price: "950",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z28.jpg?updatedAt=1732008902037",
    },
    {
      name: "Skillofun Wooden Theme Puzzle Standard Teddy Bear ",
      price: "200",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z29.jpg?updatedAt=1732008903724",
    },
    {
      name: "Melissa & Doug 730 Pets Sound Puzzle",
      price: "500",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z30.jpg?updatedAt=1732008903227",
    },
    {
      name: "Funskool-Handycrafts Pot Mania",
      price: "4000",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z31.jpg?updatedAt=1732008903462",
    },
    {
      name: "Skillofun Wooden Theme Puzzle Standard Ship Knobs",
      price: "300",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z32.jpg?updatedAt=1732008904077",
    },
    {
      name: "Novo Baby Colorful Wooden Puzzle Set Featuring",
      price: "800",
      image: "https://ik.imagekit.io/x59vn03uu/ToyStore/z33.jpg?updatedAt=1732008904947",
    }
    // Add other toys as needed...
  ];

  const handleBuyNow = (toy) => {
    setFormData({
      ...formData,
      toy,
    });
    setShowAdd(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.address &&
      formData.pincode &&
      formData.paymentMethod &&
      formData.mobileNumber
    ) {
      setShowAdd(false);
      setShowConfirmation(true);
    } else {
      alert("Please provide all the required details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formData.paymentMethod === "phonePe") {
      navigate("/phonepe-payment");
    } else if (formData.paymentMethod === "gpay") {
      navigate("/gpay-payment");
    }
  }, [formData.paymentMethod, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this toy!",
        url: "https://yourwebsite.com",
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    }
  };

  const handleCloseModal = () => {
    setShowAdd(false);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-white drop-shadow-lg">
        Toys for 4 to 8 Years
      </h1>
      <p className="text-lg mb-4 text-white">
        Toys for preschoolers and kids in this age range.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              src={`/${toy.image}`}
              alt={toy.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-lg font-semibold text-gray-800">{toy.name}</h2>
              <p className="text-xl text-purple-600 font-bold mb-4">
                <span className="text-lg">₹</span>
                {toy.price}
              </p>
              <div className="flex justify-between items-center">
                <Heart className="text-gray-600 hover:text-red-500 transition-all duration-300 transform hover:scale-125 cursor-pointer" />
                <Share2
                  className="text-gray-600 hover:text-purple-500 transition-all duration-300 transform hover:scale-125 cursor-pointer"
                  onClick={handleShare}
                />
              </div>
              <button
                onClick={() => handleBuyNow(toy)}
                className="w-full mt-4 py-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Pincode:</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="phonePe">PhonePe</option>
                  <option value="gpay">Google Pay (GPay)</option>
                  <option value="cashOnDelivery">Cash on Delivery</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile Number:</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-purple-600 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
          <div className="w-1/3 bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Order Confirmation</h2>
            <p className="mb-4">Thank you for your order! We will dispatch soo</p>
            <button
              onClick={handleCloseConfirmation}
              className="py-2 px-4 bg-purple-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toys4to8;
