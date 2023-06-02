import { useOutletContext } from "react-router-dom";

function HostVanPhoto() {
  const { currentVan } = useOutletContext();

  return <img src={currentVan.imageUrl} />;
}
export default HostVanPhoto;
