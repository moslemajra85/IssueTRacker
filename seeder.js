import dotenv from "dotenv";
import colors from "colors";
import fs from "fs";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import connectDB from "./config/db.js";
import Issue from "./models/issue.js";
import User from "./models/user.js";
import Team from "./models/team.js";

dotenv.config();

connectDB();

const issues = JSON.parse(fs.readFileSync("./_data/issues.json", "utf-8"));

const users = JSON.parse(fs.readFileSync("./_data/users.json", "utf-8"));

const teams = JSON.parse(fs.readFileSync("./_data/teams.json", "utf-8"));

// Function to hash passwords
const hashPasswords = async (users) => {
  const saltRounds = 10;
  return Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
      return {
        ...user,
        password: hashedPassword,
      };
    }),
  );
};

const importData = async () => {
  try {
    await Issue.deleteMany();
    await User.deleteMany();
    await Team.deleteMany();

    // Hash passwords before inserting users
    const hashedUsers = await hashPasswords(users);
    const createdUsers = await User.insertMany(hashedUsers);
    const adminUser = createdUsers[0]._id;

    // Create teams with members
    const teamsWithMembers = teams.map((team, index) => {
      // Distribute users among teams
      const startIndex =
        index * Math.floor(createdUsers.length / teams.length) + 1; // +1 to skip admin
      const endIndex = Math.min(
        startIndex + Math.floor(createdUsers.length / teams.length),
        createdUsers.length,
      );

      const teamMembers = createdUsers
        .slice(startIndex, endIndex)
        .map((user) => user._id);

      // Add admin to each team
      teamMembers.unshift(adminUser);

      return {
        ...team,
        members: teamMembers,
      };
    });

    await Team.insertMany(teamsWithMembers);

    // Map issues with createdBy reference
    const sampleIssues = issues.map((issue) => {
      return { ...issue, createdBy: adminUser };
    });

    await Issue.insertMany(sampleIssues);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Issue.deleteMany();
    await User.deleteMany();
    await Team.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log("Please add -i to import and -d to destroy data".yellow.bold);
  process.exit();
}
