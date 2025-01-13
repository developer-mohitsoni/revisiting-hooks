export const familySecret = {
  familyName: "The Smiths",
  onlyParentCanSee: () => {
    return `The Smiths are the best!`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`;
  },
};
