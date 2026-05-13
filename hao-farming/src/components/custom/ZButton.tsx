interface ZButtonProps {
    type?: "primary" | "default";
    children: React.ReactNode;
}


const ZButton:React.FC<ZButtonProps> = (props) => {
    const cssStye = {padding:"10px,20px",borderRadius:"10px",backgroundColor:props.type == "primary"? "blue":""}
  return (
      <>
          <button style={cssStye}>{props.children}</button>
      </>

  )
}

export default ZButton