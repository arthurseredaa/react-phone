import { useSelector } from "react-redux";
import { OnlineIndicator } from "./OnlineIndicator/OnlineIndicator";
import classes from "./PhoneHeader.module.scss";

export const PhoneHeader = ({registered}) => {
  const name = useSelector((state) => state.phone.config.name);

  return (
    <div className={`${classes.phoneHeader} w-full`}>
      <OnlineIndicator registered={registered} />
      {name}
    </div>
  );
};
