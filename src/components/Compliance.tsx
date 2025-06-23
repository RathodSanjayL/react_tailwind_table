import { complianceData } from "../utils/helper";
import AdvancedTable from "./common/AdvancedTable";

const Compliance = () => {
  return (
    <AdvancedTable 
      data={complianceData} 
      title="Compliance" 
      className="mt-16 mb-20"
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

export default Compliance;
