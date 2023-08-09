2; // pages/tour/index.js
import dynamic from "next/dynamic";

// const VRTourDynamic = dynamic(() => import("../../components/AppVRTour"), {
//   ssr: false,
// });

const VRTourDynamic = dynamic(() => import("../../components/AppTour"), {
  ssr: false,
});

const VRTourPage = () => {
  return (
    <div className="tour-page">
      <h1>Yacht Virtual Tour</h1>
      <VRTourDynamic />
    </div>
  );
};

export default VRTourPage;