import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import DialogButton from "@/components/DialogButton";


const cardData: CardProps[] = [
  {
    label: "Borrowed Books",
    amount: "04",
    discription: "Last borrowed on Apr 04, 2024",
    // icon: DollarSign,
  },
  {
    label: "Overdue Books",
    amount: "07",
    discription: "Last submitted on March 24, 2024",
    // icon: Users,
  },
  {
    label: "Total Books Borrowed",
    amount: "11",
    discription: "+19% from last month",
    // icon: CreditCard,
  },
  // {
  //   label: "Active Now",
  //   amount: "+573",
  //   discription: "+201 since last hour",
  //   // icon: Activity,
  // },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full py-5 px-10 mr-4">
        <div className="flex justify-between px-1">
          <PageTitle title="Dean" />
          <DialogButton title={"Post Notice"} />
        </div>
        <section className="grid w-full grid-cols-2 gap-4 gap-x-8 transition-all sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              discription={d.discription}
              // icon={d.icon}
              label={d.label}
            />
          ))}
        </section>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">
          <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        </section>
      </div>
    </>
  );
}
