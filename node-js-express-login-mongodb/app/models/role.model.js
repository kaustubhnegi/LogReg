// Role data model

import mongoose from "mongoose";

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })

);

// Module exports are the instructions that tell Node.js which bits of 
// code (functions, objects, strings, etc.) to export from a given file so
// that other files are allowed to access the exported code.
    
module.exports = Role;