import { NextRequest, NextResponse } from 'next/server';
import { connect } from '../../../../dbConfig/dbConfig';
import User from '../../../../models/userModel';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Ensure the database connection is established
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const reqBody = await request.json();
        const { username, password } = reqBody;

        // Check if the user exists in the database
        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }
        console.log("User found.");

        // Validate the password
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid username or password" }, { status: 400 });
        }
        console.log("abhi zinda hain");
        // Create a token with user data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        // Sign the token with a secret key and set expiration
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        // Create the response and set the token as a cookie
        const response = NextResponse.json({
            message: "Logged In Successfully",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })
        return response
    } catch (error) {
            if (error instanceof Error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            } else {
                throw new Error("An unknown error occurred");
            }
       
    }
}
