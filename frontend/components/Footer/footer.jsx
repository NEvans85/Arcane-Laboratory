import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  copyrightMessage() {
    // Copyright message modeled after the one on ManaStack.com
    return "Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. This web site is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. This web site may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. Responsibility for comments, posts, messages and any other user-generated content lies with their respective authors. We do not monitor or necessarily agree with any personal opinions or other expressions published in any such content.";
  }

  render() {
    return (
      <div className="footer">
        <a href="https://magic.wizards.com/en/new-to-magic/what-is-magic">
          <label>Learn More About</label>
          <img src="http://res.cloudinary.com/arcane-lab/image/upload/v1506045196/MTG_Logo_orange_i7pz50.png" />
        </a>
        <p>{this.copyrightMessage()}</p>
      </div>
    );
  }
}

export default Footer;
