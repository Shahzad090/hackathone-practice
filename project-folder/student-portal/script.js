import { db } from "../common/firebase.js";
import { collection, query, where, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const cnic = document.getElementById('cnic').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const q = query(collection(db, 'students'), where("cnic", "==", cnic));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, {
            firstName,
            lastName
        });
    });

    alert('Profile updated successfully!');
    document.getElementById('profile-form').reset();
});

document.getElementById('check-result').addEventListener('click', async () => {
    const studentCNIC = document.getElementById('studentCNIC').value;
    const q = query(collection(db, 'marks'), where("studentId", "==", studentCNIC));
    const querySnapshot = await getDocs(q);
    let results = '';

    querySnapshot.forEach((doc) => {
        results += `Course: ${doc.data().course}, Marks: ${doc.data().marks}, Total Marks: ${doc.data().totalMarks}, Grade: ${doc.data().grade}<br>`;
    });

    document.getElementById('result-display').innerHTML = results ? results : 'No results found.';
});
