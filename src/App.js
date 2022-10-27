import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Carousel show={1} infiniteLoop={true}>
        <div>
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/445-exOBYzk07V2v.jpg"
            alt="1"
          />
        </div>

        <div>
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/445-exOBYzk07V2v.jpg"
            alt="1"
          />
        </div>
        <div>
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/445-exOBYzk07V2v.jpg"
            alt="1"
          />
        </div>
        <div>
          <img
            src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/445-exOBYzk07V2v.jpg"
            alt="1"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
