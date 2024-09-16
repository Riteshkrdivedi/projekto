const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [String], // e.g., ['React', 'Node.js', 'MongoDB']
  createdAt: {
    type: Date,
    default: Date.now,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      role: {
        type: String, // 'owner', 'contributor'
      },
    },
  ],
  status: {
    type: String,
    default: "ongoing", // can be 'completed', 'pending'
  },
  repositoryLink: {
    type: String,
  },
  tasks: [
    {
      description: String,
      completed: Boolean,
      assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});
