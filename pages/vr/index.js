// pages/vr/index.js
import dynamic from "next/dynamic";

const VRTourDynamic = dynamic(() => import("../../components/AppVRTour"), {
  ssr: false,
});

const VRTourPage = () => {
  return (
    <div>
      <h1>Yacht Virtual Tour</h1>
      <VRTourDynamic />
    </div>
  );
};

export default VRTourPage;
