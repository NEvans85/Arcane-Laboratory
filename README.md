# ![ArcaneLab](https://res.cloudinary.com/arcane-lab/image/upload/v1506716411/Splash_ntaysk.png)

# The Arcane Laboratory

A web application which lets you build decks for the collectible card game Magic the Gathering.

## Live Site (hosted on Heroku)

[The Arcane Laboratory](https://arcane-laboratory.herokuapp.com/#/)

## Technologies Used

Frontend utilizes React and Redux used to create a single page application. Components render based on the browser's current path and update as needed upon the changing state of the application.

Backend uses Ruby on Rails framework. Frontend sends AJAX requests to the backend routes. Rails then queries the Postgres relational database for the appropriate data and formats it with jBuilder before sending it as JSON. A Ruby SDK for the Web API at magicthegathering.io is utilized to get card data as needed. The database only stores information on cards which are currently part of decks.

## Features

### Card search

![Card Search](http://res.cloudinary.com/arcane-lab/image/upload/v1506725306/Screen_Shot_2017-09-29_at_3.48.06_PM_kxcbr7.png)

Card search is an informational component which allows users to query the full library of Magic the Gathering cards via several parameters. The form constructs the query as a POJO which is sent off to the API via a Rudy SDK from the backend (https://github.com/MagicTheGathering/mtg-sdk-ruby). The results are received by Rails and sent back to the front end to be displayed. When the user clicks on a single card in the search results, it's image is displayed (card images are hosted by http://gatherer.wizards.com) and its details are listed. Challenges in constructing this component included:
1. I initially thought it would be feasible to store data for any card ever printed (over 30,000 cards). After wrestling with it for several days (and discovering the limits of no-cost Heroku hosting) I learned to embrace the use of an external API and modified my application to utilize the powerful tools available. I even made a pull request to improve the Ruby SDK to include additional data available through the API.

1. Multiple printings of certain cards exist and the API returned all of them. Additionally some printings do not have their images hosted by my image source. To overcome this I pared down the results, including only those which had image_urls and had unique name attributes. I also sorted them by card name and used the sorted array of card keys to present the data.

### Deck View

![Deck View](https://res.cloudinary.com/arcane-lab/image/upload/v1506721670/Screen_Shot_2017-09-29_at_2.47.22_PM_znzrgt.png)

The deck view feature utilizes a selector method to organize card data by type and and FlexBox styling to present the contents of a deck fitted to the space provided. It also utilizes a modal and CSS styling to pop up the card image when the mouse hovers over a card.
Each deck has comments associated with it. Comments are displayed with a tiered stying with responses to a comment nested underneath the comment to indicate their connection.

### Deck editor

![Deck Editor](https://res.cloudinary.com/arcane-lab/image/upload/v1506725151/Screen_Shot_2017-09-29_at_3.45.12_PM_zeqapo.png)

The Deck editor uses the components of both Card Search and Deck View with different containers to provide the user the ability to build and modify decks. Components use ternaries to pivot between regular and editing functionality where necessary. The following code is an example of this from the CardList component which adds the +/- buttons when in edit mode.
``` javascript
cardListItem(card) {
  return this.props.editor ? (
    <li className="editor-card-list-item" key={card.id}>
      <p>
        {card.count} x {card.name}
      </p>
      <div className="change-buttons">
        <button onClick={() => this.handleChange("+", card)}>+</button>
        <button onClick={() => this.handleChange("-", card)}>-</button>
      </div>
    </li>
  ) : (
    <li key={card.id} className="card-list-item">
      {card.count} x {card.name}
    </li>
  );
}
```
## Future Improvements

This app has massive room to grow. Potential improvements include:
1. Comments are created appropriately but the buttons to add a new comment or reply to a comment should link to the comment form. Additionally, when a comment reply is created, the form should reset and no longer create replies to that same comment.
1. The code for Protected and Authorized routes is in the program but not utilized.
2. Some indication should be provided when the user adds a card or updates a deck. Additionally, the delete deck button should have some sort of confirmation.
3. Give users the options to display decks as piles card images rather than text.
4. Drag and drop functionality to let users rearrange deck cards.
5. Playtest functionality which randomizes the cards in a deck and provides the users the ability to draw cards and move cards between zones.
