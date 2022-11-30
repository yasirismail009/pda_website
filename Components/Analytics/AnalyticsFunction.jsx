import { getAnalytics, logEvent } from "firebase/analytics";
import { FirebaseApp } from "../../firebase.Config";
export const ButtonClickFunction = (e) => {
  console.log(e);
  const analytics = getAnalytics(FirebaseApp);
  logEvent(analytics, e);
};
