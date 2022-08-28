import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Heading from "./Component/Heading";
import { Loader } from "./Component/Loader";
import { config } from "./config";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("all");
  const key = `nq-QaRTe3qTE1niKnRAS_U_9n6SFcCn1h_THHoxyts4`;

  const fetchImages = () => {
    axios
      .get(
        `${config.api}/photos/random?client_id=${key}&h=1300&dpr=2&orientation=portrait&query=${query}&count=5`
      )
      .then((result) => {
        setImages([...images, ...result.data]);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status) {
            alert(
              `${error.response.status} : ${error.response.data}, try after an hour`
            );
          }
        }
      });
  };
  useEffect(() => {
    fetchImages();
  }, [query]);

  const handleQuery = (q) => {
    setImages([])
    setQuery(q);
    setImages([]);
    console.log(images);
    fetchImages();
  };
  return (
    <>
      <Heading />
      <div className="container d-flex justify-content-between mt-5">
        <h4>CATEGORY</h4>
        <div className="filter" onClick={() => handleQuery("all")}>
          All
        </div>
        <div className="filter" onClick={() => handleQuery("web design")}>
          Web Design
        </div>
        <div className="filter" onClick={() => handleQuery("natural design")}>
          Natural Design
        </div>
        <div className="filter" onClick={() => handleQuery("3d rendering")}>
          3D Rendering
        </div>
        <div className="filter" onClick={() => handleQuery("nature")}>
          Nature
        </div>
      </div>
      <div className="container-fluid ">
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
          className="row row-cols-lg-3 overflow-hidden "
        >
          {images.map((image) => {
            return (
              <>
                <div className="container-image mt-4">
                  <img
                    src={`${image.urls.regular}`}
                    className="img-fluid col mt-5 image"
                    alt="..."
                  ></img>
                  <div class="middle">
                    <div
                      class="text"
                      onClick={() => {
                        window.open(`${image.urls.regular}`, "_blank");
                      }}
                    >
                      View
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
