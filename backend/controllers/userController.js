import asyncHandler from "express-async-handler";
// description: Auth user/set token
// route POST/api/users/auth
// access: public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// description: Register a new user
// route POST/api/users
// access: public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

// description: Logout user
// route POST/api/users/logout
// access: public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// description: Get user profile
// route GET/api/users/profile
// access: private

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// description: Update user profile
// route PUT/api/users/profile
// access: private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
