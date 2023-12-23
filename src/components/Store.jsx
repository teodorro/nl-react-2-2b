import { useState } from "react";
import IconSwitch from "./IconSwitch";

export default function Store() {
  const [iconName, setIconName] = useState("view_module");
  return (
    <>
      <IconSwitch
        iconName={iconName}
        onSwitch={() => {
          iconName === 'view_list'
          ? setIconName('view_module')
          : setIconName('view_list');
        }}
      />
    </>
  );
}
