import Carousel from "framer-motion-carousel";
import "./slider.css";

function Slider1() {
  let data = [
    {
      img: "https://cdn.pixabay.com/photo/2018/02/16/19/17/crowdfunding-3158320_1280.png",
      // des: "Learn how entrepreneurs can use equity crowdfunding to access more capital after their FundFusion campaign.",
      name: "FundFusion Helps Entrepreneurs and Needy To Raise More Capital...",
      // info: "Learn More",
      info1: "FEATURED",
    },
    {
      img: "",
      des: "The beautiful, premium charging cables & powerhouse power banks for the rest of us",
      name: "Last Charging Cable & Power Bank You'll Ever Need?",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
    {
      img: "",
      des: "World's Cleanest Robot with Wet Dry Vac",
      name: "Smartmi A1",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
    {
      img: "",
      des: "The Bar Experience You Take With You",
      name: "Cooler Keg",
      info: "SEE CAMPAIGN",
      info1: "GOGOPICKS",
    },
  ];

  return (
    <>
      <div className="container">
        <Carousel interval={5000}>
          {data?.map((item, i) => (
            <div className="showing" key={i}>
              <img draggable="false" src={item.img} alt="Featured Images" />
              <div className="showing-info">
                <p className="info1">{item.info1}</p>
                <h5 className="name">{item.name}</h5>
                <p className="des">{item.des}</p>
                <p className="info">{item.info}</p>
                <p className="count">{`${i} / 4`}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default Slider1;
