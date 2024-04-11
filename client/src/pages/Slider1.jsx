import Carousel from "framer-motion-carousel";
import "./slider.css";

function Slider1() {
  let data = [
    {
      img: "https://img.freepik.com/free-vector/crowdfunding-campaign-advertising-consulting-promotion-symbols-flat-banner_98292-8244.jpg?w=900&t=st=1712859909~exp=1712860509~hmac=b20cb0c6c04c3c92fcb2fee3e9abbf04e6188dfd5dd7ffb33a4b2df86e5dbf2e",
      // des: "The Bar Experience You Take With You",
      // name: "Cooler Keg",
      // info: "SEE CAMPAIGN",
      // info1: "GOGOPICKS",
    },
    {
      img: "https://media.licdn.com/dms/image/C5612AQGi3lcEG2Ia5Q/article-cover_image-shrink_600_2000/0/1583432702416?e=1718236800&v=beta&t=HbeFzWs49BnnV2BhR71yAqsKyAdLpNljgd3PItA-yr0",
      // des: "Learn how entrepreneurs can use equity crowdfunding to access more capital after their FundFusion campaign.",
      // name: "FundFusion Helps Entrepreneurs and Needy To Raise More Capital...",
      // info: "Learn More",
      // info1: "FEATURED",
    },
    {
      img: "https://www.socialforaction.com/blog/wp-content/uploads/2023/01/crowdfunding-for-education-startups.jpg",
      // des: "The beautiful, premium charging cables & powerhouse power banks for the rest of us",
      // name: "Last Charging Cable & Power Bank You'll Ever Need?",
      info: "SEE CAMPAIGN",
      // info1: "GOGOPICKS",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/02/16/19/17/crowdfunding-3158320_1280.png",
      des: "World's Cleanest Robot with Wet Dry Vac",
      name: "Smartmi A1",
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
                <p className="count">{`${i + 1} / 4`}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default Slider1;
