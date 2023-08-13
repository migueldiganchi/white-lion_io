import AppButton from "./IO/AppButton";

export default function AppFeatures({ features, onFeatureClick }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:justify-center sm:items-center">
      {features.map((feature) => {
        return (
          <div
            key={feature.id}
            className="App-box bg-dark-gradient p-6 m-6 mb-9 sm:mb-3"
          >
            <img
              src={feature.imageUrl}
              alt="Vercel Logo"
              title={feature.title}
              className="mx-auto w-[120px] sm:w-[99px]"
            />
            <span className="block mt-6 mb-6 mx-auto">{feature.title}</span>
            <AppButton onClick={() => onFeatureClick(feature)}>
              Ver más <i className="mdi mdi-information ml-2"></i>
            </AppButton>
          </div>
        );
      })}
    </div>
  );
}
