import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";

export const TreeNode = ({ fileFolderData }) => {
  console.log("fileFolderData received by Tree component:", fileFolderData);

  const [visibility, setVisibility] = useState({});

  function toggleVisibility(name) {
    setVisibility({
      ...visibility,
      [name]: !visibility[name],
    });
  }
  useEffect(() => {
    console.log("Visibility chanmged", visibility);
  }, [visibility]);

  function computeExtension(fileFolderData) {
    const names = fileFolderData.name.split(".");
    return names[names.length - 1];
  }
  return (
    fileFolderData && (
      <div
        style={{
          paddingLeft: "15px",
          color: "black",
        }}
      >
        {fileFolderData.children ? (
          <button
            onClick={() => toggleVisibility(fileFolderData.name)}
            style={{
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "aqua",
              backgroundColor: "transparent",
              padding: "15px",
              fontSize: "16px",
              marginTop: "10px",
              display:"flex",
              alignItems:"center",
              
            }}
          >
            {visibility[fileFolderData.name] ? (
              <IoIosArrowDown style={{ display: "inline" }} />
            ) : (
              <IoIosArrowForward style={{ display: "inline" }} />
            )}

            {fileFolderData.name}
          </button>
        ) : (
          /** If the current node is not a folder, render it as a p */
          <div style={{ display: "flex", alignItems: "center" }}>
            <FileIcon extension={computeExtension(fileFolderData)} />
            <p
              style={{
                paddingTop: "15px",
                paddingBottom: "15px",
                marginTop: "8px",
                fontSize: "15px",
                cursor: "pointer",
                marginLeft: "18px",
                // color: "black"
              }}
            >
              {fileFolderData.name}
            </p>
          </div>
        )}
        {visibility[fileFolderData.name] &&
          fileFolderData.children &&
          fileFolderData.children.map((child) => (
            <TreeNode fileFolderData={child} key={child.name} />
          ))}
      </div>
    )
  );
};
