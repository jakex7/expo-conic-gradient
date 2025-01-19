# expo-conic-gradient

![Cover image](example/assets/cover.png)

## Installation

```sh
yarn add expo-conic-gradient
```

## Usage

```tsx
import { ConicGradientView } from "expo-conic-gradient";

export default () => {
  return (
      <ConicGradientView
        colors={["red", "orange", "yellow", "green", "blue"]}
      />
  );
};
```

## API

```tsx
import { ConicGradientView } from "expo-conic-gradient";
```

## Props

| name | type | default |
| --- | --- | --- |
| colors | string[] | |
| locations | number[] | [] |
| center | [x: number, y: number] | [0.5, 0.5] |
| angle | number | 0 |

### colors

An array of colors representing the gradient stops. A minimum of two colors is required.

### locations

An array of numbers in `0` - `1` range, matching the length of the `colors` array. Each number specifies the stop of the corresponding color. If omitted, the colors will be evenly spaced throughout the gradient.

### center

An array of two numbers specifying the x and y coordinate of the center point of the gradient.

### angle

A number that specifies the starting angle of the gradient.

## License

**[MIT](/LICENSE)**

### Made with ♥️ by Jakub Grzywacz
