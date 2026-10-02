"use client";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useAuth } from "@/hooks/useAuth";

/** Read-only for now. Add an `updateProfile` mutation in store/api/authApi.ts to make it editable. */
const ProfileForm = () => {
  /**VARIABLES */
  const { user } = useAuth();

  /**COMPONENT */
  return (
    <Card className="space-y-4">
      <Input label="Name" name="name" defaultValue={user?.name} readOnly />
      <Input label="Email" name="email" type="email" defaultValue={user?.email} readOnly />
    </Card>
  );
};

export default ProfileForm;
