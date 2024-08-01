import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "../../src/components/profile/profile-form";
import { Fetch } from "@/lib/actions/fetch";

export default async function ProfilePage() {
  let user;
  try {
    const data = await Fetch("users/me", {}, "secure");
    user = data.user;
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium">Profile</h1>
        <p className="text-sm text-muted-foreground">
          Update your profile. Set your name and profile picture.
        </p>
      </div>
      <Separator />
      <ProfileForm user={user} />
    </div>
  );
}
