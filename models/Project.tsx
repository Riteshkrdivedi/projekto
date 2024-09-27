import mongoose, { Schema, Document } from "mongoose";

// Define the structure of the project data
interface ProjectDocument extends Document {
  projectName: string;
  description: string;
  techStack: string[];
  createdBy: { type: mongoose.Schema.Types.ObjectId; ref: "User" }; // Reference to the user
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId; ref: "User" }]; // Array of user IDs
  githubLink?: string;
  liveLink?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  projectImage?: string;
}

// Create the schema for the project
const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Project name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
  },
  techStack: {
    type: [String], // Array of strings representing technologies used
    required: [true, "Tech stack is required"],
  },
  createdBy: {
    type: String,
    // Reference to the User model
    required: true,
  },
  teamMembers: {
    type: [String], // Array of user IDs (ObjectId)
    // Reference to the User model
    default: [],
  },
  githubLink: {
    type: String, // Optional GitHub link
  },
  liveLink: {
    type: String, // Optional live project link
  },
  status: {
    type: String,
    enum: ["in progress", "completed", "abandoned"], // Project status options
    default: "in progress",
  },
  projectImage: {
    type: String,
    default:
      "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Project-Manager.jpg", // Default project image if none provided
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field automatically on update
ProjectSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;
