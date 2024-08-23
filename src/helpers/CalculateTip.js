export const calculateTip = (billAmount, tipPercentage, persons) => {
  const tipAmount = billAmount * (tipPercentage / 100);
  const tipPerPerson = tipAmount / persons;
  let totalAmountPerPerson;
  if (!tipPercentage || tipPercentage === 0) {
    totalAmountPerPerson = billAmount / persons;
  } else {
    totalAmountPerPerson = billAmount / persons + tipPerPerson;
  }
  return { tipPerPerson, totalAmountPerPerson };
};
