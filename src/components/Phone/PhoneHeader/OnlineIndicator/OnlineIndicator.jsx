import classes from "./OnlineIndicator.module.scss"

export const OnlineIndicator = ({registered}) => {
  return (
    <div className={`${classes.indicator} ${registered ? "bg-green-500" : "bg-red-500"}`}></div>
  )
}
