export const calculateTip = (billAmount, tipPercentage, persons) => {
  const tipAmount = billAmount * (tipPercentage / 100);
  const tipPerPerson = tipAmount / persons;
  const totalAmountPerPerson = billAmount / persons + tipPerPerson;
  return { tipPerPerson, totalAmountPerPerson };
};
