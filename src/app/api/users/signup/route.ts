import { NextRequest, NextResponse } from 'next/server';
import { connect } from '../../../../dbConfig/dbConfig';
import User from '../../../../models/userModel';
import bcryptjs from 'bcryptjs';

// Ensure the database connection is established
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        // Log the request body for debugging
        console.log(reqBody);

        // Check if the user already exists in the database
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Generate a salt and hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user instance with hashed password
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Log the saved user for debugging
        console.log(savedUser);

        // Return a success response
        return NextResponse.json({
            message: "User registered successfully",
            success: true,
            user: savedUser // return user data excluding password
        });
    }  catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            throw new Error("An unknown error occurred");
        }
   
}
}
