import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import { TextArea } from "@/components/TextArea";

interface DialogProps {
  id: string;
  title: string;
}

export default function DialogButton({ title, id }: DialogProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">{title}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Borrowing ID: {id}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="class" className="text-right">
                Class
              </Label>
              <Input id="class" placeholder="Class" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Year
              </Label>
              <Input id="year" placeholder="Year" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="branch" className="text-right">
                Branch
              </Label>
              <Input id="branch" placeholder="Branch" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mobile" className="text-right">
                Mobile Number
              </Label>
              <Input
                id="mobile"
                placeholder="1231212313"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="borrow" className="text-right">
                Borrowing Date
              </Label>
              <DatePicker />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="return" className="text-right">
                Return Date
              </Label>
              <DatePicker />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="books" className="text-right">
                Borrowing Books
              </Label>
              <TextArea />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
