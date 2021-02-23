export const PhoneInput = ({ phoneNumber }) => {
  return (
    <p className={`cursor-default ${phoneNumber.length > 0 && "font-bold" }`}>
      {phoneNumber.length > 0 ? phoneNumber : "Введите контактные данные"}
    </p>
  );
};
