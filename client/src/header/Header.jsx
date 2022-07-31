import "./header.css"

const quotes = ["Lol I left Cp for web dev ~Priyanshu", "Ok let us have a cry session first ~Rida"];
var randquote = quotes[Math.floor(Math.random()*quotes.length)];
const Header = () => {
  return (
    <div className = "header">{randquote}</div>
  )
};

export default Header