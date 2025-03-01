document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav ul"); // Navbar ul ko access karo
    if (!navbar) {
        console.error("❌ Navbar not found!");
        return;
    }

    console.log("✅ Navbar JS Loaded!");

    // 🔍 Get User Role from localStorage
    let userRole = localStorage.getItem("userRole");  
    console.log("👤 User Role:", userRole);
    

        // 🚫 Agar userRole exist nahi karta, toh ensure karo ki "Post" button dikhe hi na
        if (!userRole) {
            console.log("🚫 No user role found! Hiding post option.");
            return;
        }

    // 🎯 Agar user "artist" hai, toh "Post" button add karo
    if (userRole === "artist") {
        // Pehle check karo ki button already exist toh nahi karta
        if (!document.querySelector(".post-link")) {
            const postLink = document.createElement("li");
            postLink.innerHTML = `<a href="post.html" class="post-link">Post</a>`;
            navbar.appendChild(postLink);
            console.log("✅ Post button added for artist!");
        }
    } else {
        console.log("🚫 Post button NOT added for non-artist users!");
    }
});
