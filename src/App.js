import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cats = [
  {
    name: "Whiskers",
    age: 3,
    breed: "Siamese",
    description:
      "Whiskers is a playful and curious Siamese cat. She loves to explore and play with toys.",
    img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  },
  {
    name: "Mittens",
    age: 5,
    breed: "Tabby",
    description:
      "Mittens is a sweet and affectionate Tabby cat. She loves to cuddle and be petted.",
    img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Felix",
    age: 2,
    breed: "British Shorthair",
    description:
      "Felix is a lazy but loveable British Shorthair cat. He enjoys lounging on the couch and getting belly rubs.",
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Smokey",
    age: 4,
    breed: "Persian",
    description:
      "Smokey is a regal and elegant Persian cat. She enjoys being pampered and groomed.",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Luna",
    age: 1,
    breed: "Sphynx",
    description:
      "Luna is a playful and mischievous Sphynx cat. She loves to climb and explore.",
    img: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=601&q=80",
  },
  {
    name: "Oscar",
    age: 6,
    breed: "Maine Coon",
    description:
      "Oscar is a gentle giant of a cat. He loves to play with toys and be petted.",
    img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Simba",
    age: 2,
    breed: "Bengal",
    description:
      "Simba is a wild and adventurous Bengal cat. He loves to run and play outside.",
    img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Tiger",
    age: 7,
    breed: "American Shorthair",
    description:
      "Tiger is a confident and independent American Shorthair cat. He likes to do his own thing.",
    img: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  },
  {
    name: "Gizmo",
    age: 4,
    breed: "Scottish Fold",
    description:
      "Gizmo is a cute and cuddly Scottish Fold cat. She loves to curl up on laps and be petted.",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Midnight",
    age: 3,
    breed: "Black Cat",
    description: "Midnight is a mysterious and elegant black cat. ",
    img: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

function App() {
  const MAX_DESCRIPTION_WORDS = 4;

  const [expandedDescriptionIndexes, setExpandedDescriptionIndexes] = useState(
    []
  );

  const toggleDescription = (index) => {
    if (expandedDescriptionIndexes.includes(index)) {
      setExpandedDescriptionIndexes(
        expandedDescriptionIndexes.filter((i) => i !== index)
      );
    } else {
      setExpandedDescriptionIndexes([...expandedDescriptionIndexes, index]);
    }
  };

  const isDescriptionExpanded = (index) =>
    expandedDescriptionIndexes.includes(index);

  const renderDescription = (description, index) => {
    const words = description.split(" ");
    const shouldExpand = words.length > MAX_DESCRIPTION_WORDS;

    return (
      <div>
        <p className="card-text">
          {shouldExpand ? (
            <>
              {words.slice(0, MAX_DESCRIPTION_WORDS).join(" ")}{" "}
              {!isDescriptionExpanded(index) && (
                <button
                  className="btn btn-link p-0"
                  onClick={() => toggleDescription(index)}
                >
                  Show more
                </button>
              )}
              {isDescriptionExpanded(index) && (
                <>
                  {words.slice(MAX_DESCRIPTION_WORDS).join(" ")}{" "}
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleDescription(index)}
                  >
                    Show less
                  </button>
                </>
              )}
            </>
          ) : (
            description
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="container py-5">
        <div>
          <h1>Cats Information</h1>
        </div>
        <div className="row">
          {cats.map((cat, index) => (
            <div className="col-md-3 mb-3" key={cat.name}>
              <div className="card">
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    height: "300px",
                    width: "500px",
                    objectFit: "cover",
                  }}
                  className="img-fluid rounded"
                />
                <div className="card-body">
                  <h2 className="card-title">{cat.name}</h2>
                  <p className="card-text">{cat.breed}</p>
                  {renderDescription(cat.description, index)}
                  <p className="card-text">Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
