import'./EditorButton.css'

export const EditorButton = ({isActive=true}) => {

  function handleClick(){

  }

  return (
    <button className="editor-button"
    style={{
      color:isActive?'white':'#959eba',
      backgroundColor:isActive?'#303242' :' #4a4859',
      borderTop:isActive? '2px solid #f7b9dd': 'none',
    }}
    onClick={handleClick}
    >
      file.js
    </button>
  );
};
