/**
 * Initialize the cover functionality
 * @param {CoverOptions} options
 */
function initCover(options) {
  const { images, colorPalette } = options

  images.forEach(({ url, domId }) => {
    const image = document.getElementById(domId);
    image.setAttribute('src', url)
  });
}

initCover({
  images: [
    {
      url: 'https://placehold.co/300x200',
      domId: 'image1',
    },
    {
      url: 'https://placehold.co/400x200',
      domId: 'image2',
    },
    {
      url: 'https://placehold.co/200x400',
      domId: 'image3',
    },
    {
      url: 'https://placehold.co/200x200',
      domId: 'image4',
    },
    {
      url: 'https://placehold.co/300x200',
      domId: 'image5',
    },
  ],
  colorPalette: {
    primary: '#fff',
    secondary: 'red',
  }
})
