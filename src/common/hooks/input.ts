import React, { ChangeEvent, useState } from "react";

interface Input {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function useInput(initialValue = ""): Input {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange,
  };
}
