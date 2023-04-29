export default function Ellipse1(props: Ellipse1Props) {
  return <div className="top-0 absolute w-[33px] h-[62px] left-[32.25px]"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 33 62" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 0.251 62 C 4.486 62 8.68 61.198 12.593 59.64 C 16.506 58.082 20.061 55.799 23.056 52.92 C 26.051 50.042 28.427 46.624 30.047 42.863 C 31.668 39.102 32.502 35.071 32.502 31 C 32.502 26.929 31.668 22.898 30.047 19.137 C 28.427 15.376 26.051 11.958 23.056 9.08 C 20.061 6.201 16.506 3.918 12.593 2.36 C 8.68 0.802 4.486 -1.149e-06 0.251 0 L 0.251 31 L 0.251 62 Z" fill="#3CB51E" />
      </svg>
    </div>;
}
Ellipse1.defaultProps = {
  className: ""
};
interface Ellipse1Props {
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