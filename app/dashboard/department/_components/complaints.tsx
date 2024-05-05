import { ComplaintBox } from "./complaint-box";
import { ComplaintList } from "./table";

export default function Complaints() {
    return (
      <>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
          <ComplaintBox />
          <ComplaintList />
        </section>
      </>
    );
  }