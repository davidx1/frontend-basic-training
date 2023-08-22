import { useState } from "react";
import { DynamicTextInput } from "./components/DynamicInput";

// DO NOT CHANGE THE FOLLOWING CODE.
// Modify DynamicTextInput.tsx instead
export const Checkpoint5Q = () => {
  const [name, setName] = useState("Johnathan Martha");
  const [email, setEmail] = useState("johnathan.martha@gmail.com");

  return (
    <form action="/" method="post">
      <p>
        <DynamicTextInput
          id="name"
          name="user_name"
          label="User Name: "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <DynamicTextInput
          id="mail"
          name="user_email"
          label="User Email: "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
    </form>
  );
};
