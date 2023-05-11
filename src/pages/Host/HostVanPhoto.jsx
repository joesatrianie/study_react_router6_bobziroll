import { useOutletContext } from "react-router-dom";
function HostVanPhoto() {
  const { currentVan } = useOutletContext();

  return <div>HostVanPhoto</div>;
}
export default HostVanPhoto;
