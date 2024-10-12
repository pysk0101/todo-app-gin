import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import useDetailsStore from "../../../../../Store/userDetailsStore";

const UserDetails = ({ isPasswordVisible, togglePasswordVisibility }) => {
  const { setName, setLastName, setEmail, setPassword } = useDetailsStore();

  return (
    <>
      <li className="col-span-1 max-[700px]:col-span-2">
        <EmailInput
          placeholderName={"Name"}
          extra={"w-full text-2xl"}
          setType={setName}
          length={15}
        />
      </li>
      <li className="col-span-1 max-[700px]:col-span-2">
        <EmailInput
          placeholderName={"Last name"}
          extra={"w-full text-2xl"}
          setType={setLastName}
          length={15}
        />
      </li>
      <li className="col-span-2">
        <EmailInput
          placeholderName={"Email"}
          extra={"w-full text-2xl"}
          setType={setEmail}
          length={1000}
        />
      </li>
      <li className="col-span-2">
        <PasswordInput
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          extra={"text-2xl"}
          setPassword={setPassword}
        />
      </li>
    </>
  );
};

export default UserDetails;
