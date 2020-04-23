export default (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return {
        count: action.payload.value
      };
    default:
      throw new Error();
  }
};
