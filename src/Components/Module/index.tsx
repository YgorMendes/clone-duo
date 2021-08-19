import React from 'react';
import InfoModule from './InfoModule';
import {
  ComponentModule,
  Svg,
  Ilustration,
  Name,
  CircleProgress,
} from './styles';

interface IModule {
  completionPercentage: number;
  name: string;
}

function Module({ completionPercentage, name }: IModule): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ComponentModule
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <CircleProgress>
        <Ilustration />

        <Svg>
          <circle cx="80" cy="80" r="60" />
          <circle
            cx="80"
            cy="80"
            r="60"
            style={{
              strokeDashoffset: `calc(376.9 - (376.9 * ${completionPercentage}) / 100)`,
            }}
          />
        </Svg>
      </CircleProgress>

      <Name>{name}</Name>
      <InfoModule isOpen={isOpen} totalLessons={3} currentLesson={1} />
    </ComponentModule>
  );
}

export default Module;
