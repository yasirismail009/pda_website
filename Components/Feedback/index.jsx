import Guide from "./guide";
import FeedbackComponent from "./feedbackComponent";
export default function Feedback() {
  return (
    <div className="w-full h-full bg-primary-main lg:p-24 sm:p-4 p-4 lg:pt-24 sm:pt-20 pt-20 lg:pb-0 sm:pb-20 pb-20">
      <Guide />
      <FeedbackComponent />
    </div>
  );
}
