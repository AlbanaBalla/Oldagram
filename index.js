const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "avatar-vangogh.jpg",
    post: "post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "avatar-courbet.jpg",
    post: "post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "avatar-ducreux.jpg",
    post: "post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    liked: false
  },
]


let heart = "icon-heart.png"
let comment = "icon-comment.png"
let dm = "icon-dm.png"
let likeIcon = "like.png"

const mainEl = document.getElementById("post")
 let html = ""
 for (let i = 0; i < posts.length; i++) {
     html += `
         <article class="post">
                 <div class="header container">
                     <img class="avatar" src="${posts[i].avatar}">
                     <div>
                         <div>
                             <span class="name">${posts[i].name}</span>
                         </div>
                         <span class="location">${posts[i].location}</span>
                     </div>
                 </div>
                 <div>
                     <img class="img" src="${posts[i].post}">
                 </div>
                 <div class="control-bar container">
                     <img class="heart" src="icon-heart.png">
                     <img class="comment" src="icon-comment.png">
                     <img class="dm" src="icon-dm.png">                    
                 </div>
                 <div class="container">
                     <span class="likes">${posts[i].likes} likes</span>
                 </div>
                 <div class="container">
                     <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                 </div>
             </article>
     `
 }

 mainEl.innerHTML = html
 
