This is a client side web application that allows users to browse the characters from the tv show Rick and Morty.


It is built with React and uses GraphQL with the Apollo Client.


To run the app, clone the repo and npm install then npm start.


________________________________________________________________________


In terms of design, it's a simple application that I broke
up into resusable components. The infinite scroll is triggered using a small third party library
called react-bottom-scroll-listener. For the queries I used Apollo and took advantage of the 
useQuery react hook which gave me the fetchMore method for the infinite scroll. 

I also added react router with the useHistory method and renderProps to perform the second fetch 
after the individual character is selected. 

I could add a search function very easily, simply passing the character name to my render prop on submit(rather than the ID, which I am doing now),
using the exact same architecture I have used to get the individual character info and episode appearances.  
I hope you like it!

:)

Dermot
