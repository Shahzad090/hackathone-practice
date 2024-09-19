import { auth } from "../common/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        // Redirect to appropriate portal based on user type
        // For simplicity, let's redirect to admin portal
        window.location.href = '../admin-portal/index.html'; // Change this as needed
    } catch (error) {
        console.error("Error logging in: ", error);
        alert('Login failed! Please check your credentials.');
    }
});
