import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LaptopProps{
    label: string;
    data: string;
}

export default function LaptopDetails({label, data} : LaptopProps) {
  return (
    <>
      <div className="space-y-1">
        <Label className="text-slate-400">{label}</Label>
        <Input value={data} className="min-w-min" />
      </div>
    </>
  );
}
