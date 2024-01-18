import React from "react";
import { TableComponent } from "./tableComponent";
import Button3 from "./button3/Button";

const MainComponent = () => {
  return (
    <div style={{ width: '60%' }}>
      <TableComponent />
      <div
        className="color-green"
        style={{
          color: "#238441",
          fontSize: " 1rem",
          fontWeight: "600",
          borderTop: "1px solid black",
          marginTop: "1rem",
        }}
      >
        6 selected
      </div>

      <div style={{ display: 'flex', marginTop: '40px', gap: '20px', float:'right' }}>
        <Button3 text={'Add Selected to Forum'} />
      </div>
    </div>
  );
};

export default MainComponent;
