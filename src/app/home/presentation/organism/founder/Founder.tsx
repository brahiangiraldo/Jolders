
import { FounderProps } from './Founder.Props';
import './founder.scss';

const Founder = ({ paragraph, image, name, role }: FounderProps) => {
  return (
    <div className="founder">
      <span className="wppb-font-quote">"</span>
      <p className="founder__paragraph">{paragraph}</p>
      <div className="founder__avatar">
        <img src={image} alt={`${name}'s Avatar`} />
      </div>
      <div className="founder__name">{name}</div>
      <p className="founder__role">{role}</p>
    </div>
  );
};

export default Founder;

