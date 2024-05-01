const conversationData = [
    {
        userName: "user",
        userText: "ถ้าดูจากแผนที่การเดินทางไปยังหมู่บ้าน Motionnian เราจะใช้วิธีการเดินทางอย่างไรดีนะพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "การเดินทางในเเต่ละครั้งจะต้องมีการระบุทิศทางที่เเน่ชัดนะ user",
    },
    {
        userName: "user",
        userText: "อ้อ ! เวกเตอร์ ถ้าอย่างนั้นเราจะต้องใช้หลักการต่อเวกเตอร์ใช่ไหมพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ถูกต้องเเล้วล่ะ user",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // If there are no more conversations, redirect to the specified URL
        window.location.href = "https://cdn-icons-png.flaticon.com/512/1505/1505465.png";
    }
}


