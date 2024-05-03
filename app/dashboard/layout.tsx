import SideNavbar from "@/components/SideNavbar";
import { cn } from "../utils/cn";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  const {children} = props;
  return (
    <section className={cn(
      "min-h-min min-w-min flex gap-4"
    )}>
      <SideNavbar />
      {children}
    </section>
  );
}