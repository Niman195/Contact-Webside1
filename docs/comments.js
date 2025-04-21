let comments = [];

function postComment() {
    const commentText = document.getElementById("commentText").value.trim();
    
    if (commentText !== "") {
        const newComment = {
            id: Date.now(),  
            username: "User",  
            text: commentText,
            replies: []
        };
        comments.push(newComment);  
        displayComments();  
    }

    document.getElementById("commentText").value = ""; 
}

function postReply(commentId) {
    const replyText = document.getElementById("replyText-" + commentId).value.trim();
    
    if (replyText !== "") {
        const reply = {
            id: Date.now(),  
            username: "User",  
            text: replyText
        };

        
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.replies.push(reply);
        }
        displayComments();  
    }

    
    document.getElementById("replyText-" + commentId).value = "";
}

function displayComments() {
    const container = document.getElementById("commentsContainer");
    container.innerHTML = ""; 

    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.setAttribute("data-comment-id", comment.id); 

        const username = document.createElement("div");
        username.classList.add("username");
        username.textContent = comment.username;

        const commentText = document.createElement("div");
        commentText.textContent = comment.text;

        const replyButton = document.createElement("button");
        replyButton.classList.add("reply-btn");
        replyButton.textContent = "Reply";
        replyButton.onclick = () => {
            showReplyForm(comment.id);
        };

        
        commentDiv.appendChild(username);
        commentDiv.appendChild(commentText);
        commentDiv.appendChild(replyButton);

        
        if (comment.replies.length > 0) {
            const repliesDiv = document.createElement("div");
            comment.replies.forEach(reply => {
                const replyDiv = document.createElement("div");
                replyDiv.classList.add("comment");
                replyDiv.style.marginLeft = "20px";

                const replyUsername = document.createElement("div");
                replyUsername.classList.add("username");
                replyUsername.textContent = reply.username;

                const replyText = document.createElement("div");
                replyText.textContent = reply.text;

                replyDiv.appendChild(replyUsername);
                replyDiv.appendChild(replyText);

                repliesDiv.appendChild(replyDiv);
            });
            commentDiv.appendChild(repliesDiv);
        }

        
        container.appendChild(commentDiv);
    });
}

function showReplyForm(commentId) {
    const commentDiv = document.querySelector(`[data-comment-id="${commentId}"]`);
    let replyForm = commentDiv.querySelector(".reply-form");

    
    if (!replyForm) {
        replyForm = document.createElement("div");
        replyForm.classList.add("reply-form");
        replyForm.innerHTML = `
            <textarea id="replyText-${commentId}" placeholder="Write a reply..." rows="3"></textarea>
            <button onclick="postReply(${commentId})">Post Reply</button>
        `;
        commentDiv.appendChild(replyForm);
    } else {
        replyForm.style.display = replyForm.style.display === "none" ? "block" : "none";
    }
}