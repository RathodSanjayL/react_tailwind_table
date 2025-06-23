import { presentingData } from "../utils/helper";
import AdvancedTable from "./common/AdvancedTable";

const Presenting = () => {
  return (
    <AdvancedTable 
      data={presentingData} 
      title="Presenting" 
      className="mt-16"
      config={{
        imageWidth: 28,
        imageHeight: 22,
        gap: "gap-4",
        borderStyle: "border-silver-sand border-b pb-8 mb-5",
        titleFontClass: "font-source"
      }}
    />
  );
};

export default Presenting;
