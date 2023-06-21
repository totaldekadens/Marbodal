// Change hex color into RGB
export const getRGBColor = (hex: string, type: string) => {
  let color = hex.replace(/#/g, "");

  // Check if the input is a valid hex code
  if (!/^[0-9A-Fa-f]{6}$/.test(color)) {
    console.error("Invalid hex code");
    return null;
  }
  // rgb values
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 2), 16);

  // Check if any of the RGBA values are NaN
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.error("Invalid RGBA values");
    return null;
  }

  return `--color-${type}: ${r}, ${g}, ${b};`;
};

// Determine the accessible color of text  (Not in use atm, but works)
export const getAccessibleColor = (hex: string) => {
  let color = hex.replace(/#/g, "");
  // rgb values
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#000000" : "#FFFFFF";
};
