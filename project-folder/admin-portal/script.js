import { db, auth } from "../common/firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

document.getElementById('student-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;

    try {
        await addDoc(collection(db, 'students'), {
            firstName,
            lastName,
            email,
            password, // In production, hash this password!
            cnic,
            userType: 'Student'
        });
        alert('Student added successfully!');
        document.getElementById('student-form').reset();
    } catch (error) {
        console.error("Error adding student: ", error);
    }
});

document.getElementById('marks-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const marks = Number(document.getElementById('marks').value);
    const totalMarks = Number(document.getElementById('totalMarks').value);
    const grade = (marks / totalMarks) * 100 >= 50 ? 'Pass' : 'Fail';

    try {
        await addDoc(collection(db, 'marks'), {
            course,
            studentId,
            marks,
            totalMarks,
            grade
        });
        alert('Marks uploaded successfully!');
        document.getElementById('marks-form').reset();
    } catch (error) {
        console.error("Error uploading marks: ", error);
    }
});
