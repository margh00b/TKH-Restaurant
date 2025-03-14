import React from 'react';
import { FaBell } from 'react-icons/fa';

const IconWithBadge = ({ icon: Icon, badgeCount } : {icon: typeof FaBell, badgeCount: number}) => {
  return (
    <div className="relative inline-block">
      <Icon className="text-white text-xl" />
      {badgeCount > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
          {badgeCount}
        </span>
      )}
    </div>
  );
};

export default IconWithBadge;