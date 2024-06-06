import { useHelper } from "@/context/ContextHelper";

const Summary = () => {
  const {summary} = useHelper();
  console.log();
  
  return (
    <div className=" relative col-span-5 row-span-6 row-start-2 overflow-x-hidden overflow-y-scroll p-2 md:p-5 custom-scrollbar">
      <p className="base-medium">
        {
          // summary
          summary.summary
        }
      </p>
    </div>
  );
};

export default Summary;
