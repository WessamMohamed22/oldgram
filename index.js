const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let counter = 0
let likes = []
let hasLiked = []



const contentEl = document.getElementById("content-container")
function poster () {
    contentEl.innerHTML = "";
    for (post of posts) {
        contentEl.innerHTML += `
                <div class="post-header">
                    <img class="avatar" src=${post.avatar} alt="Avatar Picture">
                    <div>
                        <h5 class="name">${post.name}</h5>
                        <p class="location">${post.location}</p>
                    </div>
                </div>
                <img class="post-img" src=${post.post} alt="Post by ${post.name}">
                <div class="bar">
                        <button class="btn" ><img class="btn-img post-icons" src="images/icon-heart.png" alt="like button"></button>
                        <button class="btn"><img class="btn-img" src="images/icon-comment.png" alt="comment button"></button>
                        <button class="btn"><img class="btn-img" src="images/icon-dm.png" alt="dm button"></button>
                        
                        <p class="likes" data-likes="${post.likes}">${post.likes} likes</p>
                        <p class="comment"><span class="user-name">${post.username}</span> ${post.comment}</p>
                </div>
                <div class="seperator"></div>`
                
                
                likes.push(post.likes)
                 hasLiked.push(false)
                  counter++
                
                //  const heartBtn =contentEl.querySelector(".btn");
        //          const countLikes = contentEl.querySelector(".likes");
               
        //           for (post of posts){
        //          const heartEL = document.querySelector(".btn");
        //            heartEL.addEventListener("click", () => {
        //              post.likes+=1; 
        //              countLikes.textContent = `${post.likes} likes`;
        //               console.log("clicked")
                     
        // })
        
   // }
   
   
   const imgs = document.querySelectorAll('.post-img')
   const icons = document.querySelectorAll('.post-icons')
   const likesTexts = document.querySelectorAll('.likes')

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dblclick", function () {  
        updateLikes(i)
    })
    icons[i].addEventListener("click", function () {
        updateLikes(i)  
    })
  }

  function updateLikes(postNum){
    if (hasLiked[postNum]) {
        likes[postNum]--
        likesTexts[postNum].textContent = `${likes[postNum]} likes`
        icons[postNum].src="https://raw.githubusercontent.com/MemoBaca/oldagram/main/images/icon-heart.png"
        hasLiked[postNum] = !hasLiked[postNum]
    }
    else {
        likes[postNum]++
        likesTexts[postNum].textContent = `${likes[postNum]} likes`
        icons[postNum].src="https://raw.githubusercontent.com/MemoBaca/oldagram/main/images/icon-heart2.png"
        hasLiked[postNum] = !hasLiked[postNum]
    }
  }
             
               
    }
}

poster()