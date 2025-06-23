import { prospectingData } from "../utils/helper";
import AdvancedTable from "./common/AdvancedTable";

const Prospecting = () => {
  return (
    <AdvancedTable 
      data={prospectingData} 
      title="Prospecting" 
      className="mt-16"
      config={{
        imageWidth: 22,
        imageHeight: 18,
        gap: "gap-2",
        borderStyle: "border-silver-sand border-b pb-4 mb-4",
        titleFontClass: ""
      }}
    />
  );
};

export default Prospecting;
