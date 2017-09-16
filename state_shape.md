State Shape

{
  entities: {
    cards: {                                                   //Card date is fethed from API at magicthegathering.io
      409741: {
        "multiverseid":409741,                                 // Unique card ID assigned by WotC
        "name":"Archangel Avacyn",                             // Card name
        "names":["Archangel Avacyn", "Avacyn, the Purifier"],  // Double-sided cards have 2 names
        "manaCost":"{3}{W}{W}",                                
        "cmc":5,                                               // Used for organizing deck display and card search. 
        "colors":["White"],                                    // Array of all the colors which need be used to cast the card.
        "colorIdentity":["W"],                                 // Color Identity is defined by not only the casting cost but also the activated abiities of the card. Necessary for format legality (Commander).
        "type":"Legendary Creature — Angel",                   // Full type used for display
        "supertypes":["Legendary"],                            
        "types":["Creature"],                                  // Type is broken into supertypes, types, and subtypes for search functionality
        "subtypes":["Angel"],
        "rarity":"Mythic Rare",                                // Some formats limit the rarirty of cards, this field will be used to check legality of cards in those formats
        "set":"SOI",                                           // Set is used for display this is different than printings.
        "text":"Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        "power":"4",                                           
        "toughness":"4",                                       // Power/toughness can be used for display and search queries
        "layout":"double-faced",                               // Double-faced cards will need different visual settings than single faced (ability to flip the card to see the back)
        "imageUrl":"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card",
        "cardbackMultiverseId":409742                          // References corresponding card back. Only double-faced cards have this
        "printings":["SOI"]                                    // Printings will be used for format legality. Some cards are reprinted in multiple sets.
      },
    decks: {
      1: {
        "id": 1,
        "creator_id":1,                                        // id of the user who created the deck
        "mainboard": {409784:4, 417605:4, 409741:3, ...],      // Deck is seperated into Mainboard and sideboard
        "sideboard": [401897:4, ...],                          // cards are listed by multiverseId:count
        "upvotes":6,                                           // incremented by upvote button
        "views":30,                                            // incremented on url visit (integrate with controller?)
        "title":"Mardu Vehicles",
        "description":"Uses undercosted creatures and vehicles to aggressivly attack the opponent.",
        "created_on":<Date>,
        "updated_on":<Date>,
       
      },
      2: {...},
    }
    comments: {
      1: {
        "id":1,
        "author_id":1,                                        
        "deck_id":1,                                           // id of associated deck
        "body":"Wow, this seems super powerful.",
        "comment_id": null,                                    // id of comment which this is a response to (optional)
      },
      2: {...},
    }
  auth: {                                                      // should auth be part of ui?
    "current_user":{
      "user_id":1,
      "name":"jeskai_ascendant",
    }
  }
  ui: {
    "loading":false
  }
        
        
        
    
