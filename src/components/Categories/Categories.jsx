import { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [catego, setCatego] = useState();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((respo) => respo.json())
      .then((allCatego) => setCatego(allCatego))
      .catch((err) => console.error("Fehler in Catego-Fetch", err));
  }, []);

  return (
    <section className="categories">
      <div className="categories__see-all">
        <h2>Categories</h2>
        <p>See All</p>
      </div>
      <Link to="/search/category">
        <article>
          {catego ? (
            catego.categories.map((singleCatego, index) => (
              <div className="categories__content" key={index}>
                <img src={singleCatego.strCategoryThumb} alt="" />
                <p>{singleCatego.strCategory}</p>
              </div>
            ))
          ) : (
            <p>loading..</p>
          )}
        </article>
      </Link>
    </section>
  );
};

export default Categories;
