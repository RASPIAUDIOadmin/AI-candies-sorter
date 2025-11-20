import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeader;