const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,

    unique: true,
    default: "guest",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  workplace: {
    type: String,
    default: "secret",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  profilePicture: {
    type: String,
    default:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  linkedIn: {
    type: String,
    default: "default-profile-url",
  },
  twitter: {
    type: String,
    default: "default-profile-url",
  },
  github: {
    type: String,
    default: "default-profile-url",
  },
  instagram: {
    type: String,
    default: "default-profile-url",
  },
  bio: {
    type: String,
  },
  role: {
    type: String, // e.g., 'developer', 'engineer', 'admin'
    default: "developer",
  },
  skills: {
    type: [String],
    default: [],
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
