async function getCommentData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}
getCommentData();

function addUser(email, password) {
    axios.post("/user", {
        email: email,
        password: password
    })
    .then(response => {
        console.log("User added:", response.data);
    })
    .catch(error => {
        console.error("Error adding user:", error);
    });
}
