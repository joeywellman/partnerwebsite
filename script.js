var sydneyObject = {
    firstName: "Sydney",
    lastName: "Wait",
    hobbies: ["Cooking", "Running", "Traveling", "Sowing"],
    lastJob: "Adjunct Professor at Marshall University (Mechanical Engineering)",
    dreamJob: "Getting paid to travel!!!",
    familyLife: "Sydney is happily married to [another] teaching legend, Dr. Isaac Wait, P.E.  They have engineered two beautiful children together.",
    secretTalent1: "performing masterful handstands",
    secretTalent2: {
        stand: "impressive headstands",
        expertise: "still technically a work-in-progress"
    },
    headShot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28Se1KjFRQ96uV-kXlRR1-kIp1rD02UPRAYiG1H-lUB72SjrZ",
    isaac:"https://www.marshall.edu/wamnewsletter/files/IsaacWait.jpg",
    likesBurritos: true,
    websiteFact: "Sydney is a great instructor.  Without her guidance on setting up the JavaScript, associated with this website, you would probably not be viewing it right now.",
}

var htmlString =
`
<h1>${sydneyObject.firstName} ${sydneyObject.lastName}</h1>
<p>Personal Website Fact: ${sydneyObject.websiteFact}</p>
<img src=${sydneyObject.headShot} alt="not Sydney" height = "125px"; border="5">
<p>^^^ This could be a picture of her at the beach or it could be Ariel, the mermaid princess.  You decide.</p>
<img src=${sydneyObject.isaac} alt="not Sydney" height = "125px"; border="5">
<p>Family Life: ${sydneyObject.familyLife}</p>
<p>Hobbies:</p>
<ul class="list">
    <li>${sydneyObject.hobbies[0]}</li>
    <li>${sydneyObject.hobbies[1]}</li>
    <li>${sydneyObject.hobbies[2]}</li>
    <li>${sydneyObject.hobbies[3]}</li>
</ul>
<p>Last Job: ${sydneyObject.lastJob}</p>
<p>Dream Job: ${sydneyObject.dreamJob}</p>
<p>Sydney's secret talent is ${sydneyObject.secretTalent1}.</p>
<p>Sydney can also peform ${sydneyObject.secretTalent2.stand} (but do not ask her to try one because this skill is ${sydneyObject.secretTalent2.expertise}).</p>
<p>Does Sydney like Burritos?  This is definitely ${sydneyObject.likesBurritos}.  As seen below, they are the perfect fuel for professional acrobatics.</p>
`

var sydneyContainer = document.querySelector("#personal-website")
sydneyContainer.innerHTML = htmlString