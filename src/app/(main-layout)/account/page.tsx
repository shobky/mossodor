import { Separator } from "@/components/ui/separator";
import { AccountForm } from "../../../components/account/account-form";
import { Fetch } from "@/lib/actions/fetch";

export default async function SettingsAccountPage() {
  let user;
  try {
    const data = await Fetch("/users/me", {}, "secure");
    user = data.user;
  } catch (error) {
    console.error(error);
  }

  console.log("the user:", user)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium">Account</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account settings. and update your email and password.
        </p>
      </div>
      <Separator />
      <AccountForm user={user} />
    </div>
  );
}
