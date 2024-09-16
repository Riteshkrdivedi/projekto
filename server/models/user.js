const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "default-profile-url",
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
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});