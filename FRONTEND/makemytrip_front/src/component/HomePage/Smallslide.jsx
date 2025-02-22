import { Slidecss } from "./Slidecss";

export const Smallslide = ({ image, para }) => {
  return (
    <Slidecss>
      <div>
        <img src={image} alt={para} />
      </div>
      <div>
        <p>{para}</p>
      </div>
    </Slidecss>
  );
};
