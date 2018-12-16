import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }
    // this bind property will take in a context and return 
    // a brand new func with this bound to whatever we passed in (updateLanguage)
    // if we switch to hooks, we won't have to use this
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    var languages = ["All", "JavaScript", "C#", "Java", "Python", "CSS"];
    return (
      <ul className="languages">
        {
          languages.map(function(lang) {
            return (
              <li
                style={
                  lang === this.state.selectedLanguage
                    ? { color: 'rgb(151, 243, 255, 0.5)' }
                    : null
                }
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}
              >{lang}</li>
            )
          }, this)
        }
      </ul>
    )
  }
}

export default Popular;