/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
       */
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        //Have a blur radius of 20px, making it soft and diffused.
        /**The `boxShadow` property in CSS is used to add shadow effects to an element. The values provided in your example represent a custom shadow definition:

```javascript
cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
```

Let's break down the values of the `box-shadow` property:

1. **Horizontal offset (0px)**:
   - **Value:** `0px`
   - **Explanation:** This defines how far the shadow should be offset horizontally. A positive value would move the shadow to the right, and a negative value would move it to the left. In this case, it's `0px`, meaning the shadow is directly aligned with the element horizontally (no horizontal shift).

2. **Vertical offset (0px)**:
   - **Value:** `0px`
   - **Explanation:** This defines how far the shadow should be offset vertically. A positive value would move the shadow down, and a negative value would move it up. In this case, it's also `0px`, so the shadow will appear directly aligned with the element vertically (no vertical shift).

3. **Blur radius (20px)**:
   - **Value:** `20px`
   - **Explanation:** This value controls how blurred the shadow is. The larger the value, the more blurred the shadow will be. A value of `0px` would create a sharp, hard shadow, while higher values make it softer. In this case, `20px` creates a soft, subtle shadow effect.

4. **Spread radius (0px)**:
   - **Value:** `0px`
   - **Explanation:** The spread radius controls how much the shadow spreads beyond the element. A positive value makes the shadow expand outward, and a negative value makes it shrink inward. A value of `0px` means the shadow's size stays consistent with the element's size, with no expansion or contraction.

5. **Color (rgba(94, 206, 220, 0.5))**:
   - **Value:** `rgba(94, 206, 220, 0.5)`
   - **Explanation:** This defines the color of the shadow using RGBA values:
     - `94`: The red component of the color (94 out of 255).
     - `206`: The green component of the color (206 out of 255).
     - `220`: The blue component of the color (220 out of 255).
     - `0.5`: The alpha (opacity) value, where `1` is fully opaque and `0` is fully transparent. In this case, `0.5` means the shadow is semi-transparent, creating a softer and subtler effect.

---

### In Summary:
The shadow described by `cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)"` will:
- Have no horizontal or vertical offset (i.e., it will be directly beneath the element).
- Have a blur radius of `20px`, making it soft and diffused.
- Not spread beyond the element (since the spread is `0px`).
- Have a semi-transparent cyan color (`rgba(94, 206, 220, 0.5)`), giving it a soft, cyan glow effect with 50% opacity.


*/
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
