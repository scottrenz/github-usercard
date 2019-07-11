/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
https://github.com/axios/axios
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

           */
   axios.get('https://api.github.com/users/scottrenz')
   .then (data => {
       console.log('response',data)
   }
       
       )
   .catch (data => {
           console.log('error',data)
       }
           
           )
           console.log('end') 

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

let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  new card(article)
}
)

function newcard(title,date,text) {
  const divCard = document.createElement('div');
  const cardImg = document.createElement('img');
  const divInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const pName = document.createElement('p');
  const pLoca = document.createElement('p');
  const pProf = document.createElement('p');
  const pFoll = document.createElement('p');
  const pFing = document.createElement('p');
  const pBio = document.createElement('p');
  divCard.classList.add('card')
  divInfo.classList.add('card-info')
  h3.classList.add('name')
  pName.classList.add('username')

  h2.innerHTML = title;
pDate.innerHTML = date;
divcards.appendChild(divcard)
divcard.appendChild(h2)
divcard.appendChild(pDate)
for (i=0; i<text.length; i++)
{
  divcard.appendChild(p[i])
  if(typeof(text) != 'object')
{break;}
}
divcard.appendChild(expandButton)

return divcard
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
