import { FC, useMemo } from "react";
import "./LowHighLimit.less";
import currentIcon from "../assets/icons/current_icon.svg";

interface LowHighLimitProps {
  min: number;
  max: number;
  current: number;
  low: number;
  high: number;
  optimal: number;
}

const LowHighLimit: FC<LowHighLimitProps> = ({
  min,
  max,
  current,
  low,
  high,
  optimal,
}) => {
  const progressRender = useMemo(() => {
    return Array.from({ length: max }, (_, index) => index + 1).map((i) => {
      if (i < low) {
        return (
          <div className="min hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i == current) {
        return (
          <div className="current hoverDescription" key={i}>
            <img src={currentIcon} width={5} alt="" />
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i == optimal) {
        return (
          <div className="optimal hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i > low && i < high) {
        return (
          <div className="normal hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }

      if (i > high) {
        return (
          <div className="max hoverDescription" key={i}>
            <div className="description">
              <span>{i}</span>
              <span>test</span>
            </div>
          </div>
        );
      }
    });
  }, [max, min, current, low, high, optimal]);

  return <div className="lowHighLimit">{progressRender}</div>;
};

export default LowHighLimit;
