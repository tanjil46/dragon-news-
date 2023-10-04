
import Marquee from "react-fast-marquee";
const Slider = () => {
    return (
        <div>
            <div className="flex">
            <button className="btn btn-primary">Latest</button>
            <Marquee speed={100} pauseOnHover>
  I can be a React component, multiple React components, or just some text.
</Marquee>
</div>
        </div>
    );
};

export default Slider;