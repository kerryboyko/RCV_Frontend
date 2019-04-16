import React, { ReactFragment } from 'react';

interface IFrontPageSection {
  section: {
    title: string;
    copy: string[];
    image?: ReactFragment;
  };
}

const FrontPageSection = ({ section }: IFrontPageSection) => {
  return (
    <div>
      <h4>{section.title}</h4>
      {section.copy.map(text => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export default FrontPageSection;
