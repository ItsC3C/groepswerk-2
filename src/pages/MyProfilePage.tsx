import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../store/store";
import { updateUser } from "../store/userSlice";
import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/MyProfilePage.module.css";
import Button from "../components/ButtonComponent";
import { RootState } from "../store/store"; // Import RootState

const MyProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user); // Update useSelector
  const status = useSelector((state: RootState) => state.user.status); // Update useSelector

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      // setAddress(user.address);
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Change handleSubmit signature
    e.preventDefault();
    try {
      await dispatch(updateUser({ name, email })).unwrap();
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <main className={styles.profileContainer}>
      <h1 className={styles.heading}>Edit Your Profile</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <FormSection title="Personal Information">
          <TextInput
            label=""
            placeholder="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            } // Add type to onChange
          />
        </FormSection>

        <FormSection title="Contact Details">
          <TextInput
            label=""
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            } // Add type to onChange
          />
          {/* <TextInput
            label=""
            placeholder="Address"
            value={address}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            } // Add type to onChange
          /> */}
        </FormSection>

        <FormSection title="Password Changes">
          <TextInput
            label=""
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCurrentPassword(e.target.value)
            } // Add type to onChange
          />
          <TextInput
            label=""
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            } // Add type to onChange
          />
          <TextInput
            label=""
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            } // Add type to onChange
          />
        </FormSection>

        <div className={styles.actions}>
          <Button
            variant="confirm"
            type="button"
            onClick={() => {
              if (user) {
                // Guard user null
                setName(user.name);
                setEmail(user.email);
                // setAddress(user.address);
              }
            }}
            disabled={status === "loading"}
          >
            Cancel
          </Button>
          <Button
            variant="navigation"
            type="submit"
            disabled={status === "loading"}
          >
            Confirm Changes
          </Button>
        </div>
      </form>
    </main>
  );
};

export default MyProfilePage;
