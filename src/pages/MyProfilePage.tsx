import TextInput from "../components/AccountComponents/TextInputComponent";
import FormSection from "../components/AccountComponents/FormSectionComponent";
import styles from "../css/Components-css/MyAccountCSS/MyProfilePage.module.css";
import Button from "../components/ButtonComponent";

const MyProfilePage = () => (
  <main className={styles.profileContainer}>
    <h1 className={styles.heading}>Edit Your Profile</h1>

    <form className={styles.form}>
      <FormSection title="Personal Information">
        <TextInput label="" placeholder="First Name" />
        <TextInput label="" placeholder="Last Name" />
      </FormSection>

      <FormSection title="Contact Details">
        <TextInput label="" type="email" placeholder="Email" />
        <TextInput label="" placeholder="Adress" />
      </FormSection>

      <FormSection title="Password Changes">
        <TextInput label="" type="password" placeholder="Current Password" />
        <TextInput label="" type="password" placeholder="New Password" />
        <TextInput
          label=""
          type="password"
          placeholder="Confirm New Password"
        />
      </FormSection>

      <div className={styles.actions}>
        <Button variant="confirm">Cancel</Button>
        <Button variant="navigation">Confirm Changes</Button>
      </div>
    </form>
  </main>
);

export default MyProfilePage;
