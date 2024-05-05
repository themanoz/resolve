import { TransactionsReviewTable } from "./table";

export default function Certificates() {
    return (
      <>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-1">
          <TransactionsReviewTable />
        </section>
      </>
    );
  }