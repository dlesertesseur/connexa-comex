import { useEffect, useState } from "react";
import { Suspense } from "react";
import NotImplemented from "../NotImplemented";

// eslint-disable-next-line react/prop-types
const DynamicPage = ({ app }) => {
  const [component, setComponent] = useState(null);

  const importModule = async (option) => {
    const path = option.path;
    try {
      if(path){
        const comp = await import(`./${path}/panel.jsx`);
        const { default: DynamicApp } = comp;
        setComponent(<DynamicApp app={option} />);
      }else{
        throw(new Error("No page defined"));
      }
    } catch (error) {
      console.log("DynamicPage error ->", error.message);
      // eslint-disable-next-line react/prop-types
      setComponent(<NotImplemented title={option.title} />);
    }
  };

  useEffect(() => {
    importModule(app);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  return (
      <Suspense>{component}</Suspense>
  );
};

export default DynamicPage;
