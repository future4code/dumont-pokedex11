export const GoBack = (history) => {
  history.goBack();
};

export const GoHome = (history) => {
  history.push("/");
};

export const GoDetails = (history) => {
  history.push("/details");
};

export const GoPokedex = (history) => {
  history.push("/pokedex");
};
