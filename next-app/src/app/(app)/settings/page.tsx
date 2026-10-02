import type { Metadata } from "next";
import ProfileForm from "./_components/ProfileForm";

export const metadata: Metadata = {
  title: "Settings",
};

const SettingsPage = () => {
  /**COMPONENT */
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">Your account details.</p>
      </div>
      <ProfileForm />
    </div>
  );
};

export default SettingsPage;
