export default function Ellipse8(props: Ellipse8Props) {
  return <div className="left-9 top-1.5 absolute w-[25px] h-[50px]"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 25 50" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 0 50 C 6.63 50 12.989 47.366 17.678 42.678 C 22.366 37.989 25 31.63 25 25 C 25 18.37 22.366 12.011 17.678 7.322 C 12.989 2.634 6.63 1.291e-06 7.629e-06 0 L 1.907e-06 25 L 0 50 Z" fill="white" />
      </svg>
    </div>;
}
Ellipse8.defaultProps = {
  className: ""
};
interface Ellipse8Props {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */