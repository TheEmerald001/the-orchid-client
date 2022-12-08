import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FlowerContext = createContext();

function FlowerProvider({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [flowersError, setFlowersError] = useState([]);
  // const [flowerId, setFlowerId] = useState(1);
  const [flower, setFlower] = useState({});
  const [flowerError, setFlowerError] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState([]);
  const [onLogin, setOnLogin] = useState(false);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch("/flowers");

      const flowers = await response.json();
      if (response.ok) {
        setFlowers(flowers);
        setLoading(false);
      } else {
        setFlowersError(flowers.errors);
      }
    };

    // Function call
    payload();
  }, []);


  const localIdJson = localStorage.getItem("flowerId");
  const localId = localIdJson ? JSON.parse(localIdJson) : [];
  const [flowerId, setFlowerId] = useState(localId);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(`/flowers/${flowerId}`);
      const flower = await response.json();
      if (response.ok) {
        localStorage.setItem("flowers", JSON.stringify(flower));
        setFlower(flower);
        setLoading(false);
      } else {
        setFlowerError(flower.errors);
      }
    };

    payload();
    
  }, [flowerId]);

  useEffect(() => {
    const data = localStorage.getItem("flower");
    if (data) {
      setFlower(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const payload = async () => {
      const response = await fetch(`/flowers/${flowerId}/reviews`);

      const reviews = await response.json();
      if (response.ok) {
        setReviews(reviews);
      } else {
        setReviewsError(reviews.errors);
      }
    };

    payload();
  }, [flowerId]);

  // Create functionality for adding a new review
  const [newReview, setNewReview] = useState({
    star_rating: "4",
    comment: "",
  });

  const [reviewError, setReviewError] = useState([]);

  function handleReviewChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewReview({ ...newReview, [name]: value });
  }

  async function handleSubmitReview(event) {
    event.preventDefault();

    const response = await fetch(`/flowers/${flowerId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    const review = await response.json();
    if (response.ok) {
      setReviews([...reviews, review]);
      setNewReview({
        star_rating: "",
        comment: "",
      });
      navigate("/flowers/:id");
      setTrigger(false)
    } else {
      setReviewError(review.errors);
    }
  }
  // end of functionality
  async function handleDeleteReview(reviewId) {
    console.log(reviewId);
    const response = await fetch(
      `/flowers/${flowerId}/reviews/${reviewId}`,
      {
        method: "DELETE",
      }
    );

    console.log(response);
    if (response.ok) {
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    }
  }
  function handleFlower(flower) {
    setFlowerId((prevstate) => (prevstate = flower.id));
    navigate(`/flowers/${flower.id}`);
  }


  // start of sign up functionality
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    image_url: "",
    password_confirmation: "",
  });

  const [signupError, setSignupError] = useState([]);
  const [signupLoading, setSignupLoading] = useState(false);

  function handleSignupChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData({ ...signupData, [name]: value });
  }

  async function handleSubmitSignupDetails(event) {
    event.preventDefault();
    setSignupLoading(true);
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });

    const userData = await response.json();
    if (response.ok) {
      setUser(userData);
      setOnLogin(true);
      setSignupError([]);
      setSignupLoading(false);
      navigate("/");
      setSignupData({
        username: "",
        password: "",
        image_url: "",
        password_confirmation: "",
      });
    } else {
      setSignupError(userData.errors);
      setSignupLoading(false);
    }
  }
  // end of sign up functionality

  // Start of adding Login functionality
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginError, setLoginError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleSubmitLoginDetails(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    const userData = await response.json();

    if (response.ok) {
      setIsLoading(false);
      setUser(userData);
      setLoginStatus(true);
      setLoginError([]);
      setLoginData({
        username: "",
        password: "",
      });
      navigate("/");
    } else {
      setLoginError(userData.errors);
    }
  }
  // End of Login functionality

  // Logout functionality
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setLoginStatus(false);
        // navigate("/login");
      }
    });
  }
  //end of logout functionality
  const [trigger, setTrigger] = useState(false);

  function handleAddReview() {
    setTrigger(true);
  }

  const values = {
    loading,
    flowersError,
    flowers,
    flower,
    flowerError,
    handleFlower,
   

    // State and functions for login
    handleLogoutClick,
    handleLoginChange,
    handleSubmitLoginDetails,
    loginError,
    loginData,
    isLoading,
    loginStatus,

    onLogin,
    user,
    setUser,
    // State and functions for sign up
    handleSignupChange,
    handleSubmitSignupDetails,
    signupData,
    signupError,
    signupLoading,

    //Add functionality for getting and setting reviews
    reviews,
    reviewsError,

    //Add functionality for getting and setting book
    trigger,
    setTrigger,
    handleAddReview,

    newReview,
    reviewError,
    handleReviewChange,
    handleSubmitReview,
    handleDeleteReview,
  };

  return (
    <FlowerContext.Provider value={values}>
      {children}
    </FlowerContext.Provider>
  );
}

export { FlowerContext, FlowerProvider };