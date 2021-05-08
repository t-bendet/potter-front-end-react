export const saySomething = (sentence) => {
  return {
    type: "SAY_THIS",
    payload: sentence,
  };
};
