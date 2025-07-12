import EditProfileForm from "../../components/features/dashboard/edit-profile/EditProfileForm";
import EditProfileSecurity from "../../components/features/dashboard/edit-profile/EditProfileSecurity";

const EditProfilePage = () => {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <EditProfileForm />
          <EditProfileSecurity />
        </div>
      </div>
    </main>
  );
};

export default EditProfilePage;
