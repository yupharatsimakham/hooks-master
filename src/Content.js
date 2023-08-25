import React, { useContext } from "react";
import { userContext } from "./Context";

export function Content() {
  let user = useContext(userContext);
  return <h3>Hello, {user}</h3>;
}
