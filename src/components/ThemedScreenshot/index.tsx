import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  /** Path under static/, e.g. /img/settings-light.JPG */
  light: string;
  /** Path under static/, e.g. /img/settings-dark.JPG */
  dark: string;
  alt: string;
  /** Optional max width in px, for narrow shots like dialogs */
  width?: number;
};

// Swaps the screenshot with the site theme. Registered globally in
// src/theme/MDXComponents.tsx so docs can use it without an import.
export default function ThemedScreenshot({ light, dark, alt, width }: Props) {
  return (
    <ThemedImage
      alt={alt}
      sources={{ light: useBaseUrl(light), dark: useBaseUrl(dark) }}
      style={width ? { maxWidth: width } : undefined}
    />
  );
}
