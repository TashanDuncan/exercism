export const answer = (question: string): number => {
  enum Operation {
    Plus = "plus",
    Minus = "minus",
    Multiply = "multiplied",
    Divide = "divided",
  }

  const isNumeric = (input: string): boolean =>
    !isNaN(parseFloat(input)) && isFinite(Number(input));

  const isOperation = (input: string): input is Operation =>
    Object.values(Operation).includes(input as Operation);

  const cleanedQuestion = question
    .toLowerCase()
    .replace(/(\?|by )/g, "")
    .split(" ");

  if (cleanedQuestion.slice(0, 2).join(" ") !== "what is") {
    throw new Error("Unknown operation");
  }

  const calculation = cleanedQuestion.slice(2);

  const isValidOperation = calculation
    .filter((word) => !isNumeric(word))
    .every(isOperation);

  if (!isValidOperation) throw new Error("Unknown operation");

  const firstNumber = parseInt(calculation[0], 10);

  const result = calculation.reduce(
    (accumulator, currentValue, currentIndex) => {
      const nextItem = calculation[currentIndex + 1];

      if (isOperation(currentValue)) {
        switch (currentValue) {
          case Operation.Plus:
            return accumulator + parseInt(nextItem, 10);

          case Operation.Minus:
            return accumulator - parseInt(nextItem, 10);

          case Operation.Multiply:
            return accumulator * parseInt(nextItem, 10);

          case Operation.Divide:
            return accumulator / parseInt(nextItem, 10);
        }
      }
      if (isNumeric(nextItem)) {
        throw new Error("Syntax error");
      }
      return accumulator;
    },
    firstNumber
  );

  if (isNaN(result)) {
    throw new Error("Syntax error");
  }
  return result;
};
