import { createContext } from "react";

export const FamilyContext = createContext({
  familyName: "Default Family",
  onlyParentCanSee: () => "Default Message",
  onlyGrandchildrenShouldKnow: () => "Default grandchild message",
});
