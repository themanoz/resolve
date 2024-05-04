import { Separator } from "@/components/ui/separator";
import { ChangePassword } from "./change-password";

export const metadata = {
  title: "Accounts settings",
  description: "Accounts settings description",
};

export default function ChangePasswordPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Change password</h3>
        <p className="text-sm text-muted-foreground">
          Update your account password.
        </p>
      </div>
      <Separator />
      <ChangePassword />
    </div>
  );
}