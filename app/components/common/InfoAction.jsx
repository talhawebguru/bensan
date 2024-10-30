import React from "react";

const InfoAction = ({ icon, trigger, action, message }) => {
  return (
    <a href={trigger}>
      <div className="flex items-center gap-2.5">
        {icon}
        <p className="text-light-black text-base font-semibold font-primary underline leading-snug">
          {action}
          <span className="underline">{message}</span>
        </p>
      </div>
    </a>
  );
};

export default InfoAction;
