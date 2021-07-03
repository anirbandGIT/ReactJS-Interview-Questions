import { useEffect } from "react";

const MountUnmountCheck = () => {
  useEffect(() => {
    console.log("MountUnmountCheck component is mounted");
    return () => console.log("MountUnmountCheck component is unmounted"); // this is actually cleanup not unmounting
  }, []);

  return <>MountUnmountCheck is rendered here </>;
};

export default MountUnmountCheck;
