import React, { useEffect } from "react";
import { mountExt } from "appModule/AppModule";

const RemoteExtModule = () => {
  useEffect(() => {
    mountExt();
  }, []);
  return (
    <div className="external-module">
      <app-dashboard></app-dashboard>
    </div>
  );
};

export default RemoteExtModule;
