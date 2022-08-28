import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Heading from "./Component/Heading";
import {Loader}  from "./Component/Loader";
import { config } from "./config";

function App() {
  const [images, setImages] = useState([]);
  // const {REACT_APP_ACCESSKEY} = process.env
  const key = `nq-QaRTe3qTE1niKnRAS_U_9n6SFcCn1h_THHoxyts4`

  const fetchImages = () => {
    axios
      .get(`${config.api}/photos/random?client_id=${key}&h=1300&dpr=2&orientation=portrait&count=5`)
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
  }, []);

  return (
    <>
      <Heading />
      <div className="container-fluid ">
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
          className="row row-cols-lg-3"
        >
          {images.map((image) => {
            return (
              <>
                <div className="container-image">
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
