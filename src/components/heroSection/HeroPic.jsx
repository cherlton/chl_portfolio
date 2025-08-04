import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
       <img  
    src="/images/i4_hexagonal.png" 

    alt="chL" 
    className="max-h-[580px] w-auto"
    />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;


/*Here's an explanation of your `HeroPic` component line by line:

### Import Statements

```javascript
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
```
- `motion`: This is an import from the `framer-motion` library, which is a popular library for animations in React. `motion` is used to animate elements.
- `fadeIn`: This imports a `fadeIn` animation variant from a local file (`../../framerMotion/variants`). This variant will control the animation behavior for the component.
- `PiHexagonThin`: This imports a hexagonal icon from the `react-icons/pi` library (similar to your previous example).

### HeroPic Component

```javascript
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
```
- `HeroPic` is a functional React component that returns a JSX layout.
- `motion.div`: This is a `div` element wrapped with `motion` from `framer-motion`, which allows the `div` to have animations.
  - `variants={fadeIn("left", 0.2)}`: The `variants` prop controls which animation is applied. `fadeIn("left", 0.2)` is calling the `fadeIn` function and passing `"left"` and `0.2` as arguments. This likely defines an animation where the element fades in from the left with a delay of 0.2 seconds.
  - `initial="hidden"`: Initially, the `div` is in the "hidden" state (presumably fully transparent or off-screen).
  - `whileInView="show"`: When the `div` is in the viewport (visible on the screen), it will transition to the "show" state (likely fully visible).
  - `viewport={{ once: false, amount: 0 }}`: This ensures that the animation is triggered whenever the element enters the viewport (even if it's scrolled into view multiple times).
  - `className="h-full flex items-center justify-center"`: These Tailwind CSS classes:
    - `h-full`: Makes the `div` take the full height of its parent.
    - `flex items-center justify-center`: This centers the content within the `div` using Flexbox (both vertically and horizontally).

```javascript
      <img
        src="../../public/images/HexaPic.png"
        alt="Abdelrahman Qassem"
        className="max-h-[450px] w-auto"
      />
```
- This is an image element:
  - `src="../../public/images/HexaPic.png"`: Specifies the path to the image to be displayed. The image is likely named `HexaPic.png`.
  - `alt="Abdelrahman Qassem"`: Provides an alternate text for the image in case it doesn't load.
  - `className="max-h-[450px] w-auto"`: The `max-h-[450px]` class ensures that the image will not exceed a height of 450px. `w-auto` ensures that the width of the image scales automatically to maintain its aspect ratio.

```javascript
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
```
- This `div` contains the spinning hexagon icon and has several Tailwind classes:
  - `absolute`: Positions the `div` absolutely within its parent (the `motion.div`).
  - `-z-10`: Sets the `z-index` to `-10`, meaning it will be layered behind the other content (such as the image).
  - `flex justify-center items-center`: Uses Flexbox to center the content inside the `div` both vertically and horizontally.
  - `animate-pulse`: Applies a "pulse" animation to the content inside the `div` (likely making it fade in and out or grow/shrink).

```javascript
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
```
- This renders a `PiHexagonThin` icon (the hexagon shape).
  - `md:h-[90%] sm:h-[120%]`: The height adjusts depending on the screen size (90% of the parent height on medium screens, 120% on small screens).
  - `min-h-[600px]`: Ensures that the minimum height of the icon is 600px.
  - `w-auto`: The width of the icon is set automatically to maintain its aspect ratio.
  - `text-cyan`: This colors the hexagon icon in cyan.
  - `blur-md`: Applies a medium blur effect to the icon.
  - `animate-[spin_20s_linear_infinite]`: Applies a continuous spinning animation that takes 20 seconds to complete one full rotation.

```javascript
      </div>
    </motion.div>
  );
};
```
- Closes the `div` that contains the hexagon icon and the `motion.div` element itself.

### Export Statement

```javascript
export default HeroPic;
```
- Exports the `HeroPic` component, making it available to be imported and used in other parts of the application.

### Summary:
- The `HeroPic` component displays an image of `HexaPic.png` alongside a spinning hexagon icon in the background.
- The component uses `framer-motion` for animation:
  - The `fadeIn` variant controls how the image fades in from the left with a slight delay.
  - The hexagon icon has a spinning animation and a pulsing effect.
  - The icon is blurred and rendered behind the main content (`z-10` is negative to layer it behind the image).
- Tailwind CSS is used for layout and styling, with Flexbox ensuring that the content is centered, and utility classes help define the sizes and animations. */