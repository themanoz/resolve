import { ComplaintBox } from "./complaint-box";
import { ComplaintList } from "./table";

export default function Complaints() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 pt-8">
        <div className="lg:col-span-1 lg:col-start-1 lg:col-end-3">
          <ComplaintBox />
        </div>
        <div className="lg:col-span-1 lg:col-start-3 lg:col-end-4">
          <ComplaintList />
        </div>
      </section>
    </>
  );
}
