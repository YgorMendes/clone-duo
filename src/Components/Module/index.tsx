import { Svg, Ilustration, CircleProgress } from './styles';

interface IModule {
  completionPercentage: number;
}

function Module({ completionPercentage }: IModule): JSX.Element {
  return (
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
  );
}

export default Module;
