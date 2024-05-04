import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";
import { TransactionsReviewTable } from "./_components/table";
import DialogButton from "@/components/DialogButton";


const cardData: CardProps[] = [
  {
    label: "Borrowed Books",
    amount: "04",
    discription: "Last borrowed on Apr 04, 2024",
  },
  {
    label: "Overdue Books",
    amount: "07",
    discription: "Last submitted on March 24, 2024",
  },
  {
    label: "Total Books",
    amount: "11",
    discription: "Total books you borrowed ",
  },
];


export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
        <div className="flex justify-between px-1">
          <PageTitle title="Library" />
          <DialogButton title={"Add Books"} id={"S170989"} />
        </div>
        <section className="grid w-full grid-cols-2 gap-4 gap-x-8 transition-all sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              discription={d.discription}
              label={d.label}
            />
          ))}
        </section>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">
        <TransactionsReviewTable />
        </section>
      </div>
    </>
  );
}
