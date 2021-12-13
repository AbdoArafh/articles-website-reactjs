import { useState } from 'react'

function Home() {
  const articles = Array.from(
    Array(20))
    .map((el,i) => "Article " + (i + 1));

  let [searchTerm, setSearchTerm] = useState("");
  let [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    setInputValue(event.target.value);
    setSearchTerm(event.target.value.trim().toLowerCase());
  }

  const articlesFilter = (article) =>
    article.toLowerCase().match(searchTerm);

  return (
      <div className="home">
        <div className="header">
          <input autoFocus placeholder="Search" type="search" value={inputValue} onChange={handleSearch}/>
        </div>
        <div className="articles">
          {articles.filter(e => articlesFilter(e)).map(el => (
            <div className="article" key={el}>
              <a href="#">
                <img src={"https://picsum.photos/seed/" + encodeURIComponent(el) + "/300/300"} alt="article image" className="thumbnail" />
                <div className="title">
                  {el}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Home