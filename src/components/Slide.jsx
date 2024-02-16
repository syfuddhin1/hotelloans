export default function Slide({ show, data }) {
  //   console.log(data);
  return (
    <div className={`carousel-item relative active`}>
      {/* <img
        src={Charity}
        className="carousel-image slide-right img-fluid blur-sm brightness-75"
        alt="..."
      /> */}
      <img
        src={data.img}
        className="carousel-image slide-right img-fluid backdrop-brightness-75"
        alt="..."
      />
      <div className="absolute z-50 left-0 top-2/4 mt-20 w-full flex flex-col items-center justify-center  slide-left backdrop-brightness-105 bg-white/30 backdrop-blur-sm p-3 h-fit">
        <p className="font-bold text-5xl text-[#6d3d45] w-4/6 slide-left">
          {data.title}
        </p>

        <p className="text-2xl text-justify  text-black/80 w-4/6">
          {data.description}
        </p>
      </div>
    </div>
  );
}
