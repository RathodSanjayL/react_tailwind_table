import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import Container from "./Container";

interface TableItem {
  id: number;
  src: string;
  title: string;
}

interface TableRow {
  id: number;
  title: string;
  description: string;
  columnOne: TableItem[];
  columnTwo: TableItem[];
  columnThree: TableItem[];
}

interface TableConfig {
  imageWidth?: number;
  imageHeight?: number;
  gap?: string;
  borderStyle?: string;
  titleFontClass?: string;
}

interface AdvancedTableProps {
  data: TableRow[];
  title: string;
  className?: string;
  config?: TableConfig;
}

const AdvancedTable = ({ 
  data, 
  title, 
  className = "mt-16",
  config = {
    imageWidth: 22,
    imageHeight: 18,
    gap: "gap-2",
    borderStyle: "border-silver-sand border-b pb-4 mb-4",
    titleFontClass: "font-source"
  }
}: AdvancedTableProps) => {
  const columns: ColumnDef<TableRow>[] = [
    {
      id: "title",
      header: () => null,
      cell: ({ row }) => (
        <div className="col-span-1">
          <div className="flex gap-2 items-center pb-1.5">
            <span className={`text-onyx font-black text-base ${config.titleFontClass || ""}`}>
              {row.original.title}
            </span>
            <img
              src="/assets/question-mark-icon.png"
              width={16}
              height={16}
              alt="question-mark"
            />
          </div>
          <p className="text-base font-normal text-onyx">
            {row.original.description}
          </p>
        </div>
      ),
    },
    {
      id: "columnOne",
      header: () => null,
      cell: ({ row }) => (
        <div className="flex justify-between gap-1.5">
          {row.original.columnOne.map((items: TableItem) => (
            <div className="basis-1/2 text-start" key={items.id}>
              <div className={`flex ${config.gap} items-start`}>
                <img
                  src={items.src}
                  width={config.imageWidth}
                  height={config.imageHeight}
                  alt="up-right-arrow-icon"
                />
                <p className="text-base font-normal text-onyx">
                  <span className="block text-onyx font-bold leading-none">
                    {items.title}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "columnTwo",
      header: () => null,
      cell: ({ row }) => (
        <div className="flex justify-between gap-1.5">
          {row.original.columnTwo.map((items: TableItem) => (
            <div className="basis-1/2 text-start" key={items.id}>
              <div className={`flex ${config.gap} items-start`}>
                <img
                  src={items.src}
                  width={config.imageWidth}
                  height={config.imageHeight}
                  alt="up-right-arrow-icon"
                />
                <p className="text-base font-normal text-onyx">
                  <span className="block text-onyx font-bold leading-none">
                    {items.title}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "columnThree",
      header: () => null,
      cell: ({ row }) => (
        <div className="flex justify-between gap-1.5">
          {row.original.columnThree.map((items: TableItem) => (
            <div className="basis-1/2 text-start" key={items.id}>
              <div className={`flex ${config.gap} items-start`}>
                <img
                  src={items.src}
                  width={config.imageWidth}
                  height={config.imageHeight}
                  alt="up-right-arrow-icon"
                />
                <p className="text-base font-normal text-onyx leading-none">
                  <span className="block text-onyx font-bold">
                    {items.title}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container className={className}>
      <section>
        <h2 className={`text-onyx font-black text-2xl pb-5 border-b-4 border-silver-sand mb-13 ${config.titleFontClass || ""}`}>
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className={`grid grid-cols-4 gap-6 ${
                    index === table.getRowModel().rows.length - 1
                      ? ""
                      : config.borderStyle
                  }`}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
};

export default AdvancedTable; 