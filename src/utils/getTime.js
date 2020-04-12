import moment from "moment";

export default function getErrorTrucks(elem, value) {
  // Current Time
  var date = new Date();
  var milli = date.getTime();

  console.log(milli);
  let truckTime = milli - elem.lastWaypoint.createTime;

  const duration = moment.duration(truckTime, "milliseconds");

  const durationAsDays = Math.floor(duration.asDays());
  const durationAsHours = Math.floor(
    duration.subtract(durationAsDays, "days").asHours()
  );
  const durationAsMinutes = Math.floor(
    duration.subtract(durationAsHours, "hours").asMinutes()
  );

  let relativeDuration = "";

  if (durationAsDays > 0) relativeDuration += durationAsDays + "d ";

  if (durationAsHours > 0) relativeDuration += durationAsHours + "h ";

  if (durationAsMinutes > 0) relativeDuration += durationAsMinutes + "m";

  if (value) {
    return relativeDuration === "" ? "0m" : relativeDuration;
  } else {
    return durationAsHours >= 4 ? true : false;
  }
}
