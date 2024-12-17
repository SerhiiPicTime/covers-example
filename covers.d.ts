declare namespace Covers {
  interface CoverImage {
    /** The URL of the cover image */
    url: string;
    /** The DOM id for the image */
    domId: string;
  }

  interface CoverColors {
    /** The primary color for the cover */
    primary: string;
    /** The secondary color for the cover */
    secondary: string;
  }

  interface CoverOptions {
    images: CoverImage[];
    colorPalette: CoverColors;
    scrollToTheEndCallback: () => void;
  }
}

export = Covers;
export as namespace Covers;
