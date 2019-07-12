
const gitUsers = [];
gitUsers[0]='tetondan';
gitUsers[1]='dustinmyers';
gitUsers[2]='justsml';
gitUsers[3]='luishrd';
gitUsers[4]='bigknell';
gitUsers[5]='scottrenz';

let img=[];
let name=[];
let bio=[];
let username=[];
let gitpage=[];
let loca=[];
let foll=[];
let fing=[];
let i=[];

for (i=0; i<gitUsers.length;i++)
{ 
  getFollowers(gitUsers[i])
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

let cards = document.querySelectorAll('.cards');

function newcard(img,name,username,loca,gitpage,foll,fing,bio) {
  const divCard = document.createElement('div');
  const cardImg = document.createElement('img');
  const divInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const pUName = document.createElement('p');
  const pLoca = document.createElement('p');
  const pProf = document.createElement('p');
  const aProf = document.createElement('a');
  const pFoll = document.createElement('p');
  const pFing = document.createElement('p');
  const pBio = document.createElement('p');
  divCard.classList.add('card')
  divInfo.classList.add('card-info')
  h3.classList.add('name')
  pUName.classList.add('username')

  cardImg.src = img;
h3.innerHTML = name;
pUName.innerHTML = username;
pLoca.innerHTML = 'Location: ' + loca;
pProf.innerHTML = 'Profile: ';
aProf.href = gitpage;
aProf.innerHTML = gitpage;
pFoll.innerHTML = 'Followers: ' + foll;
pFing.innerHTML = 'Following: ' + fing;
pBio.innerHTML = 'Bio: ' + bio;

cards[0].appendChild(divCard)
divCard.appendChild(cardImg)
divCard.appendChild(divInfo)
divInfo.appendChild(h3)
divInfo.appendChild(pUName)
divInfo.appendChild(pLoca)
divInfo.appendChild(pProf)
pProf.appendChild(aProf)
divInfo.appendChild(pFoll)
divInfo.appendChild(pFing)
divInfo.appendChild(pBio)

return divCard
}

async function getUser(user,fr,fg) {
const wait = await axios.get('https://api.github.com/users/' + user)
.then (data => {
img = data.data['avatar_url'];
name = data.data['name'];
bio = data.data['bio']
username = data.data['login']
gitpage = data.data['html_url']
loca = data.data['location']
foll = fr;
fing = fg;
newcard(img,name,username,loca,gitpage,foll,fing,bio)
 return wait;
}
)

  .catch (data => {
  console.log('data error',data)
        }
         )
}

async function getFollowers(user) {
  const wait = await axios.get('https://api.github.com/users/' + user + '/followers')
  .then (data => {
let foll=data.data.length;
getFollowing(user,foll)
return wait;
  }
  )

  .catch (data => {
    console.log('followers error',data)
          }
           )
  }

  async function getFollowing(user,foll) {
   const wait = await axios.get('https://api.github.com/users/' + user + '/following')
    .then (data => {
let fing=data.data.length;
getUser(user,foll,fing)
return wait;
    }
    )

  .catch (data => {
    console.log('following error',data)
          }
           )
  }
      
/* List of LS Instructors Github username's: 
  tetondan  Daniel Frehner
  dustinmyers Dustin Myers
  justsml Dan Levy
  luishrd Luis Hernandez
  bigknell Josh Knell
*/